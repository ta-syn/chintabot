import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildMessages, parseGeminiResponse } from '../../../lib/prompt.js';

export async function POST(request) {
  try {
    const body = await request.json();
    const { messages: rawMessages = [], questionCount = 0, category = 'all', confidence = 0 } = body;

    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (!geminiApiKey || geminiApiKey === "your_gemini_api_key_here") {
       return NextResponse.json({ 
        error: "NO_API_KEY", 
        text: 'এপিআই কী খুঁজে পাওয়া যায়নি', 
        message: 'এপিআই কী প্রয়োজন' 
      }, { status: 500 });
    }

    const { messages: promptMessages } = buildMessages(rawMessages, category, confidence);
    
    // Extract system prompt and history
    const systemMsg = promptMessages.find(m => m.role === 'system');
    const systemInstruction = systemMsg ? systemMsg.content : "";
    
    // Prepare history for Gemini (excluding system and the very last user message)
    // Gemini chat history should be pairs of user/model
    const history = [];
    const chatMessages = promptMessages.filter(m => m.role !== 'system');
    const lastUserMsg = chatMessages[chatMessages.length - 1];
    
    // We need to convert promptMessages to Gemini's { role: 'user'|'model', parts: [{ text: '' }] } format
    for (let i = 0; i < chatMessages.length - 1; i++) {
        const msg = chatMessages[i];
        history.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        });
    }

    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const geminiModels = ["gemini-1.5-flash-8b", "gemini-flash-latest", "gemini-1.5-flash"];

    let aiText = "";
    let lastError = "";

    for (const modelName of geminiModels) {
      try {
        console.log(`Trying Gemini model: ${modelName}`);
        const model = genAI.getGenerativeModel({ 
            model: modelName,
            systemInstruction: systemInstruction 
        });
        
        const chat = model.startChat({ history });
        const result = await chat.sendMessage(lastUserMsg.content);
        const response = await result.response;
        aiText = response.text();
        
        if (aiText) break;
      } catch (err) {
        console.warn(`Gemini model ${modelName} fail:`, err.message);
        lastError = err.message;
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
