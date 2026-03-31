'use client';

import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { Frown, Share2, Check, MessageCircle, Facebook } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';
import { updateLastGame } from '../lib/gameStats';

function ResultScreen({ 
  result, 
  questionCount, 
  onRestart, 
  isMultiplayer = false,
  onResponse
}) {
  const { isDark } = useTheme();
  const [stage, setStage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [userInputCharacter, setUserInputCharacter] = useState("");

  const isSuccess = result?.type === 'guess' && result?.correct !== false && stage !== -1;

  const shareText = `🧞 ChintaBot আমাকে হারিয়ে দিল! আমি ভেবেছিলাম "${result?.character || result?.banglaName}" আর জিনী মাত্র ${questionCount} প্রশ্নে তা ধরে ফেলল! আপনিও কি পারবেন জিনীকে হারাতে? খেলুন এখানে: https://chintabot.vercel.app`;
  
  const shareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=https://chintabot.vercel.app&quote=${encodeURIComponent(shareText)}`, '_blank');
  };

  useEffect(() => {
    if (result) {
      const timers = [
        setTimeout(() => setStage(1), 0),    
        setTimeout(() => setStage(2), 500),  
        setTimeout(() => setStage(3), 800),  
        setTimeout(() => setStage(4), 1500), 
        setTimeout(() => setStage(5), 1800), 
        setTimeout(() => setStage(6), 2100), 
        setTimeout(() => setStage(7), 2400), 
        setTimeout(() => setStage(8), 2700), 
        setTimeout(() => setStage(9), 3000), 
        setTimeout(() => setStage(10), 3300) 
      ];

      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [result]);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: 'ChintaBot — আমার চরিত্র চিনে ফেলেছে!',
      text: `চিনতাবট আমার মনের চরিত্র ${result?.banglaName || result?.character} চিনে ফেলেছে মাত্র ${questionCount}টি প্রশ্নে! আপনিও খেলুন:`,
      url: typeof window !== 'undefined' ? window.location.origin : ''
    };

    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  }, [result, questionCount]);

  const confettiItems = useMemo(() => {
    if (stage < 10 || !isSuccess) return [];
    // Generating seeds here instead of Math.random directly in mapping if linter complains, 
    // but useMemo itself is where we can generate them once.
    return [...Array(40)].map((_, i) => ({
      id: i,
      left: Math.abs((i * 137.5) % 100), // Deterministic pseudo-randomness
      delay: (i * 0.1) % 2,
      duration: 3 + ((i * 0.5) % 4),
      size: 6 + ((i * 1.2) % 8),
      color: ['#facc15', '#8b5cf6', '#ef4444', '#22c55e'][i % 4],
    }));
  }, [stage, isSuccess]);

  if (!result) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
      
      <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${stage >= 1 ? 'opacity-90' : 'opacity-0'}`} />
      
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`}
           style={{ background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)' }} />

      {stage >= 3 && stage < 5 && (
        <div className="relative z-10 flex flex-col items-center gap-6 animate-pulse">
          <div className="relative w-40 h-24 md:w-56 md:h-32 drop-shadow-[0_0_40px_rgba(250,204,21,0.6)]">
            <svg viewBox="0 0 240 120" className="w-full h-full">
              <defs>
                <linearGradient id="gold-master-res" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#facc15" />
                  <stop offset="60%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
              </defs>
              <path d="M190 65 C230 65 230 30 190 30 C170 30 160 50 170 65" fill="none" stroke="url(#gold-master-res)" strokeWidth="8" strokeLinecap="round" />
              <ellipse cx="110" cy="75" rx="70" ry="35" fill="url(#gold-master-res)" />
              <path d="M45 70 C10 70 5 45 25 40 L50 40 C40 70 45 75 55 75 Z" fill="url(#gold-master-res)" />
              <rect x="75" y="105" width="70" height="10" rx="5" fill="#854d0e" />
              <ellipse cx="110" cy="105" rx="45" ry="6" fill="url(#gold-master-res)" />
              <ellipse cx="110" cy="40" rx="20" ry="10" fill="url(#gold-master-res)" />
              <circle cx="110" cy="30" r="6" fill="url(#gold-master-res)" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white bengali-font tracking-widest animate-fadeIn">আমি চিনে ফেলেছি...</h2>
        </div>
      )}

      {stage >= 10 && isSuccess && confettiItems.map((c) => (
        <div 
          key={c.id}
          className="fixed top-[-20px] animate-confettiFall z-50 pointer-events-none"
          style={{
            left: `${c.left}%`,
            backgroundColor: c.color,
            width: `${c.size}px`,
            height: `${c.size}px`,
            borderRadius: '50%',
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`
          }}
        />
      ))}

      <div className="relative z-20 w-full max-w-lg">
        {stage >= 5 && (
          <div className={`
            w-full p-8 md:p-12 rounded-[3.5rem] border-4 transition-all duration-700 accelerate translate-z-0
            ${isSuccess ? 'border-amber-400 shadow-glow-gold' : 'border-red-500/30'}
            ${isDark ? 'glass-dark' : 'bg-white shadow-2xl'}
            animate-slam
          `}>
            
            {isSuccess ? (
              <div className="space-y-8 text-center">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-amber-500 uppercase bengali-font bg-amber-500/10 px-4 py-1.5 rounded-full inline-block">✨ উত্তরটি হলো</span>
                  
                  {stage >= 6 && (
                    <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600 py-2 bengali-font leading-tight animate-bounceIn">
                      {result.banglaName || result.character}
                    </h1>
                  )}
                </div>

                {stage >= 7 && result.description && (
                  <div className="animate-slideUp">
                    <p className="text-lg md:text-2xl opacity-90 italic bengali-font text-text-primary leading-relaxed">
                      &quot;{result.description}&quot;
                    </p>
                  </div>
                )}
                
                {stage >= 8 && (
                  <div className="flex justify-center gap-3 animate-slideUp">
                    <span className="px-4 py-1.5 bg-royal-500/10 text-royal-500 rounded-full text-xs font-bold bengali-font border border-royal-500/20">
                      #{result.category || 'সাধারণ'}
                    </span>
                    <span className="px-4 py-1.5 bg-purple-500/10 text-purple-600 rounded-full text-xs font-bold bengali-font border border-purple-500/20">
                      {questionCount} প্রশ্ন
                    </span>
                  </div>
                )}

                {stage >= 9 && (
                  <div className="space-y-4 pt-6 animate-fadeIn">
                    {isMultiplayer ? (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => onResponse(true)} className="flex-1 py-5 bg-green-500 text-white rounded-2xl font-bold text-xl shadow-lg active:scale-95 transition-all bengali-font">হ্যাঁ!</button>
                        <button onClick={() => onResponse(false)} className="flex-1 py-5 bg-red-500 text-white rounded-2xl font-bold text-xl shadow-lg active:scale-95 transition-all bengali-font">না...</button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <button onClick={onRestart} className="w-full py-5 bg-royal-500 text-white rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all bengali-font group">
                           আবার খেলি! <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                        </button>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <button onClick={shareWhatsApp} className="py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
                             <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp
                          </button>
                          <button onClick={shareFacebook} className="py-4 bg-[#1877F2] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
                             <Facebook className="w-5 h-5 fill-current" /> Facebook
                          </button>
                        </div>

                        <button 
                          onClick={() => {
                            setStage(-1);
                            updateLastGame({ won: false });
                          }} 
                          className="w-full py-4 text-xs font-bold opacity-30 hover:opacity-100 transition-opacity bengali-font uppercase tracking-widest"
                        >
                          ভুল অনুমান? এখানে ক্লিক করুন
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-8 text-center animate-fadeIn">
                <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <Frown className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black bengali-font">ওহ! আমি কি হারলাম? 😢</h2>
                <div className="space-y-4">
                  <p className="text-sm opacity-60 bengali-font">আপনি আপনার মনের চরিত্রটির নাম এখানে বলতে পারেন:</p>
                  <input 
                    type="text"
                    value={userInputCharacter}
                    onChange={(e) => setUserInputCharacter(e.target.value)}
                    placeholder="সঠিক চরিত্রের নাম..."
                    className={`w-full p-5 rounded-2xl border-2 transition-all text-center font-bold bengali-font outline-none ${isDark ? 'bg-black/20 border-white/5 focus:border-royal-500' : 'bg-gray-50 focus:border-royal-500 focus:shadow-inner'}`}
                  />
                  <button 
                    onClick={() => {
                      if (userInputCharacter) {
                        updateLastGame({ character: userInputCharacter, won: false });
                      }
                      onRestart();
                    }} 
                    className="w-full py-5 bg-royal-500 text-white rounded-2xl font-bold text-lg bengali-font active:scale-95 transition-all shadow-lg"
                  >
                    আবার খেলুন
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default memo(ResultScreen);
