'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Trophy, 
  Target, 
  Zap, 
  X, 
  History as HistoryIcon, 
  TrendingUp,
  Award
} from 'lucide-react';
import useTheme from '../site_hooks/useTheme';
import { getStats, getHistory } from '../lib/gameStats';
import { getUnlocked } from '../lib/achievements';

// Count-up hook
const useCountUp = (end, duration = 1000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  return count;
};

const StatCard = ({ icon: Icon, value, label, colorClass, delay }) => {
  const displayValue = useCountUp(parseInt(value) || 0);
  const isPercentage = typeof value === 'string' && value.includes('%');
  
  return (
    <div 
      className={`glass p-5 rounded-[2rem] flex flex-col items-center gap-2 border-l-4 ${colorClass} animate-bounceIn accelerate translate-z-0`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`p-3 rounded-2xl bg-white/5 mb-1`}>
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-2xl md:text-3xl font-black">{displayValue}{isPercentage ? '%' : ''}</span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 bengali-font">{label}</span>
    </div>
  );
};

export default function StatsModal({ isOpen, onClose }) {
  const { isDark } = useTheme();
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setStats(getStats());
        setHistory(getHistory());
        setAchievements(getUnlocked());
        setIsVisible(true);
      }, 0);
    } else {
      setTimeout(() => setIsVisible(false), 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[150] flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className={`
        relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[3rem] border-2 transition-all duration-500 accelerate translate-z-0
        ${isDark ? 'glass-dark border-white/5' : 'bg-white border-purple-100'}
        ${isVisible ? 'scale-100 opacity-100' : 'scale-80 opacity-0'}
      `}
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        
        {/* Header */}
        <div className="sticky top-0 z-20 glass p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-royal-500 rounded-2xl text-white">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black bengali-font">পরিসংখ্যান</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-white/10 rounded-full transition-all active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-10 space-y-10 custom-scrollbar">
          
          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={TrendingUp} value={stats?.totalGames || 0} label="মোট খেলা" colorClass="border-blue-500" delay={100} />
            <StatCard icon={Trophy} value={stats?.wins || 0} label="জয়" colorClass="border-green-500" delay={200} />
            <StatCard icon={Target} value={stats?.winRate || "0%"} label="জয়ের হার" colorClass="border-gold-500" delay={300} />
            <StatCard icon={Zap} value={stats?.currentStreak || 0} label="টানা জয়" colorClass="border-purple-500" delay={400} />
          </div>

          {/* Achievement Section */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 bengali-font flex items-center gap-2">
              <Award className="w-4 h-4" /> মেডেল ও অর্জন
            </h3>
            <div className="flex flex-wrap gap-3">
              {achievements.length > 0 ? achievements.map((id, i) => (
                <div key={id} className="p-4 glass rounded-2xl flex items-center gap-3 border-b-2 border-gold-400 group hover:scale-105 transition-all animate-bounceIn" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="text-2xl">🏅</span>
                  <span className="font-bold text-xs uppercase tracking-tight">{id.replace('_', ' ')}</span>
                </div>
              )) : (
                <p className="text-xs opacity-50 italic bengali-font">এখনো কোনো মেডেল অর্জন করেননি। খেলুন এবং জিতুন!</p>
              )}
            </div>
          </section>

          {/* History Table */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 bengali-font flex items-center gap-2">
              <HistoryIcon className="w-4 h-4" /> শেষ ২০টি খেলা
            </h3>
            <div className="overflow-hidden rounded-[2rem] border border-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-left bengali-font text-sm">
                  <thead className={`${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <tr>
                      <th className="p-4 font-bold">চরিত্র</th>
                      <th className="p-4 font-bold">ক্যাটাগরি</th>
                      <th className="p-4 font-bold">ফলাফল</th>
                      <th className="p-4 font-bold">প্রশ্ন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {history.map((game, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-royal-500">{game.character}</td>
                        <td className="p-4 opacity-60 uppercase text-[10px] tracking-widest">{game.category}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${game.won ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                            {game.won ? 'বিজয়ী' : 'পরাজিত'}
                          </span>
                        </td>
                        <td className="p-4 font-mono font-bold">{game.questionCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
}
