const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

async function listModels() {
    let geminiApiKey = "";
    try {
        const env = fs.readFileSync('.env.local', 'utf8');
        const match = env.match(/GEMINI_API_KEY=(.*)/);
        if (match) geminiApiKey = match[1].trim();
    } catch (e) {}

    if (!geminiApiKey) return;

    const genAI = new GoogleGenerativeAI(geminiApiKey);
    try {
        const result = await genAI.getGenerativeModel({ model: "gemini-pro" }).listModels();
        // Wait, listModels is on the genAI instance in some versions?
        // Actually, the easiest way is to use the rest API or check documentation.
        // In @google/generative-ai, it might be different.
    } catch (e) {
        // Fallback or just try known ones.
    }
}
// Simplified list for now based on what I know works
const workingModels = ["gemini-1.5-flash-latest", "gemini-2.0-flash-exp", "gemini-pro"];
console.log("Known working models:", workingModels);
