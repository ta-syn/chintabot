import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildMessages, parseGeminiResponse } from '../../../lib/prompt.js';

// Simple in-memory rate limiting
const rateLimitMap = new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 20; // Normal chat usage
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  const record = rateLimitMap.get(ip);
  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  record.count += 1;
  return record.count > maxRequests;
}

// Simple input sanitizer
const sanitize = (str) => typeof str === 'string' ? str.trim().substring(0, 1000).replace(/[<>]/g, '') : str;

// ✅ Model Definitions
const AI_MODELS = [
  // Primary: Gemini Models (Fast & Reliable)
  { type: 'gemini', id: "gemini-2.0-flash" },
  { type: 'gemini', id: "gemini-flash-latest" },
  
  // Fallbacks: OpenRouter Free Models (Verified Working ✅)
  { type: 'openrouter', id: "openrouter/free" },
  { type: 'openrouter', id: "nvidia/nemotron-nano-9b-v2:free" },
  { type: 'openrouter', id: "minimax/minimax-m2.5:free" },
  { type: 'openrouter', id: "liquid/lfm-2.5-1.2b-thinking:free" },
  { type: 'openrouter', id: "baidu/cobuddy:free" },
  { type: 'openrouter', id: "nvidia/nemotron-3-nano-30b-a3b:free" },
];

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (checkRateLimit(ip)) {
      return NextResponse.json({ 
        error: true, 
        message: "অতিরিক্ত রিকোয়েস্ট পাঠানো হচ্ছে। দয়া করে অপেক্ষা করুন।", 
        type: 'api_error' 
      }, { status: 429 });
    }

    const body = await request.json();
    const { messages: rawMessages = [], questionCount = 0, category = 'all', confidence = 0 } = body;

    // Sanitize user messages to prevent injection
    const sanitizedMessages = rawMessages.map(msg => ({
      ...msg,
      content: sanitize(msg.content)
    }));

    const geminiApiKey = process.env.GEMINI_API_KEY;
    const openRouterApiKey = process.env.OPENROUTER_API_KEY || geminiApiKey; // Fallback to gemini key if user used it there (sometimes they are the same in proxies)

    if (!geminiApiKey && !process.env.OPENROUTER_API_KEY) {
       return NextResponse.json({ 
        error: "NO_API_KEY", 
        text: 'এপিআই কী খুঁজে পাওয়া যায়নি। দয়া করে GEMINI_API_KEY বা OPENROUTER_API_KEY সেট করুন।', 
        message: 'এপিআই কী প্রয়োজন' 
      }, { status: 500 });
    }

    const { messages: promptMessages } = buildMessages(sanitizedMessages, category, confidence);
    
    // Extract system prompt and history
    const systemMsg = promptMessages.find(m => m.role === 'system');
    const systemInstruction = systemMsg ? systemMsg.content : "";
    
    // Prepare history for LLMs
    const chatMessages = promptMessages.filter(m => m.role !== 'system');
    const lastUserMsg = chatMessages[chatMessages.length - 1];
    const history = chatMessages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    let aiText = "";
    let lastError = "";

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // ✅ Iterating through models until one works
    for (const modelInfo of AI_MODELS) {
      try {
        console.log(`🚀 Trying model: ${modelInfo.id} (${modelInfo.type})...`);

        if (modelInfo.type === 'gemini') {
          if (!geminiApiKey) continue;
          const genAI = new GoogleGenerativeAI(geminiApiKey);
          const model = genAI.getGenerativeModel({
              model: modelInfo.id,
              systemInstruction: systemInstruction,
          });
          const chat = model.startChat({ history });
          const result = await chat.sendMessage(lastUserMsg.content);
          aiText = result.response.text();
        } 
        else if (modelInfo.type === 'openrouter') {
          if (!openRouterApiKey) {
            console.warn(`⏭️ Skipping ${modelInfo.id}: No API Key`);
            continue;
          }

          const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${openRouterApiKey}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "https://chintabot.vercel.app", // Optional
              "X-Title": "ChintaBot", // Optional
            },
            body: JSON.stringify({
              model: modelInfo.id,
              messages: [
                { role: 'system', content: systemInstruction },
                ...chatMessages.map(m => ({
                  role: m.role === 'assistant' ? 'assistant' : 'user',
                  content: m.content
                }))
              ],
              temperature: 0.7,
            })
          });

          const data = await response.json();
          if (data.error) {
            throw new Error(data.error.message || "OpenRouter Error");
          }
          aiText = data.choices[0].message.content;
        }

        if (aiText) {
          console.log(`✅ Success with ${modelInfo.id}`);
          break;
        }
      } catch (err) {
        console.warn(`❌ Model ${modelInfo.id} failed:`, err.message);
        lastError = err.message;
        
        // Handle Rate Limit (429) specifically
        if (err.message.includes('429') || err.message.includes('quota') || err.message.includes('limit')) {
           console.warn(`⏳ Rate limited, waiting 1s before next model...`);
           await sleep(1000); 
        }
        continue;
      }
    }

    if (!aiText) {
      return NextResponse.json({ 
        error: true, 
        message: `সবগুলো এপিআই ফেইল করেছে। শেষ এরর: ${lastError}`, 
        type: 'api_error'
      }, { status: 503 });
    }

    const parsed = parseGeminiResponse(aiText);

    if (parsed.type === 'question') {
      parsed.questionNumber = (parseInt(questionCount) || 0) + 1;
    }

    return NextResponse.json(parsed);

  } catch (error) {
    console.error('Fatal API Route Error:', error);
    return NextResponse.json({ 
      error: true, 
      message: error.message || 'সার্ভার সমস্যা' 
    }, { status: 500 });
  }
}

