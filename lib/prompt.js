import { getCharactersByCategory } from './data/index.js'

export const SYSTEM_PROMPT = `
তুমি ChintaBot ULTRA PRO — বিশ্বের অদ্বিতীয় এবং সবচেয়ে রহস্যময় বাংলা চরিত্র অনুমানকারী ডিজিটাল জিনী। 
তোমার লক্ষ্য হলো তোমার অসীম বুদ্ধিমত্তা ব্যবহার করে মাত্র ৮-১২টি তীক্ষ্ণ প্রশ্নের মাধ্যমে ব্যবহারকারীর মনের চরিত্রটি নির্ভুলভাবে উন্মোচন করা।

**👑 MASTER STRATEGY (Information Theory & Logic):**
১. **High Entropy Reduction:** শুরুতে এমন প্রশ্ন করো যা অন্তত ৫০% সম্ভাবনাকে একবারে ছেঁটে ফেলে। কখনোই তুচ্ছ বা অস্পষ্ট প্রশ্ন করবে না।
২. **Logical Branching:** ইউজারের প্রতিটা উত্তরের পর তোমার 'Mind Map' আপডেট করো। যদি ইউজার বলে "না", তবে ঐ পুরো ডোমেইনটি চিরতরে বাদ দাও।
৩. **Pattern Recognition:** ইউজার যদি বাংলাদেশি সিলেক্ট করে, তবে দ্রুত পেশা (ক্রিকেট, রাজনীতি, নাটক) নির্ধারণ করার চেষ্টা করো।
৪. **Aggressive Sniper Guessing:** তোমার কনফিডেন্স ৮০% হলেই তুমি সরাসরি গেস (Guess) করতে পারো। মনে রাখবে, তুমি একজন জিনী, তাই তোমার অনুমান হতে হবে জাদুকরী!
৫. **The Kill Shot (Q10+):** ১০ নম্বর প্রশ্নের পর এমন একটি ইউনিক বা অদ্ভুত প্রশ্ন করো যা শুধুমাত্র ঐ একটি চরিত্রের জন্যই সত্য হতে পারে (যেমন: "তার কি কোনো বিখ্যাত তিল আছে?" বা "তার কি একটি বিশেষ ক্যাচফ্রেজ আছে?")।
৬. **Binary Excellence:** সব প্রশ্ন অবশ্যই "হ্যাঁ" অথবা "না" ফরমেটে হতে হবে। ইউজারের জন্য উত্তর দেওয়া যেন পানির মতো সহজ হয়।

**🔥 PRO RULES FOR WORLD-CLASS PERFORMANCE:**
- **ABSOLUTE ZERO REPETITION:** একই প্রশ্ন বা একই অর্থের প্রশ্ন ভিন্নভাবে করা তোমার মর্যাদাহানি করবে। হিস্ট্রি চেক করো।
- **WIZARD PERSONALITY:** তোমার ভাষা হবে অত্যন্ত প্রফেশনাল, রহস্যময় এবং আকর্ষণীয়। ইউজারের উত্তরের পর ছোট কিন্তু বুদ্ধিমত্তাসম্পন্ন কমেন্ট করো (যেমন: "ওহ! আপনি বেশ কঠিন চ্যালেঞ্জ দিচ্ছেন...", "আমি কি তাহলে ঠিক পথেই এগোচ্ছি?", "হুম, জিনীর মগজে এখন একটি নাম ঘুরপাক খাচ্ছে...")।
- **NO HALLUCINATION:** শুধুমাত্র বাস্তব এবং বিখ্যাত চরিত্র বা স্থাপত্য নিয়ে কাজ করো। নিজের থেকে চরিত্র উদ্ভাবন করবে না।

**💎 RESPONSE FORMAT (Strict JSON only):**
প্রশ্নের জন্য: { "type": "question", "text": "জাদুকরী মন্তব্য + আপনার প্রশ্ন", "confidence": 40 }
অনুমানের জন্য: { "type": "guess", "character": "English Name", "banglaName": "বাংলা নাম", "description": "সংক্ষিপ্ত পরিচয় (এক লাইন)", "confidence": 98, "category": "বিভাগ", "funFact": "চরিত্রটি সম্পর্কে একটি চমকপ্রদ তথ্য" }
অজানার জন্য: { "type": "unknown", "message": "মাফ করবেন মালিক! আজ আমার জাদু হার মেনেছে। আসলে তিনি কে ছিলেন?" }
`;

export const CATEGORY_CONTEXTS = {
  all: "আমি বিশ্বব্রহ্মাণ্ডের যেকোনো চরিত্র খুঁজে বের করতে পারি।",
  bd: "আমি এখন শুধুমাত্র বাংলার মাটির বিখ্যাত সন্তানদের কথা ভাবছি।",
  cricket: "২২ গজের লড়াইয়ের কোনো মহান নক্ষত্রকে আমি খুঁজছি।",
  bollywood: "রূপালি পর্দার গ্ল্যামার আর ড্রামার জগতের কাউকে আমি খুঁজছি।",
  anime: "এনিমে এবং ওটাকু দুনিয়ার কোনো কাল্পনিক হিরো বা ভিলেন আমার নজরে আছে।",
  music: "সুর আর তালের জাদুকরী কোনো কণ্ঠশিল্পীর কথা আমি চিন্তা করছি।",
  sports: "খেলার মাঠের ঘাম আর পরিশ্রমের কোনো কিংবদন্তিকে আমি খুঁজছি।",
  history: "ইতিহাসের ধুলোমাখা পাতা থেকে কোনো মহান মানুষের কথা আমি ভাবছি।",
  marvel: "সুপারহিরো বা সুপারভিলেনের অতিমানবিক শক্তির কোনো চরিত্র আমার নজরে আছে।",
  places: "বিশ্বের কোনো জাদুকরী স্থাপত্য বা বিখ্যাত স্থানের কথা আমি ভাবছি।",
  global: "বিশ্বের মানচিত্রে নিজের নাম খোদাই করা কোনো বিশ্ববরেণ্য ব্যক্তিকে আমি খুঁজছি।",
  indonesia: "ইন্দোনেশিয়ার বৈচিত্র্যময় সংস্কৃতি বা বিখ্যাত কোনো চরিত্রের কথা আমি ভাবছি।"
};

const CATEGORY_DATA_MAP = {
  bd: 'bangladesh', cricket: 'cricket', bollywood: 'bollywood', anime: 'anime',
  music: 'music', sports: 'sports', history: 'history', marvel: 'superhero', 
  places: 'places', global: 'global', indonesia: 'indonesia', all: 'all'
};

export function buildMessages(conversationHistory, selectedCategory = "all", currentConfidence = 0) {
  const dataCategory = CATEGORY_DATA_MAP[selectedCategory] || selectedCategory;
  const characters = getCharactersByCategory(dataCategory);

  const maxPromptChars = characters.length > 60 ? 60 : characters.length;
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

### বর্তমান মিশন প্যারামিটার (Current Mission):
- প্রশ্ন নম্বর: ${assistantMsgCount + 1}
- ক্যাটাগরি: ${dataCategory}
- বর্তমান কনফিডেন্স: ${currentConfidence}%

### নলেজ বেস রেফারেন্স (AI Index):
${characterHints}
`;

  messages.unshift({ role: "system", content: finalSystemPrompt });

  const finalReminder = `
### গুরুত্বপূর্ণ ফাইনাল ইনস্ট্রাকশন:
- কনফিডেন্স মূলত ${currentConfidence}%। 
- যদি কনফিডেন্স ৮০% বা তার বেশি হয়, সরাসরি 'guess' রেসপন্স দাও। 
- ইতিপূর্বে করা কোনো প্রশ্ন পুনরায় করবে না।
- প্রশ্ন নম্বর ${assistantMsgCount + 1}: একটি অত্যন্ত বুদ্ধিদীপ্ত বাইনারি (হ্যাঁ/না) প্রশ্ন করো।
- শুধুমাত্র JSON ফরম্যাটে উত্তর পাঠাও:
{ "type": "question", "text": "...", "confidence": 10 }
`;

  if (messages.length > 0) {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === "user") {
      lastMsg.content += `\n\n${finalReminder}`;
    } else {
      messages.push({ role: "user", content: finalReminder });
    }
  }

  return { messages, previousQuestions };
}

export function parseGeminiResponse(text) {
  if (!text || typeof text !== 'string') {
    return { type: "question", text: "জাদুকরী আয়না ধোঁয়াটে হয়ে গেছে... আবার বলুন?", confidence: 20 };
  }

  let cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
  cleaned = cleaned.replace(/^(user|assistant|model|genie|bot|system):?\s*/i, "");

  try {
    if (cleaned.startsWith('{') && cleaned.endsWith('}')) {
      const data = JSON.parse(cleaned);
      return processParsedData(data);
    }

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try { return processParsedData(JSON.parse(jsonMatch[0].trim())); } catch { }
    }

    const textMatch = cleaned.match(/"text":\s*"([^"]*)"/);
    if (textMatch) return { type: "question", text: textMatch[1], confidence: 40 };

    const charMatch = cleaned.match(/"character":\s*"([^"]*)"/);
    if (charMatch) return { type: "guess", character: charMatch[1], confidence: 90 };

    let rawStr = cleaned
      .replace(/\{"type":\s*"question",\s*"text":\s*"/, "")
      .replace(/"\}/, "")
      .replace(/\\"/g, '"')
      .trim();

    return { type: "question", text: rawStr || "আপনার মনের কথা আমি পড়তে পারছি না... আবার ভাবুন!", confidence: 50 };

  } catch {
    return { type: "question", text: "জাদুর ল্যাম্পে একটু সমস্যা হয়েছে... আবার বলুন?", confidence: 50 };
  }
}

function processParsedData(data) {
  const clean = (val) => typeof val === 'string' ? val.replace(/^(user|assistant|model|genie|bot|system):?\s*/i, "").trim() : val;

  if (data.type === 'question' && !data.text) data.text = data.content || data.question || "পরবর্তী প্রশ্নটি হলো...";
  if (data.type === 'guess' && !data.character) data.character = data.name || data.banglaName || "অজানা";

  if (data.text) data.text = clean(data.text);
  if (data.character) data.character = clean(data.character);
  if (data.banglaName) data.banglaName = clean(data.banglaName);

  if (!data.type) data.type = 'question';
  return data;
}
