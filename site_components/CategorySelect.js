'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Target,
  Zap,
  Sparkles,
  Search,
  Star
} from 'lucide-react';
import PropTypes from 'prop-types';
import useTheme from '../site_hooks/useTheme';

const CATEGORIES = [
  { id: 'all', label: 'সব ক্যাটাগরি', sub: 'সব বিষয়ের মিশ্রণ', icon: '🌟', color: 'from-indigo-500 to-blue-600', badge: 'Popular', keywords: 'all sob mixed sobai' },
  { id: 'bd', label: 'বাংলাদেশি', sub: 'বিখ্যাত বাঙালি ব্যক্তিত্ব', icon: '🇧🇩', color: 'from-green-500 to-emerald-700', badge: 'Featured', keywords: 'bd bangla bangladeshi bangladesh' },
  { id: 'cricket', label: 'ক্রিকেট', sub: 'ক্রিকেট জগতের তারকা', icon: '🏏', color: 'from-blue-400 to-blue-600', keywords: 'cricket kriket sakib tamim' },
  { id: 'bollywood', label: 'বলিউড', sub: 'সিনেমা ও বিনোদন', icon: '🎬', color: 'from-red-500 to-rose-700', keywords: 'bollywood movie actor hero cinema indian' },
  { id: 'anime', label: 'এনিমে/কার্টুন', sub: 'প্রিয় কাল্পনিক চরিত্র', icon: '🎌', color: 'from-pink-500 to-purple-600', keywords: 'anime cartoon naruto luffy doremon animation' },
  { id: 'music', label: 'সংগীত', sub: 'কণ্ঠশিল্পী ও ব্যান্ড', icon: '🎵', color: 'from-orange-400 to-red-600', keywords: 'music song gayan singer band concert' },
  { id: 'sports', label: 'খেলাধুলা', sub: 'বিশ্বসেরা অ্যাথলেট', icon: '⚽', color: 'from-emerald-400 to-teal-600', keywords: 'sports khela football messi ronaldo athlete' },
  { id: 'history', label: 'ইতিহাস ও রাজনীতি', sub: 'স্মরণীয় সব নাম', icon: '🏛️', color: 'from-amber-600 to-yellow-700', keywords: 'history politics itihas king leader' },
  { id: 'marvel', label: 'সুপারহিরো', sub: 'কমিক্স ও মুভি হিরো', icon: '🦸', color: 'from-rose-500 to-red-800', keywords: 'marvel dc superhero ironman avengers spider' },
  { id: 'places', label: 'বিখ্যাত স্থান', sub: 'বিশ্বের জাদুকরী জায়গা', icon: '🌍', color: 'from-sky-400 to-blue-600', keywords: 'places world travel location bhromon desh country' },
  { id: 'global', label: 'বিশ্ব বিখ্যাত ব্যক্তি', sub: 'আন্তর্জাতিক তারকা', icon: '👤', color: 'from-violet-500 to-indigo-700', keywords: 'global world famous person celebrity bishwo' },
  { id: 'indonesia', label: 'ইন্দোনেশিয়া', icon: '🇮🇩', sub: 'Indonesia Special', color: 'from-red-600 to-red-400', keywords: 'indonesia indo south east asia' },
];

const DIFFICULTIES = [
  { id: 'easy', label: 'সহজ', icon: '🟢', maxQuestions: 50, hints: 3, color: 'border-green-500', glow: 'shadow-green-500/20' },
  { id: 'medium', label: 'মাধ্যম', icon: '🟡', maxQuestions: 35, hints: 1, color: 'border-amber-500', glow: 'shadow-amber-500/20' },
  { id: 'hard', label: 'কঠিন', icon: '🔴', maxQuestions: 20, hints: 0, color: 'border-red-500', glow: 'shadow-red-500/20' },
];

function CategorySelect({ onSelect, onBack }) {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [searchQuery, setSearchQuery] = useState('');

  const diff = DIFFICULTIES.find(d => d.id === selectedDifficulty);

  const filteredCategories = CATEGORIES.filter(cat => {
    const query = searchQuery.toLowerCase();
    return (
      cat.label.toLowerCase().includes(query) || 
      cat.sub.toLowerCase().includes(query) ||
      cat.id.toLowerCase().includes(query) ||
      (cat.keywords && cat.keywords.toLowerCase().includes(query))
    );
  });

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
    <div className={`min-h-screen w-full flex flex-col p-4 md:p-8 lg:p-10 animate-fadeIn transition-all duration-700 ease-in-out ${isDark ? 'mesh-gradient' : 'mesh-gradient-light'}`}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-royal-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 z-10">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between animate-slideDown">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 px-6 py-3 glass glossy rounded-2xl hover:bg-royal-500/10 transition-all active:scale-95 border border-white/5 shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-royal-500" />
            <span className="bengali-font font-black text-text-primary">ফিরে যান</span>
          </button>
          
          <div className="hidden sm:flex flex-col items-end">
             <h2 className="text-4xl md:text-6xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-400 via-purple-400 to-royal-300 drop-shadow-sm">
              অভিযান শুরু করুন
            </h2>
            <div className="flex items-center gap-2">
               <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] font-sans">ChintaBot Premium Edition</span>
               <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categories Grid */}
          <div className="xl:col-span-8 space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-6 glass rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-royal-500/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 rounded-2xl bg-royal-500/20 flex items-center justify-center text-royal-500 shadow-glow-purple group-hover:rotate-12 transition-transform duration-500">
                  <Target className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black bengali-font text-text-primary leading-tight">বিশ্ব বাছুন</h3>
                  <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-royal-400 font-sans">Explorer&apos;s choice</p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
                <input 
                  type="text"
                  placeholder="আপনার প্রিয় বিশ্ব খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-14 pr-6 py-4 rounded-2xl border-2 transition-all duration-500 outline-none bengali-font font-bold
                    ${isDark ? 'bg-black/20 border-white/5 focus:border-royal-500/50' : 'bg-gray-50 border-purple-50 focus:border-royal-500/50'}
                  `}
                />
              </div>
            </div>
            
            <div tabIndex={0} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 overflow-y-auto max-h-[60vh] pr-1 md:pr-2 custom-scrollbar focus:outline-none focus:ring-2 focus:ring-royal-500/50 rounded-2xl p-2">
              {filteredCategories.map((cat, i) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{ animationDelay: `${i * 30}ms` }}
                    className={`
                      group relative p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center gap-2 md:gap-4 transition-all duration-700 animate-slideUp border-2 overflow-hidden
                      ${isDark ? 'bg-white/[0.01]' : 'bg-white shadow-xl shadow-royal-900/5'}
                      ${active 
                        ? 'border-royal-500 scale-[1.03] bg-royal-500/[0.08] shadow-[0_25px_60px_rgba(139,92,246,0.25)]' 
                        : 'border-transparent hover:border-royal-500/20 hover:bg-royal-500/[0.02] hover:-translate-y-2'
                      }
                    `}
                  >
                    {/* Category Background Theme */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                    
                    {/* Category Badge */}
                    {cat.badge && (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
                         <Star className="w-2.5 h-2.5 text-gold-400 fill-current" />
                         <span className="text-[8px] font-black uppercase tracking-widest text-gold-500 font-sans">{cat.badge}</span>
                      </div>
                    )}

                    <div className={`
                      text-5xl md:text-7xl mb-2 transform transition-all duration-700
                      ${active ? 'scale-110 rotate-6 drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)]' : 'group-hover:scale-110 group-hover:-rotate-6'}
                    `}>
                      {cat.icon}
                    </div>
                    
                    <div className="text-center relative z-10">
                      <span className={`
                        font-black bengali-font text-base md:text-xl block leading-tight transition-colors duration-300
                        ${active ? 'text-royal-400' : 'text-text-primary'}
                      `}>
                        {cat.label}
                      </span>
                      <span className="text-[10px] md:text-xs font-bold opacity-40 bengali-font mt-1 block leading-tight">
                        {cat.sub}
                      </span>
                    </div>

                    {/* Active Indicator */}
                    <div className={`
                      absolute top-6 right-6 w-8 h-8 rounded-full bg-royal-500 flex items-center justify-center transition-all duration-500 shadow-glow-purple
                      ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                    `}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </button>
                );
              })}

              {filteredCategories.length === 0 && (
                <div className="col-span-full py-20 text-center space-y-4 animate-fadeIn">
                   <div className="text-6xl opacity-20">🔍</div>
                   <p className="text-xl font-black bengali-font opacity-40">এই নামে কোনো বিশ্ব খুঁজে পাওয়া যায়নি</p>
                   <button onClick={() => setSearchQuery('')} className="text-royal-500 font-bold underline">সবগুলো দেখুন</button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Difficulty & Action */}
          <div className="xl:col-span-4 space-y-8 animate-slideRight [animation-delay:300ms]">
            <div className="glass glossy p-8 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-royal-500/[0.03] to-transparent pointer-events-none" />
               
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shadow-glow-amber group-hover:rotate-12 transition-all">
                    <Zap className="w-7 h-7 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black bengali-font text-text-primary leading-tight">চ্যালেঞ্জ মোড</h3>
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-amber-500 font-sans">Mission constraints</p>
                  </div>
               </div>
              
              <div className="flex flex-col gap-5">
                {DIFFICULTIES.map((d) => {
                  const active = selectedDifficulty === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDifficulty(d.id)}
                      className={`
                        group relative flex items-center gap-5 p-6 rounded-[2rem] border-2 transition-all duration-500
                        ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}
                        ${active 
                          ? `${d.color} bg-royal-500/[0.05] shadow-xl ${d.glow} scale-[1.03]` 
                          : 'border-transparent opacity-60 hover:opacity-100 hover:scale-[1.01]'
                        }
                      `}
                    >
                      <div className={`text-3xl p-4 rounded-2xl ${active ? 'bg-royal-500/15' : 'bg-gray-100 dark:bg-white/5'} transition-all duration-500 group-hover:scale-110`}>
                        {d.icon}
                      </div>
                      <div className="text-left flex-1">
                        <span className="font-black bengali-font text-xl block leading-none mb-1">{d.label}</span>
                        <div className="flex items-center gap-4 text-[10px] font-bold opacity-50 uppercase tracking-tighter">
                          <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> {d.maxQuestions} Questions</span>
                          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> {d.hints} Hints</span>
                        </div>
                      </div>
                      {active && (
                        <div className="w-1.5 h-10 rounded-full bg-royal-500 animate-shimmer relative overflow-hidden">
                           <div className="absolute inset-0 bg-white/40 animate-pulse" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-12">
                <button 
                  onClick={handleContinue}
                  className="w-full py-7 bg-gradient-to-r from-royal-500 via-purple-600 to-indigo-600 text-white rounded-[2.5rem] font-black text-2xl shadow-[0_25px_50px_rgba(139,92,246,0.35)] hover:shadow-glow-purple hover:scale-[1.03] active:scale-95 transition-all duration-500 bengali-font flex items-center justify-center gap-4 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    অভিযান শুরু করুন
                    <ChevronRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
                  </span>
                </button>
                <div className="flex flex-col items-center gap-2 mt-8">
                   <p className="text-[10px] opacity-30 font-black font-sans uppercase tracking-[0.4em]">Let the magic begin</p>
                   <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-royal-500/20" />)}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.1); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(139, 92, 246, 0.3); }
      `}</style>
    </div>
  );
}

CategorySelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default CategorySelect;
