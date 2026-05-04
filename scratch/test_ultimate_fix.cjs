const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

async function testUltimateFix() {
    let geminiApiKey = "";
    try {
        const env = fs.readFileSync('.env.local', 'utf8');
        const match = env.match(/GEMINI_API_KEY=(.*)/);
        if (match) geminiApiKey = match[1].trim();
    } catch (e) {
        console.error("Could not read .env.local");
        return;
    }

    const genAI = new GoogleGenerativeAI(geminiApiKey);

    // Using the exact names from the API list
    const geminiModels = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-flash-latest",
    ];

    const systemInstruction = "তুমি ChintaBot — একজন অতি-বুদ্ধিমান বাংলা গিনি। উত্তর অবশ্যই JSON ফরম্যাটে হতে হবে।";

    const history = [
        { 
            role: "user", 
            parts: [{ text: "শুরু করা যাক" }] 
        },
        { 
            role: "model", 
            parts: [{ text: '{"type": "question", "text": "আপনার চরিত্রটি কি বাস্তব?", "confidence": 10}' }] 
        }
    ];

    const lastUserMsg = "হ্যাঁ, বাস্তব।";

    for (const modelName of geminiModels) {
        try {
            console.log(`Trying model: ${modelName}...`);

            const model = genAI.getGenerativeModel({
                model: modelName,
                systemInstruction: systemInstruction,
            });

            const chat = model.startChat({ history });

            const result = await chat.sendMessage(lastUserMsg);
            const text = result.response.text();

            console.log(`✅ Success with ${modelName}!`);
            console.log(`Response:`, text);
            return;

        } catch (err) {
            console.warn(`❌ Model ${modelName} failed:`, err.message);
        }
    }

    console.error("💀 ALL MODELS FAILED.");
}

testUltimateFix();
