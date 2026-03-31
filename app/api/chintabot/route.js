import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildMessages, parseGeminiResponse } from '../../../lib/prompt.js';

export async function POST(request) {
  try {
    const body = await request.json();
    const { messages: rawMessages = [], questionCount = 0, category = 'all', confidence = 0 } = body;

    const geminiApiKey = process.env.GEMINI_API_KEY;
    const openRouterApiKey = process.env.OPENROUTER_API_KEY;

    if (!geminiApiKey && (!openRouterApiKey || openRouterApiKey === "your_openrouter_api_key_here")) {
       return NextResponse.json({ 
        error: "NO_API_KEY", 
        text: 'এপিআই কী খুঁজে পাওয়া যায়নি', 
        message: 'এপিআই কী প্রয়োজন' 
      }, { status: 500 });
    }

    const { messages: promptMessages } = buildMessages(rawMessages, category, confidence);
    let aiText = "";

    // Strategy 1: Try OpenRouter (if key exists)
    if (openRouterApiKey && openRouterApiKey !== "your_openrouter_api_key_here") {
      const openRouterModels = [
        "deepseek/deepseek-chat", // DeepSeek V3
        "qwen/qwen3.6-plus-preview:free",
        "google/gemma-3-27b-it:free",
        "meta-llama/llama-3.3-70b-instruct:free",
        "google/gemma-3-4b-it:free",
        "qwen/qwen3-coder:free",
        "liquid/lfm-2.5-1.2b-instruct:free",
        "nvidia/nemotron-3-nano-30b-a3b:free",
        "arcee-ai/trinity-mini:free",
        "meta-llama/llama-3.2-1b-instruct:free"
      ];

      for (const modelName of openRouterModels) {
        try {
          console.log(`[OpenRouter] Trying model: ${modelName}`);
          const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${openRouterApiKey}`,
              "HTTP-Referer": "http://localhost:3000",
              "X-Title": "ChintaBot",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: modelName,
              messages: promptMessages.map(m => ({ role: m.role, content: m.content })),
              max_tokens: 512,
              temperature: 0.1
            })
          });

          const data = await response.json().catch(() => ({}));

          if (response.ok) {
            aiText = data.choices?.[0]?.message?.content || "";
            if (aiText) {
              console.log(`[OpenRouter] Success! Model: ${modelName}`);
              console.log(`[OpenRouter] Full AI Output:`, aiText);
              break;
            }
          } else {
            console.warn(`[OpenRouter] Model ${modelName} failed. Status: ${response.status}. Error:`, data.error?.message || "Unknown");
          }
        } catch (err) {
          console.error(`[OpenRouter] Error for ${modelName}:`, err.message);
        }
      }
    }

    // Strategy 2: Fallback to direct Gemini
    if (!aiText && geminiApiKey && geminiApiKey !== "your_gemini_api_key_here") {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      const geminiModels = ["gemini-1.5-flash-latest", "gemini-2.0-flash-exp", "gemini-1.5-flash"];

      let consolidatedPrompt = "";
      promptMessages.forEach(msg => {
        const role = msg.role === 'system' ? '### SYSTEM INSTRUCTIONS' : 
                     msg.role === 'assistant' ? '### CHINTABOT' : '### USER';
        consolidatedPrompt += `${role}:\n${msg.content}\n\n`;
      });
      consolidatedPrompt += `### CURRENT TASK:\nএখন ${questionCount + 1} নম্বর প্রশ্নটি করো। সরাসরি JSON ফরম্যাটে উত্তর দাও।`;

      for (const modelName of geminiModels) {
        try {
          console.log(`Trying Gemini model: ${modelName}`);
          const model = genAI.getGenerativeModel({ model: modelName });
          const result = await model.generateContent(consolidatedPrompt);
          const response = await result.response;
          aiText = response.text();
          if (aiText) break;
        } catch (err) {
          console.warn(`Gemini model ${modelName} fail:`, err.message);
          if (err.message.includes("429") || err.message.includes("Quota")) break;
        }
      }
    }

    if (!aiText) {
      return NextResponse.json({ 
        error: true, 
        message: 'সবগুলো এপিআই ফেইল করেছে। আপনার ওপেন-রাউটার বা জেমিনি কী চেক করুন।', 
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
