'use client';

export const ACHIEVEMENTS = [
  { id: "first_win", icon: "🏆", title: "প্রথম জয়", desc: "প্রথমবার জয় পেলেন!", rarity: "common" },
  { id: "speed_demon", icon: "⚡", title: "দ্রুততম", desc: "৫ বা তার কম প্রশ্নে জয়!", rarity: "rare" },
  { id: "hat_trick", icon: "🔥", title: "হ্যাটট্রিক", desc: "৩ বার টানা জয়!", rarity: "rare" },
  { id: "patriot", icon: "🇧🇩", title: "দেশপ্রেমিক", desc: "বাংলাদেশি চরিত্র চিনলাম!", rarity: "common" },
  { id: "perfect", icon: "🎯", title: "পারফেক্ট", desc: "১০০% confidence এ guess!", rarity: "legendary" },
  { id: "cricket_fan", icon: "🏏", title: "ক্রিকেট ভক্ত", desc: "ক্রিকেটার চিনে ফেললাম!", rarity: "common" },
  { id: "multiplayer_win", icon: "👑", title: "চ্যাম্পিয়ন", desc: "Multiplayer এ জিতলেন!", rarity: "rare" },
];

const KEY = 'chintabot_achievements';

export const getUnlocked = () => {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch (e) {
    return [];
  }
};

export const checkAndUnlock = (gameData, stats) => {
  if (typeof window === 'undefined') return [];
  try {
    const unlocked = getUnlocked();
    const newUnlocks = [];

    const tryUnlock = (id) => {
      if (!unlocked.includes(id)) {
        const ach = ACHIEVEMENTS.find(a => a.id === id);
        if (ach) {
          unlocked.push(id);
          newUnlocks.push(ach);
        }
      }
    };

    // Conditions
    if (gameData.won) {
      tryUnlock("first_win");
      if (gameData.questionCount <= 5) tryUnlock("speed_demon");
      if (stats.currentStreak >= 3) tryUnlock("hat_trick");
      if (gameData.category === 'bd') tryUnlock("patriot");
      if (gameData.confidence >= 100) tryUnlock("perfect");
      if (gameData.category === 'cricket') tryUnlock("cricket_fan");
      if (gameData.isMultiplayer) tryUnlock("multiplayer_win");
    }

    if (newUnlocks.length > 0) {
      localStorage.setItem(KEY, JSON.stringify(unlocked));
    }

    return newUnlocks;
  } catch (e) {
    console.error("Achievement check failed:", e);
    return [];
  }
};
