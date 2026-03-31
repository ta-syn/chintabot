import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildMessages } from '../../../lib/prompt.js';

export async function POST(request) {
  try {
    const body = await request.json();
    const { messages: rawMessages = [], questionCount = 0, category = 'all' } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
       return NextResponse.json({ 
        error: "NO_API_KEY", 
        text: 'API Key missing in .env.local', 
        message: 'এপিআই কী প্রয়োজন' 
      }, { status: 500 });
    }

    const { messages: promptMessages } = buildMessages(rawMessages, category);
    const genAI = new GoogleGenerativeAI(apiKey);

    let consolidatedPrompt = "";
    promptMessages.forEach(msg => {
      const role = msg.role === 'system' ? '### SYSTEM INSTRUCTIONS' : 
                   msg.role === 'assistant' ? '### CHINTABOT' : '### USER';
      consolidatedPrompt += `${role}:\n${msg.content}\n\n`;
    });

    consolidatedPrompt += `### CURRENT TASK:\nএখন ${questionCount + 1} নম্বর প্রশ্নটি করো। উপরে দেওয়া "History" এবং "Strict Anti-Repetition" নিয়মগুলো কঠোরভাবে মেনে চলো। সরাসরি JSON ফরম্যাটে উত্তর দাও।`;

    // Try ALL possible modern models based on your environment's futuristic listing
    const modelNames = [
      "gemini-2.1-flash", 
      "gemini-2.0-flash", 
      "gemini-1.5-flash", 
      "gemini-1.5-flash-latest",
      "gemini-2.5-flash",
      "gemini-pro"
    ];
    let aiText = "";

    for (const modelName of modelNames) {
      try {
        console.log(`Trying model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const geminiResult = await model.generateContent(consolidatedPrompt);
        const response = await geminiResult.response;
        aiText = response.text();
        if (aiText) {
          console.log(`Success with model: ${modelName}`);
          break; 
        }
      } catch (err) {
        console.warn(`Model ${modelName} logic skip:`, err.message);
        continue;
      }
    }

    if (!aiText) {
      return NextResponse.json({ 
        type: 'question', 
        text: 'জাদুকরী কানেকশন এখন খুব ব্যস্ত! অনুগ্রহ করে একটু পর চেষ্টা করুন।', 
        error: true 
      });
    }

    let parsed;
    try {
      const jsonMatch = aiText.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? jsonMatch[0] : aiText;
      parsed = JSON.parse(jsonStr);
    } catch (e) {
      console.warn('JSON Parse Error in Route. AI Output:', aiText);
      parsed = { type: 'question', text: 'আপনার মনে অন্য কিছু আছে কি?', confidence: 10 };
    }

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
