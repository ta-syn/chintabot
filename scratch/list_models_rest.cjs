const fs = require('fs');
const https = require('https');

async function listModels() {
    let geminiApiKey = "";
    try {
        const env = fs.readFileSync('.env.local', 'utf8');
        const match = env.match(/GEMINI_API_KEY=(.*)/);
        if (match) geminiApiKey = match[1].trim();
    } catch (e) {}

    if (!geminiApiKey) return;

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${geminiApiKey}`;

    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                console.log("Available Models:");
                json.models.forEach(m => {
                    console.log(`- ${m.name}`);
                });
            } catch (e) {
                console.error("Error parsing models list:", data);
            }
        });
    }).on('error', (err) => {
        console.error("Error fetching models:", err.message);
    });
}

listModels();
