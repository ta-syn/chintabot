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
  { id: 'places', label: 'বিখ্যাত স্থান', icon: '🌍', color: 'bg-sky-500' },
  { id: 'global', label: 'বিশ্ব বিখ্যাত ব্যক্তি', icon: '👤', color: 'bg-violet-500' },
  { id: 'indonesia', label: 'ইন্দোনেশিয়া', icon: '🇮🇩', color: 'bg-red-600' },
];

const DIFFICULTIES = [
  { id: 'easy', label: 'সহজ', icon: '🟢', maxQuestions: 50, hints: 3, color: 'border-green-500', glow: 'shadow-green-500/20' },
  { id: 'medium', label: 'মাধ্যম', icon: '🟡', maxQuestions: 35, hints: 1, color: 'border-amber-500', glow: 'shadow-amber-500/20' },
  { id: 'hard', label: 'কঠিন', icon: '🔴', maxQuestions: 20, hints: 0, color: 'border-red-500', glow: 'shadow-red-500/20' },
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
    <div className={`min-h-screen w-full flex flex-col p-4 md:p-8 lg:p-12 animate-fadeIn transition-all duration-700 ease-in-out ${isDark ? 'mesh-gradient' : 'mesh-gradient-light'}`}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-royal-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 z-10">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between animate-slideDown">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 px-6 py-3 glass glossy rounded-2xl hover:bg-royal-500/10 transition-all active:scale-95 border border-white/10 shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-royal-500" />
            <span className="bengali-font font-bold text-text-primary">ফিরে যান</span>
          </button>
          
          <div className="hidden sm:flex flex-col items-end">
             <h2 className="text-4xl md:text-5xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-400 via-purple-400 to-royal-300 drop-shadow-sm">
              অভিযান শুরু করুন
            </h2>
            <span className="text-xs font-bold opacity-40 uppercase tracking-[0.2em] text-royal-500">ChintaBot Premium</span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categories Grid */}
          <div className="xl:col-span-8 space-y-6">
            <div className="flex items-center justify-between px-6 py-4 glass rounded-3xl border border-white/5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-royal-500/20 flex items-center justify-center text-royal-500 shadow-glow-purple">
                  <Target className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-black bengali-font text-text-primary leading-tight">ক্যাটাগরি বাছুন</h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-royal-400">Select your destination</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-royal-500/5 rounded-2xl border border-royal-500/20 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-royal-500 animate-ping" />
                <span className="text-xs font-black bengali-font text-royal-500">১১টি বিশ্ব</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[60vh] xl:max-h-none overflow-y-auto pr-2 custom-scrollbar">
              {CATEGORIES.map((cat, i) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{ animationDelay: `${i * 30}ms` }}
                    className={`
                      group relative p-6 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 transition-all duration-500 animate-slideUp border-2 overflow-hidden
                      ${isDark ? 'glass bg-white/[0.02]' : 'bg-white shadow-xl shadow-royal-900/5'}
                      ${active 
                        ? 'border-royal-500 scale-[1.02] bg-royal-500/[0.08] shadow-[0_20px_50px_rgba(139,92,246,0.2)]' 
                        : 'border-transparent hover:border-royal-500/20 hover:bg-royal-500/[0.02] hover:-translate-y-1'
                      }
                    `}
                  >
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`
                      text-5xl mb-1 transform transition-all duration-500
                      ${active ? 'scale-110 rotate-6 drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]' : 'group-hover:scale-110 group-hover:-rotate-3'}
                    `}>
                      {cat.icon}
                    </div>
                    
                    <span className={`
                      font-bold bengali-font text-sm md:text-base text-center leading-tight transition-colors duration-300
                      ${active ? 'text-royal-400' : 'text-text-primary'}
                    `}>
                      {cat.label}
                    </span>

                    {/* Active Indicator */}
                    <div className={`
                      absolute top-4 right-4 w-6 h-6 rounded-full bg-royal-500 flex items-center justify-center transition-all duration-500 shadow-glow-purple
                      ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                    `}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Difficulty & Action */}
          <div className="xl:col-span-4 space-y-8 animate-slideRight [animation-delay:300ms]">
            <div className="glass glossy p-8 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-royal-500/[0.03] to-transparent pointer-events-none" />
               
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shadow-glow-amber">
                    <Zap className="w-6 h-6 fill-current animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black bengali-font text-text-primary leading-tight">চ্যালেঞ্জ মোড</h3>
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-amber-500">Choose your difficulty</p>
                  </div>
               </div>
              
              <div className="flex flex-col gap-4">
                {DIFFICULTIES.map((d, i) => {
                  const active = selectedDifficulty === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDifficulty(d.id)}
                      className={`
                        group relative flex items-center gap-4 p-5 rounded-3xl border-2 transition-all duration-500
                        ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}
                        ${active 
                          ? `${d.color} bg-royal-500/[0.05] shadow-lg ${d.glow} scale-[1.02]` 
                          : 'border-transparent opacity-60 hover:opacity-100'
                        }
                      `}
                    >
                      <div className={`text-2xl p-3 rounded-xl ${active ? 'bg-royal-500/10' : 'bg-gray-100 dark:bg-white/5'} transition-all`}>
                        {d.icon}
                      </div>
                      <div className="text-left flex-1">
                        <span className="font-extrabold bengali-font text-lg block">{d.label}</span>
                        <div className="flex items-center gap-3 text-[10px] font-bold opacity-60 uppercase tracking-tight">
                          <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {d.maxQuestions} Q</span>
                          <span className="w-1 h-1 bg-royal-500/30 rounded-full" />
                          <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> {d.hints} Hints</span>
                        </div>
                      </div>
                      {active && <div className="w-2 h-8 rounded-full bg-royal-500 animate-slideDown" />}
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <button 
                  onClick={handleContinue}
                  className="w-full py-6 bg-gradient-to-r from-royal-500 to-purple-600 text-white rounded-[2rem] font-black text-xl shadow-[0_20px_40px_rgba(139,92,246,0.3)] hover:shadow-glow-purple hover:scale-[1.02] active:scale-95 transition-all duration-300 bengali-font flex items-center justify-center gap-4 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    শুরু করুন
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <p className="text-center text-[10px] opacity-30 font-bold mt-6 bengali-font uppercase tracking-[0.3em]">
                   Let the magic begin ✨
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: rgba(139, 92, 246, 0.1); 
          border-radius: 20px; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
          background: rgba(139, 92, 246, 0.3); 
        }
      `}</style>
    </div>
  );
}
