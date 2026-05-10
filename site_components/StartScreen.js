'use client';

import React, { useState, useEffect, memo, useCallback } from 'react';
import { Users, Brain, Trophy, Activity, Star } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import StatsModal from './StatsModal';
import useTheme from '../site_hooks/useTheme';
import { playClick } from '../lib/sounds';

function StartScreen({ onStartSingle, onStartMultiplayer, welcomeMessage }) {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const generatedStars = [...Array(30)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: ['slow', 'medium', 'fast'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 5
      }));
      setStars(generatedStars);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-6 relative overflow-x-hidden ${isDark ? 'mesh-gradient' : 'mesh-gradient-light'}`}>
      <div className={`absolute inset-0 z-[-5] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      
      {isDark ? (
        <div className="stars-container accelerate opacity-100" style={{ animationDelay: '0.2s' }}>
          <div className="nebula" />
          <div className="shooting-star" style={{ top: '10%', right: '10%' }} />
          {stars.map((s) => (
            <div 
              key={s.id} 
              className={`star star-${s.speed} translate-z-0`} 
              style={{ 
                left: `${s.left}%`, 
                top: `${s.top}%`, 
                width: `${s.size}px`, 
                height: `${s.size}px`, 
                animationDelay: `${s.delay}s` 
              }} 
            />
          ))}
        </div>
      ) : (
        <div className="stars-container accelerate opacity-100" style={{ animationDelay: '0.2s' }}>
          <div className="wave" style={{ opacity: 0.1 }} />
        </div>
      )}

      {/* Floating UI Controls removed - now in GlobalControls */}


      <div className="max-w-4xl w-full flex flex-col items-center gap-6 md:gap-8 z-10">
        
        {welcomeMessage && (
          <div className="glass px-6 py-4 rounded-[2rem] flex items-center gap-4 text-text-primary mb-2 shadow-glow-purple border border-royal-500/10 max-w-[95%] animate-fadeIn group">
            <div className="w-10 h-10 bg-royal-500/10 rounded-full flex items-center justify-center text-royal-500 group-hover:scale-110 transition-transform">
               <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm md:text-base font-bold bengali-font leading-tight">
              {welcomeMessage}
            </p>
          </div>
        )}

        <div className="text-center space-y-2 md:space-y-4 translate-z-0">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="text-4xl md:text-6xl animate-sparkle block">🧞</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gold-shimmer leading-tight tracking-tighter drop-shadow-xl" style={{ fontFamily: 'var(--font-cinzel)' }}>
              CHINTABOT
            </h1>
          </div>
          <p className="text-2xl md:text-4xl font-black tracking-wide text-text-secondary bengali-font opacity-90">
            মনের চরিত্র চিনে ফেলি
          </p>
        </div>

        <div className="relative py-0 md:py-2 animate-float translate-z-0 -mt-4 md:-mt-8">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 bg-royal-500/25 rounded-full blur-[100px] transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-40'}`} />
          <div className="relative group cursor-pointer hover:scale-[1.05] transition-all duration-700 ease-out perspective-1000">
            <svg viewBox="0 0 200 240" className="w-48 md:w-[280px] lg:w-[320px] h-auto drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]">
               <defs>
                  <linearGradient id="genieSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="turbanGold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                  <radialGradient id="eyeGlow">
                    <stop offset="10%" stopColor="white" />
                    <stop offset="100%" stopColor="#facc15" />
                  </radialGradient>
               </defs>

               {/* Smoke Trail */}
               <path d="M100 220 Q100 240 60 240 Q100 230 140 240 Q100 240 100 220" fill="url(#genieSkin)" opacity="0.4" className="animate-pulse" />
               <path d="M100 180 Q100 220 80 230 Q100 210 120 230 Q100 220 100 180" fill="url(#genieSkin)" opacity="0.2" />

               {/* Body/Shoulders */}
               <path d="M50 160 Q100 130 150 160 L140 180 Q100 220 60 180 Z" fill="url(#genieSkin)" opacity="0.9" />
               <path d="M70 145 Q100 135 130 145" fill="none" stroke="#facc15" strokeWidth="4" opacity="0.6" />

               {/* Head */}
               <path d="M60 80 Q100 40 140 80 Q145 140 100 150 Q55 140 60 80" fill="url(#genieSkin)" />
               
               {/* Turban */}
               <path d="M55 75 Q100 10 145 75 Q100 65 55 75" fill="url(#turbanGold)" />
               <circle cx="100" cy="45" r="10" fill="#facc15" filter="url(#glow)" />
               <circle cx="100" cy="45" r="4" fill="#ef4444" />

               {/* Eyes */}
               <ellipse cx="80" cy="95" rx="8" ry="4" fill="white" />
               <ellipse cx="120" cy="95" rx="8" ry="4" fill="white" />
               <circle cx="80" cy="95" r="3" fill="url(#eyeGlow)" className="animate-pulse" />
               <circle cx="120" cy="95" r="3" fill="url(#eyeGlow)" className="animate-pulse" />

               {/* Mouth */}
               <path d="M85 125 Q100 135 115 125" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
               
               {/* Ornaments */}
               <circle cx="65" cy="115" r="4" fill="#facc15" opacity="0.8" />
               <circle cx="135" cy="115" r="4" fill="#facc15" opacity="0.8" />
            </svg>
          </div>
        </div>

        <div className="glass glossy p-6 md:p-10 rounded-[3rem] w-full max-w-2xl text-center space-y-6 translate-z-0 border-t border-white/10 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-royal-500/5 to-transparent pointer-events-none" />
          <h2 className="text-xl md:text-2xl font-black flex items-center justify-center gap-3 text-text-primary bengali-font border-b border-royal-500/10 pb-3">
            🎮 কীভাবে খেলবেন?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all card-hover group/item">
              <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 bg-royal-500/20 rounded-xl flex items-center justify-center text-royal-500 shadow-inner group-hover/item:rotate-6 transition-transform">
                <Brain className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <p className="font-extrabold text-text-primary bengali-font text-xs md:text-base text-left md:text-center leading-tight">১. একটি চরিত্র ভাবুন</p>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all card-hover group/item">
              <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 shadow-inner group-hover/item:rotate-6 transition-transform">
                <Users className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <p className="font-extrabold text-text-primary bengali-font text-xs md:text-base text-left md:text-center leading-tight">২. প্রশ্নের জবাব দিন</p>
            </div>
            <div className="flex flex-row md:flex-col items-center gap-3 md:gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all card-hover group/item">
              <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500 shadow-inner group-hover/item:rotate-6 transition-transform">
                <Trophy className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <p className="font-extrabold text-text-primary bengali-font text-xs md:text-base text-left md:text-center leading-tight">৩. ফলাফল দেখে নিন!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-3xl px-4 md:px-0 translate-z-0">
            <button onClick={onStartSingle} className="group flex-1 relative overflow-hidden h-20 md:h-24 bg-gradient-to-r from-royal-500 to-purple-600 rounded-3xl p-1 shadow-[0_15px_30px_rgba(139,92,246,0.3)] hover:shadow-glow-purple transition-all hover:scale-[1.05] active:scale-95">
            <div className="h-full w-full rounded-[1.4rem] bg-black/10 transition-colors flex items-center justify-center gap-3 text-white">
              <span className="text-2xl md:text-4xl group-hover:animate-bounce transform group-hover:rotate-12 transition-transform">🧞</span>
              <span className="text-xl md:text-2xl font-black tracking-tight bengali-font">একা খেলুন</span>
            </div>
          </button>
          <button onClick={onStartMultiplayer} className="group flex-1 relative overflow-hidden h-20 md:h-24 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-1 shadow-[0_15px_30px_rgba(20,184,166,0.2)] hover:shadow-glow-green transition-all hover:scale-[1.05] active:scale-95">
            <div className="h-full w-full rounded-[1.4rem] bg-black/10 transition-colors flex items-center justify-center gap-3 text-white">
              <span className="text-2xl md:text-4xl group-hover:animate-bounce transform group-hover:-rotate-12 transition-transform">👥</span>
              <span className="text-xl md:text-2xl font-black tracking-tight bengali-font">বন্ধুর সাথে</span>
            </div>
          </button>
        </div>


        <footer className="mt-6 pb-12 text-center animate-fadeIn px-4">
          <p className="text-xs md:text-sm font-bold tracking-widest text-text-muted uppercase bengali-font opacity-40">
            নিশান ও সূর্যের একটি জাদুকরী সৃষ্টি • ১০০% নিখুঁত বাংলা জাদুকরী অভিজ্ঞতা ✨
          </p>
        </footer>
      </div>

      {/* StatsModal removed - now in GlobalControls */}
    </div>
  );
}

export default memo(StartScreen);
