'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart3, 
  Trophy, 
  Target, 
  Zap, 
  X, 
  TrendingUp,
  Award
} from 'lucide-react';
import useTheme from '../site_hooks/useTheme';
import { getStats, getHistory } from '../lib/gameStats';
import { getUnlocked, ACHIEVEMENTS } from '../lib/achievements';

// Count-up hook
const useCountUp = (end, duration = 1500, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out expo for a more premium feel
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (end - start) + start));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ icon: Icon, value, label, delay, isDark }) => {
  const displayValue = useCountUp(parseInt(value) || 0);
  const isPercentage = typeof value === 'string' && value.includes('%');
  
  return (
    <div 
      className={`relative group p-5 rounded-[2.5rem] flex flex-col items-center gap-2 border-2 transition-all duration-500 hover:scale-[1.05] animate-bounceIn accelerate translate-z-0 overflow-hidden
        ${isDark ? 'bg-white/[0.03] border-white/5 hover:border-royal-500/30' : 'bg-white border-purple-100 shadow-xl shadow-purple-200/20 hover:border-royal-500/30'}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-royal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className={`p-4 rounded-2xl bg-royal-500/10 text-royal-500 mb-1 group-hover:bg-royal-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-inner`}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-3xl md:text-4xl font-black tracking-tighter relative z-10">{displayValue}{isPercentage ? '%' : ''}</span>
      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 bengali-font relative z-10">{label}</span>
    </div>
  );
};

export default function StatsModal({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const stats = useMemo(() => (isOpen ? getStats() : null), [isOpen]);
  const history = useMemo(() => (isOpen ? getHistory() : []), [isOpen]);
  const unlockedIds = useMemo(() => (isOpen ? getUnlocked() : []), [isOpen]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      // Use queueMicrotask to avoid synchronous setState warning in effect
      queueMicrotask(() => setIsVisible(false));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const unlockedAchievements = ACHIEVEMENTS.filter(a => unlockedIds.includes(a.id));

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fadeIn" onClick={onClose} />
      
      <div className={`
        relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-[3.5rem] border-2 transition-all duration-700 accelerate translate-z-0 flex flex-col
        ${isDark ? 'bg-deep-900/90 border-white/10 shadow-glow-purple/20' : 'bg-white border-purple-100 shadow-2xl shadow-purple-500/20'}
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}
      `}
      style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-tr from-royal-500 to-purple-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-lg shadow-royal-500/20">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
               <h2 className="text-3xl font-black bengali-font leading-tight">পরিসংখ্যান</h2>
               <p className="text-xs opacity-50 font-bold uppercase tracking-widest">Player Profile</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-4 hover:bg-red-500/10 hover:text-red-500 rounded-full transition-all active:scale-95 group"
          >
            <X className="w-7 h-7 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 custom-scrollbar scroll-smooth">
          
          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard icon={TrendingUp} value={stats?.totalGames || 0} label="মোট খেলা" delay={100} isDark={isDark} />
            <StatCard icon={Trophy} value={stats?.wins || 0} label="জয়" delay={200} isDark={isDark} />
            <StatCard icon={Target} value={stats?.winRate || "0%"} label="জয়ের হার" delay={300} isDark={isDark} />
            <StatCard icon={Zap} value={stats?.currentStreak || 0} label="টানা জয়" delay={400} isDark={isDark} />
          </div>

          {/* Category Breakdown */}
          {stats?.categoryStats && Object.keys(stats.categoryStats).length > 0 && (
            <section className="space-y-5">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 bengali-font flex items-center gap-3">
                <div className="w-10 h-[1px] bg-royal-500/30" /> ক্যাটাগরি ব্রেকডাউন
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {Object.entries(stats.categoryStats).sort((a,b) => b[1].total - a[1].total).slice(0, 4).map(([cat, s], i) => (
                    <div key={cat} className="p-5 glass rounded-3xl border border-white/5 flex items-center justify-between group hover:border-royal-500/30 transition-all animate-slideUp" style={{ animationDelay: `${i * 100}ms` }}>
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-royal-500/10 flex items-center justify-center font-bold text-royal-500">
                             {cat.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-black bengali-font uppercase text-xs">{cat}</p>
                            <p className="text-[10px] opacity-40 font-bold">{s.total} গেম খেলা হয়েছে</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-lg font-black text-green-500">{Math.round((s.wins / s.total) * 100)}%</p>
                          <p className="text-[9px] opacity-40 font-bold uppercase">Win Rate</p>
                       </div>
                    </div>
                 ))}
              </div>
            </section>
          )}

          {/* Achievement Section */}
          <section className="space-y-5">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 bengali-font flex items-center gap-3">
              <div className="w-10 h-[1px] bg-royal-500/30" /> মেডেল ও অর্জন ({unlockedAchievements.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {unlockedAchievements.length > 0 ? unlockedAchievements.map((ach, i) => (
                <div 
                  key={ach.id} 
                  className={`group relative p-6 rounded-[2rem] border-2 transition-all duration-500 hover:-translate-y-2 animate-bounceIn
                    ${isDark ? 'bg-white/[0.03] border-white/5 hover:border-gold-400/30' : 'bg-gray-50 border-purple-50 hover:border-gold-400/30 shadow-lg shadow-purple-200/10'}
                  `} 
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <div className="text-4xl filter drop-shadow-lg group-hover:scale-125 transition-transform duration-500">{ach.icon}</div>
                    <div>
                      <h4 className="font-black bengali-font text-sm">{ach.title}</h4>
                      <p className="text-[9px] font-bold opacity-40 uppercase tracking-tighter mt-1">{ach.rarity}</p>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full p-10 glass rounded-[2.5rem] text-center border-dashed border-2 border-white/10">
                   <Award className="w-12 h-12 mx-auto opacity-10 mb-4" />
                   <p className="text-sm opacity-50 italic bengali-font">এখনো কোনো মেডেল অর্জন করেননি। খেলুন এবং জিতুন!</p>
                </div>
              )}
            </div>
          </section>

          {/* History Feed */}
          <section className="space-y-5 pb-10">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 bengali-font flex items-center gap-3">
              <div className="w-10 h-[1px] bg-royal-500/30" /> শেষ ২০টি অ্যাক্টিভিটি
            </h3>
            <div className="space-y-3">
              {history.length > 0 ? history.map((game, i) => (
                <div key={i} className={`p-5 rounded-[2rem] border transition-all hover:scale-[1.01] flex items-center justify-between group animate-slideUp
                  ${isDark ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]' : 'bg-white border-purple-50 shadow-md hover:shadow-xl shadow-purple-200/10'}
                `} style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner
                      ${game.won ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}
                    `}>
                       {game.won ? '✓' : '✗'}
                    </div>
                    <div>
                      <h4 className="font-black bengali-font text-base text-royal-500 group-hover:translate-x-1 transition-transform">{game.character}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] font-black uppercase tracking-widest opacity-40">{game.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span className="text-[9px] font-black opacity-40">{game.questionCount} প্রশ্ন</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-right px-4 py-2 rounded-xl text-[10px] font-black bengali-font
                    ${game.won ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}
                  `}>
                    {game.won ? 'বিজয়ী' : 'পরাজিত'}
                  </div>
                </div>
              )) : (
                <p className="text-center opacity-30 italic py-10 bengali-font">কোনো হিস্ট্রি পাওয়া যায়নি।</p>
              )}
            </div>
          </section>

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.2); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(139, 92, 246, 0.4); }
      `}</style>
    </div>
  );
}
