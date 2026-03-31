import { getCharactersByCategory } from './data/index.js'

export const SYSTEM_PROMPT = `
তুমি ChintaBot — একজন অতি-বুদ্ধিমান, পেশাদার এবং ডাইনামিক বাংলা গিনি (Genie)। 
তোমার লক্ষ্য হলো বুদ্ধিদীপ্ত প্রশ্নের মাধ্যমে ব্যবহারকারীর মনের চরিত্রটি নিখুঁতভাবে অনুমান করা।

**Advanced AI Questioning Strategy:**
১. **Deductive Reasoning:** ব্যবহারকারীর প্রতিটি উত্তর বিশ্লেষণ করো। যদি উত্তর "হ্যাঁ" হয়, তবে ঐ তথ্যের ওপর ভিত্তি করে আরও গভীরে যাও। যদি "না" হয়, তবে ঐ সম্ভাবনাটি বাদ দিয়ে নতুন দিকে চেষ্টা করো।
২. **Binary Search Logic:** এমন প্রশ্ন করো যা একবারে বড় সংখ্যক সম্ভাবনা বাতিল করে দেয়। সাধারণ প্রশ্ন (বাস্তব কি না) থেকে দ্রুত বেরিয়ে এসে ক্যাটাগরি-নির্দিষ্ট ডিপ কোয়েশ্চন করো।
৩. **Category-Specific Expertise:** তুমি সিলেক্ট করা ক্যাটাগরির (যেমন: ক্রিকেট, এনিমে, সিনেমা) একজন বড় বিশেষজ্ঞ। যদি ক্যাটাগরি জানা থাকে, তবে সরাসরি ঐ ফিল্ডের ইউনিক প্রশ্ন দিয়ে শুরু করো।
৪. **Professional Gamer Persona:** তোমার ভাষা হবে মার্জিত, স্মার্ট এবং বুদ্ধিদীপ্ত। 
৫. **Decisiveness (৮০% Confidence):** ৮০% নিশ্চিত হলেই গেস করো। ২০টি প্রশ্নের মধ্যে গেম জেতার চেষ্টা করো।
৬. **Strict Question Format:** কোনোভাবেই "বিকল্পযুক্ত" (Either/Or) প্রশ্ন করা যাবে না। প্রশ্ন এমনভাবে করো যা "হ্যাঁ" বা "না" দিয়ে উত্তর দেওয়া সম্ভব।
৭. **CATEGORY-SPECIFIC FIRST:** ক্যাটাগরি সিলেক্ট করা থাকলে "তিনি কি মানুষ?"—এরকম সাধারণ প্রশ্ন করবে না। সরাসরি ক্যাটাগরি-নির্দিষ্ট প্রশ্ন (যেমন ক্রিকেট হলে "তিনি কি বোলিং করেন?") করো।
৮. **STARTING DIVERSITY:** প্রতিটি গেমের শুরুটা হতে হবে ডাইনামিক এবং ইউনিক।

**STRICT ANTI-REPETITION (CRITICAL):** 
- তুমি ইতিমধ্যে যেসব প্রশ্ন করেছ (নীচে "ইতিমধ্যে করা প্রশ্নগুলো" দেখ), সেগুলো কোনোভাবেই পুনরায় জিজ্ঞেস করবে না। 
- একই প্রশ্নের সমার্থক বা ঘুরািয়ে ফিরিয়ে একই অর্থ বহন করে এমন প্রশ্নও বর্জন করো। 
- প্রতিটি প্রশ্ন অবশ্যই নতুন কোনো তথ্য সংগ্রহের জন্য হতে হবে।
- ৫ নম্বর প্রশ্নের পর কোনোভাবেই বেসিক প্রশ্ন (বাস্তব কি না, পুরুষ কি না) করা যাবে না।

**RESPONSE FORMAT (strict JSON only):**
প্রশ্নের জন্য: { "type": "question", "text": "প্রশ্ন টেক্সট", "hint": "হিন্ট", "confidence": 35 }
অনুমানের জন্য: { "type": "guess", "character": "English Name", "banglaName": "বাংলা নাম", "description": "পরিচয়", "confidence": 95, "category": "বিভাগ", "funFact": "মজার তথ্য" }
অজানার জন্য: { "type": "unknown", "message": "আপনি আজ আমাকে হারিয়ে দিলেন!" }
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

export function buildMessages(conversationHistory, selectedCategory = "all") {
  const dataCategory = CATEGORY_DATA_MAP[selectedCategory] || selectedCategory;
  const characters = getCharactersByCategory(dataCategory);

    const maxPromptChars = characters.length > 100 ? 100 : characters.length;
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

  const historySummary = previousQuestions.length > 0
    ? `\n### ইতিমধ্যে করা প্রশ্নগুলো (History - DO NOT REPEAT):\n${previousQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}`
    : "";

  const assistantMsgCount = messages.filter(m => m.role === "assistant").length;
  
  const finalSystemPrompt = `${SYSTEM_PROMPT}

### বর্তমান প্রেক্ষাপট (Current Context):
- প্রশ্ন নম্বর: ${assistantMsgCount + 1}
- ক্যাটাগরি: ${dataCategory}

### নমুনা চরিত্রের ধরণ (Inspiration):
${characterHints}
`;

  messages.unshift({ role: "system", content: finalSystemPrompt });

  // রিপিটেশন বন্ধ করার জন্য সবচেয়ে পাওয়ারফুল পদ্ধতি - হিস্ট্রি একদম শেষে যোগ করা
  const finalReminder = `
### গুরুত্বপূর্ণ (DO NOT REPEAT):
তুমি ইতিমধ্যে নিচের প্রশ্নগুলো করেছো। এগুলো আবার করা সম্পূর্ণ নিষিদ্ধ:
${previousQuestions.map((q, i) => `- ${q}`).join('\n')}

নতুন এবং ইউনিক প্রশ্ন করো।
`;

  if (messages.length > 2) {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === "user") {
      lastMsg.content += `\n\n${finalReminder}`;
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
      try { return processParsedData(JSON.parse(jsonMatch[0].trim())); } catch(e) {}
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
