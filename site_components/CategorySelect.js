'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Target,
  Zap,
  Sparkles
} from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

const CATEGORIES = [
  { id: 'all', label: 'সব ক্যাটাগরি', icon: '🌟', color: 'bg-indigo-500' },
  { id: 'bd', label: 'বাংলাদেশি', icon: '🇧🇩', color: 'bg-green-600' },
  { id: 'cricket', label: 'ক্রিকেট', icon: '🏏', color: 'bg-blue-500' },
  { id: 'bollywood', label: 'বলিউড', icon: '🎬', color: 'bg-red-500' },
  { id: 'anime', label: 'এনিমে/কার্টুন', icon: '🎌', color: 'bg-pink-500' },
  { id: 'music', label: 'সংগীত', icon: '🎵', color: 'bg-orange-500' },
  { id: 'sports', label: 'খেলাধুলা', icon: '⚽', color: 'bg-emerald-500' },
  { id: 'history', label: 'ইতিহাস ও রাজনীতি', icon: '🏛️', color: 'bg-amber-600' },
  { id: 'marvel', label: 'সুপারহিরো', icon: '🦸', color: 'bg-rose-600' },
];

const DIFFICULTIES = [
  { id: 'easy', label: 'সহজ', icon: '🟢', maxQuestions: 100, hints: 3, color: 'border-green-500', glow: 'shadow-green-500/20' },
  { id: 'medium', label: 'মাধ্যম', icon: '🟡', maxQuestions: 50, hints: 1, color: 'border-amber-500', glow: 'shadow-amber-500/20' },
  { id: 'hard', label: 'কঠিন', icon: '🔴', maxQuestions: 30, hints: 0, color: 'border-red-500', glow: 'shadow-red-500/20' },
];

export default function CategorySelect({ onSelect, onBack }) {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');

  const diff = DIFFICULTIES.find(d => d.id === selectedDifficulty);

  const handleContinue = () => {
    onSelect({
      category: selectedCategory,
      difficulty: {
        maxQuestions: diff.maxQuestions,
        hints: diff.hints,
        label: diff.label
      }
    });
  };

  return (
    <div className={`min-h-screen w-full flex flex-col p-4 md:p-10 animate-fadeIn transition-colors duration-500 accelerate translate-z-0 ${isDark ? 'bg-deep-800' : 'bg-[#fcf8ff]'}`}>
      
      {/* Background Magic Elements */}
      <div className="stars-container pointer-events-none opacity-20">
        <div className="nebula" />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-10 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-slideDown">
          <button 
            onClick={onBack}
            className="w-fit flex items-center gap-2 px-6 py-3 glass rounded-2xl hover:bg-royal-500/10 transition-all active:scale-95 text-sm md:text-base group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="bengali-font font-bold">ফিরে যান</span>
          </button>
          
          <div className="text-left md:text-right hidden sm:block">
             <h2 className="text-2xl md:text-5xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-500 to-purple-400 drop-shadow-sm">
              গেম সেটআপ
            </h2>
          </div>
        </div>

        <div className="sm:hidden text-center mb-2">
            <h1 className="text-4xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-500 to-purple-400">
              গেম সেটআপ
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Categories */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 bengali-font flex items-center gap-2">
                <Target className="w-4 h-4 text-royal-500" /> ক্যাটাগরি বাছুন
              </h3>
              <span className="text-[10px] font-bold opacity-30 uppercase bengali-font">৯টি অঞ্চল</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-h-[500px] lg:max-h-none overflow-y-auto lg:overflow-visible pr-2 custom-scrollbar accelerate">
              {CATEGORIES.map((cat, i) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{ animationDelay: `${i * 50}ms` }}
                    className={`
                      group relative p-5 md:p-8 rounded-[2.5rem] flex flex-col items-center gap-3 transition-all duration-300 animate-slideUp border-2 accelerate translate-z-0
                      ${isDark ? 'glass bg-royal-500/[0.03]' : 'bg-white shadow-xl shadow-purple-200/10'}
                      ${active 
                        ? 'border-royal-500 shadow-glow-purple scale-[1.05] ring-8 ring-royal-500/10 z-10' 
                        : 'border-transparent hover:border-royal-500/30 hover:scale-[1.05]'
                      }
                    `}
                  >
                    <div className={`text-4xl md:text-5xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                      {cat.icon}
                    </div>
                    <span className="font-bold bengali-font tracking-tight text-sm md:text-base lg:text-lg text-center leading-tight">
                      {cat.label}
                    </span>
                    
                    {active && (
                      <div className="absolute -top-1 -right-1 text-royal-500 animate-bounceIn shadow-lg rounded-full bg-white dark:bg-deep-800">
                        <CheckCircle2 className="w-6 h-6 fill-current" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Difficulty & Action */}
          <div className="lg:col-span-5 space-y-8 animate-slideRight [animation-delay:400ms]">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-50 px-2 bengali-font flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" /> চ্যালেঞ্জের মাত্রা
              </h3>
              
              <div className="flex flex-col gap-4">
                {DIFFICULTIES.map((d, i) => {
                  const active = selectedDifficulty === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDifficulty(d.id)}
                      style={{ animationDelay: `${(i + 5) * 50}ms` }}
                      className={`
                        group relative flex items-center gap-5 p-6 rounded-[2rem] border-2 transition-all duration-300 animate-slideUp accelerate translate-z-0
                        ${isDark ? 'glass' : 'bg-white shadow-xl shadow-purple-100/30'}
                        ${active 
                          ? `${d.color} bg-royal-500/[0.05] ring-8 ring-current/5 shadow-xl ${d.glow} scale-[1.02]` 
                          : 'border-transparent opacity-60 hover:opacity-100 hover:scale-[1.02] hover:border-royal-500/20'
                        }
                      `}
                    >
                      <div className={`text-3xl p-4 rounded-2xl ${active ? 'bg-royal-500/10' : 'bg-gray-100 dark:bg-white/5'} transition-all group-hover:rotate-12`}>
                        {d.icon}
                      </div>
                      <div className="text-left flex-1">
                        <span className="font-extrabold bengali-font text-xl md:text-2xl block">{d.label}</span>
                        <div className="flex items-center gap-3 text-xs font-bold opacity-60 uppercase tracking-tighter">
                          <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {d.maxQuestions} প্রশ্ন</span>
                          <span className="w-1.5 h-1.5 bg-royal-500/30 rounded-full" />
                          <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> {d.hints} ইঙ্গিত</span>
                        </div>
                      </div>
                      {active && <CheckCircle2 className={`w-8 h-8 ${isDark ? 'text-white' : 'text-royal-500'} animate-bounceIn`} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button 
                onClick={handleContinue}
                className="w-full py-6 md:py-8 bg-gradient-to-r from-royal-500 to-purple-600 text-white rounded-[2.5rem] font-black text-xl md:text-2xl shadow-2xl shadow-royal-500/40 hover:shadow-glow-purple active:scale-95 transition-all animate-bounceIn [animation-delay:800ms] bengali-font flex items-center justify-center gap-4 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  অভিযান শুরু করুন
                  <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <p className="text-center text-xs opacity-40 font-bold mt-6 bengali-font uppercase tracking-widest animate-fadeIn [animation-delay:1200ms]">
                মজাদার আর জাদুকরী অভিজ্ঞতা শুরু হোক ✨
              </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(139, 92, 246, 0.2); 
          border-radius: 10px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(139, 92, 246, 0.4); 
        }
      `}</style>
    </div>
  );
}
