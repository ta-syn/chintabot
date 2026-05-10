const globalStars = [
  {
    "name": "Albert Einstein",
    "banglaName": "আলবার্ট আইনস্টাইন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "German",
    "profession": "Physicist",
    "knownFor": "Theory of Relativity",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর অন্যতম শ্রেষ্ঠ বিজ্ঞানী।",
      "২. তিনি আপেক্ষিকতা তত্ত্ব (Theory of Relativity) প্রদানের জন্য বিখ্যাত।",
      "৩. তিনি ১৯২১ সালে পদার্থবিজ্ঞানে নোবেল পুরস্কার পান।",
      "৪. তাঁর বিখ্যাত সমীকরণ হলো E=mc²।",
      "৫. তাঁকে আধুনিক পদার্থবিজ্ঞানের জনক বলা হয়।"
    ]
  },
  {
    "name": "Elon Musk",
    "banglaName": "ইলন মাস্ক",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Entrepreneur",
    "knownFor": "Tesla, SpaceX",
    "hints": [
      "১. তিনি বর্তমান বিশ্বের অন্যতম ধনী ব্যক্তি।",
      "২. তিনি মহাকাশ গবেষণা সংস্থা 'SpaceX' এর প্রতিষ্ঠাতা।",
      "৩. তিনি বৈদ্যুতিক গাড়ি নির্মাতা প্রতিষ্ঠান 'Tesla' এর প্রধান।",
      "৪. সম্প্রতি তিনি সোশ্যাল মিডিয়া প্ল্যাটফর্ম 'X' (Twitter) কিনে নিয়েছেন।",
      "৫. তাঁর লক্ষ্য হলো মঙ্গল গ্রহে মানুষের বসতি স্থাপন করা।"
    ]
  },
  {
    "name": "Bill Gates",
    "banglaName": "বিল গেটস",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Software Architect",
    "knownFor": "Microsoft",
    "hints": [
      "১. তিনি বিশ্বের সবচেয়ে বড় সফটওয়্যার কোম্পানি 'Microsoft' এর সহ-প্রতিষ্ঠাতা।",
      "২. তিনি টানা বহু বছর ধরে বিশ্বের শীর্ষ ধনী ব্যক্তি ছিলেন।",
      "৩. উইন্ডোজ (Windows) অপারেটিং সিস্টেম তৈরির পেছনে তাঁর প্রধান ভূমিকা ছিল।",
      "৪. বর্তমানে তিনি দাতব্য কাজের জন্য বেশি পরিচিত।",
      "৫. তাঁর ফাউন্ডেশন সারা বিশ্বে জনস্বাস্থ্য নিয়ে কাজ করে।"
    ]
  },
  {
    "name": "Steve Jobs",
    "banglaName": "স্টিভ জবস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Co-founder of Apple",
    "knownFor": "iPhone, iPad",
    "hints": [
      "১. তিনি প্রযুক্তি বিশ্বের এক মহান উদ্ভাবক এবং স্বপ্নদ্রষ্টা।",
      "২. তিনি অ্যাপল (Apple Inc.) কোম্পানির সহ-প্রতিষ্ঠাতা।",
      "৩. আইফোন (iPhone) এবং আইপড (iPod) উদ্ভাবনের মাধ্যমে তিনি দুনিয়া বদলে দিয়েছিলেন।",
      "৪. তিনি তাঁর চমৎকার প্রেজেন্টেশন এবং কালো টার্টলনেক শার্টের জন্য পরিচিত ছিলেন।",
      "৫. ম্যাকিনটোশ কম্পিউটার তৈরির কারিগর তিনি।"
    ]
  },
  {
    "name": "Nelson Mandela",
    "banglaName": "নেলসন ম্যান্ডেলা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "South African",
    "profession": "Revolutionary",
    "knownFor": "Anti-apartheid Movement",
    "hints": [
      "১. তিনি বর্ণবাদ বিরোধী আন্দোলনের এক মহান নায়ক।",
      "২. তিনি দক্ষিণ আফ্রিকার প্রথম কৃষ্ণাঙ্গ প্রেসিডেন্ট ছিলেন।",
      "৩. নিজের আদর্শের জন্য তিনি ২৭ বছর কারাগারে বন্দি ছিলেন।",
      "৪. তাঁকে ভালোবেসে মানুষ 'মাদিবা' বলে ডাকত।",
      "৫. তিনি ১৯৯৩ সালে শান্তিতে নোবেল পুরস্কার পান।"
    ]
  },
  {
    "name": "Mahatma Gandhi",
    "banglaName": "মহাত্মা গান্ধী",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Indian",
    "profession": "Political Leader",
    "knownFor": "Non-violence",
    "hints": [
      "১. তিনি ভারতের স্বাধীনতা সংগ্রামের প্রধান নেতা।",
      "২. তিনি অহিংসা এবং সত্যগ্রহ আন্দোলনের প্রবর্তক।",
      "৩. তাঁকে ভারতের 'জাতির জনক' হিসেবে গণ্য করা হয়।",
      "৪. তিনি সাধারণ ধুতি এবং চশমা পরে খুব সাদামাটা জীবনযাপন করতেন।",
      "৫. তাঁর জন্মদিন ২রা অক্টোবর বিশ্বে 'আন্তর্জাতিক অহিংসা দিবস' হিসেবে পালিত হয়।"
    ]
  },
  {
    "name": "Marie Curie",
    "banglaName": "মেরি কুরি",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Polish",
    "profession": "Scientist",
    "knownFor": "Radioactivity",
    "hints": [
      "১. তিনি বিশ্বের ইতিহাসের অন্যতম প্রভাবশালী নারী বিজ্ঞানী।",
      "২. তিনি একমাত্র ব্যক্তি যিনি দুটি ভিন্ন বিজ্ঞান শাখায় নোবেল পেয়েছেন।",
      "৩. তেজস্ক্রিয়তা (Radioactivity) নিয়ে গবেষণার জন্য তিনি বিখ্যাত।",
      "৪. তিনি রেডিয়াম এবং পোলোনিয়াম নামক দুটি মৌল আবিষ্কার করেন।",
      "৫. ১৯০৩ সালে পদার্থবিজ্ঞানে এবং ১৯১১ সালে রসায়নে তিনি নোবেল পান।"
    ]
  },
  {
    "name": "Leonardo da Vinci",
    "banglaName": "লিওনার্দো দা ভিঞ্চি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Italian",
    "profession": "Polymath",
    "knownFor": "Mona Lisa",
    "hints": [
      "১. তিনি রেনেসাঁ যুগের এক মহান শিল্পী এবং বহুমুখী প্রতিভার অধিকারী।",
      "২. বিশ্ববিখ্যাত ছবি 'মোনালিসা' (Mona Lisa) তাঁরই আঁকা।",
      "৩. 'দ্যা লাস্ট সাপার' তাঁর আরেকটি কালজয়ী চিত্রকর্ম।",
      "৪. তিনি একাধারে বিজ্ঞানী, ইঞ্জিনিয়ার এবং উদ্ভাবক ছিলেন।",
      "৫. তাঁর নোটবুকে হেলিকপ্টার এবং উড়োজাহাজের প্রাথমিক নকশা পাওয়া গিয়েছিল।"
    ]
  },
  {
    "name": "Isaac Newton",
    "banglaName": "আইজ্যাক নিউটন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "English",
    "profession": "Physicist",
    "knownFor": "Laws of Motion",
    "hints": [
      "১. তিনি সর্বকালের অন্যতম শ্রেষ্ঠ বিজ্ঞানী এবং গণিতবিদ।",
      "২. মাধ্যাকর্ষণ শক্তি (Gravity) সম্পর্কে তাঁর ব্যাখ্যা পৃথিবীকে বদলে দিয়েছে।",
      "৩. গাছ থেকে আপেল পড়ার ঘটনাটি তাঁর মহাকর্ষ তত্ত্বের সাথে জড়িয়ে আছে।",
      "৪. তিনি গতির তিনটি বিখ্যাত সূত্র (Laws of Motion) প্রদান করেন।",
      "৫. ক্যালকুলাস নামক গণিতের শাখার অন্যতম উদ্ভাবক তিনি।"
    ]
  },
  {
    "name": "William Shakespeare",
    "banglaName": "উইলিয়াম শেক্সপিয়ার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "English",
    "profession": "Playwright",
    "knownFor": "Romeo and Juliet",
    "hints": [
      "১. তিনি ইংরেজি সাহিত্যের সর্বশ্রেষ্ঠ নাট্যকার এবং কবি।",
      "২. তাঁর রচিত 'রোমিও অ্যান্ড জুলিয়েট' বিশ্বের সবচেয়ে বিখ্যাত প্রেমের নাটক।",
      "৩. হ্যামলেট এবং ম্যাকবেথ তাঁর বিখ্যাত ট্র্যাজেডি নাটক।",
      "৪. তাঁকে ইংরেজদের 'জাতীয় কবি' বা 'Bard of Avon' বলা হয়।",
      "৫. তিনি অনেক জনপ্রিয় সনেট বা কবিতা লিখেছেন।"
    ]
  },
  {
    "name": "Abraham Lincoln",
    "banglaName": "আব্রাহাম লিঙ্কন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "16th US President",
    "knownFor": "Emancipation Proclamation",
    "hints": [
      "১. তিনি আমেরিকার ১৬তম রাষ্ট্রপতি ছিলেন।",
      "২. আমেরিকার গৃহযুদ্ধের সময় তিনি দেশের নেতৃত্ব দিয়েছিলেন।",
      "৩. তিনি দাসপ্রথা বিলুপ্ত করার জন্য 'মুক্তি ঘোষণা' (Emancipation Proclamation) জারি করেন।",
      "৪. তাঁর গেটিসবার্গ ভাষণ আজও ইতিহাসে অমর হয়ে আছে।",
      "৫. ১৮৬৫ সালে আততায়ীর গুলিতে তিনি নিহত হন।"
    ]
  },
  {
    "name": "Mark Zuckerberg",
    "banglaName": "মার্ক জাকারবার্গ",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "CEO of Meta",
    "knownFor": "Facebook",
    "hints": [
      "১. তিনি বিশ্বের সবচেয়ে বড় সামাজিক যোগাযোগ মাধ্যম 'Facebook' এর প্রতিষ্ঠাতা।",
      "২. তিনি হার্ভার্ড বিশ্ববিদ্যালয়ে পড়ার সময় ফেসবুক তৈরি করেছিলেন।",
      "৩. বর্তমানে তিনি মেটা (Meta) কোম্পানির প্রধান নির্বাহী।",
      "৪. তিনি অত্যন্ত তরুণ বয়সে বিলিয়নেয়ার হয়েছিলেন।",
      "৫. মেটাভার্স নিয়ে তাঁর বর্তমান কর্মযজ্ঞ বিশ্বজুড়ে আলোচিত।"
    ]
  },
  {
    "name": "Malala Yousafzai",
    "banglaName": "মালালা ইউসুফজাই",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "Pakistani",
    "profession": "Activist",
    "knownFor": "Female Education Activism",
    "hints": [
      "১. তিনি নারী শিক্ষা আন্দোলনের একজন সাহসী নেত্রী।",
      "২. তিনি সবচেয়ে কম বয়সে (১৭ বছর) নোবেল শান্তি পুরস্কার পেয়েছেন।",
      "৩. তালিবানদের গুলিতে আহত হওয়ার পরও তিনি তাঁর সংগ্রাম চালিয়ে গেছেন।",
      "৪. তাঁর জন্ম পাকিস্তানের সোয়াত উপত্যকায়।",
      "৫. তিনি বর্তমানে বিশ্বজুড়ে মেয়েদের শিক্ষার প্রসারে কাজ করছেন।"
    ]
  },
  {
    "name": "Lionel Messi",
    "banglaName": "লিওনেল মেসি",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Argentine",
    "profession": "Footballer",
    "knownFor": "8 Ballon d'Or awards",
    "hints": [
      "১. তাঁকে সর্বকালের অন্যতম শ্রেষ্ঠ ফুটবলার হিসেবে গণ্য করা হয়।",
      "২. তিনি ২০২২ সালে আর্জেন্টিনার হয়ে ফিফা বিশ্বকাপ জয় করেন।",
      "৩. তিনি রেকর্ড ৮ বার ব্যালন ডি'অর (Ballon d'Or) পুরস্কার জিতেছেন।",
      "৪. তাঁর ফুটবল ক্যারিয়ারের বড় অংশ তিনি বার্সেলোনা ক্লাবে কাটিয়েছেন।",
      "৫. বর্তমানে তিনি আমেরিকার ইন্টার মায়ামি ক্লাবে খেলছেন।"
    ]
  },
  {
    "name": "Cristiano Ronaldo",
    "banglaName": "ক্রিশ্চিয়ানো রোনালদো",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Portuguese",
    "profession": "Footballer",
    "knownFor": "Top Goal Scorer",
    "hints": [
      "১. তিনি বিশ্বের অন্যতম জনপ্রিয় এবং শক্তিশালী ফুটবলার।",
      "২. আন্তর্জাতিক ফুটবলে সবচেয়ে বেশি গোল করার রেকর্ড তাঁর দখলে।",
      "৩. তিনি রিয়াল মাদ্রিদ এবং ম্যানচেস্টার ইউনাইটেডের মতো বড় ক্লাবে খেলেছেন।",
      "৪. তাঁর জার্সি নম্বর '৭' এবং তিনি 'CR7' নামে পরিচিত।",
      "৫. বর্তমানে তিনি সৌদি আরবের আল-নাসর ক্লাবে খেলছেন।"
    ]
  },
  {
    "name": "Stephen Hawking",
    "banglaName": "স্টিভেন হকিং",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Theoretical Physicist",
    "knownFor": "Black Holes, A Brief History of Time",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর এক মহান বিজ্ঞানী এবং বিশ্বতত্ত্ববিদ।",
      "২. মোটর নিউরন রোগে আক্রান্ত হয়ে তিনি প্রায় সারা জীবন হুইলচেয়ারে কাটিয়েছেন।",
      "৩. কৃষ্ণগহ্বর (Black Hole) এবং মহাবিশ্বের সৃষ্টি নিয়ে তাঁর গবেষণা কালজয়ী।",
      "৪. তাঁর লেখা 'এ ব্রিফ হিস্ট্রি অব টাইম' বইটি বিশ্বজুড়ে অত্যন্ত জনপ্রিয়।",
      "৫. তিনি কথা বলার জন্য বিশেষ স্পিচ সিন্থেসাইজার ব্যবহার করতেন।"
    ]
  },
  {
    "name": "Mother Teresa",
    "banglaName": "মাদার তেরেসা",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Albanian / Indian",
    "profession": "Nun / Missionary",
    "knownFor": "Missionaries of Charity",
    "hints": [
      "১. তিনি সারাজীবন আর্তমানবতার সেবায় নিজেকে উৎসর্গ করেছিলেন।",
      "২. তিনি কলকাতায় 'মিশনারিজ অব চ্যারিটি' প্রতিষ্ঠা করেন।",
      "৩. তাঁকে 'কলকাতার সেন্ট তেরেসা' হিসেবেও ডাকা হয়।",
      "৪. তিনি ১৯৭৯ সালে শান্তিতে নোবেল পুরস্কার পান।",
      "৫. নীল পাড় সাদা শাড়ি তাঁর পরিচায়ক হয়ে উঠেছিল।"
    ]
  },
  {
    "name": "Barack Obama",
    "banglaName": "বারাক ওবামা",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "44th US President",
    "knownFor": "First African-American President",
    "hints": [
      "১. তিনি মার্কিন যুক্তরাষ্ট্রের ৪৪তম রাষ্ট্রপতি ছিলেন।",
      "২. তিনি আমেরিকার প্রথম কৃষ্ণাঙ্গ রাষ্ট্রপতি হিসেবে ইতিহাস গড়েছিলেন।",
      "৩. তাঁর নির্বাচনী স্লোগান ছিল 'Yes We Can'।",
      "৪. তিনি ২০০৯ সালে শান্তিতে নোবেল পুরস্কার পান।",
      "৫. তিনি একজন দক্ষ বক্তা এবং লেখক হিসেবে পরিচিত।"
    ]
  },
  {
    "name": "Jeff Bezos",
    "banglaName": "জেফ বেজোস",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Founder of Amazon",
    "knownFor": "E-commerce, Blue Origin",
    "hints": [
      "১. তিনি বিশ্বের বৃহত্তম ই-কমার্স প্রতিষ্ঠান 'Amazon' এর প্রতিষ্ঠাতা।",
      "২. তিনি এক সময় বিশ্বের শীর্ষ ধনী ব্যক্তি ছিলেন।",
      "৩. তাঁর মালিকানাধীন মহাকাশ গবেষণা সংস্থার নাম 'Blue Origin'।",
      "৪. তিনি গ্যারেজে বসে বই বিক্রির মাধ্যমে অ্যামাজন শুরু করেছিলেন।",
      "৫. বর্তমানে তিনি মহাকাশ পর্যটন নিয়ে কাজ করছেন।"
    ]
  },
  {
    "name": "Rabindranath Tagore",
    "banglaName": "রবীন্দ্রনাথ ঠাকুর",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Indian",
    "profession": "Poet / Polymath",
    "knownFor": "Gitanjali, Nobel Prize",
    "hints": [
      "১. তিনি এশিয়ার প্রথম ব্যক্তি হিসেবে সাহিত্যে নোবেল পুরস্কার পান।",
      "২. তাঁর বিখ্যাত কাব্যগ্রন্থ 'গীতাঞ্জলি' এর জন্য তিনি ১৯১৩ সালে নোবেল পান।",
      "৩. তিনি ভারত এবং বাংলাদেশ—উভয় দেশের জাতীয় সংগীতের রচয়িতা।",
      "৪. তাঁকে 'বিশ্বকবি' এবং 'গুরুদেব' উপাধিতে ভূষিত করা হয়েছে।",
      "৫. তিনি শান্তিনিকেতন এবং বিশ্বভারতী বিশ্ববিদ্যালয় প্রতিষ্ঠা করেন।"
    ]
  },
  {
    "name": "Michael Jackson",
    "banglaName": "মাইকেল জ্যাকসন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Pop Star",
    "knownFor": "King of Pop, Moonwalk",
    "hints": [
      "১. তাঁকে বিশ্বের 'পপ সম্রাট' (King of Pop) বলা হয়।",
      "২. তাঁর 'মুনওয়াক' (Moonwalk) নাচ সারা বিশ্বে অত্যন্ত জনপ্রিয়।",
      "৩. তাঁর 'থ্রিলার' (Thriller) অ্যালবামটি ইতিহাসের সবচেয়ে বেশি বিক্রিত অ্যালবাম।",
      "৪. তিনি তাঁর ব্যতিক্রমী গান এবং নাচের শৈলীর জন্য অমর হয়ে আছেন।",
      "৫. ২০০৯ সালে তাঁর মৃত্যু সারা বিশ্বের মানুষকে শোকাতুর করেছিল।"
    ]
  },
  {
    "name": "Marilyn Monroe",
    "banglaName": "মেরিলিন মনরো",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "American",
    "profession": "Actress",
    "knownFor": "Sex Symbol of 1950s",
    "hints": [
      "১. তিনি হলিউডের সোনালী যুগের অন্যতম জনপ্রিয় অভিনেত্রী এবং মডেল।",
      "২. তাঁকে ১৯৫০-এর দশকের পপ সংস্কৃতির আইকন মনে করা হয়।",
      "৩. তাঁর আসল নাম ছিল নরমা জিন মর্টেনসন।",
      "৪. তাঁর চপল হাসি এবং সোনালী চুল বিশ্ববিখ্যাত ছিল।",
      "৫. মাত্র ৩৬ বছর বয়সে তাঁর রহস্যময় মৃত্যু আজও আলোচনার বিষয়।"
    ]
  },
  {
    "name": "Muhammad Ali",
    "banglaName": "মোহাম্মদ আলী",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Boxer",
    "knownFor": "The Greatest Boxer",
    "hints": [
      "১. তাঁকে বিশ্বের সর্বকালের শ্রেষ্ঠ হেভিওয়েট বক্সার মনে করা হয়।",
      "২. তাঁর বিখ্যাত উক্তি ছিল 'প্রজাপতির মতো ওড়ো, মৌমাছির মতো হুল ফোটাও'।",
      "৩. তিনি তিনবার ওয়ার্ল্ড হেভিওয়েট চ্যাম্পিয়নশিপ জিতেছিলেন।",
      "৪. তিনি বর্ণবাদ এবং যুদ্ধের বিরুদ্ধে সোচ্চার ছিলেন।",
      "৫. তিনি ইসলাম ধর্ম গ্রহণ করেছিলেন এবং নিজের নাম পরিবর্তন করেছিলেন।"
    ]
  },
  {
    "name": "Winston Churchill",
    "banglaName": "উইনস্টন চার্চিল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Prime Minister",
    "knownFor": "WWII Leadership",
    "hints": [
      "১. তিনি দ্বিতীয় বিশ্বযুদ্ধের সময় ব্রিটেনের প্রধানমন্ত্রী ছিলেন।",
      "২. তাঁর বলিষ্ঠ নেতৃত্ব মিত্র বাহিনীকে বিজয়ী হতে সাহায্য করেছিল।",
      "৩. তিনি তাঁর চমৎকার বক্তৃতা এবং 'V for Victory' চিহ্নের জন্য পরিচিত।",
      "৪. ১৯৫৩ সালে তিনি সাহিত্যে নোবেল পুরস্কার পান।",
      "৫. ব্রিটিশ ইতিহাসের অন্যতম প্রভাবশালী ব্যক্তিত্ব হিসেবে তাঁকে গণ্য করা হয়।"
    ]
  },
  {
    "name": "Cleopatra",
    "banglaName": "ক্লিওপেট্রা",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Egyptian",
    "profession": "Queen",
    "knownFor": "Last Pharaoh of Egypt",
    "hints": [
      "১. তিনি প্রাচীন মিশরের শেষ সক্রিয় ফারাও বা রানী ছিলেন।",
      "২. তিনি তাঁর বুদ্ধিমত্তা এবং সৌন্দর্যের জন্য ইতিহাসে কিংবদন্তী হয়ে আছেন।",
      "৩. জুলিয়াস সিজার এবং মার্ক অ্যান্টনির সাথে তাঁর সম্পর্ক আলোচিত।",
      "৪. তিনি টলেমি রাজবংশের সদস্য ছিলেন।",
      "৫. সর্পদংশনে তাঁর মৃত্যু হয়েছিল বলে প্রচলিত আছে।"
    ]
  },
  {
    "name": "Galileo Galilei",
    "banglaName": "গ্যালিলিও গ্যালিলি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Italian",
    "profession": "Astronomer",
    "knownFor": "Telescope, Heliocentrism",
    "hints": [
      "১. তাঁকে আধুনিক পর্যবেক্ষণমূলক জ্যোতির্বিদ্যার জনক বলা হয়।",
      "২. তিনি টেলিস্কোপের মাধ্যমে বৃহস্পতির উপগ্রহ এবং শনির বলয় পর্যবেক্ষণ করেন।",
      "৩. পৃথিবী সূর্যের চারদিকে ঘোরে—এই তত্ত্ব প্রচারের জন্য তাঁকে গির্জার কোপে পড়তে হয়েছিল।",
      "৪. তাঁকে সারা জীবন গৃহবন্দি থাকতে হয়েছিল।",
      "৫. তাঁর বৈজ্ঞানিক পদ্ধতি আধুনিক বিজ্ঞানের ভিত্তি স্থাপন করেছিল।"
    ]
  },
  {
    "name": "Adolf Hitler",
    "banglaName": "অ্যাডলফ হিটলার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "German",
    "profession": "Dictator",
    "knownFor": "Nazi Party, WWII",
    "hints": [
      "১. তিনি জার্মানির নাৎসি বাহিনীর প্রধান এবং একনায়ক ছিলেন।",
      "২. তাঁর আগ্রাসনের ফলেই দ্বিতীয় বিশ্বযুদ্ধের সূচনা হয়েছিল।",
      "৩. তাঁর সময়েই ইতিহাসে কলঙ্কিত 'হলোকাস্ট' বা ইহুদি নিধন সংঘটিত হয়।",
      "৪. তাঁর আত্মজীবনীর নাম 'মেইন কাম্প' (Mein Kampf)।",
      "৫. ১৯৪৫ সালে যুদ্ধের শেষ দিকে তিনি আত্মহত্যা করেন।"
    ]
  },
  {
    "name": "Charles Darwin",
    "banglaName": "চার্লস ডারউইন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Naturalist",
    "knownFor": "Theory of Evolution",
    "hints": [
      "১. তিনি বিবর্তনবাদ (Theory of Evolution) তত্ত্বের জনক।",
      "২. তাঁর বিখ্যাত বইয়ের নাম 'On the Origin of Species'।",
      "৩. তিনি এইচএমএস বিগল (HMS Beagle) জাহাজে করে বিশ্বভ্রমণ করেছিলেন।",
      "৪. প্রাকৃতিক নির্বাচন (Natural Selection) প্রক্রিয়ার মাধ্যমে প্রজাতির উদ্ভব তিনি ব্যাখ্যা করেন।",
      "৫. তাঁর গবেষণা জীববিজ্ঞানকে সম্পূর্ণ নতুন রূপ দিয়েছে।"
    ]
  },
  {
    "name": "Walt Disney",
    "banglaName": "ওয়াল্ট ডিজনি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Animator / Entrepreneur",
    "knownFor": "Mickey Mouse, Disneyland",
    "hints": [
      "১. তিনি বিশ্বের সবচেয়ে বড় বিনোদন সাম্রাজ্য 'Disney' এর প্রতিষ্ঠাতা।",
      "২. তিনি জনপ্রিয় কার্টুন চরিত্র 'মিকি মাউস' এর স্রষ্টা।",
      "৩. তিনি প্রথম পূর্ণদৈর্ঘ্য অ্যানিমেটেড মুভি 'স্নো হোয়াইট' তৈরি করেন।",
      "৪. ডিজনিল্যান্ড থিম পার্কটি তাঁরই স্বপ্ন ছিল।",
      "৫. তিনি সবচেয়ে বেশি অস্কার পুরস্কার পাওয়ার রেকর্ডধারী।"
    ]
  },
  {
    "name": "Dalai Lama",
    "banglaName": "দালাই লামা",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Tibetan",
    "profession": "Spiritual Leader",
    "knownFor": "Tibetan Buddhism",
    "hints": [
      "১. তিনি তিব্বতি বৌদ্ধধর্মের সর্বোচ্চ আধ্যাত্মিক গুরু।",
      "২. বর্তমানে তিনি ভারতের ধর্মশালায় নির্বাসিত জীবন কাটাচ্ছেন।",
      "৩. তিনি বিশ্বজুড়ে শান্তি এবং অহিংসার বাণী প্রচার করেন।",
      "৪. তিনি ১৯৮৯ সালে শান্তিতে নোবেল পুরস্কার পান।",
      "৫. তিব্বতের স্বাধীনতার স্বপক্ষে তিনি আন্তর্জাতিকভাবে কাজ করছেন।"
    ]
  },
  {
    "name": "Vladimir Putin",
    "banglaName": "ভ্লাদিমির পুতিন",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Russian",
    "profession": "President of Russia",
    "knownFor": "Ex-KGB, Long-term Ruler",
    "hints": [
      "১. তিনি বর্তমান রাশিয়ার রাষ্ট্রপতি এবং অন্যতম শক্তিশালী নেতা।",
      "২. তিনি দীর্ঘ সময় ধরে রাশিয়ার ক্ষমতা ধরে রেখেছেন।",
      "৩. রাজনীতিতে আসার আগে তিনি গোয়েন্দা সংস্থা কেজিবি (KGB) এর সদস্য ছিলেন।",
      "৪. তিনি তাঁর দৃঢ় এবং অনেক সময় বিতর্কিত সিদ্ধান্তর জন্য পরিচিত।",
      "৫. তিনি মার্শাল আর্টে বিশেষ পারদর্শী।"
    ]
  },
  {
    "name": "Queen Elizabeth II",
    "banglaName": "রানী দ্বিতীয় এলিজাবেথ",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "British",
    "profession": "Monarch",
    "knownFor": "Longest-reigning British Monarch",
    "hints": [
      "১. তিনি ব্রিটিশ ইতিহাসের সবচেয়ে দীর্ঘ সময় শাসনকারী রানী ছিলেন।",
      "২. ৭০ বছর ধরে তিনি কমনওয়েলথ ভুক্ত দেশগুলোর প্রধান ছিলেন।",
      "৩. তাঁর শাসনকালে বিশ্ব অনেক বড় বড় পরিবর্তনের সাক্ষী হয়েছে।",
      "৪. তিনি লন্ডনের বাকিংহাম প্যালেসে থাকতেন।",
      "৫. ২০২২ সালে তাঁর মৃত্যুতে পুরো বিশ্ব শোক প্রকাশ করেছিল।"
    ]
  },
  {
    "name": "Bruce Lee",
    "banglaName": "ব্রুস লি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Chinese / American",
    "profession": "Martial Artist / Actor",
    "knownFor": "Enter the Dragon, Jeet Kune Do",
    "hints": [
      "১. তাঁকে আধুনিক মার্শাল আর্টের আইকন মনে করা হয়।",
      "২. তিনি 'জিত কুন দো' নামক মার্শাল আর্ট শৈলীর উদ্ভাবক।",
      "৩. তাঁর মুভি 'এন্টার দ্য ড্রাগন' বিশ্বজুড়ে তুমুল জনপ্রিয়।",
      "৪. তাঁর গতি এবং লড়াই করার কৌশল আজও মানুষকে অবাক করে।",
      "৫. মাত্র ৩২ বছর বয়সে তাঁর অকাল মৃত্যু হয়েছিল।"
    ]
  },
  {
    "name": "Thomas Edison",
    "banglaName": "থমাস এডিসন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Inventor",
    "knownFor": "Electric Light Bulb, Phonograph",
    "hints": [
      "১. তাঁকে বিশ্বের অন্যতম শ্রেষ্ঠ উদ্ভাবক মনে করা হয়।",
      "২. তিনি বৈদ্যুতিক বাল্ব (Electric Bulb) এর সফল উদ্ভাবক।",
      "৩. গ্রামোফোন এবং মুভিং পিকচার ক্যামেরার উদ্ভাবনেও তাঁর অবদান আছে।",
      "৪. তাঁর নামে এক হাজারের বেশি পেটেন্ট ছিল।",
      "৫. 'সাফল্য হলো ১ শতাংশ অনুপ্রেরণা আর ৯৯ শতাংশ পরিশ্রম'—এটি তাঁর উক্তি।"
    ]
  },
  {
    "name": "Martin Luther King Jr.",
    "banglaName": "মার্টিন লুথার কিং জুনিয়র",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Civil Rights Leader",
    "knownFor": "I Have a Dream speech",
    "hints": [
      "১. তিনি আমেরিকার নাগরিক অধিকার আন্দোলনের প্রধান নেতা ছিলেন।",
      "২. তাঁর 'I Have a Dream' ভাষণটি বিশ্বজুড়ে অত্যন্ত বিখ্যাত।",
      "৩. তিনি বর্ণবাদের বিরুদ্ধে অহিংস আন্দোলনের ডাক দিয়েছিলেন।",
      "৪. তিনি ১৯৬৪ সালে শান্তিতে নোবেল পুরস্কার পান।",
      "৫. ১৯৬৮ সালে আততায়ীর গুলিতে তিনি নিহত হন।"
    ]
  },
  {
    "name": "Usain Bolt",
    "banglaName": "উসাইন বোল্ট",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Jamaican",
    "profession": "Sprinter",
    "knownFor": "Fastest Man on Earth",
    "hints": [
      "১. তাঁকে পৃথিবীর সর্বকালের দ্রুততম মানব বলা হয়।",
      "২. ১০০ মিটার এবং ২০০ মিটার দৌড়ে তাঁর বিশ্ব রেকর্ড আজও অক্ষত।",
      "৩. তিনি অলিম্পিকে রেকর্ড ৮টি স্বর্ণপদক জিতেছেন।",
      "৪. তাঁর ডাকনাম 'লাইটনিং বোল্ট' (Lightning Bolt)।",
      "৫. তাঁর হাত দিয়ে করা বিজয়ের ভঙ্গিটি অত্যন্ত জনপ্রিয়।"
    ]
  },
  {
    "name": "Diego Maradona",
    "banglaName": "দিয়েগো ম্যারাডোনা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Argentine",
    "profession": "Footballer",
    "knownFor": "1986 World Cup, Hand of God",
    "hints": [
      "১. ফুটবল ইতিহাসের এক জাদুকরী ও বিতর্কিত খেলোয়াড় তিনি।",
      "২. ১৯৮৬ সালে তাঁর একার নৈপুণ্যে আর্জেন্টিনা বিশ্বকাপ জিতেছিল।",
      "৩. ইংল্যান্ডের বিরুদ্ধে তাঁর গোলটি 'হ্যান্ড অব গড' নামে পরিচিত।",
      "৪. তাঁর ড্রিবলিং এবং ফুটবল শৈলী মানুষকে মন্ত্রমুগ্ধ করে রাখত।",
      "৫. নাপোলি ক্লাবের ইতিহাসে তিনি একজন দেবতার মতো পূজিত হন।"
    ]
  },
  {
    "name": "JK Rowling",
    "banglaName": "জে কে রাউলিং",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "British",
    "profession": "Author",
    "knownFor": "Harry Potter series",
    "hints": [
      "১. তিনি বিশ্বখ্যাত কিশোর কল্পকাহিনী 'Harry Potter' এর লেখিকা।",
      "২. হ্যারি পটারের বইগুলো বিশ্বের সবচেয়ে বেশি বিক্রিত বইয়ের তালিকায় আছে।",
      "৩. তিনি শূন্য থেকে শুরু করে বিশ্বের অন্যতম ধনী লেখিকা হয়েছেন।",
      "৪. হ্যারি পটারের কাহিনীগুলো নিয়ে সফল চলচ্চিত্র সিরিজ তৈরি হয়েছে।",
      "৫. তিনি রবার্ট গ্যালব্রেথ ছদ্মনামেও অপরাধমূলক উপন্যাস লেখেন।"
    ]
  },
  {
    "name": "Pope Francis",
    "banglaName": "পোপ ফ্রান্সিস",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Argentine",
    "profession": "Pope",
    "knownFor": "Head of Catholic Church",
    "hints": [
      "১. তিনি বর্তমান বিশ্বের ক্যাথলিক খ্রিস্টানদের প্রধান ধর্মগুরু।",
      "২. তিনি প্রথম লাতিন আমেরিকান এবং জেসুইট পোপ।",
      "৩. তিনি তাঁর অতি সাধারণ জীবনযাপন এবং উদার মানসিকতার জন্য জনপ্রিয়।",
      "৪. তিনি জলবায়ু পরিবর্তন এবং গরিবদের অধিকার নিয়ে উচ্চকণ্ঠ।",
      "৫. তিনি ভ্যাটিকান সিটির রাষ্ট্রপ্রধান।"
    ]
  },
  {
    "name": "Oprah Winfrey",
    "banglaName": "ওপরা উইনফ্রে",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Talk Show Host / Media Mogul",
    "knownFor": "The Oprah Winfrey Show",
    "hints": [
      "১. তিনি আমেরিকার মিডিয়া জগতের এক অত্যন্ত প্রভাবশালী নারী।",
      "২. তাঁর 'দি ওপরা উইনফ্রে শো' সর্বকালের সবচেয়ে জনপ্রিয় টক শো।",
      "৩. তিনি একাধারে অভিনেত্রী, প্রযোজক এবং বড় মাপের দানবীর।",
      "৪. তিনি প্রথম আফ্রিকান-আমেরিকান নারী মাল্টি-বিলিয়নেয়ার।",
      "৫. মানুষের জীবনের গল্প তুলে ধরার এক অনন্য ক্ষমতা তাঁর আছে।"
    ]
  },
  {
    "name": "Socrates",
    "banglaName": "সক্রেটিস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Philosopher",
    "knownFor": "Socratic Method",
    "hints": [
      "১. তিনি প্রাচীন গ্রিসের একজন মহান দার্শনিক।",
      "২. তিনি পশ্চিমা দর্শনের ভিত্তি স্থাপন করেছিলেন।",
      "৩. তিনি কোনো বই লিখে যাননি, তাঁর ছাত্র প্লেটোর মাধ্যমে আমরা তাঁর কথা জানি।",
      "৪. তাঁকে হেমলক বিষ খাইয়ে মৃত্যুদণ্ড দেওয়া হয়েছিল।",
      "৫. 'নিজেকে জানো' (Know Thyself) ছিল তাঁর মূল শিক্ষা।"
    ]
  },
  {
    "name": "Karl Marx",
    "banglaName": "কার্ল মার্কস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "German",
    "profession": "Philosopher / Economist",
    "knownFor": "Marxism, Das Kapital",
    "hints": [
      "১. তিনি সমাজতন্ত্র এবং সাম্যবাদের অন্যতম প্রধান তাত্ত্বিক।",
      "২. তাঁর বিখ্যাত বইয়ের নাম 'দাস ক্যাপিটাল' (Das Kapital)।",
      "৩. তিনি মনে করতেন ইতিহাসের মূল চালিকাশক্তি হলো শ্রেণিসংগ্রাম।",
      "৪. 'দুনিয়ার মজদুর এক হও'—এটি তাঁর কালজয়ী স্লোগান।",
      "৫. তাঁর দর্শন বিশ্ব রাজনীতিতে এক বিশাল পরিবর্তন এনেছিল।"
    ]
  },
  {
    "name": "Sigmund Freud",
    "banglaName": "সিগমুন্ড ফ্রয়েড",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Austrian",
    "profession": "Neurologist / Psychoanalyst",
    "knownFor": "Psychoanalysis",
    "hints": [
      "১. তাঁকে মনোবিজ্ঞানের ইতিহাসের সবচেয়ে প্রভাবশালী ব্যক্তি মনে করা হয়।",
      "২. তিনি 'মনোবিশ্লেষণ' (Psychoanalysis) নামক চিকিৎসা পদ্ধতির উদ্ভাবক।",
      "৩. অবচেতন মন এবং স্বপ্ন নিয়ে তাঁর গবেষণা বিশ্ববিখ্যাত।",
      "৪. ইড, ইগো এবং সুপারইগো—এই তিনটি ধারণা তিনি দিয়েছিলেন।",
      "৫. মানুষের আচরণের গভীরে লুকিয়ে থাকা কারণগুলো তিনি ব্যাখ্যা করার চেষ্টা করেন।"
    ]
  },
  {
    "name": "Nikola Tesla",
    "banglaName": "নিকোলা টেসলা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Serbian / American",
    "profession": "Inventor / Physicist",
    "knownFor": "Alternating Current (AC)",
    "hints": [
      "১. তিনি বিদ্যুৎ ব্যবস্থার আধুনিকায়নের অন্যতম কারিগর।",
      "২. অল্টারনেটিং কারেন্ট (AC) বা বিকল্প বিদ্যুৎ ব্যবস্থা তাঁরই অবদান।",
      "৩. তিনি রেডিও এবং ওয়্যারলেস যোগাযোগের প্রাথমিক উদ্ভাবকদের একজন।",
      "৪. টেসলা কয়েল তাঁর একটি বিখ্যাত উদ্ভাবন।",
      "৫. তাঁকে একজন রহস্যময় এবং স্বপ্নদ্রষ্টা বিজ্ঞানী বলা হয়।"
    ]
  },
  {
    "name": "Vincent van Gogh",
    "banglaName": "ভিনসেন্ট ভ্যান গগ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Dutch",
    "profession": "Painter",
    "knownFor": "The Starry Night, Sunflowers",
    "hints": [
      "১. তিনি উত্তর-ইম্প্রেশনিস্ট যুগের একজন বিশ্ববিখ্যাত চিত্রশিল্পী।",
      "২. তাঁর আঁকা 'দ্য স্টারি নাইট' (The Starry Night) অন্যতম জনপ্রিয় ছবি।",
      "৩. জীবদ্দশায় তিনি খুব একটা খ্যাতি পাননি, কিন্তু মৃত্যুর পর কিংবদন্তী হন।",
      "৪. তিনি মানসিকভাবে অসুস্থ ছিলেন এবং একবার নিজের কান কেটে ফেলেছিলেন।",
      "৫. তাঁর ছবির উজ্জ্বল রঙ এবং বিশেষ স্ট্রোক চিত্রকলার জগতে এক নতুন ধারা সৃষ্টি করেছিল।"
    ]
  },
  {
    "name": "Pablo Picasso",
    "banglaName": "পাবলো পিকাসো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Spanish",
    "profession": "Painter / Sculptor",
    "knownFor": "Cubism, Guernica",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর চিত্রকলার সবচেয়ে প্রভাবশালী শিল্পী।",
      "২. তিনি 'কিউবিজম' (Cubism) বা ঘনকবাদ চিত্রশৈলীর প্রবর্তক।",
      "৩. তাঁর আঁকা 'গুয়ের্নিকা' (Guernica) একটি বিখ্যাত যুদ্ধবিরোধী চিত্রকর্ম।",
      "৪. তিনি সারাজীবনে হাজার হাজার চিত্রকর্ম এবং ভাস্কর্য তৈরি করেছেন।",
      "৫. আধুনিক চিত্রকলার গতিপথ তিনি বদলে দিয়েছিলেন।"
    ]
  },
  {
    "name": "Frida Kahlo",
    "banglaName": "ফ্রিদা কাহলো",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Mexican",
    "profession": "Painter",
    "knownFor": "Self-portraits",
    "hints": [
      "১. তিনি মেক্সিকোর একজন বিশ্ববিখ্যাত নারী চিত্রশিল্পী।",
      "২. তিনি মূলত তাঁর নিজের প্রতিকৃতি (Self-portrait) আঁকার জন্য বিখ্যাত।",
      "৩. একটি ভয়াবহ দুর্ঘটনায় আহত হওয়ার পর তিনি বিছানায় শুয়ে আঁকা শুরু করেন।",
      "৪. তাঁর ছবিতে মেক্সিকান সংস্কৃতি এবং নারীর যন্ত্রণার বহিঃপ্রকাশ ঘটে।",
      "৫. তাঁর জোড়া ভ্রু এবং সাহসী জীবনযাপন আজও মানুষকে অনুপ্রাণিত করে।"
    ]
  },
  {
    "name": "Alexander the Great",
    "banglaName": "আলেকজান্ডার দ্য গ্রেট",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Macedonian",
    "profession": "King / Conqueror",
    "knownFor": "Largest Empire in Antiquity",
    "hints": [
      "১. তিনি প্রাচীন বিশ্বের অন্যতম শ্রেষ্ঠ সামরিক নেতা এবং সম্রাট।",
      "২. মাত্র ৩০ বছর বয়সেই তিনি এক বিশাল সাম্রাজ্য গড়ে তুলেছিলেন।",
      "৩. তিনি গ্রিস থেকে ভারত পর্যন্ত ভূখণ্ড জয় করতে চেয়েছিলেন।",
      "৪. তিনি কোনো যুদ্ধেই পরাজিত হননি বলে প্রচলিত আছে।",
      "৫. তাঁর শিক্ষক ছিলেন বিখ্যাত দার্শনিক অ্যারিস্টটল।"
    ]
  },
  {
    "name": "Julius Caesar",
    "banglaName": "জুলিয়াস সিজার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Roman",
    "profession": "General / Statesman",
    "knownFor": "Rise of the Roman Empire",
    "hints": [
      "১. তিনি রোমান সাম্রাজ্যের উত্থানের অন্যতম প্রধান নায়ক।",
      "২. তাঁর বিখ্যাত উক্তি ছিল 'ভেনি, ভিডি, ভিসি' (এলাম, দেখলাম, জয় করলাম)।",
      "৩. তিনি রোমান প্রজাতন্ত্রকে একটি শক্তিশালী সাম্রাজ্যে পরিণত করেছিলেন।",
      "৪. তাঁর বন্ধু ব্রুটাস এবং অন্যদের ষড়যন্ত্রে তিনি নিহত হন।",
      "৫. বছরের সপ্তম মাস 'জুলাই' তাঁর নামেই নামকরণ করা হয়েছে।"
    ]
  },
  {
    "name": "Napoleon Bonaparte",
    "banglaName": "নেপোলিয়ন বোনাপার্ট",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Military Leader / Emperor",
    "knownFor": "Napoleonic Wars",
    "hints": [
      "১. তিনি ফরাসি বিপ্লবের পর ফ্রান্সের সম্রাট হয়েছিলেন।",
      "২. তাঁকে আধুনিক ইউরোপের অন্যতম প্রধান রূপকার মনে করা হয়।",
      "৩. তাঁর নেতৃত্বে ফরাসি বাহিনী ইউরোপের বড় অংশ জয় করেছিল।",
      "৪. ওয়াটারলুর যুদ্ধে চূড়ান্ত পরাজয়ের পর তাঁকে নির্বাসিত করা হয়।",
      "৫. তাঁর তৈরি 'নেপোলিওনিক কোড' আজও অনেক দেশের আইনের ভিত্তি।"
    ]
  },
  {
    "name": "Confucius",
    "banglaName": "কনফুসিয়াস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Chinese",
    "profession": "Philosopher",
    "knownFor": "Confucianism",
    "hints": [
      "১. তিনি প্রাচীন চীনের একজন মহান দার্শনিক এবং শিক্ষক।",
      "২. তাঁর দর্শন চীনের সমাজ এবং সংস্কৃতির মূলে রয়েছে।",
      "৩. তিনি নৈতিকতা, ন্যায়বিচার এবং পারিবারিক শৃঙ্খলার ওপর জোর দিতেন।",
      "৪. তাঁর উক্তিগুলো 'অ্যানালেক্টস' নামক গ্রন্থে সংকলিত হয়েছে।",
      "৫. তিনি মনে করতেন একজন শাসকের উচিত প্রজাদের প্রতি দয়ালু হওয়া।"
    ]
  },
  {
    "name": "Anne Frank",
    "banglaName": "আনা ফ্রাঙ্ক",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "German / Jewish",
    "profession": "Diarist",
    "knownFor": "The Diary of a Young Girl",
    "hints": [
      "১. দ্বিতীয় বিশ্বযুদ্ধের সময় নাৎসিদের হাত থেকে বাঁচতে তিনি লুকিয়ে ছিলেন।",
      "২. তাঁর লেখা ডায়েরিটি বিশ্বজুড়ে যুদ্ধ এবং মানবতার এক অনন্য দলিল।",
      "৩. লুকিয়ে থাকাকালীন একটি গোপন কামরায় (Secret Annex) বসে তিনি ডায়েরি লিখেছিলেন।",
      "৪. মাত্র ১৫ বছর বয়সে কনসেন্ট্রেশন ক্যাম্পে তাঁর মৃত্যু হয়।",
      "৫. তাঁর ডায়েরিটি 'দ্য ডায়েরি অব আ ইয়াং গার্ল' নামে প্রকাশিত।"
    ]
  },
  {
    "name": "Angelina Jolie",
    "banglaName": "অ্যাঞ্জেলিনা জোলি",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Actress / Filmmaker",
    "knownFor": "Lara Croft, Maleficent",
    "hints": [
      "১. তিনি হলিউডের অন্যতম জনপ্রিয় এবং প্রভাবশালী অভিনেত্রী।",
      "২. তিনি দুইবার অস্কার পুরস্কার জিতেছেন।",
      "৩. অভিনয়ের পাশাপাশি তিনি একজন বড় মাপের মানবতাবাদী কর্মী।",
      "৪. তিনি জাতিসংঘের শরণার্থী সংস্থার (UNHCR) বিশেষ দূত হিসেবে কাজ করেছেন।",
      "৫. তাঁর সাহসিকতা এবং দাতব্য কাজের জন্য তিনি বিশ্বজুড়ে সমাদৃত।"
    ]
  },
  {
    "name": "Tom Cruise",
    "banglaName": "টম ক্রুজ",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Actor / Producer",
    "knownFor": "Mission: Impossible, Top Gun",
    "hints": [
      "১. তিনি হলিউডের অন্যতম বড় অ্যাকশন সুপারস্টার।",
      "২. 'মিশন ইম্পসিবল' (Mission: Impossible) সিরিজটি তাঁর সবচেয়ে বড় পরিচয়।",
      "৩. তিনি নিজের মুভির বিপজ্জনক স্টান্ট নিজেই করতে ভালোবাসেন।",
      "৪. তাঁর 'টপ গান' (Top Gun) মুভিটি বিশ্বজুড়ে ব্লকবাস্টার হয়েছিল।",
      "৫. কয়েক দশক ধরে তিনি বিশ্ব চলচ্চিত্র জগতের শীর্ষস্থানে আছেন।"
    ]
  },
  {
    "name": "Jackie Chan",
    "banglaName": "জ্যাকি চ্যান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Hong Kong / Chinese",
    "profession": "Martial Artist / Actor",
    "knownFor": "Acrobatic Fighting Style",
    "hints": [
      "১. তিনি মার্শাল আর্ট এবং কমেডি মুভির এক অনন্য জাদুকর।",
      "২. তিনি তাঁর মুভির সব স্টান্ট নিজেই করেন এবং অনেকবার আহত হয়েছেন।",
      "৩. তাঁর লড়াই করার ভঙ্গিমা অত্যন্ত সৃজনশীল এবং মজার।",
      "৪. 'রাশ আওয়ার' (Rush Hour) সিরিজের মাধ্যমে তিনি হলিউডেও জনপ্রিয়তা পান।",
      "৫. ২০১৬ সালে তিনি সম্মানসূচক অস্কার পুরস্কার লাভ করেন।"
    ]
  },
  {
    "name": "Lady Gaga",
    "banglaName": "লেডি গাগা",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Singer / Songwriter / Actress",
    "knownFor": "Poker Face, A Star Is Born",
    "hints": [
      "১. তিনি তাঁর বৈচিত্র্যময় গান এবং অদ্ভুত সব পোশাকের জন্য পরিচিত।",
      "২. তাঁর 'পোকার ফেস' এবং 'ব্যাড রোমান্স' গানগুলো বিশ্বজুড়ে হিট।",
      "৩. তিনি একাধারে পপ গায়িকা এবং সফল অভিনেত্রী।",
      "৪. তিনি 'অ্যা স্টার ইজ বর্ন' মুভির জন্য অস্কার পুরস্কার জিতেছেন।",
      "৫. তাঁর ফ্যানদের তিনি 'লিটল মনস্টারস' বলে ডাকেন।"
    ]
  },
  {
    "name": "Mikhail Gorbachev",
    "banglaName": "মিখাইল গর্বাচেভ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Russian",
    "profession": "Leader of Soviet Union",
    "knownFor": "Glasnost, Perestroika",
    "hints": [
      "১. তিনি সোভিয়েত ইউনিয়নের শেষ নেতা ছিলেন।",
      "২. তাঁর সংস্কারমূলক নীতি 'গ্লাসনস্ত' এবং 'পেরেস্ত্রোইকা' ইতিহাসের গতি বদলে দিয়েছিল।",
      "৩. তাঁর সময়েই শীতল যুদ্ধের (Cold War) অবসান ঘটে।",
      "৪. তিনি ১৯৯০ সালে শান্তিতে নোবেল পুরস্কার পান।",
      "৫. সোভিয়েত ইউনিয়ন ভেঙে যাওয়ার পেছনে তাঁর ভূমিকা ছিল প্রধান।"
    ]
  },
  {
    "name": "Ayrton Senna",
    "banglaName": "আয়ারটন সেন্না",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Brazilian",
    "profession": "Formula One Driver",
    "knownFor": "Three F1 Championships",
    "hints": [
      "১. তাঁকে সর্বকালের অন্যতম শ্রেষ্ঠ ফর্মুলা ওয়ান রেসিং ড্রাইভার মনে করা হয়।",
      "২. তিনি তিনবার এফ-ওয়ান বিশ্ব চ্যাম্পিয়ন হয়েছিলেন।",
      "৩. বৃষ্টির মধ্যে গাড়ি চালানোর অবিশ্বাস্য ক্ষমতার জন্য তিনি পরিচিত ছিলেন।",
      "৪. ১৯৯৪ সালে রেসিং চলাকালে এক মর্মান্তিক দুর্ঘটনায় তাঁর মৃত্যু হয়।",
      "৫. ব্রাজিলে তিনি একজন জাতীয় বীর হিসেবে সমাদৃত।"
    ]
  },
  {
    "name": "Roger Federer",
    "banglaName": "রজার ফেদেরার",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Swiss",
    "profession": "Tennis Player",
    "knownFor": "20 Grand Slam titles",
    "hints": [
      "১. টেনিস ইতিহাসের অন্যতম মার্জিত এবং সফল খেলোয়াড় তিনি।",
      "২. তিনি রেকর্ড ২০টি গ্র্যান্ড স্ল্যাম খেতাব জিতেছেন।",
      "৩. তাঁর খেলোয়ারি সুলভ আচরণ এবং শৈল্পিক খেলার ধরন সবাইকে মুগ্ধ করে।",
      "৪. উইম্বলডন টুর্নামেন্টে তিনি আটবার চ্যাম্পিয়ন হওয়ার রেকর্ড গড়েছেন।",
      "৫. ২০২২ সালে তিনি পেশাদার টেনিস থেকে অবসর নেন।"
    ]
  },
  {
    "name": "Serena Williams",
    "banglaName": "সেরেনা উইলিয়ামস",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Tennis Player",
    "knownFor": "23 Grand Slam titles",
    "hints": [
      "১. নারী টেনিস ইতিহাসের সবচেয়ে শক্তিশালী এবং সফল খেলোয়াড় তিনি।",
      "২. তিনি রেকর্ড ২৩টি গ্র্যান্ড স্ল্যাম (ওপেন এরা) খেতাব জিতেছেন।",
      "৩. তাঁর সার্ভিস এবং আগ্রাসী খেলার ধরন তাঁকে অন্য উচ্চতায় নিয়ে গেছে।",
      "৪. তিনি এবং তাঁর বোন ভেনাস উইলিয়ামস টেনিস বিশ্বে রাজত্ব করেছেন।",
      "৫. তিনি দীর্ঘ সময় ধরে বিশ্ব র‍্যাঙ্কিংয়ে ১ নম্বরে ছিলেন।"
    ]
  },
  {
    "name": "Warren Buffett",
    "banglaName": "ওয়ারেন বাফেট",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Investor",
    "knownFor": "Oracle of Omaha",
    "hints": [
      "১. তাঁকে বিশ্বের সর্বকালের সফলতম বিনিয়োগকারী মনে করা হয়।",
      "২. তাঁকে 'ওমাহা'র জাদুকর (Oracle of Omaha) বলা হয়।",
      "৩. তিনি বার্কশায়ার হ্যাথাওয়ে কোম্পানির চেয়ারম্যান এবং সিইও।",
      "৪. অঢেল সম্পদের মালিক হওয়া সত্ত্বেও তিনি অত্যন্ত সাদামাটা জীবনযাপন করেন।",
      "৫. তিনি তাঁর সম্পদের সিংহভাগ দান করার ঘোষণা দিয়েছেন।"
    ]
  },
  {
    "name": "Che Guevara",
    "banglaName": "চে গুয়েভারা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Argentine",
    "profession": "Revolutionary",
    "knownFor": "Cuban Revolution",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর অন্যতম প্রধান বিপ্লবী এবং গেরিলা নেতা।",
      "২. কিউবার বিপ্লবে ফিদেল কাস্ত্রোর সাথে তাঁর ভূমিকা ছিল অনন্য।",
      "৩. তাঁর পেশা ছিল চিকিৎসা বিজ্ঞান, কিন্তু তিনি শোষিতের অধিকার আদায়ে অস্ত্র ধরেন।",
      "৪. তাঁর বোঁটকা টুপি পরা ছবি সারা বিশ্বে বিপ্লবের প্রতীক হয়ে উঠেছে।",
      "৫. ১৯৬৭ সালে বলিভিয়ায় যুদ্ধের সময় তিনি ধরা পড়েন এবং তাঁকে হত্যা করা হয়।"
    ]
  },
  {
    "name": "Fidel Castro",
    "banglaName": "ফিদেল কাস্ত্রো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Cuban",
    "profession": "Revolutionary / Politician",
    "knownFor": "Cuban Revolution, Cold War",
    "hints": [
      "১. তিনি কিউবার কমিউনিস্ট বিপ্লবের প্রধান নেতা এবং দীর্ঘ সময়ের রাষ্ট্রপ্রধান।",
      "২. তিনি আমেরিকার নাকের ডগায় বসে সমাজতান্ত্রিক রাষ্ট্র পরিচালনা করেছিলেন।",
      "৩. তাঁর দীর্ঘ বক্তৃতা এবং সবুজ সামরিক পোশাক তাঁর পরিচায়ক ছিল।",
      "৪. তাঁকে হত্যার জন্য আমেরিকা কয়েকশ বার চেষ্টা করেও সফল হয়নি।",
      "৫. ২০১৬ সালে তাঁর মৃত্যু একটি যুগের অবসান ঘটায়।"
    ]
  },
  {
    "name": "Indira Gandhi",
    "banglaName": "ইন্দিরা গান্ধী",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Indian",
    "profession": "Prime Minister",
    "knownFor": "Iron Lady of India",
    "hints": [
      "১. তিনি ভারতের প্রথম এবং একমাত্র নারী প্রধানমন্ত্রী।",
      "২. তাঁকে ভারতের 'লৌহমানবী' (Iron Lady) বলা হয়।",
      "৩. ১৯৭১ সালের বাংলাদেশের স্বাধীনতা যুদ্ধে তাঁর ভূমিকা অনস্বীকার্য।",
      "৪. তিনি জহরলাল নেহরুর মেয়ে ছিলেন।",
      "৫. ১৯৮৪ সালে তাঁর নিজ দেহরক্ষীদের গুলিতে তিনি নিহত হন।"
    ]
  },
  {
    "name": "Benazir Bhutto",
    "banglaName": "বেনজির ভুট্টো",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Pakistani",
    "profession": "Prime Minister",
    "knownFor": "First woman leader of a Muslim nation",
    "hints": [
      "১. তিনি কোনো মুসলিম দেশের প্রথম নির্বাচিত নারী প্রধানমন্ত্রী ছিলেন।",
      "২. তিনি দুইবার পাকিস্তানের প্রধানমন্ত্রী হিসেবে দায়িত্ব পালন করেন।",
      "৩. তাঁর বাবা জুলফিকার আলী ভুট্টোও পাকিস্তানের গুরুত্বপূর্ণ নেতা ছিলেন।",
      "৪. অক্সফোর্ড এবং হার্ভার্ডে পড়া এই নেত্রী অত্যন্ত মেধাবী ছিলেন।",
      "৫. ২০০৭ সালে একটি আত্মঘাতী হামলায় তিনি শাহাদাত বরণ করেন।"
    ]
  },
  {
    "name": "Sundar Pichai",
    "banglaName": "সুন্দর পিচাই",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian / American",
    "profession": "CEO of Google / Alphabet",
    "knownFor": "Google Chrome, Android",
    "hints": [
      "১. তিনি বর্তমান বিশ্বের সবচেয়ে প্রভাবশালী প্রযুক্তি প্রতিষ্ঠান 'Google' এর প্রধান।",
      "২. তিনি গুগল এবং এর মূল প্রতিষ্ঠান অ্যালফাবেট (Alphabet) এর সিইও।",
      "৩. গুগলের 'ক্রোম' (Chrome) ব্রাউজার তৈরির পেছনে তাঁর প্রধান ভূমিকা ছিল।",
      "৪. তিনি ভারতের তামিলনাড়ুতে জন্মগ্রহণ করেছেন এবং আইআইটি-তে পড়াশোনা করেছেন।",
      "৫. তাঁর শান্ত স্বভাব এবং অসাধারণ নেতৃত্বগুণ প্রযুক্তি বিশ্বে সমাদৃত।"
    ]
  },
  {
    "name": "Satya Nadella",
    "banglaName": "সত্য নাদেলা",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian / American",
    "profession": "CEO of Microsoft",
    "knownFor": "Cloud Computing, AI",
    "hints": [
      "১. তিনি প্রযুক্তি জায়ান্ট 'Microsoft' এর বর্তমান সিইও।",
      "২. তাঁর নেতৃত্বে মাইক্রোসফট ক্লাউড কম্পিউটিং এবং এআই খাতে এক বিশাল উচ্চতায় পৌঁছেছে।",
      "৩. তিনি বিল গেটস এবং স্টিভ বালমারের পর এই কোম্পানির হাল ধরেন।",
      "৪. তিনি ভারতের হায়দ্রাবাদে জন্মগ্রহণ করেছেন।",
      "৫. তাঁর লেখা বই 'হিট রিফ্রেশ' (Hit Refresh) একটি জনপ্রিয় জীবনমুখী বই।"
    ]
  },
  {
    "name": "Shakira",
    "banglaName": "শাকিরা",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "Colombian",
    "profession": "Singer / Dancer",
    "knownFor": "Waka Waka, Hips Don't Lie",
    "hints": [
      "১. তিনি লাতিন আমেরিকার অন্যতম জনপ্রিয় গায়িকা এবং ড্যান্সার।",
      "২. তাঁর ২০১০ সালের ফুটবল বিশ্বকাপের থিম সং 'ওয়াকা ওয়াকা' বিশ্বজুড়ে হিট।",
      "৩. তাঁকে 'লাতিন সংগীতের রানী' বলা হয়।",
      "৪. তাঁর নাচ এবং গানের অদ্ভুত গায়কী সবার থেকে আলাদা।",
      "৫. তাঁর আইকিউ (IQ) ১৪০ যা সাধারণের চেয়ে অনেক বেশি।"
    ]
  },
  {
    "name": "Beyoncé",
    "banglaName": "বিয়ন্সে",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Singer / Performer",
    "knownFor": "Queen Bey, Single Ladies",
    "hints": [
      "১. তিনি বর্তমান বিশ্বের অন্যতম প্রভাবশালী পপ এবং আরএন্ডবি গায়িকা।",
      "২. তাঁকে তাঁর ভক্তরা ভালোবেসে 'কুইন বে' (Queen Bey) বলে ডাকেন।",
      "৩. তিনি ইতিহাসে সবচেয়ে বেশি গ্র্যামি পুরস্কারজয়ী শিল্পী।",
      "৪. তাঁর পারফরম্যান্স এবং কণ্ঠস্বর অত্যন্ত শক্তিশালী।",
      "৫. তিনি নারী অধিকার এবং কৃষ্ণাঙ্গ সংস্কৃতির প্রসারে কাজ করেন।"
    ]
  },
  {
    "name": "Rowan Atkinson",
    "banglaName": "রোয়ান অ্যাটকিনসন",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "British",
    "profession": "Actor / Comedian",
    "knownFor": "Mr. Bean",
    "hints": [
      "১. তিনি সারা বিশ্বে 'মিস্টার বিন' (Mr. Bean) চরিত্রটির জন্য পরিচিত।",
      "২. খুব বেশি কথা না বলে কেবল অঙ্গভঙ্গির মাধ্যমে হাসানোর ক্ষমতা তাঁর অতুলনীয়।",
      "৩. তিনি একজন অত্যন্ত মেধাবী অভিনেতা এবং ইলেকট্রিক্যাল ইঞ্জিনিয়ার।",
      "৪. তাঁর 'জনি ইংলিশ' মুভি সিরিজটিও বেশ জনপ্রিয়।",
      "৫. তাঁর অভিব্যক্তি এবং কমেডি স্টাইল কয়েক প্রজন্ম ধরে মানুষকে হাসাচ্ছে।"
    ]
  },
  {
    "name": "Will Smith",
    "banglaName": "উইল স্মিথ",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Actor / Rapper",
    "knownFor": "Men in Black, King Richard",
    "hints": [
      "১. তিনি হলিউডের অন্যতম জনপ্রিয় এবং বহুমুখী প্রতিভার অভিনেতা।",
      "২. 'মেন ইন ব্ল্যাক' এবং 'পারসুইট অব হ্যাপিনেস' তাঁর উল্লেখযোগ্য মুভি।",
      "৩. তিনি একজন সফল র‍্যাপার হিসেবেও তাঁর ক্যারিয়ার শুরু করেছিলেন।",
      "৪. ২০২২ সালে তিনি 'কিং রিচার্ড' মুভির জন্য সেরা অভিনেতার অস্কার পান।",
      "৫. তাঁর প্রাণবন্ত অভিনয় এবং ব্যক্তিত্ব দর্শকপ্রিয়।"
    ]
  },
  {
    "name": "Taylor Swift",
    "banglaName": "টেইলর সুইফট",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Singer / Songwriter",
    "knownFor": "Eras Tour, Shake It Off",
    "hints": [
      "১. তিনি বর্তমান সময়ের সবচেয়ে সফল এবং জনপ্রিয় সংগীতশিল্পী।",
      "২. তাঁর 'ইরাস ট্যুর' (Eras Tour) ইতিহাসের সবচেয়ে লাভজনক কনসার্ট ট্যুর।",
      "৩. তিনি তাঁর গানের কথা নিজেই লেখেন এবং তাতে ব্যক্তিগত জীবনের ছাপ থাকে।",
      "৪. তিনি রেকর্ড চারবার গ্র্যামি অ্যাওয়ার্ডে 'অ্যালবাম অব দ্য ইয়ার' জিতেছেন।",
      "৫. টাইম ম্যাগাজিন তাঁকে 'পারসন অব দ্য ইয়ার' (২০২৩) হিসেবে ঘোষণা করেছিল।"
    ]
  },
  {
    "name": "Shah Rukh Khan",
    "banglaName": "শাহরুখ খান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Actor",
    "knownFor": "King of Bollywood, DDLJ",
    "hints": [
      "১. তাঁকে ভারতীয় চলচ্চিত্রের 'কিং খান' বা 'বাদশাহ' বলা হয়।",
      "২. তিনি বিশ্বের অন্যতম জনপ্রিয় এবং প্রভাবশালী অভিনেতা।",
      "৩. তাঁর হাত প্রসারিত করার সিগনেচার ভঙ্গিটি বিশ্ববিখ্যাত।",
      "৪. তিনি ৮০টিরও বেশি বলিউডের মুভিতে অভিনয় করেছেন।",
      "৫. তাঁর অঢেল সম্পদ এবং অগণিত ভক্ত তাঁকে এক অনন্য উচ্চতায় নিয়ে গেছে।"
    ]
  },
  {
    "name": "Amitabh Bachchan",
    "banglaName": "অমিতাভ বচ্চন",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Actor",
    "knownFor": "Angry Young Man, Sholay",
    "hints": [
      "১. ভারতীয় চলচ্চিত্রের ইতিহাসে তাঁকে 'বিগ বি' বা 'শাহেনশাহ' বলা হয়।",
      "২. তিনি তাঁর গম্ভীর কণ্ঠস্বর এবং অসাধারণ অভিনয়ের জন্য কিংবদন্তী।",
      "৩. ১৯৭০-এর দশকে তিনি 'অ্যাংরি ইয়াং ম্যান' হিসেবে খ্যাতি পান।",
      "৪. তিনি 'কৌন বনেগা ক্রোড়পতি' (KBC) কুইজ শো এর মাধ্যমে টেলিভিশনেও জনপ্রিয়।",
      "৫. ৮০ বছর পেরিয়েও তিনি সমান তালে মুভিতে কাজ করে যাচ্ছেন।"
    ]
  },
  {
    "name": "Pele",
    "banglaName": "পেলে",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Brazilian",
    "profession": "Footballer",
    "knownFor": "3-time World Cup Winner",
    "hints": [
      "১. তাঁকে ফুটবল বিশ্বের 'কালো মানিক' বা 'কিং অফ ফুটবল' বলা হয়।",
      "২. তিনি একমাত্র খেলোয়াড় যিনি তিনটি বিশ্বকাপ (১৯৫৮, ১৯৬২, ১৯৭০) জিতেছেন।",
      "৩. ফুটবল ক্যারিয়ারে তিনি এক হাজারের বেশি গোল করার মাইলফলক স্পর্শ করেন।",
      "৪. তিনি ব্রাজিলিয়ান ফুটবলের সোনালী যুগের প্রধান কারিগর ছিলেন।",
      "৫. ২০২২ সালে তাঁর মৃত্যুতে পুরো বিশ্ব ফুটবল জগত শোকাতুর হয়েছিল।"
    ]
  },
  {
    "name": "Kobe Bryant",
    "banglaName": "কোবি ব্রায়ান্ট",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Basketball Player",
    "knownFor": "Mamba Mentality, 5-time NBA Champion",
    "hints": [
      "১. বাস্কেটবল ইতিহাসের অন্যতম সেরা খেলোয়াড় তিনি।",
      "২. তিনি তাঁর পুরো ২০ বছরের ক্যারিয়ারে 'লস অ্যাঞ্জেলেস লেকার্স' দলের হয়ে খেলেছেন।",
      "৩. তাঁর জেদ এবং পরিশ্রমের দর্শন 'মাম্বা মেন্টালিটি' নামে পরিচিত।",
      "৪. তিনি ৫ বার এনবিএ (NBA) চ্যাম্পিয়নশিপ জিতেছিলেন।",
      "৫. ২০২০ সালে এক হেলিকপ্টার দুর্ঘটনায় তাঁর অকাল মৃত্যু বিশ্বকে স্তব্ধ করে দিয়েছিল।"
    ]
  },
  {
    "name": "Tiger Woods",
    "banglaName": "টাইগার উডস",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Golfer",
    "knownFor": "One of the greatest golfers ever",
    "hints": [
      "১. গলফ খেলার ইতিহাসে তাঁকে সর্বকালের অন্যতম শ্রেষ্ঠ খেলোয়াড় মনে করা হয়।",
      "২. তিনি ১৫টি মেজর গলফ চ্যাম্পিয়নশিপ জিতেছেন।",
      "৩. তিনি দীর্ঘদিন ধরে বিশ্বের ১ নম্বর গলফার ছিলেন।",
      "৪. তাঁর কারণে গলফ খেলা বিশ্বজুড়ে নতুনভাবে জনপ্রিয় হয়েছিল।",
      "৫. অনেক ব্যক্তিগত চড়াই-উতরাই পেরিয়েও তিনি মাঠে লড়াই চালিয়ে গেছেন।"
    ]
  },
  {
    "name": "Rafa Nadal",
    "banglaName": "রাফায়েল নাদাল",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Spanish",
    "profession": "Tennis Player",
    "knownFor": "King of Clay, 22 Grand Slams",
    "hints": [
      "১. টেনিস বিশ্বে তাঁকে 'ক্লে কোর্টের রাজা' (King of Clay) বলা হয়।",
      "২. তিনি রেকর্ড ১৪ বার ফ্রেঞ্চ ওপেন খেতাব জিতেছেন।",
      "৩. তিনি মোট ২২টি গ্র্যান্ড স্ল্যাম খেতাব জয়ের অধিকারী।",
      "৪. তাঁর লড়াকু মানসিকতা এবং অবিশ্বাস্য শারীরিক শক্তি সবার পরিচিত।",
      "৫. ইনজুরি বা আঘাতের সাথে লড়াই করেও তিনি বারবার চ্যাম্পিয়ন হয়েছেন।"
    ]
  },
  {
    "name": "Marie Antoinette",
    "banglaName": "মারি অঁতোয়ানেত",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Austrian / French",
    "profession": "Queen",
    "knownFor": "French Revolution",
    "hints": [
      "১. তিনি ফরাসি বিপ্লবের সময় ফ্রান্সের রানী ছিলেন।",
      "২. তাঁর বিলাসিতা এবং রাজকীয় জীবনযাত্রা জনগণের ক্ষোভের কারণ হয়েছিল।",
      "৩. 'রুটি নেই তো কেক খাও'—এই বিতর্কিত উক্তিটি তাঁর নামে প্রচলিত।",
      "৪. বিপ্লবীদের হাতে তাঁর স্বামী রাজা ষোড়শ লুইসহ তাঁরও মৃত্যুদণ্ড হয়।",
      "৫. গিলোটিনের মাধ্যমে তাঁর শিরশ্ছেদ করা হয়েছিল।"
    ]
  },
  {
    "name": "Genghis Khan",
    "banglaName": "চেঙ্গিস খান",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Mongolian",
    "profession": "Emperor / Conqueror",
    "knownFor": "Mongol Empire",
    "hints": [
      "১. তিনি ইতিহাসের বৃহত্তম অবিচ্ছিন্ন সাম্রাজ্য মঙ্গোল সাম্রাজ্যের প্রতিষ্ঠাতা।",
      "২. তিনি বিশ্বের একজন দুর্ধর্ষ যোদ্ধা এবং দূরদর্শী শাসক ছিলেন।",
      "৩. তিনি বিচ্ছিন্ন মঙ্গোল উপজাতিগুলোকে একত্রিত করে এক শক্তিশালী বাহিনী গড়ে তোলেন।",
      "৪. তাঁর নেতৃত্বে মঙ্গোলরা এশিয়া এবং ইউরোপের বিশাল অংশ জয় করেছিল।",
      "৫. তাঁর আসল নাম ছিল তেমুজিন।"
    ]
  },
  {
    "name": "Marco Polo",
    "banglaName": "মার্কো পোলো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Venetian / Italian",
    "profession": "Explorer / Merchant",
    "knownFor": "Travels to China",
    "hints": [
      "১. তিনি মধ্যযুগের একজন বিশ্ববিখ্যাত পর্যটক এবং লেখক।",
      "২. তিনি সিল্ক রোড হয়ে চীন ভ্রমণ করেছিলেন এবং কুবলাই খানের দরবারে ছিলেন।",
      "৩. তাঁর ভ্রমণের কাহিনী 'দ্য ট্রাভেলস অব মার্কো পোলো' ইউরোপীয়দের এশিয়া সম্পর্কে ধারণা দেয়।",
      "৪. তিনি ভেনিস থেকে তাঁর যাত্রা শুরু করেছিলেন।",
      "৫. তাঁর বর্ণনা অনেক ইউরোপীয়কে সমুদ্র ভ্রমণে অনুপ্রাণিত করেছিল।"
    ]
  },
  {
    "name": "Vasco da Gama",
    "banglaName": "ভাস্কো দা গামা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Portuguese",
    "profession": "Explorer",
    "knownFor": "Sea route to India",
    "hints": [
      "১. তিনি সমুদ্রপথে ইউরোপ থেকে ভারত আসার পথ আবিষ্কার করেছিলেন।",
      "২. তিনি আফ্রিকার 'উত্তমাশা অন্তরীপ' প্রদক্ষিণ করে ভারতে পৌঁছান।",
      "৩. ১৪৯৮ সালে তিনি ভারতের কালিকট বন্দরে অবতরণ করেন।",
      "৪. তাঁর এই আবিষ্কার বিশ্ব বাণিজ্যের ইতিহাস বদলে দিয়েছিল।",
      "৫. পর্তুগালের নৌ-শক্তির প্রসারে তাঁর ভূমিকা ছিল প্রধান।"
    ]
  },
  {
    "name": "Christopher Columbus",
    "banglaName": "ক্রিস্টোফার কলম্বাস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Italian",
    "profession": "Explorer",
    "knownFor": "Discovery of the Americas",
    "hints": [
      "১. তিনি আটলান্টিক মহাসাগর পাড়ি দিয়ে আমেরিকার মূল ভূখণ্ডে পৌঁছেছিলেন।",
      "২. তিনি ভেবেছিলেন তিনি ভারত পৌঁছেছেন, তাই সেখানকার মানুষকে 'ইন্ডিয়ান' বলেছিলেন।",
      "৩. স্পেনীয় রাজদরবারের পৃষ্ঠপোষকতায় তিনি তাঁর ঐতিহাসিক যাত্রা শুরু করেন।",
      "৪. তাঁর এই আবিষ্কার ইউরোপীয়দের জন্য এক 'নতুন বিশ্ব' উন্মোচন করে।",
      "৫. ১৪৯২ সালে তিনি প্রথম বাহামা দ্বীপে অবতরণ করেছিলেন।"
    ]
  },
  {
    "name": "Amelia Earhart",
    "banglaName": "অ্যামেলিয়া ইয়ারহার্ট",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "American",
    "profession": "Aviator",
    "knownFor": "First woman to fly solo across Atlantic",
    "hints": [
      "১. তিনি ছিলেন আকাশ জয়ের এক সাহসী নেত্রী এবং বৈমানিক।",
      "২. প্রথম নারী হিসেবে তিনি একা আটলান্টিক মহাসাগর পাড়ি দিয়েছিলেন।",
      "৩. তিনি নারী অধিকার এবং বৈমানিক হিসেবে নারীদের প্রসারে কাজ করেছেন।",
      "৪. ১৯৩৭ সালে বিশ্বভ্রমণে বেরিয়ে তাঁর বিমানসহ তিনি রহস্যময়ভাবে নিখোঁজ হন।",
      "৫. তাঁর অন্তর্ধান আজও ইতিহাসের এক বড় রহস্য হয়ে আছে।"
    ]
  },
  {
    "name": "Neil Armstrong",
    "banglaName": "নীল আর্মস্ট্রং",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Astronaut",
    "knownFor": "First human on the Moon",
    "hints": [
      "১. তিনি চাঁদে পা রাখা বিশ্বের প্রথম মানুষ।",
      "২. ১৯৬৯ সালে অ্যাপোলো-১১ মিশনে তিনি এই ইতিহাস গড়েন।",
      "৩. চাঁদে নামার পর তাঁর উক্তি ছিল—'একজন মানুষের জন্য এটি ছোট একটি পদক্ষেপ, কিন্তু মানবতার জন্য এক বিশাল লাফ'।",
      "৪. তিনি একজন দক্ষ নৌ-বৈমানিক এবং অ্যারোস্পেস ইঞ্জিনিয়ার ছিলেন।",
      "৫. তাঁর এই অর্জন মহাকাশ গবেষণার নতুন দিগন্ত খুলে দিয়েছিল।"
    ]
  },
  {
    "name": "Yuri Gagarin",
    "banglaName": "ইউরি গ্যাগারিন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Soviet / Russian",
    "profession": "Cosmonaut",
    "knownFor": "First human in space",
    "hints": [
      "১. তিনি মহাকাশে ভ্রমণকারী বিশ্বের প্রথম মানুষ।",
      "২. ১৯৬১ সালে ভস্তক-১ মহাকাশযানে চড়ে তিনি পৃথিবী প্রদক্ষিণ করেন।",
      "৩. তিনি সোভিয়েত ইউনিয়নের একজন বীর হিসেবে নন্দিত।",
      "৪. মহাকাশ থেকে ফিরে তিনি বিশ্বজুড়ে ব্যাপক খ্যাতি অর্জন করেন।",
      "৫. মাত্র ৩৪ বছর বয়সে এক বিমান দুর্ঘটনায় তাঁর মৃত্যু হয়।"
    ]
  },
  {
    "name": "Tenzing Norgay",
    "banglaName": "তেনজিং নরগে",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Nepali / Indian / Sherpa",
    "profession": "Mountaineer",
    "knownFor": "First to climb Mount Everest",
    "hints": [
      "১. তিনি এভারেস্ট জয়ী প্রথম দুই মানুষের একজন।",
      "২. ১৯৫৩ সালে এডমন্ড হিলারির সাথে তিনি এভারেস্টের চূড়ায় পা রাখেন।",
      "৩. তিনি জাতিতে একজন শেরপা ছিলেন এবং পর্বতারোহণে অত্যন্ত দক্ষ ছিলেন।",
      "৪. তাঁর সাহসিকতা সারা বিশ্বের পর্বতারোহীদের জন্য অনুপ্রেরণা।",
      "৫. হিমালয়ের কোলে বেড়ে ওঠা এই মানুষটি বিশ্বজয়ের গৌরব অর্জন করেন।"
    ]
  },
  {
    "name": "Edmund Hillary",
    "banglaName": "এডমন্ড হিলারি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "New Zealander",
    "profession": "Mountaineer / Explorer",
    "knownFor": "First to climb Mount Everest",
    "hints": [
      "১. তিনি এবং তেনজিং নরগে ১৯৫৩ সালে প্রথম মাউন্ট এভারেস্ট জয় করেন।",
      "২. তিনি নিউজিল্যান্ডের একজন অত্যন্ত সম্মানিত ব্যক্তিত্ব।",
      "৩. এভারেস্ট জয়ের পর তিনি উত্তর ও দক্ষিণ মেরু অভিযানেও অংশ নেন।",
      "৪. তিনি সারাজীবন নেপালের শেরপাদের উন্নয়নে সমাজসেবা করে গেছেন।",
      "৫. নিউজিল্যান্ডের ৫ ডলারের নোটে তাঁর ছবি রয়েছে।"
    ]
  },
  {
    "name": "Roald Amundsen",
    "banglaName": "রোল্ড আমুন্ডসেন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Norwegian",
    "profession": "Explorer",
    "knownFor": "First to reach the South Pole",
    "hints": [
      "১. তিনি দক্ষিণ মেরুতে পৌঁছানো বিশ্বের প্রথম অভিযাত্রী।",
      "২. ১৯১১ সালে তিনি তাঁর দল নিয়ে এই দুর্গম জয় সম্পন্ন করেন।",
      "৩. তিনি উত্তর মেরু এবং উত্তর-পশ্চিম সমুদ্রপথ অভিযানেও সফল হয়েছিলেন।",
      "৪. তাঁর পরিকল্পনা এবং অভিযানের দক্ষতা ইতিহাসের সেরা হিসেবে গণ্য।",
      "৫. তাঁর মৃত্যুও হয়েছিল মহাকাশচারী উদ্ধার অভিযানের সময় বিমান দুর্ঘটনায়।"
    ]
  },
  {
    "name": "Florence Nightingale",
    "banglaName": "ফ্লোরেন্স নাইটিঙ্গেল",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "British",
    "profession": "Nurse / Social Reformer",
    "knownFor": "The Lady with the Lamp",
    "hints": [
      "১. তাঁকে আধুনিক নার্সিং বা সেবিকা পেশার প্রবর্তক মনে করা হয়।",
      "২. ক্রিমিয়ার যুদ্ধের সময় আহত সৈন্যদের সেবা করে তিনি খ্যাতি পান।",
      "৩. রাতে হাতে বাতি নিয়ে রোগীদের দেখতে যেতেন বলে তাঁকে 'লেডি উইথ দ্য ল্যাম্প' বলা হয়।",
      "৪. তিনি উন্নত স্বাস্থ্যবিধি এবং নার্সিং প্রশিক্ষণের জন্য সারাজীবন কাজ করেছেন।",
      "৫. তাঁর জন্মদিন ১২ই মে বিশ্বে 'নার্স দিবস' হিসেবে পালিত হয়।"
    ]
  },
  {
    "name": "Louis Pasteur",
    "banglaName": "লুই পাস্তুর",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Chemist / Microbiologist",
    "knownFor": "Pasteurization, Rabies Vaccine",
    "hints": [
      "১. তিনি অণুজীববিজ্ঞানের অন্যতম প্রধান পথপ্রদর্শক এবং বিজ্ঞানী।",
      "২. তিনি জলাতঙ্ক রোগের (Rabies) টিকা আবিষ্কার করে অমর হয়ে আছেন।",
      "৩. দুধ ও খাবার সংরক্ষণের পদ্ধতি 'পাস্তুরায়ন' (Pasteurization) তাঁরই উদ্ভাবন।",
      "৪. তিনি প্রমাণ করেন যে জীবাণুর মাধ্যমেই অনেক রোগ ছড়ায়।",
      "৫. তাঁর গবেষণা চিকিৎসা বিজ্ঞানের ইতিহাসে এক বিশাল বিপ্লব ঘটিয়েছিল।"
    ]
  },
  {
    "name": "Alexander Fleming",
    "banglaName": "আলেকজান্ডার ফ্লেমিং",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Scottish",
    "profession": "Biologist / Pharmacologist",
    "knownFor": "Discovery of Penicillin",
    "hints": [
      "১. তিনি বিশ্বের প্রথম অ্যান্টিবায়োটিক 'পেনিসিলিন' (Penicillin) আবিষ্কার করেন।",
      "২. তাঁর এই আবিষ্কার কোটি কোটি মানুষের জীবন বাঁচিয়েছে।",
      "৩. ১৯২৮ সালে দুর্ঘটনাবশত ছত্রাক থেকে তিনি এই ওষুধ আবিষ্কার করেছিলেন।",
      "৪. ১৯৪৫ সালে তিনি চিকিৎসা বিজ্ঞানে নোবেল পুরস্কার লাভ করেন।",
      "৫. দ্বিতীয় বিশ্বযুদ্ধের সময় সৈন্যদের ক্ষত সারাতে তাঁর ওষুধ জাদুর মতো কাজ করেছিল।"
    ]
  },
  {
    "name": "Tim Berners-Lee",
    "banglaName": "টিম বার্নার্স-লি",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "British",
    "profession": "Computer Scientist",
    "knownFor": "World Wide Web (WWW)",
    "hints": [
      "১. তাঁকে আধুনিক ইন্টারনেটের প্রাণপুরুষ বা 'ওয়ার্ল্ড ওয়াইড ওয়েব' এর জনক বলা হয়।",
      "২. ১৯৮৯ সালে তিনি তথ্য আদান-প্রদানের এই বিপ্লব ঘটিয়েছিলেন।",
      "৩. তিনি এইচটিএমএল (HTML) এবং ইউআরএল (URL) এর ধারণা দিয়েছিলেন।",
      "৪. তিনি ওয়েবকে সবার জন্য উন্মুক্ত এবং ফ্রি রাখতে চেয়েছিলেন।",
      "৫. ২০০৪ সালে তাঁকে নাইট উপাধিতে ভূষিত করা হয়।"
    ]
  },
  {
    "name": "Steve Wozniak",
    "banglaName": "স্টিভ ওজনিয়াক",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Computer Engineer",
    "knownFor": "Co-founder of Apple, Apple I & II",
    "hints": [
      "১. তিনি অ্যাপল (Apple) কোম্পানির সহ-প্রতিষ্ঠাতা এবং প্রধান ইঞ্জিনিয়ার ছিলেন।",
      "২. তিনি একা হাতে অ্যাপল-১ এবং অ্যাপল-২ কম্পিউটার ডিজাইন করেছিলেন।",
      "৩. স্টিভ জবসের সাথে মিলে তিনি ব্যক্তিগত কম্পিউটার বিপ্লবের সূচনা করেন।",
      "৪. প্রযুক্তি বিশ্বে তাঁকে 'ওজ' (The Woz) নামে ডাকা হয়।",
      "৫. তিনি একজন অত্যন্ত প্রতিভাবান এবং মানবিক ব্যক্তিত্বের অধিকারী।"
    ]
  },
  {
    "name": "Alan Turing",
    "banglaName": "অ্যালান টুরিং",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Mathematician / Computer Scientist",
    "knownFor": "Breaking Enigma Code, Turing Machine",
    "hints": [
      "১. তাঁকে আধুনিক কম্পিউটার বিজ্ঞান এবং কৃত্রিম বুদ্ধিমত্তার জনক বলা হয়।",
      "২. দ্বিতীয় বিশ্বযুদ্ধের সময় তিনি জার্মানদের 'এনিগমা' কোড ভেঙে মিত্র বাহিনীকে জিতিয়েছিলেন।",
      "৩. তাঁর তৈরি 'টুরিং মেশিন' আজকের কম্পিউটারের মূল ভিত্তি।",
      "৪. এআই-এর বুদ্ধিমত্তা পরীক্ষার জন্য তাঁর 'টুরিং টেস্ট' বিশ্ববিখ্যাত।",
      "৫. ব্রিটিশ সরকার তাঁর অসামান্য অবদানের জন্য পরে মরণোত্তর ক্ষমা প্রার্থনা করে।"
    ]
  },
  {
    "name": "Aristotle",
    "banglaName": "অ্যারিস্টটল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Philosopher / Scientist",
    "knownFor": "Teacher of Alexander the Great",
    "hints": [
      "১. তিনি প্রাচীন গ্রিসের একজন মহান দার্শনিক এবং বহুমুখী প্রতিভাধর ব্যক্তি।",
      "২. তিনি প্লেটোর ছাত্র এবং আলেকজান্ডার দ্য গ্রেটের শিক্ষক ছিলেন।",
      "৩. পশ্চিমা দর্শন, বিজ্ঞান এবং যুক্তিশাস্ত্রের বিকাশে তাঁর অবদান অপরিমেয়।",
      "৪. তিনি প্রাণিবিদ্যা এবং পদার্থবিজ্ঞানেরও আদি গবেষক ছিলেন।",
      "৫. তাঁকে 'জ্ঞানের আদি গুরু' বা 'দ্য মাস্টার' বলা হয়।"
    ]
  },
  {
    "name": "Plato",
    "banglaName": "প্লেটো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Philosopher",
    "knownFor": "The Republic, Academy",
    "hints": [
      "১. তিনি প্রাচীন গ্রিসের একজন অত্যন্ত প্রভাবশালী দার্শনিক।",
      "২. তিনি সক্রেটিসের প্রিয় ছাত্র এবং অ্যারিস্টটলের শিক্ষক ছিলেন।",
      "৩. তিনি অ্যাথেন্সে 'একাডেমি' নামক শিক্ষা প্রতিষ্ঠান গড়ে তুলেছিলেন।",
      "৪. তাঁর বিখ্যাত গ্রন্থ 'দ্য রিপাবলিক' (The Republic) রাষ্ট্রদর্শন নিয়ে লেখা।",
      "৫. তাঁর দর্শন আজও পশ্চিমা চিন্তাধারার অন্যতম ভিত্তি।"
    ]
  },
  {
    "name": "Srinivasa Ramanujan",
    "banglaName": "শ্রীনিবাস রামানুজন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Indian",
    "profession": "Mathematician",
    "knownFor": "Mathematical Analysis, Number Theory",
    "hints": [
      "১. তিনি আধুনিক ভারতের এক বিস্ময়কর গণিত প্রতিভা ছিলেন।",
      "২. প্রথাগত শিক্ষা ছাড়াই তিনি গণিতের জটিল সব সূত্র আবিষ্কার করেছিলেন।",
      "৩. তাঁর এবং হার্ডির সাথে যুক্ত ১৭২৯ সংখ্যাটি 'ট্যাক্সিক্যাব নাম্বার' নামে পরিচিত।",
      "৪. তিনি কেমব্রিজ বিশ্ববিদ্যালয়ের ট্রিনিটি কলেজের ফেলো নির্বাচিত হয়েছিলেন।",
      "৫. মাত্র ৩২ বছর বয়সে তাঁর অকাল মৃত্যু গণিত বিশ্বের এক বিশাল ক্ষতি ছিল।"
    ]
  },
  {
    "name": "Mao Zedong",
    "banglaName": "মাও সেতুং",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Chinese",
    "profession": "Revolutionary / Chairman",
    "knownFor": "Founding Father of PR China",
    "hints": [
      "১. তিনি আধুনিক সমাজতান্ত্রিক চীনের প্রতিষ্ঠাতা।",
      "২. তিনি চীনের কমিউনিস্ট পার্টির প্রধান হিসেবে দীর্ঘ সময় দেশ শাসন করেছেন।",
      "৩. তাঁর নেতৃত্বে 'লং মার্চ' এবং সাংস্কৃতিক বিপ্লব সংঘটিত হয়েছিল।",
      "৪. তাঁকে 'চেয়ারম্যান মাও' নামে ডাকা হয়।",
      "৫. তাঁর দর্শন 'মাওবাদ' নামে পরিচিত যা বিশ্ব রাজনীতিতে প্রভাব ফেলেছিল।"
    ]
  },
  {
    "name": "Vladimir Lenin",
    "banglaName": "ভ্লাদিমির লেনিন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Russian",
    "profession": "Revolutionary / Leader",
    "knownFor": "October Revolution, USSR",
    "hints": [
      "১. তিনি ১৯১৭ সালের রুশ বিপ্লবের প্রধান নেতা এবং স্থপতি।",
      "২. তিনি সোভিয়েত ইউনিয়ন বা বিশ্বের প্রথম সমাজতান্ত্রিক রাষ্ট্রের প্রতিষ্ঠাতা।",
      "৩. তাঁর রাজনৈতিক দর্শন 'লেনিনবাদ' মার্কসবাদের এক বাস্তব প্রয়োগ।",
      "৪. তিনি বলশেভিক পার্টির নেতা হিসেবে রাশিয়ার জারের শাসনের অবসান ঘটান।",
      "৫. মস্কোর রেড স্কয়ারে তাঁর সংরক্ষিত মৃতদেহ আজও প্রদর্শিত হয়।"
    ]
  },
  {
    "name": "Leo Tolstoy",
    "banglaName": "লিও তলস্তয়",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Russian",
    "profession": "Author",
    "knownFor": "War and Peace, Anna Karenina",
    "hints": [
      "১. তাঁকে বিশ্ব সাহিত্যের সর্বকালের অন্যতম শ্রেষ্ঠ ঔপন্যাসিক মনে করা হয়।",
      "২. তাঁর বিখ্যাত উপন্যাস 'ওয়ার অ্যান্ড পিস' (War and Peace) এক কালজয়ী সৃষ্টি।",
      "৩. তাঁর লেখা 'আন্না কারেনিনা' উপন্যাসটিও অত্যন্ত উচ্চমানের।",
      "৪. তিনি তাঁর পরবর্তী জীবনে আধ্যাত্মিক এবং অহিংস জীবনযাপন শুরু করেন।",
      "৫. তাঁর দর্শন মহাত্মা গান্ধীর ওপর গভীর প্রভাব ফেলেছিল।"
    ]
  },
  {
    "name": "Fyodor Dostoevsky",
    "banglaName": "ফিওদর দস্তয়েভস্কি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Russian",
    "profession": "Author",
    "knownFor": "Crime and Punishment, The Brothers Karamazov",
    "hints": [
      "১. তিনি রাশিয়ার একজন মহান ঔপন্যাসিক এবং দার্শনিক।",
      "২. মানুষের মনের জটিল মনস্তত্ত্ব ফুটিয়ে তোলায় তিনি ছিলেন অতুলনীয়।",
      "৩. তাঁর বিখ্যাত উপন্যাস 'ক্রাইম অ্যান্ড পানিশমেন্ট' বিশ্বসাহিত্যের সম্পদ।",
      "৪. তিনি তাঁর লেখায় মানুষের পাপ, মুক্তি এবং অস্তিত্বের লড়াই নিয়ে আলোচনা করেছেন।",
      "৫. আধুনিক মনোবিজ্ঞান এবং অস্তিত্ববাদ তাঁর লেখায় সমৃদ্ধ হয়েছে।"
    ]
  },
  {
    "name": "Mark Twain",
    "banglaName": "মার্ক টোয়েন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Author / Humorist",
    "knownFor": "Tom Sawyer, Huckleberry Finn",
    "hints": [
      "১. তাঁকে আমেরিকার সাহিত্যের শ্রেষ্ঠ রসিক বা হিউমারিস্ট মনে করা হয়।",
      "২. তাঁর 'টম সয়্যার' এবং 'হাকলবেরি ফিন' কিশোরদের প্রিয় কালজয়ী উপন্যাস।",
      "৩. তাঁর আসল নাম ছিল স্যামুয়েল ল্যাংহর্ন ক্লিমেন্স।",
      "৪. তিনি তাঁর সূক্ষ্ম হাস্যরস এবং সামাজিক সমালোচনার জন্য বিখ্যাত।",
      "৫. উইলিয়াম ফকনার তাঁকে 'আমেরিকান সাহিত্যের জনক' বলেছেন।"
    ]
  },
  {
    "name": "Ernest Hemingway",
    "banglaName": "আর্নেস্ট হেমিংওয়ে",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Author / Journalist",
    "knownFor": "The Old Man and the Sea",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর অন্যতম প্রভাবশালী আমেরিকান লেখক।",
      "২. তাঁর 'দ্য ওল্ড ম্যান অ্যান্ড দ্য সি' বইটির জন্য তিনি নোবেল পুরস্কার পান।",
      "৩. তাঁর লেখনী ছিল সংক্ষিপ্ত এবং অত্যন্ত শক্তিশালী।",
      "৪. তিনি সাহসিকতা, যুদ্ধ এবং মানুষের লড়াইকে তাঁর লেখায় তুলে ধরেছেন।",
      "৫. তিনি প্রথম বিশ্বযুদ্ধে অ্যাম্বুলেন্স ড্রাইভার হিসেবে কাজ করেছিলেন।"
    ]
  },
  {
    "name": "Gabriel García Márquez",
    "banglaName": "গাব্রিয়েল গার্সিয়া মার্কেস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Colombian",
    "profession": "Author",
    "knownFor": "One Hundred Years of Solitude",
    "hints": [
      "১. তিনি লাতিন আমেরিকার অন্যতম শ্রেষ্ঠ সাহিত্যিক।",
      "২. তিনি 'ম্যাজিকাল রিয়ালিজম' বা জাদুবাস্তবতা ধারার প্রধান কারিগর।",
      "৩. তাঁর অমর সৃষ্টি 'ওয়ান হান্ড্রেড ইয়ার্স অব সলিটিউড' (One Hundred Years of Solitude)।",
      "৪. তিনি ১৯৮২ সালে সাহিত্যে নোবেল পুরস্কার লাভ করেন।",
      "৫. ভক্তরা তাঁকে ভালোবেসে 'গাবো' বলে ডাকত।"
    ]
  },
  {
    "name": "Charles Dickens",
    "banglaName": "চার্লস ডিকেন্স",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Author",
    "knownFor": "Oliver Twist, A Tale of Two Cities",
    "hints": [
      "১. তিনি ভিক্টোরিয়ান যুগের ইংল্যান্ডের শ্রেষ্ঠ ঔপন্যাসিক।",
      "২. তাঁর লেখায় তৎকালীন সমাজের দারিদ্র্য এবং অবিচার ফুটে উঠত।",
      "৩. 'অলিভার টুইস্ট' এবং 'ডেভিড কপারফিল্ড' তাঁর বিখ্যাত উপন্যাস।",
      "৪. তাঁর তৈরি অনেক চরিত্র আজও বিশ্বসাহিত্যে অমর হয়ে আছে।",
      "৫. তাঁর বড়দিন নিয়ে লেখা 'এ ক্রিসমাস ক্যারল' বিশ্বজুড়ে জনপ্রিয়।"
    ]
  },
  {
    "name": "Virginia Woolf",
    "banglaName": "ভার্জিনিয়া উলফ",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "British",
    "profession": "Author",
    "knownFor": "Mrs Dalloway, A Room of One's Own",
    "hints": [
      "১. তিনি আধুনিক ইংরেজি সাহিত্যের অন্যতম প্রধান লেখিকা।",
      "২. তিনি 'স্ট্রিম অব কনশাসনেস' বা চেতনার প্রবাহ রীতিতে লেখার জন্য বিখ্যাত।",
      "৩. তাঁর 'মিসেস ডালোওয়ে' এবং 'টু দ্য লাইটহাউস' উচ্চমানের উপন্যাস।",
      "৪. তিনি নারী অধিকার এবং সৃজনশীলতা নিয়ে সোচ্চার ছিলেন।",
      "৫. তাঁর প্রবন্ধ 'এ রুম অব ওয়ানস ওন' নারীবাদের এক গুরুত্বপূর্ণ দলিল।"
    ]
  },
  {
    "name": "George Orwell",
    "banglaName": "জর্জ অরওয়েল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Author / Journalist",
    "knownFor": "Animal Farm, 1984",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর অন্যতম শ্রেষ্ঠ রাজনৈতিক লেখক।",
      "২. তাঁর 'অ্যানিমেল ফার্ম' উপন্যাসটি স্বৈরাচারের বিরুদ্ধে এক বিশাল রূপক।",
      "৩. তাঁর বিখ্যাত বই '১৯৮৪' (Nineteen Eighty-Four) এক অন্ধকার ভবিষ্যতের ছবি।",
      "৪. 'বিগ ব্রাদার ইজ ওয়াচিং ইউ'—এটি তাঁর উপন্যাসের একটি বিখ্যাত বাক্য।",
      "৫. তাঁর আসল নাম ছিল এরিক আর্থার ব্লেয়ার এবং তাঁর জন্ম ভারতে।"
    ]
  },
  {
    "name": "Agatha Christie",
    "banglaName": "আগাথা ক্রিস্টি",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "British",
    "profession": "Author",
    "knownFor": "Hercule Poirot, Miss Marple",
    "hints": [
      "১. তাঁকে বিশ্বের 'রহস্য সম্রাজ্ঞী' বা 'কুইন অব ক্রাইম' বলা হয়।",
      "২. তিনি ৬৬টি রহস্য উপন্যাস এবং গোয়েন্দা কাহিনী লিখেছেন।",
      "৩. তাঁর তৈরি গোয়েন্দা চরিত্র 'এরকুল পোয়ারো' এবং 'মিস মার্পল' বিশ্ববিখ্যাত।",
      "৪. তাঁর বই বাইবেলের পর বিশ্বের সবচেয়ে বেশি বিক্রিত বইয়ের তালিকায় আছে।",
      "৫. তাঁর নাটক 'দ্য মাউসট্র্যাপ' বিশ্বের সবচেয়ে দীর্ঘ সময় ধরে চলা নাটক।"
    ]
  },
  {
    "name": "Stephen King",
    "banglaName": "স্টিফেন কিং",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Author",
    "knownFor": "Horror, Suspense",
    "hints": [
      "১. তিনি সমকালীন বিশ্বের সবচেয়ে জনপ্রিয় হরর বা আতঙ্কধর্মী লেখক।",
      "২. তাঁর 'দ্য শাইনিং' এবং 'ইট' (It) এর মতো বইগুলো বিশ্বজুড়ে ভীতি ছড়ায়।",
      "৩. তাঁর অনেক গল্প থেকে সফল মুভি তৈরি হয়েছে (যেমন: শশ্যাঙ্ক রিডেম্পশন)।",
      "৪. তাঁকে 'মাস্টার অব হরর' বলা হয়।",
      "৫. তিনি সারাজীবনে ৫০টিরও বেশি উপন্যাস লিখেছেন।"
    ]
  },
  {
    "name": "Mikhail Kalashnikov",
    "banglaName": "মিখাইল কালাশনিকভ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Russian",
    "profession": "Weapon Designer",
    "knownFor": "AK-47",
    "hints": [
      "১. তিনি বিশ্বের সবচেয়ে পরিচিত আগ্নেয়াস্ত্র 'AK-47' এর উদ্ভাবক।",
      "২. দ্বিতীয় বিশ্বযুদ্ধের সময় আহত হওয়ার পর তিনি এই রাইফেলটি ডিজাইন করেন।",
      "৩. তাঁর তৈরি অস্ত্রটি বিশ্বের সবচেয়ে বেশি ব্যবহৃত এবং নির্ভরযোগ্য অস্ত্র।",
      "৪. তিনি সোভিয়েতের একজন অত্যন্ত সম্মানিত সেনা কর্মকর্তা ছিলেন।",
      "৫. তাঁর উদ্ভাবিত অস্ত্রের কারণে কোটি মানুষের মৃত্যু হয়েছে বলে তিনি পরে অনুতাপ করেছিলেন।"
    ]
  },
  {
    "name": "Coco Chanel",
    "banglaName": "কোকো শ্যানেল",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "French",
    "profession": "Fashion Designer",
    "knownFor": "Chanel No. 5, Little Black Dress",
    "hints": [
      "১. তিনি আধুনিক ফ্যাশন জগতের অন্যতম প্রধান কারিগর এবং আইকন।",
      "২. তিনি 'Chanel' ব্র্যান্ডের প্রতিষ্ঠাতা।",
      "৩. নারীদের পোশাককে তিনি আরামদায়ক এবং আধুনিক রূপ দিয়েছিলেন।",
      "৪. তাঁর পারফিউম 'শ্যানেল নম্বর ৫' বিশ্বের অন্যতম বিখ্যাত সুগন্ধি।",
      "৫. তাঁর 'লিটল ব্ল্যাক ড্রেস' ফ্যাশন দুনিয়ায় এক কালজয়ী ধারণা।"
    ]
  },
  {
    "name": "Alfred Nobel",
    "banglaName": "আলফ্রেড নোবেল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Swedish",
    "profession": "Inventor / Chemist",
    "knownFor": "Dynamite, Nobel Prize",
    "hints": [
      "১. তিনি বিশ্ববিখ্যাত 'নোবেল পুরস্কার' এর প্রবর্তক।",
      "২. তিনি ডিনামাইট (Dynamite) নামক শক্তিশালী বিস্ফোরক আবিষ্কার করেছিলেন।",
      "৩. তিনি তাঁর অর্জিত বিপুল অর্থ দিয়ে একটি পুরস্কার তহবিল গড়ার ইচ্ছা প্রকাশ করেন।",
      "৪. তাঁর এই আবিষ্কারগুলো যুদ্ধক্ষেত্রে ব্যবহার হওয়ায় তিনি খুব দুঃখ পেয়েছিলেন।",
      "৫. প্রতি বছর তাঁর মৃত্যুবার্ষিকীতেই নোবেল পুরস্কার প্রদান করা হয়।"
    ]
  },
  {
    "name": "Louis Braille",
    "banglaName": "লুই ব্রেইল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Educator / Inventor",
    "knownFor": "Braille System",
    "hints": [
      "১. তিনি দৃষ্টিহীন মানুষের পড়ার জন্য 'ব্রেইল' (Braille) পদ্ধতির উদ্ভাবক।",
      "২. তিনি নিজেও মাত্র তিন বছর বয়সে এক দুর্ঘটনায় অন্ধ হয়ে গিয়েছিলেন।",
      "৩. তাঁর এই পদ্ধতির ফলে দৃষ্টিহীনদের জন্য শিক্ষার দ্বার উন্মুক্ত হয়।",
      "৪. তিনি স্পর্শের মাধ্যমে উঁচু বিন্দু পড়ে বোঝার এক জাদুকরী কৌশল আবিষ্কার করেন।",
      "৫. তাঁর এই উদ্ভাবন বিশ্বজুড়ে কয়েক কোটি মানুষের জীবন বদলে দিয়েছে।"
    ]
  },
  {
    "name": "Thomas Jefferson",
    "banglaName": "থমাস জেফারসন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "3rd US President",
    "knownFor": "Declaration of Independence",
    "hints": [
      "১. তিনি মার্কিন যুক্তরাষ্ট্রের ৩য় রাষ্ট্রপতি ছিলেন।",
      "২. আমেরিকার স্বাধীনতার ঘোষণাপত্র (Declaration of Independence) তাঁরই লেখা।",
      "৩. তাঁকে আমেরিকার 'ফাউন্ডিং ফাদারস'দের একজন মনে করা হয়।",
      "৪. তিনি একাধারে বিজ্ঞানী, স্থপতি এবং দার্শনিক ছিলেন।",
      "৫. ভার্জিনিয়া বিশ্ববিদ্যালয় তিনি প্রতিষ্ঠা করেছিলেন।"
    ]
  },
  {
    "name": "Alexander Graham Bell",
    "banglaName": "আলেকজান্ডার গ্রাহাম বেল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Scottish / American",
    "profession": "Inventor / Scientist",
    "knownFor": "Telephone",
    "hints": [
      "১. তিনি আধুনিক টেলিফোনের প্রধান উদ্ভাবক।",
      "২. তাঁর প্রথম সফল ফোন কল ছিল তাঁর সহকারী ওয়াটসনের কাছে।",
      "৩. তিনি সারাজীবন বধির মানুষের শ্রবণের উন্নতির জন্য কাজ করেছেন।",
      "৪. তাঁর মা এবং স্ত্রী—উভয়ই ছিলেন বধির।",
      "৫. যোগাযোগের ক্ষেত্রে তাঁর এই উদ্ভাবন পৃথিবীকে ছোট করে দিয়েছে।"
    ]
  },
  {
    "name": "John F. Kennedy",
    "banglaName": "জন এফ. কেনেডি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "35th US President",
    "knownFor": "Cuban Missile Crisis, Moon Mission",
    "hints": [
      "১. তিনি মার্কিন যুক্তরাষ্ট্রের ৩৫তম রাষ্ট্রপতি ছিলেন।",
      "২. তিনি মহাকাশ অভিযানের স্বপ্ন দেখিয়েছেন এবং ঘোষণা করেছিলেন যে আমেরিকা চাঁদে যাবে।",
      "৩. কিউবান মিসাইল ক্রাইসিসের সময় তিনি অত্যন্ত ধৈর্যের সাথে পরিস্থিতি সামাল দেন।",
      "৪. তিনি 'JFK' নামেও সমধিক পরিচিত ছিলেন।",
      "৫. ১৯৬৩ সালে ডালাসে এক শোভাযাত্রার সময় আততায়ীর গুলিতে তিনি নিহত হন।"
    ]
  },
  {
    "name": "Nelson Rockefeller",
    "banglaName": "নেলসন রকফেলার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Politician / Businessman",
    "knownFor": "Vice President, New York Governor",
    "hints": [
      "১. তিনি আমেরিকার অন্যতম শীর্ষ ধনী পরিবারের সদস্য ছিলেন।",
      "২. তিনি আমেরিকার ৪১তম উপ-রাষ্ট্রপতি হিসেবে দায়িত্ব পালন করেন।",
      "৩. তিনি দীর্ঘদিন নিউইয়র্ক অঙ্গরাজ্যের গভর্নর ছিলেন।",
      "৪. শিল্পকলার প্রতি তাঁর বিশেষ ঝোঁক ছিল এবং তিনি অনেক মিউজিয়ামে দান করেছেন।",
      "৫. রকফেলার সেন্টার নামক বিখ্যাত ভবনটি তাঁর পরিবারের নামেই পরিচিত।"
    ]
  },
  {
    "name": "Michael Jordan",
    "banglaName": "মাইকেল জর্ডান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Basketball Player",
    "knownFor": "Chicago Bulls, Air Jordan",
    "hints": [
      "১. তাঁকে বাস্কেটবল ইতিহাসের সর্বকালের শ্রেষ্ঠ খেলোয়াড় মনে করা হয়।",
      "২. তিনি শিকাগো বুলস দলের হয়ে ৬টি এনবিএ (NBA) চ্যাম্পিয়নশিপ জিতেছেন।",
      "৩. তাঁর ড্রিবলিং এবং লাফিয়ে উঠে বাস্কেট করার ক্ষমতা ছিল জাদুকরী।",
      "৪. তাঁর ব্র‍্যান্ড 'এয়ার জর্ডান' (Air Jordan) বিশ্বজুড়ে জুতার বাজারে রাজত্ব করছে।",
      "৫. তিনি দুইবার অলিম্পিক স্বর্ণপদক জিতেছেন।"
    ]
  },
  {
    "name": "Bruce Springsteen",
    "banglaName": "ব্রুস স্প্রিংস্টিন",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Singer / Songwriter",
    "knownFor": "The Boss, Born in the U.S.A.",
    "hints": [
      "১. তিনি আমেরিকার রক সংগীতের অন্যতম প্রধান তারকা।",
      "২. তাঁকে তাঁর ভক্তরা 'দ্য বস' (The Boss) নামে ডাকেন।",
      "৩. তাঁর 'বর্ন ইন দ্য ইউএসএ' অ্যালবামটি বিশ্বজুড়ে অত্যন্ত জনপ্রিয়।",
      "৪. তিনি তাঁর শক্তিশালী পারফরম্যান্স এবং জীবনমুখী গানের কথার জন্য বিখ্যাত।",
      "৫. তিনি ২০টিরও বেশি গ্র্যামি পুরস্কার জিতেছেন।"
    ]
  },
  {
    "name": "Mikhail Baryshnikov",
    "banglaName": "মিখাইল বারিশনিকভ",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Latvian / Russian / American",
    "profession": "Ballet Dancer",
    "knownFor": "Greatest ballet dancer of 20th century",
    "hints": [
      "১. তাঁকে বিংশ শতাব্দীর অন্যতম শ্রেষ্ঠ ব্যাল নৃত্যশিল্পী মনে করা হয়।",
      "২. তিনি সোভিয়েত ইউনিয়ন থেকে নির্বাসিত হয়ে পশ্চিমা বিশ্বে ব্যাপক খ্যাতি পান।",
      "৩. তাঁর নাচের গতি এবং কৌশল দেখে মানুষ মুগ্ধ হয়ে তাকিয়ে থাকত।",
      "৪. তিনি 'সেক্স অ্যান্ড দ্য সিটি' সিরিজের মাধ্যমেও পরিচিতি পেয়েছেন।",
      "৫. তিনি আমেরিকান ব্যাল থিয়েটারের শৈল্পিক পরিচালক ছিলেন।"
    ]
  },
  {
    "name": "Priyanka Chopra",
    "banglaName": "প্রিয়াঙ্কা চোপড়া",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Actress / Model",
    "knownFor": "Miss World 2000, Quantico",
    "hints": [
      "১. তিনি ২০০০ সালে 'মিস ওয়ার্ল্ড' খেতাব জিতেছিলেন।",
      "২. বলিউডের পর তিনি হলিউডেও সমান জনপ্রিয়তা অর্জন করেছেন।",
      "৩. তাঁর আমেরিকান সিরিজ 'কোয়ান্টিকো' (Quantico) তাঁকে বিশ্বজুড়ে পরিচিতি দেয়।",
      "৪. তিনি ইউনিসেফের গুডউইল অ্যাম্বাসেডর হিসেবে কাজ করছেন।",
      "৫. তিনি গায়ক নিক জোনাসের স্ত্রী।"
    ]
  },
  {
    "name": "Maluma",
    "banglaName": "মালুমা",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Colombian",
    "profession": "Singer",
    "knownFor": "Reggaeton, Latin Pop",
    "hints": [
      "১. তিনি বর্তমান সময়ের অন্যতম জনপ্রিয় লাতিন পপ গায়ক।",
      "২. তাঁর গানের ধরণ মূলত রেগেটন (Reggaeton) এবং লাতিন ট্র্যাপ।",
      "৩. তিনি তাঁর স্টাইল এবং কণ্ঠস্বরের জন্য তরুণ প্রজন্মের কাছে খুব প্রিয়।",
      "৪. তিনি শাকিরা এবং ম্যাডোনার মতো বড় তারকাদের সাথে কাজ করেছেন।",
      "৫. তাঁর ইউটিউব ভিডিওগুলো বিলিয়ন ভিউ পায়।"
    ]
  },
  {
    "name": "Greta Thunberg",
    "banglaName": "গ্রেটা থুনবার্গ",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "Swedish",
    "profession": "Environmental Activist",
    "knownFor": "Fridays for Future",
    "hints": [
      "১. তিনি জলবায়ু পরিবর্তন রোধে বিশ্বজুড়ে তরুণদের আন্দোলনের নেত্রী।",
      "২. তিনি মাত্র ১৫ বছর বয়সে সুইডিশ পার্লামেন্টের সামনে একা আন্দোলন শুরু করেন।",
      "৩. তাঁর আন্দোলনের নাম 'ফ্রাইডেস ফর ফিউচার' (Fridays for Future)।",
      "৪. তিনি বিশ্বনেতাদের মুখের ওপর জলবায়ু নিয়ে কড়া কথা বলার জন্য পরিচিত।",
      "৫. তিনি ২০১৯ সালে টাইম ম্যাগাজিনের 'পারসন অফ দ্য ইয়ার' হয়েছিলেন।"
    ]
  },
  {
    "name": "Zinedine Zidane",
    "banglaName": "জিনেদিন জিদান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "French",
    "profession": "Footballer / Coach",
    "knownFor": "1998 World Cup, Real Madrid Manager",
    "hints": [
      "১. ফুটবল ইতিহাসের অন্যতম জাদুকরী মিডফিল্ডার ছিলেন তিনি।",
      "২. তাঁর দুই গোলেই ফ্রান্স ১৯৯৮ সালে প্রথমবারের মতো বিশ্বকাপ জেতে।",
      "৩. তিনি রিয়াল মাদ্রিদের ম্যানেজার হিসেবে হ্যাটট্রিক চ্যাম্পিয়ন্স লিগ জিতেছেন।",
      "৪. ২০০৬ বিশ্বকাপের ফাইনালে তাঁর সেই হেডবাট বা মাথা দিয়ে আঘাত করা আলোচিত ঘটনা।",
      "৫. তাঁর খেলার নিয়ন্ত্রণ এবং ভিশন ছিল অতুলনীয়।"
    ]
  },
  {
    "name": "Novak Djokovic",
    "banglaName": "নোভাক জোকোভিচ",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Serbian",
    "profession": "Tennis Player",
    "knownFor": "Most Grand Slam titles in men's tennis",
    "hints": [
      "১. বর্তমান সময়ের এবং ইতিহাসের অন্যতম সেরা টেনিস খেলোয়াড় তিনি।",
      "২. পুরুষ টেনিসে সবচেয়ে বেশি গ্র্যান্ড স্ল্যাম (২৪টি) জয়ের রেকর্ড তাঁর।",
      "৩. তাঁর অবিশ্বাস্য শারীরিক শক্তি এবং রক্ষণাত্মক খেলা তাঁকে অজেয় করে তুলেছে।",
      "৪. তিনি রেকর্ড সময় ধরে বিশ্ব র‍্যাঙ্কিংয়ে ১ নম্বরে ছিলেন।",
      "৫. টেনিস কোর্টে তাঁর জেদ এবং লড়াকু মনোভাব সবার পরিচিত।"
    ]
  },
  {
    "name": "Brad Pitt",
    "banglaName": "ব্র্যাড পিট",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Actor / Producer",
    "knownFor": "Fight Club, Once Upon a Time in Hollywood",
    "hints": [
      "১. তিনি হলিউডের অন্যতম সুঠাম এবং জনপ্রিয় অভিনেতা।",
      "২. তিনি দুইবার অস্কার পুরস্কার জিতেছেন (একবার অভিনেতা, একবার প্রযোজক হিসেবে)।",
      "৩. 'ফাইট ক্লাব' এবং 'সেভেন' তাঁর উল্লেখযোগ্য এবং দর্শকনন্দিত মুভি।",
      "৪. তাঁকে বিশ্বের অন্যতম আকর্ষণীয় পুরুষ হিসেবে গণ্য করা হয়।",
      "৫. তিনি অনেক মানবিক ও দাতব্য কাজের সাথেও যুক্ত।"
    ]
  },
  {
    "name": "Leonardo DiCaprio",
    "banglaName": "লিওনার্দো ডিক্যাপ্রিও",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Actor / Producer",
    "knownFor": "Titanic, Inception",
    "hints": [
      "১. তিনি 'টাইটানিক' মুভির মাধ্যমে বিশ্বজুড়ে ব্যাপক জনপ্রিয়তা পান।",
      "২. তিনি সমকালীন বিশ্বের অন্যতম শ্রেষ্ঠ এবং খুঁতখুঁতে অভিনেতা।",
      "৩. 'দ্য রেভেন্যান্ট' মুভির জন্য তিনি তাঁর বহু প্রতীক্ষিত অস্কার জেতেন।",
      "৪. তিনি পরিবেশ এবং জলবায়ু পরিবর্তন নিয়ে ব্যাপক কাজ করেন।",
      "৫. তাঁর প্রতিটি মুভিই দর্শক এবং সমালোচকদের কাছে সমাদৃত হয়।"
    ]
  },
  {
    "name": "Katy Perry",
    "banglaName": "ক্যাটি পেরি",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Singer / Songwriter",
    "knownFor": "Roar, Firework",
    "hints": [
      "১. তিনি আমেরিকার একজন অত্যন্ত জনপ্রিয় পপ গায়িকা।",
      "২. তাঁর 'ফায়ারওয়ার্ক' এবং 'রোর' গানগুলো বিশ্বজুড়ে ব্যাপক জনপ্রিয়।",
      "৩. তিনি তাঁর রঙিন এবং বিচিত্র স্টাইলের মিউজিক ভিডিওর জন্য পরিচিত।",
      "৪. তিনি জনপ্রিয় টেলিভিশন কুইজ শো 'আমেরিকান আইডল' এর বিচারক।",
      "৫. সোশ্যাল মিডিয়ায় তাঁর অনুসরণকারীর সংখ্যা কোটির ঘরে।"
    ]
  },
  {
    "name": "Adele",
    "banglaName": "অ্যাডেল",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "British",
    "profession": "Singer / Songwriter",
    "knownFor": "Hello, Rolling in the Deep",
    "hints": [
      "১. তিনি বর্তমান সময়ের অন্যতম শক্তিশালী কণ্ঠের অধিকারিণী গায়িকা।",
      "২. তাঁর গানগুলোতে আবেগ এবং বিরহের ছোঁয়া থাকে যা সবার হৃদয় ছুঁয়ে যায়।",
      "৩. তিনি ১৬টি গ্র্যামি পুরস্কার এবং একটি অস্কার জিতেছেন।",
      "৪. তাঁর অ্যালবাম '২১' এবং '২৫' বিশ্বজুড়ে রেকর্ডের পর রেকর্ড গড়েছে।",
      "৫. তাঁর 'হ্যালো' (Hello) গানটি ইউটিউবে দ্রুততম বিলিয়ন ভিউয়ের রেকর্ড গড়েছিল।"
    ]
  },
  {
    "name": "Gordon Ramsay",
    "banglaName": "গর্ডন রামসে",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "British",
    "profession": "Chef / TV Personality",
    "knownFor": "Hell's Kitchen, MasterChef",
    "hints": [
      "১. তিনি বিশ্বের অন্যতম বিখ্যাত এবং রাগী শেফ বা রাঁধুনি।",
      "২. তাঁর টেলিভিশন শো 'হেল'স কিচেন' এবং 'মাস্টারশেফ' বিশ্বজুড়ে জনপ্রিয়।",
      "৩. তিনি তাঁর রেস্তোরাঁগুলোর জন্য মোট ১৭টি মিশেলিন স্টার পেয়েছেন।",
      "৪. খাবার নিয়ে তাঁর কড়া সমালোচনা এবং চিৎকার পর্যটকদের বিনোদনের খোরাক।",
      "৫. তিনি একজন দক্ষ ক্রীড়াবিদও ছিলেন।"
    ]
  },
  {
    "name": "Jackie Robinson",
    "banglaName": "জ্যাকি রবিনসন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Baseball Player",
    "knownFor": "Breaking color barrier in MLB",
    "hints": [
      "১. তিনি আমেরিকার মেজর লীগ বেসবলের প্রথম কৃষ্ণাঙ্গ খেলোয়াড়।",
      "২. তিনি বেসবল খেলায় বর্ণবাদ বা বর্ণবৈষম্য দূর করার নায়ক।",
      "৩. তাঁর জার্সি নম্বর '৪২' পুরো মেজর লীগে অবসর দেওয়া হয়েছে।",
      "৪. তিনি তাঁর সাহসিকতা এবং খেলার মাধ্যমে সামাজিক পরিবর্তনে ভূমিকা রাখেন।",
      "৫. প্রতি বছর ১৫ই এপ্রিল আমেরিকায় 'জ্যাকি রবিনসন দিবস' পালিত হয়।"
    ]
  },
  {
    "name": "Babe Ruth",
    "banglaName": "বেব রুথ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Baseball Player",
    "knownFor": "The Bambino, Home Run King",
    "hints": [
      "১. তাঁকে বেসবল ইতিহাসের সর্বকালের শ্রেষ্ঠ খেলোয়াড় মনে করা হয়।",
      "২. তাঁর ডাকনাম ছিল 'দ্য বামবিনো' (The Bambino)।",
      "৩. তিনি হোম রান বা বলকে সীমানার বাইরে পাঠানোর ওস্তাদ ছিলেন।",
      "৪. তিনি নিউইয়র্ক ইয়াঙ্কিস দলের হয়ে খেলতেন এবং কিংবদন্তী হন।",
      "৫. ১৯৩৬ সালে বেসবল হল অফ ফেমে অন্তর্ভুক্ত হওয়া প্রথম পাঁচজনের একজন তিনি।"
    ]
  },
  {
    "name": "Muammar Gaddafi",
    "banglaName": "মুয়াম্মার গাদ্দাফি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Libyan",
    "profession": "Dictator / Leader",
    "knownFor": "Brotherly Leader of Libya",
    "hints": [
      "১. তিনি দীর্ঘ ৪২ বছর ধরে লিবিয়ার ক্ষমতা দখল করে ছিলেন।",
      "২. তিনি তাঁর অদ্ভূত পোশাক এবং নারী দেহরক্ষী বাহিনীর জন্য পরিচিত ছিলেন।",
      "৩. তিনি পশ্চিমা বিশ্বের বড় সমালোচক এবং আরব ঐক্যের কথা বলতেন।",
      "৪. তাঁর লেখা বই 'দ্য গ্রিন বুক' (The Green Book) আলোচিত ছিল।",
      "৫. ২০১১ সালে লিবিয়ায় আরব বসন্ত বা গণঅভ্যুত্থানের সময় তিনি নিহত হন।"
    ]
  },
  {
    "name": "Saddam Hussein",
    "banglaName": "সাদ্দাম হোসেন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Iraqi",
    "profession": "President of Iraq",
    "knownFor": "Iraq War, Gulf War",
    "hints": [
      "১. তিনি ইরাকের দীর্ঘ সময়ের প্রতাপশালী রাষ্ট্রপতি ছিলেন।",
      "২. তাঁর শাসনামলে ইরাক ইরান-ইরাক যুদ্ধ এবং উপসাগরীয় যুদ্ধে জড়িয়ে পড়ে।",
      "৩. তিনি তাঁর বলিষ্ঠ শাসন এবং দমন-পীড়নের জন্য সমালোচিত ছিলেন।",
      "৪. ২০০৩ সালে মার্কিন আগ্রাসনের পর তিনি ক্ষমতাচ্যুত হন।",
      "৫. ২০০৬ সালে এক বিচারের মাধ্যমে তাঁর মৃত্যুদণ্ড কার্যকর করা হয়।"
    ]
  },
  {
    "name": "Kim Jong-un",
    "banglaName": "কিম জং-উন",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "North Korean",
    "profession": "Supreme Leader of North Korea",
    "knownFor": "Nuclear Program, Isolated Nation",
    "hints": [
      "১. তিনি উত্তর কোরিয়ার বর্তমান সর্বোচ্চ নেতা।",
      "২. তিনি তাঁর বাবার মৃত্যুর পর অতি তরুণ বয়সেই ক্ষমতার হাল ধরেন।",
      "৩. তিনি তাঁর পরমাণু অস্ত্র কর্মসূচি এবং রহস্যময় জীবনযাপনের জন্য আলোচিত।",
      "৪. উত্তর কোরিয়াকে তিনি বিশ্বের অন্য দেশগুলো থেকে বিচ্ছিন্ন করে রেখেছেন।",
      "৫. তাঁর অদ্ভুত হেয়ারস্টাইল এবং চলাফেরা নিয়ে বিশ্বজুড়ে কৌতূহল আছে।"
    ]
  },
  {
    "name": "Angela Merkel",
    "banglaName": "অ্যাঞ্জেলা মার্কেল",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "German",
    "profession": "Chancellor",
    "knownFor": "Longest serving female leader of Germany",
    "hints": [
      "১. তিনি জার্মানির ১৬ বছরের চ্যান্সেলর ছিলেন।",
      "২. তাঁকে ইউরোপের সবচেয়ে শক্তিশালী নারী নেতা মনে করা হয়।",
      "৩. তিনি একজন কোয়ান্টাম কেমিস্ট ছিলেন এবং পরে রাজনীতিতে আসেন।",
      "৪. ইউরোপীয় ইউনিয়নের স্থিতিশীলতা রক্ষায় তাঁর ভূমিকা ছিল প্রধান।",
      "৫. তাঁর সরল জীবনযাপন এবং শান্ত নেতৃত্ব বিশ্বজুড়ে প্রশংসিত হয়েছে।"
    ]
  },
  {
    "name": "Michelle Obama",
    "banglaName": "মিশেল ওবামা",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "American",
    "profession": "Former First Lady",
    "knownFor": "Let's Move! campaign, Becoming",
    "hints": [
      "১. তিনি মার্কিন যুক্তরাষ্ট্রের প্রথম আফ্রিকান-আমেরিকান ফার্স্ট লেডি।",
      "২. তিনি বারাক ওবামার স্ত্রী এবং একজন দক্ষ আইনজীবী।",
      "৩. তিনি শিশু স্বাস্থ্য এবং নারী শিক্ষার প্রসারে কাজ করেছেন।",
      "৪. তাঁর আত্মজীবনী 'বিকামিং' (Becoming) বিশ্বের অন্যতম বেস্টসেলার বই।",
      "৫. তিনি একজন অত্যন্ত চমৎকার বক্তা এবং আধুনিক ফ্যাশন আইকন।"
    ]
  },
  {
    "name": "Rafael Nadal",
    "banglaName": "রাফায়েল নাদাল",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Spanish",
    "profession": "Tennis Player",
    "knownFor": "King of Clay, 22 Grand Slams",
    "hints": [
      "১. টেনিস বিশ্বে তাঁকে 'ক্লে কোর্টের রাজা' বলা হয়।",
      "২. তিনি রেকর্ড ১৪ বার ফ্রেঞ্চ ওপেন খেতাব জিতেছেন।",
      "৩. তিনি মোট ২২টি গ্র্যান্ড স্ল্যাম খেতাব জয়ের অধিকারী।",
      "৪. তাঁর লড়াকু মানসিকতা এবং অবিশ্বাস্য শারীরিক শক্তি সবার পরিচিত।",
      "৫. ইনজুরি বা আঘাতের সাথে লড়াই করেও তিনি বারবার চ্যাম্পিয়ন হয়েছেন।"
    ]
  },
  {
    "name": "Sachin Tendulkar",
    "banglaName": "শচীন টেন্ডুলকার",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Cricketer",
    "knownFor": "Master Blaster, 100 Centuries",
    "hints": [
      "১. তাঁকে ক্রিকেটের ইতিহাসের অন্যতম সেরা ব্যাটসম্যান মনে করা হয়।",
      "২. আন্তর্জাতিক ক্রিকেটে ১০০টি সেঞ্চুরি করার একমাত্র রেকর্ড তাঁর।",
      "৩. তাঁকে ক্রিকেটের ঈশ্বর বা 'মাস্টার ব্লাস্টার' বলা হয়।",
      "৪. তিনি ভারতের হয়ে ২০১১ সালের বিশ্বকাপ জিতেছিলেন।",
      "৫. ভারতরত্ন পুরস্কার পাওয়া তিনি প্রথম খেলোয়াড়।"
    ]
  },
  {
    "name": "Virat Kohli",
    "banglaName": "বিরাট কোহলি",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Cricketer",
    "knownFor": "King Kohli, Run Machine",
    "hints": [
      "১. বর্তমান বিশ্বের অন্যতম সেরা এবং ফিট ব্যাটসম্যান তিনি।",
      "২. ওয়ানডে ক্রিকেটে সবচেয়ে বেশি সেঞ্চুরি করার রেকর্ড এখন তাঁর।",
      "৩. তাঁর আগ্রাসী ব্যাটিং এবং জয় করার জেদ দর্শকদের মুগ্ধ করে।",
      "৪. তাঁকে ভালোবেসে ভক্তরা 'কিং কোহলি' বলে ডাকেন।",
      "৫. তিনি ভারতীয় ক্রিকেট দলের সফলতম অধিনায়কদের একজন।"
    ]
  },
  {
    "name": "Shakib Al Hasan",
    "banglaName": "শাকিব আল হাসান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Bangladeshi",
    "profession": "Cricketer",
    "knownFor": "World's Best All-rounder",
    "hints": [
      "১. তিনি বাংলাদেশের ক্রিকেটের ইতিহাসের সবচেয়ে বড় তারকা।",
      "২. দীর্ঘ সময় ধরে তিনি আইসিসি অলরাউন্ডার র‍্যাঙ্কিংয়ে ১ নম্বরে ছিলেন।",
      "৩. তিনি একাধারে অসাধারণ বাঁহাতি ব্যাটসম্যান এবং স্পিনার।",
      "৪. বিশ্বজুড়ে বিভিন্ন ফ্র্যাঞ্চাইজি লীগে তাঁর ব্যাপক চাহিদা রয়েছে।",
      "৫. বাংলাদেশের ক্রিকেটকে বিশ্ব দরবারে তুলে ধরার প্রধান কারিগর তিনি।"
    ]
  },
  {
    "name": "Wasim Akram",
    "banglaName": "ওয়াসিম আকরাম",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Pakistani",
    "profession": "Cricketer",
    "knownFor": "Sultan of Swing",
    "hints": [
      "১. তাঁকে ক্রিকেট ইতিহাসের সর্বকালের সেরা বাঁহাতি ফাস্ট বোলার মনে করা হয়।",
      "২. তাঁর বলের সুইং এবং গতির জন্য তাঁকে 'সুলতান অব সুইং' বলা হয়।",
      "৩. তিনি ১৯৯২ সালের বিশ্বকাপজয়ী পাকিস্তান দলের অন্যতম নায়ক ছিলেন।",
      "৪. ওয়ানডে ক্রিকেটে ৫০০ উইকেট নেওয়া প্রথম বোলার তিনি।",
      "৫. রিভার্স সুইং বোলিংয়ে তাঁর দক্ষতা ছিল কিংবদন্তীতুল্য।"
    ]
  },
  {
    "name": "Muhammed Ali",
    "banglaName": "মোহাম্মদ আলী",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Boxer",
    "knownFor": "The Greatest Boxer",
    "hints": [
      "১. তাঁকে বিশ্বের সর্বকালের শ্রেষ্ঠ হেভিওয়েট বক্সার মনে করা হয়।",
      "২. তাঁর বিখ্যাত উক্তি ছিল 'প্রজাপতির মতো ওড়ো, মৌমাছির মতো হুল ফোটাও'।",
      "৩. তিনি তিনবার ওয়ার্ল্ড হেভিওয়েট চ্যাম্পিয়নশিপ জিতেছিলেন।",
      "৪. তিনি বর্ণবাদ এবং যুদ্ধের বিরুদ্ধে সোচ্চার ছিলেন।",
      "৫. তিনি ইসলাম ধর্ম গ্রহণ করেছিলেন এবং নিজের নাম পরিবর্তন করেছিলেন।"
    ]
  },
  {
    "name": "Mike Tyson",
    "banglaName": "মাইক টাইসন",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "American",
    "profession": "Boxer",
    "knownFor": "Youngest Heavyweight Champion",
    "hints": [
      "১. তিনি বক্সিং ইতিহাসের অন্যতম শক্তিশালী এবং দুর্ধর্ষ খেলোয়াড়।",
      "২. মাত্র ২০ বছর বয়সে তিনি সর্বকনিষ্ঠ হেভিওয়েট চ্যাম্পিয়ন হয়েছিলেন।",
      "৩. তাঁর পাঞ্চ বা ঘুষির প্রচণ্ড শক্তির জন্য তিনি পরিচিত ছিলেন।",
      "৪. রিংয়ের ভেতরে তাঁর আক্রমণাত্মক স্বভাব প্রতিপক্ষকে ভীত করে তুলত।",
      "৫. তাঁর গালে একটি বিশেষ ট্যাটু রয়েছে যা তাঁর পরিচায়ক।"
    ]
  },
  {
    "name": "Charlie Chaplin",
    "banglaName": "চার্লি চ্যাপলিন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Actor / Filmmaker",
    "knownFor": "The Tramp, Silent Movies",
    "hints": [
      "১. তিনি নির্বাক চলচ্চিত্রের যুগের সবচেয়ে বড় তারকা এবং কমেডিয়ান।",
      "২. তাঁর 'দ্য ট্র্যাম্প' চরিত্রটি (ছোট গোঁফ ও লাঠি) বিশ্বজুড়ে আইকনিক।",
      "৩. তিনি অভিনয়ের পাশাপাশি পরিচালনা এবং মিউজিক কম্পোজও করতেন।",
      "৪. তাঁর মুভিগুলোতে হাসির মাধ্যমে সামাজিক অবিচারের কথা বলা হতো।",
      "৫. তাঁর 'দ্য গ্রেট ডিক্টেটর' মুভিটি হিটলারের ব্যঙ্গাত্মক রূপ হিসেবে বিখ্যাত।"
    ]
  },
  {
    "name": "Sheikh Hasina",
    "banglaName": "শেখ হাসিনা",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "Bangladeshi",
    "profession": "Politician",
    "knownFor": "Longest serving PM of BD",
    "hints": [
      "১. তিনি বাংলাদেশের দীর্ঘতম সময়ের সফল প্রধানমন্ত্রী।",
      "২. তিনি জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের জ্যেষ্ঠ কন্যা।",
      "৩. তাঁর নেতৃত্বে বাংলাদেশ মধ্যম আয়ের দেশে পরিণত হয়েছে।",
      "৪. পদ্মা সেতু নির্মাণ তাঁর সরকারের অন্যতম বড় সাফল্য।",
      "৫. তিনি বর্তমানে বাংলাদেশ আওয়ামী লীগের সভাপতি হিসেবে দায়িত্ব পালন করছেন।"
    ]
  },
  {
    "name": "Sunder Pichai",
    "banglaName": "সুন্দর পিচাই",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian / American",
    "profession": "CEO of Google",
    "knownFor": "Chrome, Android",
    "hints": [
      "১. তিনি বর্তমান বিশ্বের সবচেয়ে প্রভাবশালী প্রযুক্তি প্রতিষ্ঠান গুগলের প্রধান।",
      "২. তিনি গুগল এবং এর মূল প্রতিষ্ঠান অ্যালফাবেট-এর সিইও।",
      "৩. গুগলের 'ক্রোম' ব্রাউজার তৈরির পেছনে তাঁর প্রধান ভূমিকা ছিল।",
      "৪. তিনি ভারতের আইআইটি খড়গপুর থেকে পড়াশোনা করেছেন।",
      "৫. তাঁর শান্ত স্বভাব এবং অসাধারণ নেতৃত্বগুণ প্রযুক্তি বিশ্বে সমাদৃত।"
    ]
  },
  {
    "name": "Aamir Khan",
    "banglaName": "আমির খান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Actor / Filmmaker",
    "knownFor": "Mr. Perfectionist, 3 Idiots",
    "hints": [
      "১. তাঁকে বলিউডের 'মিস্টার পারফেকশনিস্ট' বলা হয়।",
      "২. তিনি বছরে মাত্র একটি মুভি করেন এবং তা নিখুঁত করার চেষ্টা করেন।",
      "৩. 'লগন' এবং 'থ্রি ইডিয়টস' তাঁর উল্লেখযোগ্য জনপ্রিয় মুভি।",
      "৪. তাঁর মুভিগুলো প্রায়ই কোনো না কোনো সামাজিক বার্তা দেয়।",
      "৫. তিনি তাঁর অভিনয়ের জন্য অনেক জাতীয় পুরস্কার পেয়েছেন।"
    ]
  },
  {
    "name": "Salman Khan",
    "banglaName": "সালমান খান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Actor",
    "knownFor": "Sultan of Bollywood, Being Human",
    "hints": [
      "১. তাঁকে বলিউডের 'ভাইজান' বা 'সাল্লু ভাই' বলা হয়।",
      "২. তিনি তাঁর সুঠাম দেহ এবং অ্যাকশন মুভির জন্য পরিচিত।",
      "৩. 'দাবাং' এবং 'বজরঙ্গি ভাইজান' তাঁর ব্লকবাস্টার মুভি।",
      "৪. তিনি 'বিয়িং হিউম্যান' নামক দাতব্য সংস্থা পরিচালনা করেন।",
      "৫. তিনি রিয়ালিটি শো 'বিগ বস' এর সঞ্চালক হিসেবেও জনপ্রিয়।"
    ]
  },
  {
    "name": "AR Rahman",
    "banglaName": "এ আর রহমান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Indian",
    "profession": "Music Composer",
    "knownFor": "Mozart of Madras, Slumdog Millionaire",
    "hints": [
      "১. তাঁকে 'মাদ্রাজ অব মোজার্ট' বলা হয়।",
      "২. তিনি ভারতীয় সংগীতকে বিশ্ব দরবারে নতুন উচ্চতায় নিয়ে গেছেন।",
      "৩. 'স্লামডগ মিলিওনেয়ার' মুভির জন্য তিনি অস্কার পুরস্কার পান।",
      "৪. 'জয় হো' তাঁর বিশ্ববিখ্যাত একটি গান।",
      "৫. তাঁর মিউজিক স্টাইল এবং সুর অত্যন্ত অনন্য ও আধুনিক।"
    ]
  },
  {
    "name": "Kazi Nazrul Islam",
    "banglaName": "কাজী নজরুল ইসলাম",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Bangladeshi",
    "profession": "Poet / Musician",
    "knownFor": "Rebel Poet, Bidrohi",
    "hints": [
      "১. তাঁকে বাংলাদেশের 'জাতীয় কবি' বলা হয়।",
      "২. শোষণের বিরুদ্ধে তাঁর অগ্নিঝরা লেখনীর জন্য তিনি 'বিদ্রোহী কবি' নামে পরিচিত।",
      "৩. তাঁর বিখ্যাত কবিতা 'বিদ্রোহী' বাংলা সাহিত্যের এক অনন্য সম্পদ।",
      "৪. তিনি প্রায় তিন হাজার গান রচনা করেছেন যা 'নজরুল গীতি' নামে পরিচিত।",
      "৫. তাঁর সৃষ্টিকর্ম আমাদের স্বাধীনতা যুদ্ধে এক বিশাল অনুপ্রেরণা ছিল।"
    ]
  },
  {
    "name": "Humayun Ahmed",
    "banglaName": "হুমায়ূন আহমেদ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Bangladeshi",
    "profession": "Author / Filmmaker",
    "knownFor": "Himu, Misir Ali",
    "hints": [
      "১. তিনি আধুনিক বাংলা সাহিত্যের সবচেয়ে জনপ্রিয় কথাসাহিত্যিক ছিলেন।",
      "২. 'হিমু' এবং 'মিসির আলী' তাঁর অমর দুটি কাল্পনিক চরিত্র।",
      "৩. তিনি অনেক কালজয়ী নাটক এবং সিনেমা পরিচালনা করেছেন।",
      "৪. মধ্যবিত্ত বাঙালির জীবনের খুঁটিনাটি তাঁর লেখায় অদ্ভুতভাবে উঠে আসত।",
      "৫. তাঁর তৈরি করা 'নুহাশ পল্লী' এখন একটি জনপ্রিয় পর্যটন কেন্দ্র।"
    ]
  },
  {
    "name": "Zainul Abedin",
    "banglaName": "জয়নুল আবেদিন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Bangladeshi",
    "profession": "Painter",
    "knownFor": "Famine Sketches, Shilpacharya",
    "hints": [
      "১. তাঁকে বাংলাদেশের আধুনিক শিল্পকলা আন্দোলনের পথিকৃৎ মনে করা হয়।",
      "২. ১৯৪৩ সালের দুর্ভিক্ষের ওপর করা তাঁর স্কেচগুলো বিশ্বজুড়ে বিখ্যাত।",
      "৩. তাঁকে ভালোবেসে 'শিল্পাচার্য' উপাধিতে ভূষিত করা হয়েছে।",
      "৪. তিনি ঢাকা বিশ্ববিদ্যালয়ের চারুকলা ইনস্টিটিউট প্রতিষ্ঠা করেন।",
      "৫. তাঁর দীর্ঘতম চিত্রকর্ম 'নবান্ন' বাংলার সংস্কৃতির এক প্রতিচ্ছবি।"
    ]
  },
  {
    "name": "Lalon Shah",
    "banglaName": "লালন শাহ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Bangladeshi",
    "profession": "Mystic / Philosopher",
    "knownFor": "Baul Music, Lalon Geeti",
    "hints": [
      "১. তিনি বাংলার এক মহান বাউল সাধক এবং মরমী কবি।",
      "২. তাঁর গানে মানুষ এবং মানবতার জয়গান গাওয়া হয়েছে।",
      "৩. তাঁর গানগুলো 'লালন গীতি' নামে বিশ্বব্যাপী জনপ্রিয়।",
      "৪. তিনি কুষ্টিয়ার ছেঁউড়িয়ায় তাঁর আখড়া বা আস্তানা গড়েছিলেন।",
      "৫. তিনি জাতি-ধর্মের ঊর্ধ্বে উঠে মানুষের পরিচয়ে বিশ্বাস করতেন।"
    ]
  },
  {
    "name": "George Washington",
    "banglaName": "জর্জ ওয়াশিংটন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "1st US President",
    "knownFor": "Father of the Country",
    "hints": [
      "১. তিনি মার্কিন যুক্তরাষ্ট্রের প্রথম রাষ্ট্রপতি ছিলেন।",
      "২. আমেরিকার স্বাধীনতা যুদ্ধের সময় তিনি মহাদেশীয় সেনাবাহিনীর প্রধান ছিলেন।",
      "৩. তাঁকে আমেরিকার 'জাতির জনক' হিসেবে গণ্য করা হয়।",
      "৪. ১ ডলারের নোটে তাঁর ছবি রয়েছে।",
      "৫. তাঁর নেতৃত্বেই আমেরিকা ব্রিটিশ শাসন থেকে মুক্ত হয়েছিল।"
    ]
  },
  {
    "name": "Benjamin Franklin",
    "banglaName": "বেঞ্জামিন ফ্রাঙ্কলিন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "American",
    "profession": "Polymath / Founding Father",
    "knownFor": "Electricity experiments,  bill",
    "hints": [
      "১. তিনি আমেরিকার একজন অত্যন্ত প্রভাবশালী বহুবিদ এবং রাষ্ট্রনায়ক।",
      "২. ঘুড়ি উড়িয়ে বজ্রপাতের সময় বিদ্যুৎ নিয়ে তাঁর পরীক্ষা বিশ্ববিখ্যাত।",
      "৩. তিনি আমেরিকার ১০০ ডলারের নোটে চিত্রিত আছেন।",
      "৪. তিনি বজ্রনিরোধক দণ্ড বা লাইটনিং রড আবিষ্কার করেছিলেন।",
      "৫. আমেরিকার স্বাধীনতার ঘোষণাপত্র তৈরিতে তাঁর গুরুত্বপূর্ণ ভূমিকা ছিল।"
    ]
  },
  {
    "name": "Rosa Parks",
    "banglaName": "রোজা পার্কস",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "American",
    "profession": "Civil Rights Activist",
    "knownFor": "Montgomery bus boycott",
    "hints": [
      "১. তিনি আমেরিকার নাগরিক অধিকার আন্দোলনের এক সাহসী নেত্রী।",
      "২. বাসে একজন শ্বেতাঙ্গকে সিট ছেড়ে না দেওয়ার মাধ্যমে তিনি প্রতিবাদ শুরু করেন।",
      "৩. তাঁর এই পদক্ষেপ মন্টগোমারি বাস বর্জন আন্দোলনের সূচনা করে।",
      "৪. তাঁকে 'নাগরিক অধিকার আন্দোলনের মাতা' বলা হয়।",
      "৫. বর্ণবৈষম্যের বিরুদ্ধে তাঁর এই সংগ্রাম সারাবিশ্বে আলোচিত।"
    ]
  },
  {
    "name": "J.R.R. Tolkien",
    "banglaName": "জে আর আর টলকিন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Author",
    "knownFor": "The Lord of the Rings",
    "hints": [
      "১. তিনি আধুনিক ফ্যান্টাসি বা কল্পকাহিনী সাহিত্যের জনক হিসেবে পরিচিত।",
      "২. তাঁর অমর সৃষ্টি 'দ্য লর্ড অফ দ্য রিংস' এবং 'দ্য হবিট'।",
      "৩. তিনি একজন অত্যন্ত পণ্ডিত ভাষাবিদ এবং অধ্যাপক ছিলেন।",
      "৪. তিনি তাঁর গল্পের জন্য নিজস্ব ভাষা এবং মানচিত্র তৈরি করেছিলেন।",
      "৫. তাঁর বইগুলো নিয়ে সফল চলচ্চিত্র সিরিজ তৈরি হয়েছে।"
    ]
  },
  {
    "name": "Haruki Murakami",
    "banglaName": "হারুকি মুরাকামি",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Japanese",
    "profession": "Author",
    "knownFor": "Norwegian Wood, Kafka on the Shore",
    "hints": [
      "১. তিনি সমকালীন বিশ্বের অন্যতম জনপ্রিয় এবং প্রভাবশালী জাপানি লেখক।",
      "২. তাঁর লেখায় পরাবাস্তববাদ বা মেটাফিজিক্যাল এলিমেন্ট থাকে।",
      "৩. 'নরওয়েজিয়ান উড' তাঁর অন্যতম জনপ্রিয় উপন্যাস।",
      "৪. তাঁর বইগুলো বিশ্বজুড়ে ৫০টিরও বেশি ভাষায় অনূদিত হয়েছে।",
      "৫. তিনি তাঁর সকালের দৌড় এবং জ্যাজ সংগীতের প্রতি ভালোবাসার জন্য পরিচিত।"
    ]
  },
  {
    "name": "Neil Gaiman",
    "banglaName": "নিল গেমান",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "British",
    "profession": "Author / Screenwriter",
    "knownFor": "The Sandman, American Gods",
    "hints": [
      "১. তিনি সমকালীন সাহিত্যের এক অত্যন্ত সৃষ্টিশীল এবং প্রতিভাবান লেখক।",
      "২. তাঁর কমিক সিরিজ 'দ্য স্যান্ডম্যান' বিশ্বজুড়ে এক মাস্টারপিস হিসেবে গণ্য।",
      "৩. তিনি 'আমেরিকান গডস' এবং 'কোরালিন' এর মতো চমৎকার বই লিখেছেন।",
      "৪. তাঁর গল্পগুলোতে কল্পনা ও বাস্তবের এক অদ্ভুত মিশেল থাকে।",
      "৫. তিনি অনেক নামী সাহিত্য পুরস্কার এবং কমিকস অ্যাওয়ার্ড জিতেছেন।"
    ]
  },
  {
    "name": "Roald Dahl",
    "banglaName": "রোল্ড ডাল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Author",
    "knownFor": "Charlie and the Chocolate Factory",
    "hints": [
      "১. তিনি বিশ্বের অন্যতম শ্রেষ্ঠ কিশোর সাহিত্যিক হিসেবে পরিচিত।",
      "২. তাঁর 'চার্লি অ্যান্ড দ্য চকলেট ফ্যাক্টরি' এবং 'মাটিল্ডা' বিশ্ববিখ্যাত বই।",
      "৩. তাঁর গল্পগুলোতে চমৎকার হাস্যরস এবং অদ্ভুত সব মোচড় থাকে।",
      "৪. তিনি দ্বিতীয় বিশ্বযুদ্ধের সময় একজন ফাইটার পাইলট ছিলেন।",
      "৫. তাঁর বইগুলো থেকে অনেক সফল চলচ্চিত্র এবং থিয়েটার নাটক তৈরি হয়েছে।"
    ]
  },
  {
    "name": "Marcus Aurelius",
    "banglaName": "মার্কাস অরেলিয়াস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Roman",
    "profession": "Emperor / Philosopher",
    "knownFor": "Stoicism, Meditations",
    "hints": [
      "১. তিনি রোম সাম্রাজ্যের একজন মহান সম্রাট এবং দার্শনিক ছিলেন।",
      "২. তাঁকে 'দার্শনিক রাজা' বলা হয়।",
      "৩. তাঁর বিখ্যাত গ্রন্থ 'মেডিটেশনস' (Meditations) স্টোয়িক দর্শনের এক অনন্য দলিল।",
      "৪. তিনি কঠিন যুদ্ধ এবং মহামারীর মধ্যেও শান্ত থেকে শাসন করেছিলেন।",
      "৫. তাঁর দর্শন আজও মানুষকে ধৈর্য ও আত্মনিয়ন্ত্রণের শিক্ষা দেয়।"
    ]
  },
  {
    "name": "Laozi",
    "banglaName": "লাওজি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Chinese",
    "profession": "Philosopher",
    "knownFor": "Taoism, Tao Te Ching",
    "hints": [
      "১. তিনি প্রাচীন চীনের একজন মহান দার্শনিক এবং তাওবাদের প্রবর্তক।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'তাও তে চিং' (Tao Te Ching)।",
      "৩. তিনি প্রকৃতির সাথে মিলেমিশে সহজ জীবনযাপনের কথা বলতেন।",
      "৪. তাঁকে একজন রহস্যময় জ্ঞানী ব্যক্তিত্ব হিসেবে গণ্য করা হয়।",
      "৫. কনফুসিয়াসের সাথে তাঁর দার্শনিক আলোচনা আজও বিখ্যাত।"
    ]
  },
  {
    "name": "Sun Tzu",
    "banglaName": "সান জু",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Chinese",
    "profession": "General / Strategist",
    "knownFor": "The Art of War",
    "hints": [
      "১. তিনি প্রাচীন চীনের একজন মহান সামরিক সেনাপতি এবং রণকৌশলী।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'দ্য আর্ট অব ওয়ার' (The Art of War) আজও বিশ্বজুড়ে পঠিত।",
      "৩. তিনি যুদ্ধ না করে জয়ী হওয়ার কৌশলের ওপর জোর দিতেন।",
      "৪. তাঁর নীতিগুলো ব্যবসা এবং রাজনীতিতেও ব্যবহৃত হয়।",
      "৫. তিনি মনে করতেন যে কোনো লড়াইয়ের আগে প্রতিপক্ষকে জানা সবচেয়ে জরুরি।"
    ]
  },
  {
    "name": "Omar Khayyam",
    "banglaName": "ওমর খৈয়াম",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Persian",
    "profession": "Poet / Mathematician",
    "knownFor": "Rubaiyat",
    "hints": [
      "১. তিনি পারস্যের একজন মহান কবি, গণিতবিদ এবং জ্যোতির্বিজ্ঞানী।",
      "২. তাঁর চতুষ্পদী কবিতা বা 'রুবাইয়াত' বিশ্বসাহিত্যের অমূল্য সম্পদ।",
      "৩. তিনি আধুনিক ক্যালেন্ডার সংস্কারে গুরুত্বপূর্ণ ভূমিকা রেখেছিলেন।",
      "৪. তিনি বীজগণিত এবং জ্যামিতিতে অনেক মৌলিক অবদান রেখেছেন।",
      "৫. তাঁর কবিতায় জীবন, মরণ এবং বর্তমান মুহূর্তকে উপভোগের কথা ফুটে ওঠে।"
    ]
  },
  {
    "name": "Rumi",
    "banglaName": "জালালউদ্দিন রুমি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Persian",
    "profession": "Poet / Sufi Mystic",
    "knownFor": "Masnavi, Spiritual Love",
    "hints": [
      "১. তিনি ত্রয়োদশ শতাব্দীর একজন মহান পারস্য কবি এবং সুফি সাধক।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'মসনবী' আধ্যাত্মিকতার এক বিশাল ভাণ্ডার।",
      "৩. তাঁর কবিতায় ঐশ্বরিক প্রেম এবং মানবতার বাণী ফুটে ওঠে।",
      "৪. তিনি 'মৌলভী' নামেও পরিচিত এবং তাঁর অনুসারীদের মৌলভী তরীকা আজও সক্রিয়।",
      "৫. বর্তমানে তিনি বিশ্বজুড়ে সবচেয়ে বেশি পঠিত কবিদের একজন।"
    ]
  },
  {
    "name": "Ibn Sina",
    "banglaName": "ইবনে সিনা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Persian",
    "profession": "Physician / Philosopher",
    "knownFor": "Avicenna, The Canon of Medicine",
    "hints": [
      "১. তাঁকে আধুনিক চিকিৎসা বিজ্ঞানের অন্যতম প্রধান জনক মনে করা হয়।",
      "২. পশ্চিমা বিশ্বে তিনি 'আভিসিনা' নামে পরিচিত।",
      "৩. তাঁর লেখা 'দ্য কানুন ফিত তিব্ব' বা চিকিৎসা শাস্ত্রের কানুন কয়েকশ বছর ধরে পাঠ্য ছিল।",
      "৪. তিনি একাধারে বিজ্ঞানী, দার্শনিক এবং গণিতবিদ ছিলেন।",
      "৫. তাঁর চিকিৎসা পদ্ধতি মধ্যযুগের অন্ধকার কাটিয়ে আধুনিক পথ দেখিয়েছিল।"
    ]
  },
  {
    "name": "Al-Khwarizmi",
    "banglaName": "আল-খাওয়ারিজমি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Persian",
    "profession": "Mathematician / Astronomer",
    "knownFor": "Algebra, Algorithms",
    "hints": [
      "১. তাঁকে বীজগণিত বা অ্যালজেবরা (Algebra) এর জনক বলা হয়।",
      "২. তাঁর নাম থেকেই আধুনিক কম্পিউটার বিজ্ঞানের 'অ্যালগরিদম' শব্দটি এসেছে।",
      "৩. তিনি দশমিক সংখ্যা পদ্ধতি এবং শূন্যের ব্যবহার জনপ্রিয় করেছিলেন।",
      "৪. তাঁর কাজগুলো গণিত শাস্ত্রের ইতিহাসে এক বিশাল বিপ্লব ঘটিয়েছিল।",
      "৫. তিনি বাগদাদের 'বায়তুল হিকমাহ' বা হাউজ অব উইজডম-এর প্রধান ছিলেন।"
    ]
  },
  {
    "name": "Ibn Battuta",
    "banglaName": "ইবনে বতুতা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Moroccan",
    "profession": "Explorer / Scholar",
    "knownFor": "World Travels, Rihla",
    "hints": [
      "১. তিনি ইতিহাসের একজন বিশ্ববিখ্যাত পর্যটক এবং লেখক।",
      "২. তিনি দীর্ঘ ৩০ বছর ধরে এশিয়া, আফ্রিকা এবং ইউরোপের বড় অংশ ভ্রমণ করেছিলেন।",
      "৩. তিনি চতুর্দশ শতাব্দীতে বাংলায় এসেছিলেন এবং এখানকার মানুষের বর্ণনা লিখেছিলেন।",
      "৪. তাঁর ভ্রমণ কাহিনী 'রিহলা' নামক গ্রন্থে সংকলিত হয়েছে।",
      "৫. তিনি তাঁর সময়ে মার্কো পোলোর চেয়েও বেশি পথ ভ্রমণ করেছিলেন।"
    ]
  },
  {
    "name": "David Attenborough",
    "banglaName": "ডেভিড অ্যাটেনবরো",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "British",
    "profession": "Naturalist / Broadcaster",
    "knownFor": "Nature Documentaries, Planet Earth",
    "hints": [
      "১. তিনি বিশ্বের সবচেয়ে বিখ্যাত প্রকৃতি ও বন্যপ্রাণী বিষয়ক উপস্থাপক।",
      "২. তাঁর শান্ত ও গম্ভীর কণ্ঠস্বর বিবিসির প্রকৃতি বিষয়ক ডকুমেন্টারির অবিচ্ছেদ্য অংশ।",
      "৩. 'প্ল্যানেট আর্থ' এবং 'লাইফ অন আর্থ' তাঁর উল্লেখযোগ্য সিরিজ।",
      "৪. তিনি জলবায়ু পরিবর্তন এবং পরিবেশ রক্ষায় বিশ্বজুড়ে সোচ্চার।",
      "৫. তিনি প্রায় ৭০ বছর ধরে টেলিভিশনে বন্যপ্রাণী নিয়ে কাজ করছেন।"
    ]
  },
  {
    "name": "Jane Goodall",
    "banglaName": "জেন গুডঅল",
    "category": "global",
    "gender": "female",
    "isAlive": true,
    "nationality": "British",
    "profession": "Primatologist / Activist",
    "knownFor": "Study of Chimpanzees",
    "hints": [
      "১. তিনি শিম্পাঞ্জি নিয়ে গবেষণার জন্য বিশ্ববিখ্যাত এক বিজ্ঞানী।",
      "২. তিনি তানজানিয়ায় দীর্ঘ সময় বুনো শিম্পাঞ্জিদের সাথে কাটিয়েছেন।",
      "৩. তিনি প্রথম প্রমাণ করেছিলেন যে শিম্পাঞ্জিরাও সরঞ্জাম ব্যবহার করতে পারে।",
      "৪. তিনি বর্তমানে বন্যপ্রাণী ও পরিবেশ রক্ষায় একজন বৈশ্বিক দূত।",
      "৫. তাঁর কাজ প্রাণিবিজ্ঞানের ধারণাকে আমূল বদলে দিয়েছে।"
    ]
  },
  {
    "name": "Steve Irwin",
    "banglaName": "স্টিভ আরউইন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Australian",
    "profession": "Naturalist / TV Star",
    "knownFor": "The Crocodile Hunter",
    "hints": [
      "১. তাঁকে সারা বিশ্বের মানুষ 'ক্রোকোডাইল হান্টার' নামে চেনে।",
      "২. কুমির এবং বিপজ্জনক সাপ নিয়ে তাঁর দুঃসাহসিক কাজগুলো টেলিভিশনে অত্যন্ত জনপ্রিয় ছিল।",
      "৩. তিনি বন্যপ্রাণী সংরক্ষণ এবং ভালোবাসার প্রচার করতেন।",
      "৪. তাঁর সিগনেচার উক্তি ছিল—'CRIKEY!'।",
      "৫. ২০০৬ সালে সমুদ্রের নিচে স্টিংরে মাছের আঘাতে তাঁর মর্মান্তিক মৃত্যু হয়।"
    ]
  },
  {
    "name": "Reinhold Messner",
    "banglaName": "রাইনহোল্ড মেসনার",
    "category": "global",
    "gender": "male",
    "isAlive": true,
    "nationality": "Italian",
    "profession": "Mountaineer",
    "knownFor": "First to climb all 8000m peaks",
    "hints": [
      "১. তাঁকে ইতিহাসের সর্বকালের শ্রেষ্ঠ পর্বতারোহী মনে করা হয়।",
      "২. তিনি বিশ্বের প্রথম মানুষ হিসেবে মাউন্ট এভারেস্টসহ ১৪টি ৮০০০ মিটারের চূড়া জয় করেন।",
      "৩. তিনি প্রথম অক্সিজেন সিলিন্ডার ছাড়াই মাউন্ট এভারেস্ট জয় করেছিলেন।",
      "৪. তিনি একা বা সোলো ক্লাইম্বিংয়ে অত্যন্ত দক্ষ ছিলেন।",
      "৫. তিনি গোবি মরুভূমি এবং গ্রিনল্যান্ডও পায়ে হেঁটে পাড়ি দিয়েছেন।"
    ]
  },
  {
    "name": "Jacques Cousteau",
    "banglaName": "জ্যাক কুস্তো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Oceanographer",
    "knownFor": "Underwater Exploration",
    "hints": [
      "১. তিনি সমুদ্রের গভীরের জগতকে মানুষের সামনে নিয়ে আসা এক মহান অভিযাত্রী।",
      "২. তিনি স্কুবা ডাইভিংয়ের জন্য 'অ্যাকুয়া-লাং' নামক যন্ত্র উদ্ভাবন করেছিলেন।",
      "৩. তাঁর জাহাজ 'ক্যালিপসো' এবং তাঁর লাল টুপি তাঁর বিশেষ পরিচায়ক।",
      "৪. তিনি অসংখ্য সমুদ্র বিষয়ক ডকুমেন্টারি এবং বই তৈরি করেছেন।",
      "৫. তিনি সমুদ্রের ইকোসিস্টেম রক্ষায় সারাজীবন কাজ করেছেন।"
    ]
  },
  {
    "name": "Rachel Carson",
    "banglaName": "র‍্যাচেল কারসন",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "American",
    "profession": "Biologist / Author",
    "knownFor": "Silent Spring",
    "hints": [
      "১. তিনি আধুনিক পরিবেশবাদী আন্দোলনের অন্যতম প্রধান রূপকার।",
      "২. তাঁর বিখ্যাত বই 'সাইলেন্ট স্প্রিং' (Silent Spring) কীটনাশকের ক্ষতিকর প্রভাব নিয়ে লেখা।",
      "৩. এই বইয়ের কারণেই আমেরিকায় ডিডিটি (DDT) নিষিদ্ধ করা হয়েছিল।",
      "৪. তিনি সমুদ্র নিয়ে গবেষণার জন্যও বেশ পরিচিত।",
      "৫. তাঁর সাহস ও বৈজ্ঞানিক তথ্য বিশ্বজুড়ে মানুষের মধ্যে সচেতনতা বাড়িয়েছে।"
    ]
  },
  {
    "name": "Wangari Maathai",
    "banglaName": "ওয়াঙ্গারি মাথাই",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "Kenyan",
    "profession": "Environmentalist / Activist",
    "knownFor": "Green Belt Movement, Nobel Prize",
    "hints": [
      "১. তিনি প্রথম আফ্রিকান নারী হিসেবে ২০০৪ সালে শান্তিতে নোবেল পুরস্কার পান।",
      "২. তিনি কেনিয়ার 'গ্রিন বেল্ট মুভমেন্ট' এর প্রতিষ্ঠাতা যা লক্ষ লক্ষ গাছ রোপণ করেছে।",
      "৩. তিনি পরিবেশ রক্ষা এবং গণতন্ত্রের জন্য সারাজীবন লড়াই করেছেন।",
      "৪. তাঁর কাজ নারী ক্ষমতায়ন ও পরিবেশের টেকসই উন্নয়নে এক বিশাল ভূমিকা রেখেছে।",
      "৫. তিনি তাঁর অদম্য সাহসের জন্য বিশ্বজুড়ে সমাদৃত।"
    ]
  },
  {
    "name": "Saadi Shirazi",
    "banglaName": "শেখ সাদী",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Persian",
    "profession": "Poet / Scholar",
    "knownFor": "Gulistan, Bostan",
    "hints": [
      "১. তিনি মধ্যযুগের একজন মহান পারস্য কবি এবং নীতিবিদ।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'গুলিস্তান' এবং 'বোস্তান' বিশ্বসাহিত্যের অমর সৃষ্টি।",
      "৩. তাঁর কবিতায় নীতিশিক্ষা এবং জীবনের গভীর সত্য ফুটে ওঠে।",
      "৪. তিনি সারাজীবন বিশ্বভ্রমণ করে অর্জিত জ্ঞান তাঁর লেখায় তুলে ধরেছেন।",
      "৫. তাঁর কবিতার একটি লাইন জাতিসংঘের প্রবেশপথে খোদাই করা আছে।"
    ]
  },
  {
    "name": "Ibn Khaldun",
    "banglaName": "ইবনে খালদুন",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Arab / North African",
    "profession": "Historian / Sociologist",
    "knownFor": "Muqaddimah, Father of Sociology",
    "hints": [
      "১. তাঁকে আধুনিক সমাজবিজ্ঞান এবং ইতিহাস লিখন পদ্ধতির অন্যতম জনক মনে করা হয়।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'আল-মুকাদ্দিমাহ' (Muqaddimah) জ্ঞানের এক আকর ভাণ্ডার।",
      "৩. তিনি সমাজের উত্থান-পতন এবং সংস্কৃতির বিবর্তন নিয়ে বিশ্লেষণ করেছেন।",
      "৪. তিনি ইতিহাসের পেছনের বৈজ্ঞানিক কারণগুলো খুঁজে বের করার চেষ্টা করেন।",
      "৫. তাঁর দর্শন আজও সমাজবিজ্ঞানী ও ঐতিহাসিকদের কাছে অত্যন্ত গুরুত্বপূর্ণ।"
    ]
  },
  {
    "name": "Zheng He",
    "banglaName": "ঝেং হে",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Chinese",
    "profession": "Explorer / Admiral",
    "knownFor": "Seven Voyages, Treasure Fleet",
    "hints": [
      "১. তিনি প্রাচীন চীনের এক মহান নৌ-সেনাপতি এবং অভিযাত্রী।",
      "২. তিনি ১৫ শতাব্দীতে এক বিশাল জাহাজ বহর নিয়ে এশিয়া ও আফ্রিকা ভ্রমণ করেন।",
      "৩. তিনি ছিলেন একজন মুসলিম এবং মিং রাজবংশের বিশ্বস্ত সেনাপতি।",
      "৪. তাঁর জাহাজগুলো কলম্বাসের জাহাজের চেয়ে অনেক বেশি বড় ও শক্তিশালী ছিল।",
      "৫. তাঁর মাধ্যমে চীনের সাথে পৃথিবীর অনেক দেশের কূটনৈতিক ও বাণিজ্যিক সম্পর্ক তৈরি হয়।"
    ]
  },
  {
    "name": "Dante Alighieri",
    "banglaName": "দান্তে আলিগিয়েরি",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Italian",
    "profession": "Poet",
    "knownFor": "Divine Comedy",
    "hints": [
      "১. তিনি মধ্যযুগের একজন মহান ইতালীয় কবি।",
      "২. তাঁর অমর সৃষ্টি 'ডিভাইন কমেডি' (Divine Comedy) বিশ্বসাহিত্যের শ্রেষ্ঠতম নিদর্শনগুলোর একটি।",
      "৩. তাঁকে 'আধুনিক ইতালীয় ভাষার জনক' মনে করা হয়।",
      "৪. তাঁর কাব্যে নরক, শুদ্ধিলোক এবং স্বর্গের বর্ণনা রয়েছে।",
      "৫. তাঁর মহাকাব্যিক কবিতা আজও বিশ্বজুড়ে পঠিত ও আলোচিত হয়।"
    ]
  },
  {
    "name": "Miguel de Cervantes",
    "banglaName": "মিগুয়েল দে থের্ভান্তেস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Spanish",
    "profession": "Author",
    "knownFor": "Don Quixote",
    "hints": [
      "১. তিনি স্পেনের সর্বশ্রেষ্ঠ সাহিত্যিক এবং ঔপন্যাসিক।",
      "২. তাঁর বিখ্যাত উপন্যাস 'ডন কিহোতে' (Don Quixote) বিশ্বের প্রথম আধুনিক উপন্যাস হিসেবে গণ্য।",
      "৩. তাঁর হাস্যোদ্দীপক চরিত্র ডন কিহোতে ও সাঞ্চো পাঞ্জা বিশ্ববিখ্যাত।",
      "৪. তিনি একসময় নৌবাহিনীতে কাজ করতেন এবং যুদ্ধে আহত হয়েছিলেন।",
      "৫. তাঁর লেখনী স্প্যানিশ ভাষাকে এক নতুন রূপ দিয়েছিল।"
    ]
  },
  {
    "name": "Voltaire",
    "banglaName": "ভলতেয়ার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Philosopher / Author",
    "knownFor": "Enlightenment, Freedom of Speech",
    "hints": [
      "১. তিনি ফরাসি জ্ঞানদীপ্তি বা এনলাইটেনমেন্ট যুগের অন্যতম প্রধান দার্শনিক।",
      "২. তিনি বাকস্বাধীনতা এবং ধর্মীয় সহনশীলতার পক্ষে আজীবন লড়াই করেছেন।",
      "৩. তাঁর বিখ্যাত উপন্যাস 'ক্যানডিড' (Candide) সামাজিক সমালোচনার এক অনন্য উদাহরণ।",
      "৪. তিনি তাঁর তীক্ষ্ণ হাস্যরস এবং বুদ্ধিবৃত্তিক লেখনীর জন্য পরিচিত।",
      "৫. তাঁর দর্শন ফরাসি বিপ্লবের পেছনে এক বিশাল অনুপ্রেরণা হিসেবে কাজ করেছে।"
    ]
  },
  {
    "name": "Jean-Jacques Rousseau",
    "banglaName": "জঁ-জাক রুসো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Swiss / French",
    "profession": "Philosopher",
    "knownFor": "The Social Contract",
    "hints": [
      "১. তিনি এনলাইটেনমেন্ট যুগের একজন অত্যন্ত প্রভাবশালী দার্শনিক এবং লেখক।",
      "২. তাঁর বিখ্যাত উক্তি হলো—'মানুষ স্বাধীন হয়ে জন্মায়, কিন্তু সর্বত্র সে শৃঙ্খলিত'।",
      "৩. তাঁর 'দ্য সোশ্যাল কন্ট্রাক্ট' বইটির মাধ্যমে তিনি আধুনিক গণতন্ত্রের ভিত্তি স্থাপন করেন।",
      "৪. তিনি মনে করতেন মানুষের প্রকৃতিগত অবস্থা ছিল অনেক বেশি পবিত্র।",
      "৫. তাঁর রাজনৈতিক দর্শন ফরাসি বিপ্লবকে সরাসরি প্রভাবিত করেছিল।"
    ]
  },
  {
    "name": "Adam Smith",
    "banglaName": "অ্যাডাম স্মিথ",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Scottish",
    "profession": "Economist / Philosopher",
    "knownFor": "The Wealth of Nations, Father of Economics",
    "hints": [
      "১. তাঁকে আধুনিক অর্থনীতি শাস্ত্রের জনক বলা হয়।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'দ্য ওয়েলথ অফ নেশনস' (The Wealth of Nations)।",
      "৩. তিনি 'অদৃশ্য হাত' (Invisible Hand) এর ধারণা প্রবর্তন করেছিলেন।",
      "৪. মুক্ত বাজার অর্থনীতি এবং পুঁজিবাদের প্রসারে তাঁর তত্ত্বগুলো অত্যন্ত গুরুত্বপূর্ণ।",
      "৫. তিনি স্কটল্যান্ডের এনলাইটেনমেন্ট আন্দোলনের অন্যতম প্রধান ব্যক্তিত্ব ছিলেন।"
    ]
  },
  {
    "name": "John Locke",
    "banglaName": "জন লক",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Philosopher",
    "knownFor": "Father of Liberalism",
    "hints": [
      "১. তাঁকে আধুনিক উদারনীতিবাদ বা লিবারেলিজমের জনক বলা হয়।",
      "২. তিনি মনে করতেন মানুষের মন জন্মের সময় একটি সাদা কাগজ বা 'তাবুলা রাসা' এর মতো থাকে।",
      "৩. তাঁর রাজনৈতিক দর্শনে জীবন, স্বাধীনতা এবং সম্পত্তির অধিকারের কথা বলা হয়েছে।",
      "৪. তাঁর চিন্তাধারা আমেরিকার স্বাধীনতার ঘোষণাপত্রে বিশাল প্রভাব ফেলেছিল।",
      "৫. তিনি এনলাইটেনমেন্ট যুগের অন্যতম প্রভাবশালী চিন্তাবিদ।"
    ]
  },
  {
    "name": "Friedrich Nietzsche",
    "banglaName": "ফ্রেডরিখ নিৎশে",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "German",
    "profession": "Philosopher",
    "knownFor": "Thus Spoke Zarathustra, Ubermensch",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর দর্শনের ওপর বিশাল প্রভাব ফেলা একজন জার্মান দার্শনিক।",
      "২. তাঁর 'ঈশ্বর মৃত' উক্তিটি বিশ্বজুড়ে অত্যন্ত আলোচিত ও বিতর্কিত।",
      "৩. তিনি 'উবারমেনশ' বা অতিমানব ধারণার প্রবর্তক।",
      "৪. তাঁর লেখনী ছিল অত্যন্ত কাব্যিক এবং অনেক সময় বিমূর্ত।",
      "৫. অস্তিত্ববাদ এবং আধুনিক মনস্তত্ত্বের বিকাশে তাঁর দর্শন অত্যন্ত গুরুত্বপূর্ণ।"
    ]
  },
  {
    "name": "Immanuel Kant",
    "banglaName": "ইমানুয়েল কান্ট",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "German",
    "profession": "Philosopher",
    "knownFor": "Critique of Pure Reason",
    "hints": [
      "১. তাঁকে আধুনিক দর্শনের অন্যতম প্রধান স্তম্ভ মনে করা হয়।",
      "২. তাঁর 'ক্রিটিক অব পিওর রিজন' বইটি দর্শনের ইতিহাসের এক বিশাল মাইলফলক।",
      "৩. তিনি নৈতিকতা এবং জ্ঞানের সীমানা নিয়ে অত্যন্ত জটিল বিশ্লেষণ করেছেন।",
      "৪. তাঁর দর্শনকে 'ট্রানসেনডেন্টাল আইডিয়ালিজম' বলা হয়।",
      "৫. তাঁর চিন্তাধারা পশ্চিমা দর্শনকে সম্পূর্ণ নতুন এক ভিত্তি দিয়েছিল।"
    ]
  },
  {
    "name": "Jean-Paul Sartre",
    "banglaName": "জঁ-পল সার্ত্র",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Philosopher / Author",
    "knownFor": "Existentialism, Nobel Refusal",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর অন্যতম শ্রেষ্ঠ অস্তিত্ববাদী দার্শনিক।",
      "২. তিনি ১৯৬৪ সালে সাহিত্যে নোবেল পুরস্কার প্রত্যাখ্যান করেছিলেন।",
      "৩. তিনি মনে করতেন মানুষের অস্তিত্বই তার সারমর্ম তৈরি করে।",
      "৪. তাঁর বিখ্যাত উপন্যাস 'নসিয়া' (Nausea) এবং নাটক 'নো এক্সিট'।",
      "৫. তিনি তাঁর জীবনসঙ্গিনী সিমোন দ্য বোভোয়ারের সাথে মিলে অনেক রাজনৈতিক আন্দোলন করেছেন।"
    ]
  },
  {
    "name": "Simone de Beauvoir",
    "banglaName": "সিমোন দ্য বোভোয়ার",
    "category": "global",
    "gender": "female",
    "isAlive": false,
    "nationality": "French",
    "profession": "Philosopher / Author",
    "knownFor": "The Second Sex, Feminism",
    "hints": [
      "১. তিনি আধুনিক নারীবাদের অন্যতম প্রধান পথপ্রদর্শক এবং দার্শনিক।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'দ্য সেকেন্ড সেক্স' (The Second Sex) নারীবাদের এক গুরুত্বপূর্ণ দলিল।",
      "৩. তিনি জঁ-পল সার্ত্রের জীবনসঙ্গিনী ছিলেন এবং একসাথে অনেক কাজ করেছেন।",
      "৪. তিনি মনে করতেন নারী হয়ে কেউ জন্মায় না, বরং সমাজ তাকে নারী করে তোলে।",
      "৫. তাঁর লেখনী সারাবিশ্বে নারীর অধিকার ও সচেতনতা বৃদ্ধিতে বিশাল ভূমিকা রেখেছে।"
    ]
  },
  {
    "name": "Homer",
    "banglaName": "হোমার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Poet",
    "knownFor": "Iliad, Odyssey",
    "hints": [
      "১. তিনি প্রাচীন গ্রিসের এক কিংবদন্তী মহাকবি।",
      "২. তাঁর রচিত 'ইলিয়াড' এবং 'ওডিসি' বিশ্বসাহিত্যের প্রাচীনতম ও শ্রেষ্ঠ মহাকাব্য।",
      "৩. ট্রোজান যুদ্ধ এবং ওডিসিউসের ভ্রমণের কাহিনী তিনি তাঁর কাব্যে বর্ণনা করেছেন।",
      "৪. মনে করা হয় তিনি অন্ধ ছিলেন এবং মুখে মুখে এই বিশাল কাব্যগুলো রচনা করেছিলেন।",
      "৫. তাঁর মহাকাব্যগুলো পশ্চিমা সাহিত্যের ভিত্তি স্থাপন করেছে।"
    ]
  },
  {
    "name": "Molière",
    "banglaName": "মলিয়ের",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Playwright / Actor",
    "knownFor": "Satirical Comedies",
    "hints": [
      "১. তিনি ফরাসি সাহিত্যের সর্বশ্রেষ্ঠ নাট্যকার এবং কমেডিয়ান।",
      "২. তাঁর ব্যঙ্গাত্মক নাটকগুলো সমাজের ভণ্ডামি এবং কুসংস্কারকে উন্মোচিত করত।",
      "৩. 'তারতুফে' এবং 'দ্য মাইজার' তাঁর অত্যন্ত জনপ্রিয় নাটক।",
      "৪. তিনি রাজা চতুর্দশ লুইয়ের পৃষ্ঠপোষকতা পেয়েছিলেন।",
      "৫. অভিনয়ের মাধ্যমেই তিনি বিশ্বজুড়ে হাসির জাদুকর হিসেবে পরিচিতি পান।"
    ]
  },
  {
    "name": "Geoffrey Chaucer",
    "banglaName": "জেফ্রি চসার",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "British",
    "profession": "Poet",
    "knownFor": "The Canterbury Tales, Father of English Literature",
    "hints": [
      "১. তাঁকে 'ইংরেজি সাহিত্যের জনক' বলা হয়।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'দ্য ক্যান্টারবেরি টেলস' (The Canterbury Tales) মধ্যযুগের এক অনন্য সৃষ্টি।",
      "৩. তিনি প্রথম ইংরেজ লেখক যিনি সাধারণ মানুষের ভাষায় সাহিত্য চর্চা শুরু করেন।",
      "৪. তাঁর কাব্যে তৎকালীন ব্রিটিশ সমাজের বৈচিত্র্যময় চিত্র ফুটে উঠেছে।",
      "৫. তিনি রাজদরবারের উচ্চপদে আসীন ছিলেন এবং একজন সফল কূটনীতিক ছিলেন।"
    ]
  },
  {
    "name": "Virgil",
    "banglaName": "ভার্জিল",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Roman",
    "profession": "Poet",
    "knownFor": "Aeneid",
    "hints": [
      "১. তিনি প্রাচীন রোমের সর্বশ্রেষ্ঠ মহাকবি।",
      "২. তাঁর রচিত 'ইনিড' (Aeneid) রোমান সাম্রাজ্যের গৌরবগাথা নিয়ে লেখা এক অমর মহাকাব্য।",
      "৩. তাঁর কবিতা ল্যাটিন সাহিত্যের স্বর্ণযুগের অন্যতম নিদর্শন।",
      "৪. দান্তের 'ডিভাইন কমেডি'-তে তাঁকে এক বিশেষ পথপ্রদর্শক হিসেবে দেখানো হয়েছে।",
      "৫. তাঁর শৈল্পিক লেখনী পরবর্তী বহু কবিকে অনুপ্রাণিত করেছে।"
    ]
  },
  {
    "name": "Sophocles",
    "banglaName": "সোফোক্লিস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Playwright",
    "knownFor": "Oedipus Rex, Antigone",
    "hints": [
      "১. তিনি প্রাচীন গ্রিসের অন্যতম শ্রেষ্ঠ ট্র্যাজেডি নাট্যকার।",
      "২. তাঁর রচিত 'এডিসাস রেক্স' বা রাজা এডিপাস বিশ্বনাট্য সাহিত্যের এক অমর সৃষ্টি।",
      "৩. তিনি নাটকে মানুষের নিয়তি এবং সংঘাতকে অত্যন্ত চমৎকারভাবে ফুটিয়ে তুলেছেন।",
      "৪. তাঁর নাটকগুলো আজও বিশ্বজুড়ে মঞ্চস্থ হয় এবং পাঠ করা হয়।",
      "৫. তিনি নাট্যতত্ত্বের বিকাশে গুরুত্বপূর্ণ ভূমিকা রেখেছিলেন।"
    ]
  },
  {
    "name": "Euripides",
    "banglaName": "ইউরিপিডিস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Playwright",
    "knownFor": "Medea, Electra",
    "hints": [
      "১. তিনি প্রাচীন গ্রিসের অন্যতম প্রভাবশালী ট্র্যাজেডি নাট্যকার।",
      "২. তাঁর নাটকে মানুষের আবেগ এবং মনস্তাত্ত্বিক জটিলতা ফুটে উঠত।",
      "৩. 'মেডিয়া' এবং 'ইলেক্ট্রা' তাঁর উল্লেখযোগ্য জনপ্রিয় নাটক।",
      "৪. তিনি তাঁর সময়ে প্রথাগত অনেক রীতির পরিবর্তন এনেছিলেন।",
      "৫. তাঁর লেখনী আধুনিক নাট্য সাহিত্যের বিকাশে বিশাল প্রভাব ফেলেছে।"
    ]
  },
  {
    "name": "Thucydides",
    "banglaName": "থুসিডাইডিস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Historian",
    "knownFor": "History of the Peloponnesian War",
    "hints": [
      "১. তাঁকে বৈজ্ঞানিক ইতিহাস রচনার অন্যতম জনক মনে করা হয়।",
      "২. তাঁর বিখ্যাত গ্রন্থ 'হিস্ট্রি অফ দ্য পেলোপনেশিয়ান ওয়ার' গ্রীক যুদ্ধের এক বিশাল দলিল।",
      "৩. তিনি ইতিহাসের বর্ণনায় কল্পনা ও মিথের বদলে সত্য ও প্রমাণের ওপর জোর দিতেন।",
      "৪. রাজনীতি এবং ক্ষমতার সংঘাত নিয়ে তাঁর বিশ্লেষণ আজও অত্যন্ত প্রাসঙ্গিক।",
      "৫. তিনি মনে করতেন ইতিহাস থেকে শিক্ষা নিয়ে ভবিষ্যৎকে বোঝা সম্ভব।"
    ]
  },
  {
    "name": "Herodotus",
    "banglaName": "হেরোডোটাস",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "Greek",
    "profession": "Historian",
    "knownFor": "Father of History",
    "hints": [
      "১. তাঁকে 'ইতিহাসের জনক' বলা হয়।",
      "২. তিনিই প্রথম মানুষ যিনি পদ্ধতিগতভাবে ইতিহাসের তথ্য সংগ্রহ ও বর্ণনা করেছিলেন।",
      "৩. তাঁর বিখ্যাত গ্রন্থ 'দ্য হিস্ট্রিস' (The Histories) প্রাচীন বিশ্বের অনেক কাহিনী তুলে ধরে।",
      "৪. তিনি পারস্য ও গ্রিসের যুদ্ধের কাহিনী অত্যন্ত চমৎকারভাবে বর্ণনা করেছেন।",
      "৫. তাঁর বর্ণনায় অনেক কিম্বদন্তী ও লোকগাঁথাও স্থান পেয়েছে।"
    ]
  },
  {
    "name": "Michel Foucault",
    "banglaName": "মিশেল ফুকো",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Philosopher / Historian",
    "knownFor": "Discipline and Punish, Power/Knowledge",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর অন্যতম প্রভাবশালী ফরাসি দার্শনিক এবং ইতিহাসবিদ।",
      "২. তিনি ক্ষমতা এবং জ্ঞানের মধ্যকার সম্পর্ক নিয়ে নতুন দৃষ্টিভঙ্গি দিয়েছিলেন।",
      "৩. তাঁর বিখ্যাত গ্রন্থ 'ডিসিপ্লিন অ্যান্ড পানিশ' কারাগার ও নজরদারি নিয়ে লেখা।",
      "৪. তিনি সামাজিক প্রতিষ্ঠানগুলোর বিবর্তন নিয়ে কাজ করেছেন।",
      "৫. তাঁর চিন্তাধারা সমাজবিজ্ঞান ও দর্শনে এক বিশাল পরিবর্তন এনেছে।"
    ]
  },
  {
    "name": "Jacques Derrida",
    "banglaName": "জাক দেরিদা",
    "category": "global",
    "gender": "male",
    "isAlive": false,
    "nationality": "French",
    "profession": "Philosopher",
    "knownFor": "Deconstruction",
    "hints": [
      "১. তিনি বিংশ শতাব্দীর এক বিশ্ববিখ্যাত ফরাসি দার্শনিক।",
      "২. তিনি 'ডিকনস্ট্রাকশন' বা বিনির্মাণ তত্ত্বের জনক হিসেবে পরিচিত।",
      "৩. ভাষা এবং টেক্সটের অন্তর্নিহিত অর্থ বিশ্লেষণের এক নতুন পথ তিনি দেখান।",
      "৪. তাঁর দর্শন সাহিত্য সমালোচনা এবং দর্শনে ব্যাপক বিতর্ক ও আলোচনার জন্ম দেয়।",
      "৫. তাঁকে উত্তর-আধুনিকতাবাদের অন্যতম প্রধান চিন্তাবিদ মনে করা হয়।"
    ]
  }
];

export default globalStars;