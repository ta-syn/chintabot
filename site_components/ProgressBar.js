'use client';

import React, { memo } from 'react';
import { Target, Zap } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

function ProgressBar({ questionCount, maxQuestions = 20, confidence = 0 }) {
  const { isDark } = useTheme();
  const progressPercent = (questionCount / maxQuestions) * 100;
  
  return (
    <div className="w-full space-y-4 md:space-y-6 animate-fadeIn translate-z-0">
      <div className="flex justify-between items-end px-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-lg ${isDark ? 'bg-royal-500/10' : 'bg-royal-500/5'} border border-royal-500/20 shadow-sm`}>
              <Zap className="w-4 h-4 text-royal-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest opacity-40 bengali-font">অগ্রগতি</span>
          </div>
          <span className="text-2xl md:text-3xl font-black text-text-primary tracking-tighter">
            {questionCount}<span className="text-sm opacity-30 mx-1">/</span>{maxQuestions}
          </span>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest opacity-40 bengali-font">নিশ্চিততা</span>
            <div className={`p-1.5 rounded-lg ${isDark ? 'bg-gold-500/10' : 'bg-gold-500/5'} border border-gold-500/20 shadow-sm`}>
              <Target className="w-4 h-4 text-gold-500" />
            </div>
          </div>
          <span className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-500 ${
            confidence > 80 ? 'text-gold-500' : confidence > 50 ? 'text-royal-500' : 'text-text-primary'
          }`}>
            {confidence}<span className="text-xs opacity-50 ml-0.5">%</span>
          </span>
        </div>
      </div>

      <div className="relative h-4 md:h-5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
        {/* Track */}
        <div 
          className="h-full bg-gradient-to-r from-royal-500 to-purple-400 rounded-full transition-all duration-1000 ease-out shadow-glow-purple relative overflow-hidden"
          style={{ width: `${Math.min(100, progressPercent)}%` }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
      
      {/* Mobile-only compact labels for very small screens */}
      {questionCount > 0 && (
        <div className="flex justify-center sm:hidden">
          <p className="text-[10px] font-bold opacity-30 bengali-font">
            এখনও {maxQuestions - questionCount}টি প্রশ্ন বাকি
          </p>
        </div>
      )}
    </div>
  );
}

export default memo(ProgressBar);
