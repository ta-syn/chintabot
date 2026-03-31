'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { X, Trophy, Star } from 'lucide-react';

function AchievementNotification({ achievements = [], onDismiss }) {
  const [current, setCurrent] = useState(null);
  const [queue, setQueue] = useState([]);

  const handleDismiss = useCallback(() => {
    setCurrent(null);
    if (queue.length === 0 && onDismiss) {
      onDismiss();
    }
  }, [queue, onDismiss]);

  useEffect(() => {
    if (achievements.length > 0) {
      // Async defer to avoid cascading render warning
      const timer = setTimeout(() => {
        setQueue(prev => [...prev, ...achievements]);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [achievements]);

  useEffect(() => {
    if (!current && queue.length > 0) {
      const timer = setTimeout(() => {
        const next = queue[0];
        setCurrent(next);
        setQueue(prev => prev.slice(1));
      }, 0);

      const dismissTimer = setTimeout(() => {
        handleDismiss();
      }, 4000);

      return () => {
        clearTimeout(timer);
        clearTimeout(dismissTimer);
      };
    }
  }, [current, queue, handleDismiss]);

  if (!current) return null;

  const rarityColors = {
    common: 'text-green-500 border-green-500/30 bg-green-500/5',
    rare: 'text-blue-500 border-blue-500/30 bg-blue-500/5',
    legendary: 'text-amber-500 border-amber-500/30 bg-amber-500/5 animate-glow-pulse shadow-glow-gold'
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] w-full max-w-sm animate-bounceIn translate-z-0">
      <div className={`glass p-5 rounded-3xl border-2 flex items-start gap-4 shadow-2xl relative overflow-hidden ${rarityColors[current.rarity] || rarityColors.common}`}>
        <div className="absolute top-0 right-0 p-2">
          <button onClick={handleDismiss} className="opacity-50 hover:opacity-100 transition-opacity">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl shadow-inner">
          {current.icon}
        </div>

        <div className="space-y-1 pr-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 bengali-font shadow-sm flex items-center gap-1">
            <Trophy className="w-3 h-3" /> নতুন অর্জন!
          </p>
          <h3 className="text-lg font-black bengali-font leading-tight">{current.title}</h3>
          <p className="text-xs opacity-80 bengali-font font-medium">{current.desc}</p>
          
          <div className="pt-2 flex items-center gap-2">
            <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-full border border-current opacity-70`}>
              {current.rarity}
            </span>
            {current.rarity === 'legendary' && <Star className="w-3 h-3 animate-spin-slow" />}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
      </div>
    </div>
  );
}

export default memo(AchievementNotification);
