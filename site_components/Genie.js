'use client';

import React, { useState, useEffect, memo } from 'react';
import useTheme from '../site_hooks/useTheme';

function Genie({ state = 'idle' }) {
  const { isDark } = useTheme();
  const [speechText, setSpeechText] = useState(null);

  useEffect(() => {
    const texts = {
      thinking: ["আঁকড়ে ধরছি...", "ভাবছি...", "একটু সময় দিন..."],
      excited: ["খুব কাছে!", "আমি জানি!", "ধরতে পারছি!"],
      asking: ["পরের প্রশ্ন...", "বলুন তো...", "কে হতে পারে?"],
      celebrating: ["আমি জানতাম!", "বিজয়!", "ম্যাজিক!"],
      sad: ["হলো না...", "পরের বার...", "উফ!"]
    };

    // Use a small timeout to avoid the synchronous setState warning
    const timer = setTimeout(() => {
      if (texts[state]) {
        const options = texts[state];
        setSpeechText(options[Math.floor(Math.random() * options.length)]);
      } else {
        setSpeechText(null);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [state]);

  const getFace = () => {
    switch (state) {
      case 'thinking':
        return (
          <g>
            <path d="M70 50 Q80 45 90 50" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M110 50 Q120 45 130 50" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="85" cy="65" r="3" fill="currentColor" />
            <circle cx="115" cy="65" r="3" fill="currentColor" />
            <path d="M90 85 Q100 80 110 85" fill="none" stroke="currentColor" strokeWidth="3" />
          </g>
        );
      case 'celebrating':
        return (
          <g>
            <circle cx="80" cy="60" r="5" fill="currentColor" className="animate-pulse" />
            <circle cx="120" cy="60" r="5" fill="currentColor" className="animate-pulse" />
            <path d="M70 80 Q100 110 130 80" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M60 40 Q80 20 100 40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <path d="M100 40 Q120 20 140 40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          </g>
        );
      case 'sad':
        return (
          <g>
            <path d="M75 65 Q85 60 95 65" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M105 65 Q115 60 125 65" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M85 95 Q100 80 115 95" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </g>
        );
      case 'excited':
        return (
          <g>
            <circle cx="80" cy="55" r="8" fill="currentColor" />
            <circle cx="120" cy="55" r="8" fill="currentColor" />
            <path d="M70 85 Q100 115 130 85" fill="currentColor" opacity="0.1" />
            <path d="M75 85 Q100 100 125 85" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      default: // idle / asking
        return (
          <g>
            <circle cx="85" cy="60" r="4" fill="currentColor" />
            <circle cx="115" cy="60" r="4" fill="currentColor" />
            <path d="M85 85 Q100 95 115 85" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </g>
        );
    }
  };

  return (
    <div className="relative group flex flex-col items-center translate-z-0 will-change-transform">
      <div className={`relative w-64 h-80 md:w-80 md:h-[400px] transition-all duration-700 accelerate
        ${state === 'thinking' ? 'animate-float scale-95 opacity-80' : 'animate-float'}
      `}>
        <div className={`absolute inset-0 rounded-full blur-[80px] transition-all duration-1000 
          ${isDark ? 'opacity-30' : 'opacity-10'}
          ${state === 'thinking' ? 'bg-royal-600 scale-125' : 'bg-royal-400'}`}
        />

        <svg viewBox="0 0 200 240" className={`w-full h-full transition-all duration-700 ${isDark ? 'drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]' : 'drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]'}`}>
          <defs>
            <linearGradient id="genieSkin-game" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="turbanGold-game" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <radialGradient id="smokeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Magical Smoke Base */}
          <path d="M100 160 Q100 230 40 240 Q100 225 160 240 Q100 230 100 160" fill="url(#smokeGlow)" className="animate-pulse" />
          
          {/* Head & Body */}
          <path d="M50 80 Q100 0 150 80" fill="url(#turbanGold-game)" />
          <path d="M60 80 Q100 165 140 80" fill="url(#genieSkin-game)" opacity="0.9" />
          <path d="M60 80 Q100 155 140 80" fill="none" stroke="#facc15" strokeWidth="2" opacity="0.3" />
          
          <circle cx="100" cy="40" r="14" fill="#facc15" className="animate-pulse" />
          <circle cx="100" cy="40" r="6" fill="#ef4444" opacity="0.8" />
          
          {getFace()}
        </svg>

        {speechText && (
          <div className="absolute -top-4 -right-8 glass px-5 py-3 rounded-3xl border-2 border-royal-500/20 shadow-glow-purple group-hover:scale-110 transition-transform duration-500 animate-bounceIn">
            <p className="text-xs md:text-sm font-black bengali-font whitespace-nowrap text-royal-500">{speechText}</p>
            <div className={`absolute -bottom-2 left-6 w-4 h-4 rotate-45 border-r-2 border-b-2 border-royal-500/20 ${isDark ? 'bg-[#1a1a2e]' : 'bg-white'}`} />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Genie);
