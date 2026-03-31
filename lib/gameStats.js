'use client';

const KEY = 'chintabot_stats';

export const saveGameResult = (gameData) => {
  if (typeof window === 'undefined') return;
  try {
    const history = JSON.parse(localStorage.getItem(KEY) || '[]');
    const newEntry = {
      ...gameData,
      id: Date.now(),
      date: gameData.date || new Date().toISOString()
    };
    
    const updatedHistory = [newEntry, ...history].slice(0, 50);
    localStorage.setItem(KEY, JSON.stringify(updatedHistory));
    
    return newEntry;
  } catch (e) {
    console.error("Failed to save game stats:", e);
  }
};

export const getStats = () => {
  if (typeof window === 'undefined') return {};
  try {
    const history = JSON.parse(localStorage.getItem(KEY) || '[]');
    const totalGames = history.length;
    const wins = history.filter(g => g.won).length;
    const losses = totalGames - wins;
    const winRate = totalGames > 0 ? ((wins / totalGames) * 100).toFixed(0) + "%" : "0%";
    
    const winHistory = history.filter(g => g.won);
    const avgQuestions = winHistory.length > 0 
      ? (winHistory.reduce((sum, g) => sum + g.questionCount, 0) / winHistory.length).toFixed(1)
      : "0";

    const bestGame = winHistory.length > 0 
      ? [...winHistory].sort((a, b) => a.questionCount - b.questionCount)[0]
      : null;

    const worstGame = winHistory.length > 0
      ? [...winHistory].sort((a, b) => b.questionCount - a.questionCount)[0]
      : null;

    // Calculate Current Streak
    let currentStreak = 0;
    for (const game of history) {
      if (game.won) currentStreak++;
      else break;
    }

    // Category Stats
    const categoryStats = history.reduce((acc, game) => {
      const cat = game.category || 'all';
      if (!acc[cat]) acc[cat] = { wins: 0, total: 0 };
      acc[cat].total++;
      if (game.won) acc[cat].wins++;
      return acc;
    }, {});

    return {
      totalGames, wins, losses, winRate, 
      avgQuestions, bestGame, worstGame, 
      currentStreak, categoryStats
    };
  } catch (e) {
    console.error("Failed to get stats:", e);
    return { totalGames: 0, wins: 0, currentStreak: 0 };
  }
};

export const getHistory = () => {
  if (typeof window === 'undefined') return [];
  try {
    const history = JSON.parse(localStorage.getItem(KEY) || '[]');
    return history.slice(0, 20);
  } catch (e) {
    return [];
  }
};

export const updateLastGame = (updates) => {
  if (typeof window === 'undefined') return;
  try {
    const history = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (history.length === 0) return;
    
    history[0] = { ...history[0], ...updates };
    localStorage.setItem(KEY, JSON.stringify(history));
    return history[0];
  } catch (e) {
    console.error("Failed to update last game stats:", e);
  }
};

export const clearHistory = () => {

  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEY);
  localStorage.removeItem('chintabot_stats');
};
