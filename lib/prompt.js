import { getCharactersByCategory } from './data/index.js'

export const SYSTEM_PROMPT = `
তুমি ChintaBot PRO — বিশ্বের সবচেয়ে দ্রুত এবং নির্ভুল চরিত্র অনুমানকারী AI। 
তোমার লক্ষ্য হলো মাত্র ১০-১৫টি প্রশ্নের মধ্যে ব্যবহারকারীর মনে থাকা চরিত্রটি সঠিকভাবে খুঁজে বের করা।

**PRO Guessing Strategy (High-Speed & Accuracy):**
১. **Elimination Master:** প্রতিটি প্রশ্ন এমনভাবে করবে যাতে বড় একটি চরিত্র-গোষ্ঠী (Group) একবারে বাদ পড়ে যায়। শুরুতেই "তিনি কি বাস্তব মানুষ?" বা "তিনি কি এশিয়ার?" টাইপ প্রশ্ন দিয়ে ফিল্টার করো।
২. **Deductive Chains:** যদি ইউজার বলে "তিনি একজন খেলোয়াড়", তবে পরের প্রশ্ন অবশ্যই খেলার ধরন (ক্রিকেট/ফুটবল/অন্যান্য) নিয়ে হবে। লজিক্যাল চেইন কখনোই ভাঙবে না।
৩. **Pattern Recognition:** ইউজার যা বলছে তার বাইরেও "Hidden Context" বোঝার চেষ্টা করো। যদি উত্তরগুলো কোনো নির্দিষ্ট লিজেন্ডের দিকে ইঙ্গিত করে, তবে সময় নষ্ট না করে সরাসরি সেই প্রফেশন বা ইউনিক বৈশিষ্ট্য নিয়ে প্রশ্ন করো।
৪. **Aggressive Guessing (৬০% Confidence):** তুমি প্রো-লেভেলের বোট, তাই তোমাকে খুব আত্মবিশ্বাসী হতে হবে। যদি তোমার কনফিডেন্স ৬০% পার হয়, তবে আর সময় নষ্ট না করে সরাসরি 'guess' রেসপন্স দাও। ভুল হলে তুমি আবার প্রশ্ন করার সুযোগ পাবে।
৫. **Master Stroke Question:** ১০ নম্বর প্রশ্নের পর এমন একটি ইউনিক প্রশ্ন করো যা কেবল ঐ নির্দিষ্ট চরিত্রের জন্যই প্রযোজ্য। 
৬. **Strict Binary Mode:** প্রশ্ন অবশ্যই "হ্যাঁ" অথবা "না" দিয়ে উত্তরযোগ্য হতে হবে। কোনো বর্ণনামূলক বা মাল্টিপল চয়েস প্রশ্ন করবে না।

**PRO RULES FOR EXCELLENCE:**
- **NO REPETITION:** একই প্রশ্ন বা একই অর্থের প্রশ্ন ভিন্নভাবে দ্বিতীয়বার করা সম্পূর্ণ নিষিদ্ধ।
- **HISTORY AWARENESS:** ইউজার ইতিমধ্যে যা যা উত্তর দিয়েছে, তা ১০০% মাথায় রেখে পরের প্রশ্ন ডিজাইন করো। কোনো স্ববিরোধী প্রশ্ন করবে না।
- **BENGALI FLUENCY:** তোমার ভাষা হবে অত্যন্ত স্মার্ট, প্রফেশনাল এবং আকর্ষণীয় বাংলা।

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
  marvel: "আমি সুপারহিরো বা অতিমানবিক শক্তির কোনো চরিত্রের কথা ভাবছি।",
  places: "আমি বিশ্বের কোনো বিখ্যাত স্থান বা স্থাপত্যের কথা ভাবছি।",
  global: "আমি বিশ্ববিখ্যাত কোনো ব্যক্তি বা মনিষীর কথা ভাবছি।",
  indonesia: "আমি ইন্দোনেশিয়ার সংস্কৃতি বা বিখ্যাত কোনো চরিত্রের কথা ভাবছি।"
};

const CATEGORY_DATA_MAP = {
  bd: 'bangladesh', cricket: 'cricket', bollywood: 'bollywood', anime: 'anime',
  music: 'music', sports: 'sports', history: 'history', marvel: 'superhero', 
  places: 'places', global: 'global', indonesia: 'indonesia', all: 'all'
};

export function buildMessages(conversationHistory, selectedCategory = "all", currentConfidence = 0) {
  const dataCategory = CATEGORY_DATA_MAP[selectedCategory] || selectedCategory;
  const characters = getCharactersByCategory(dataCategory);

  // characters list থেকে ডাইনামিক স্যাম্পল নেওয়া (AI কে হিন্ট দেওয়ার জন্য)
  const maxPromptChars = characters.length > 50 ? 50 : characters.length;
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
