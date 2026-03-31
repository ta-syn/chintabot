import { getCharactersByCategory } from './data/index.js'

export const SYSTEM_PROMPT = `
তুমি ChintaBot — একজন অতি-বুদ্ধিমান, প্রফেশনাল এবং ডাইনামিক বাংলা গিনি (Genie)। 
তোমার কাজ হলো ব্যবহারকারীর মনের চরিত্রটি সবচেয়ে কম সংখ্যক প্রশ্নে নিখুঁতভাবে অনুমান করা।

**Advanced AI Guessing Strategy:**
১. **Deductive Reasoning (CRITICAL):** ব্যবহারকারীর প্রতিটি উত্তর খুব গুরুত্ব দিয়ে বিশ্লেষণ করো। একবার যদি কোনো তথ্য নিশ্চিত হয়ে যায় (যেমন: তিনি ক্রিকেটার), তবে আর কখনো ঐ বিষয়টি নিয়ে বেসিক প্রশ্ন (যেমন: তিনি কি খেলোয়াড়?) করবে না।
২. **Confidence Momentum:** যদি তোমার কনফিডেন্স একবার ৫০% পার হয়ে যায়, তবে বুঝে নেবে তুমি সঠিক পথেই আছো। হুট করে উল্টাপাল্টা বা অপ্রাসঙ্গিক প্রশ্ন করে নিজের কনফিডেন্স কমাবে না। যদি কোনো উত্তর "না" হয়, তবে কেবল তখনই বিকল্প চিন্তা করবে।
৩. **Aggressive Guessing Model:** তুমি যত দ্রুত সম্ভব চরিত্রটি অনুমান করার চেষ্টা করবে। যদি তোমার মনে হয় তুমি চরিত্রটি চিনে ফেলেছ (৭০-৮০% কনফিডেন্স), তবে বাড়তি অপ্রাসঙ্গিক বড় প্রশ্ন না করে সরাসরি 'guess' করো।
৪. **High-Confidence Protocol (৭৫%+):** যখন তোমার কনফিডেন্স ৭৫% পার হবে, তখন হয় তুমি সরাসরি গেস করো, অথবা এমন একটি "মাস্টার কোয়েশ্চেন" করো যা ঐ চরিত্রটিকে ১০০% নিশ্চিত করে ফেলে। এই অবস্থায় কোনো জেনেরিক বা সাধারণ প্রশ্ন করা সম্পূর্ণ নিষেধ।
৫. **Search Narrowing:** ৫ নম্বর প্রশ্নের পর কোনোভাবেই বেসিক প্রশ্ন (বাস্তব কি না, পুরুষ কি না, বাংলাদেশি কি না) করা যাবে না। সরাসরি প্রফেশন বা ইউনিক বৈশিষ্ট্য নিয়ে প্রশ্ন করো।
৬. **Strict Binary Questions:** প্রশ্ন অবশ্যই "হ্যাঁ" বা "না" দিয়ে উত্তর দেওয়ার উপযুক্ত হতে হবে। কোনো দ্ব্যর্থবোধক (Either/Or) প্রশ্ন করা যাবে না।

**STRICT RULES FOR CONSISTENCY:**
- **NO LOGIC RESET:** ব্যবহারকারীর উত্তরের সাথে সাংঘর্ষিক কোনো প্রশ্ন করবে না। যদি তিনি বলেন "হ্যাঁ, তিনি ক্রিকেটার", তবে পরবর্তী প্রশ্ন "তিনি কি এনিমে চরিত্র?" হওয়া কাম্য নয়।
- **NO NONSENSE:** হুট করে কনফিডেন্স ২০% এ নামিয়ে আনার মতো কোনো অবান্তর প্রশ্ন করবে না। নিজের লিড (Lead) ধরে রাখো।
- **HISTORY ADHERENCE:** "ইতিমধ্যে করা প্রশ্নগুলো" (History) খুব ভালো করে খেয়াল রাখবে। একই প্রশ্ন বা কাছাকাছি অর্থ বহন করে এমন প্রশ্ন দ্বিতীয়বার করা যাবে না।

**RESPONSE FORMAT (strict JSON only):**
প্রশ্নের জন্য: { "type": "question", "text": "প্রশ্ন টেক্সট", "confidence": 35 }
অনুমানের জন্য: { "type": "guess", "character": "English Name", "banglaName": "বাংলা নাম", "description": "পরিচয়", "confidence": 95, "category": "বিভাগ", "funFact": "মজার তথ্য" }
অজানার জন্য: { "type": "unknown", "message": "আপনি আজ আমাকে হারিয়ে দিলেন! আসলে কে ছিল?" }
`;

export const CATEGORY_CONTEXTS = {
  all: "",
  bd: "আমি এখন শুধুমাত্র বাংলাদেশি বিখ্যাত ব্যক্তিত্বদের কথা চিন্তা করছি।",
  cricket: "আমি ক্রিকেটের দুনিয়ার কাউকে খুঁজছি।",
  bollywood: "আমি বলিউডের রুপালি পর্দার কাউকে খুঁজছি।",
  anime: "আমি এনিমে বা কার্টুনি দুনিয়ার একটির জনপ্রিয় চরিত্রের কথা ভাবছি।",
  music: "আমি গানের সুরের জগতের কোনো নক্ষত্রের কথা ভাবছি।",
  sports: "আমি খেলাধুলার জগতের কোনো কিংবদন্তির কথা ভাবছি।",
  history: "আমি ইতিহাসের পাতা থেকে কোনো মহান মানুষের কথা ভাবছি।",
  marvel: "আমি সুপারহিরো বা অতিমানবিক শক্তির কোনো চরিত্রের কথা ভাবছি."
};

const CATEGORY_DATA_MAP = {
  bd: 'bangladesh', cricket: 'cricket', bollywood: 'bollywood', anime: 'anime',
  music: 'music', sports: 'sports', history: 'history', marvel: 'superhero', all: 'all'
};

export function buildMessages(conversationHistory, selectedCategory = "all", currentConfidence = 0) {
  const dataCategory = CATEGORY_DATA_MAP[selectedCategory] || selectedCategory;
  const characters = getCharactersByCategory(dataCategory);

  // characters list থেকে ডাইনামিক স্যাম্পল নেওয়া (AI কে হিন্ট দেওয়ার জন্য)
  const maxPromptChars = characters.length > 150 ? 150 : characters.length;
  const sampleChars = [...characters].sort(() => Math.random() - 0.5).slice(0, maxPromptChars);

  const characterHints = sampleChars
    .map(char => `- ${char.banglaName || char.name} (${char.knownFor || char.profession || ''})`)
    .join('\n');

  const categoryContext = selectedCategory && selectedCategory !== "all" ? CATEGORY_CONTEXTS[selectedCategory] : "";

  const messages = [];
  const previousQuestions = [];

  conversationHistory.forEach((msg, index) => {
    let text = msg.text || msg.content || (msg.parts && msg.parts[0]?.text) || "";
    const role = (msg.role === "assistant" || msg.role === "model" || msg.role === "bot" || msg.role === "genie") ? "assistant" : "user";

    if (index === 0 && role === "user" && categoryContext) text = `${categoryContext}\n\n${text}`;

    if (text) {
      messages.push({ role, content: text });
      if (role === "assistant") previousQuestions.push(text.trim());
    }
  });

  const assistantMsgCount = messages.filter(m => m.role === "assistant").length;

  const finalSystemPrompt = `${SYSTEM_PROMPT}

### বর্তমান প্রেক্ষাপট (Current Context):
- প্রশ্ন নম্বর: ${assistantMsgCount + 1}
- ক্যাটাগরি: ${dataCategory}
- বর্তমান কনফিডেন্স: ${currentConfidence}%

### নমুনা চরিত্রের ধরণ (Character Index for Reference):
${characterHints}
`;

  messages.unshift({ role: "system", content: finalSystemPrompt });

  // রিপিটেশন বন্ধ করার জন্য সবচেয়ে পাওয়ারফুল পদ্ধতি - হিস্ট্রি একদম শেষে যোগ করা
  const finalReminder = `
### গুরুত্বপূর্ণ ইনস্ট্রাকশন:
- আপনার বর্তমান কনফিডেন্স মূলত ${currentConfidence}%।
- যদি কনফিডেন্স ৭০% বা তার বেশি হয়, তবে আর কোনো সাধারণ প্রশ্ন না করে সরাসরি 'guess' টাইপ রেসপন্স দেওয়ার চেষ্টা করুন।
- ইতিমধ্যে করা প্রশ্নগুলো বা একই টাইপের প্রশ্ন কোনোভাবেই আর করবেন না।
- প্রশ্ন নম্বর ${assistantMsgCount + 1}: নতুন এবং ইউনিক কোনো তথ্য জানতে সরাসরি বাইনারি প্রশ্ন (হ্যাঁ/না) করুন।
- শুধুমাত্র সরাসরি নিচের JSON ফরম্যাটে উত্তর পাঠাও (কোনো ভূমিকা বা বাড়তি কথা ছাড়া):
{ "type": "question", "text": "...", "confidence": 10 } (অথবা "type": "guess" রেসপন্স).
`;

  if (messages.length > 0) {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === "user") {
      lastMsg.content += `\n\n${finalReminder}`;
    } else {
      // If the last message is not from user, push a dummy reminder if needed (though usually it is user reply)
      messages.push({ role: "user", content: finalReminder });
    }
  }

  return { messages, previousQuestions };
}

export function parseGeminiResponse(text) {
  if (!text || typeof text !== 'string') {
    return { type: "question", text: "আমি একটু দ্বিধায় পড়ে গেছি... আপনি কি আবার বলবেন?", confidence: 20 };
  }

  let cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
  cleaned = cleaned.replace(/^(user|assistant|model|genie|bot|system):?\s*/i, "");

  try {
    // 1. JSON parse
    if (cleaned.startsWith('{') && cleaned.endsWith('}')) {
      const data = JSON.parse(cleaned);
      return processParsedData(data);
    }

    // 2. Regex extraction for a complete block
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try { return processParsedData(JSON.parse(jsonMatch[0].trim())); } catch (e) { }
    }

    // 3. Fallback: Specific Field Extraction
    const textMatch = cleaned.match(/"text":\s*"([^"]*)"/);
    if (textMatch) return { type: "question", text: textMatch[1], confidence: 40 };

    const charMatch = cleaned.match(/"character":\s*"([^"]*)"/);
    if (charMatch) return { type: "guess", character: charMatch[1], confidence: 90 };

    // 4. Raw Text Fallback (Cleaning JSON remnants)
    let rawStr = cleaned
      .replace(/\{"type":\s*"question",\s*"text":\s*"/, "")
      .replace(/"\}/, "")
      .replace(/\\"/g, '"')
      .trim();

    return { type: "question", text: rawStr || "আপনি কি চরিত্রটি নিয়ে ভেবেছেন?", confidence: 50 };

  } catch (e) {
    return { type: "question", text: "আমি একটু ভাবনায় পড়ে গেছি... উত্তরটি আবার বলবেন?", confidence: 50 };
  }
}

function processParsedData(data) {
  const clean = (val) => typeof val === 'string' ? val.replace(/^(user|assistant|model|genie|bot|system):?\s*/i, "").trim() : val;

  if (data.type === 'question' && !data.text) data.text = data.content || data.question || "পরের প্রশ্নটি হলো...";
  if (data.type === 'guess' && !data.character) data.character = data.name || data.banglaName || "অজানা";

  if (data.text) data.text = clean(data.text);
  if (data.character) data.character = clean(data.character);
  if (data.banglaName) data.banglaName = clean(data.banglaName);

  if (!data.type) data.type = 'question';
  return data;
}
