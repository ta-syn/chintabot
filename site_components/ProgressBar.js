'use client';

import React, { memo } from 'react';
import { Target, Zap } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

function ProgressBar({ questionCount, maxQuestions = 20, confidence = 0 }) {
  const { isDark } = useTheme();
  const progressPercent = (questionCount / maxQuestions) * 100;
  
  return (
    <div className="w-full space-y-4 animate-fadeIn translate-z-0">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {/* Progress Card */}
        <div className={`p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 ${isDark ? 'glass bg-white/[0.05] border-white/10 shadow-lg' : 'bg-white shadow-xl border-royal-500/10'}`}>
          <div className="flex items-center gap-2 mb-1.5 md:mb-2">
            <div className="w-7 h-7 rounded-lg bg-royal-500/20 flex items-center justify-center text-royal-500 shadow-glow-purple">
              <Zap className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] text-royal-400 bengali-font">অগ্রগতি</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl md:text-4xl font-black text-text-primary tracking-tighter drop-shadow-sm">{questionCount}</span>
            <span className="text-sm md:text-lg font-bold opacity-30 tracking-tighter">/ {maxQuestions}</span>
          </div>
        </div>

        {/* Confidence Card */}
        <div className={`p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 ${isDark ? 'glass bg-white/[0.05] border-white/10 shadow-lg' : 'bg-white shadow-xl border-gold-500/10'}`}>
          <div className="flex items-center gap-2 mb-1.5 md:mb-2">
            <div className="w-7 h-7 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500 shadow-glow-amber">
              <Target className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] text-gold-400 bengali-font">নিশ্চিততা</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className={`text-2xl md:text-4xl font-black tracking-tighter transition-colors duration-500 drop-shadow-sm ${
              confidence > 80 ? 'text-gold-400' : confidence > 50 ? 'text-royal-400' : 'text-text-primary'
            }`}>
              {confidence}
            </span>
            <span className="text-sm md:text-lg font-bold opacity-30 tracking-tighter">%</span>
          </div>
        </div>
      </div>

      <div className="relative p-1.5 glass rounded-full border border-white/10 shadow-xl overflow-hidden">
        {/* Track Background */}
        <div className="absolute inset-0 bg-black/20 dark:bg-white/5" />
        
        {/* Progress Fill */}
        <div 
          className="h-2.5 md:h-3.5 bg-gradient-to-r from-royal-600 via-royal-500 to-purple-400 rounded-full transition-all duration-1000 ease-out shadow-glow-purple relative overflow-hidden group"
          style={{ width: `${Math.max(6, Math.min(100, progressPercent))}%` }}
        >
          {/* Shimmering Pulse */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
        </div>
      </div>
      
      {/* Motivational Label */}
      <div className="flex justify-center -mt-1">
        <p className="text-[9px] md:text-[10px] font-black text-royal-500/60 bengali-font uppercase tracking-[0.3em] animate-pulse">
           জাদু উন্মোচিত হচ্ছে... ✨
        </p>
      </div>
    </div>



  );
}

export default memo(ProgressBar);
