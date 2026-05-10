'use client';

import React, { useState, useEffect, useMemo, memo } from 'react';
import { MessageCircle, RotateCcw, Frown } from 'lucide-react';
import PropTypes from 'prop-types';
import useTheme from '../site_hooks/useTheme';
import { updateLastGame } from '../lib/gameStats';

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

function ResultScreen({ 
  result, 
  questionCount, 
  onRestart, 
  isMultiplayer = false,
  onResponse
}) {
  const { isDark } = useTheme();
  const [stage, setStage] = useState(0);
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden backdrop-blur-sm">
      
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${stage >= 1 ? 'opacity-90' : 'opacity-0'}`} />
      
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`}
           style={{ background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)' }} />

      {stage >= 3 && stage < 5 && (
        <div className="relative z-10 flex flex-col items-center gap-10 animate-float">
          <div className="relative w-48 h-32 md:w-64 md:h-40 filter drop-shadow-[0_0_50px_rgba(250,204,21,0.5)]">
            <svg viewBox="0 0 240 120" className="w-full h-full animate-pulse">
               <defs>
                 <linearGradient id="gold-res" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#fef08a" />
                   <stop offset="100%" stopColor="#eab308" />
                 </linearGradient>
               </defs>
               <path d="M110 20 L130 40 L110 60 L90 40 Z" fill="url(#gold-res)" />
               <circle cx="110" cy="40" r="15" fill="white" opacity="0.2" className="animate-ping" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white bengali-font tracking-widest animate-fadeIn [animation-duration:1s]">চিনে ফেলেছি! ✨</h2>
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
            animationDuration: `${c.duration}s`,
            boxShadow: `0 0 10px ${c.color}`
          }}
        />
      ))}

      <div className="relative z-20 w-full max-w-xl px-4">
        {stage >= 5 && (
          <div className={`
            w-full p-10 md:p-14 rounded-[3rem] border-2 transition-all duration-1000 accelerate translate-z-0 overflow-hidden relative
            ${isSuccess ? 'border-amber-400/30 shadow-[0_40px_80px_rgba(234,179,8,0.2)]' : 'border-red-500/20'}
            ${isDark ? 'glass bg-black/60 backdrop-blur-3xl' : 'bg-white shadow-2xl'}
            animate-slam
          `}>
            {/* Glossy Overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            {isSuccess ? (
              <div className="space-y-10 text-center relative z-10">
                <div className="space-y-4">
                   <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-[1px] bg-amber-500/30" />
                      <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-amber-500 uppercase bengali-font">আপনার মনের চরিত্র</span>
                      <div className="w-10 h-[1px] bg-amber-500/30" />
                   </div>
                  
                  {stage >= 6 && (
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 py-3 bengali-font leading-[1.2] animate-bounceIn drop-shadow-xl">
                      {result.banglaName || result.character}
                    </h1>
                  )}
                </div>

                {stage >= 7 && result.description && (
                  <div className="animate-slideUp [animation-delay:400ms]">
                    <p className="text-xl md:text-3xl font-bold opacity-90 italic bengali-font text-text-primary leading-relaxed px-4">
                      &quot;{result.description}&quot;
                    </p>
                  </div>
                )}
                
                {stage >= 8 && (
                  <div className="flex justify-center gap-4 animate-slideUp [animation-delay:600ms]">
                    <div className="px-6 py-2 bg-royal-500/10 text-royal-500 rounded-2xl text-[10px] md:text-xs font-black bengali-font border border-royal-500/20 uppercase tracking-widest">
                      {result.category || 'অজানালোক'}
                    </div>
                    <div className="px-6 py-2 bg-amber-500/10 text-amber-500 rounded-2xl text-[10px] md:text-xs font-black bengali-font border border-amber-500/20 uppercase tracking-widest">
                      {questionCount} প্রশ্ন
                    </div>
                  </div>
                )}

                {stage >= 9 && (
                  <div className="space-y-6 pt-10 animate-fadeIn [animation-delay:800ms]">
                    {isMultiplayer ? (
                      <div className="grid grid-cols-2 gap-5">
                        <button onClick={() => onResponse(true)} className="py-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-[2rem] font-black text-2xl shadow-xl active:scale-95 transition-all bengali-font hover:scale-[1.02]">হ্যাঁ!</button>
                        <button onClick={() => onResponse(false)} className="py-6 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-[2rem] font-black text-2xl shadow-xl active:scale-95 transition-all bengali-font hover:scale-[1.02]">না...</button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-6">
                        <button onClick={onRestart} className="w-full py-8 bg-gradient-to-r from-royal-500 to-purple-600 text-white rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-4 shadow-2xl shadow-royal-500/30 active:scale-95 transition-all bengali-font group overflow-hidden relative">
                           <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                           <RotateCcw className="w-7 h-7 group-hover:rotate-180 transition-transform duration-700" />
                           আবার খেলি!
                        </button>
                        
                        <div className="grid grid-cols-2 gap-5">
                          <button onClick={shareWhatsApp} className="py-5 bg-[#25D366] text-white rounded-[2rem] font-black text-sm md:text-base flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all hover:brightness-110">
                             <MessageCircle className="w-6 h-6 fill-current" /> WhatsApp
                          </button>
                          <button onClick={shareFacebook} className="py-5 bg-[#1877F2] text-white rounded-[2rem] font-black text-sm md:text-base flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all hover:brightness-110">
                             <FacebookIcon className="w-6 h-6 fill-current" /> Facebook
                          </button>
                        </div>

                        <button 
                          onClick={() => {
                            setStage(-1);
                            updateLastGame({ won: false });
                          }} 
                          className="w-full py-4 text-[10px] font-black opacity-20 hover:opacity-100 transition-opacity bengali-font uppercase tracking-[0.5em] mt-2"
                        >
                          ভুল অনুমান? এখানে ক্লিক করুন
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-10 text-center animate-fadeIn py-4">
                <div className="w-24 h-24 mx-auto bg-red-500/10 rounded-[2rem] flex items-center justify-center text-red-500 shadow-glow-red rotate-6 hover:rotate-0 transition-transform">
                  <Frown className="w-12 h-12" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-4xl font-black bengali-font text-text-primary">ওহ! আমি কি হারলাম? 😢</h2>
                  <p className="text-xs md:text-sm font-bold opacity-40 bengali-font uppercase tracking-widest">You won this round!</p>
                </div>
                <div className="space-y-6">
                  <div className="relative group">
                    <input 
                      type="text"
                      value={userInputCharacter}
                      onChange={(e) => setUserInputCharacter(e.target.value)}
                      placeholder="সঠিক চরিত্রের নাম..."
                      aria-label="সঠিক চরিত্রের নাম"
                      className={`w-full p-6 rounded-[1.5rem] border-2 transition-all text-center font-black text-xl bengali-font outline-none ${isDark ? 'bg-black/40 border-white/10 focus:border-royal-500 focus:bg-black/60' : 'bg-gray-50 border-gray-100 focus:border-royal-500 focus:bg-white focus:shadow-inner'}`}
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-royal-500 scale-x-0 group-focus-within:scale-x-100 transition-transform rounded-full" />
                  </div>
                  <button 
                    onClick={() => {
                      if (userInputCharacter) {
                        updateLastGame({ character: userInputCharacter, won: false });
                      }
                      onRestart();
                    }} 
                    className="w-full py-6 bg-gradient-to-r from-royal-500 to-purple-600 text-white rounded-[2rem] font-black text-2xl bengali-font active:scale-95 transition-all shadow-2xl shadow-royal-500/20"
                  >
                    আবার খেলুন
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

ResultScreen.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    details: PropTypes.string,
    confidence: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  questionCount: PropTypes.number,
  onRestart: PropTypes.func.isRequired,
  onResponse: PropTypes.func.isRequired,
  isMultiplayer: PropTypes.bool
};

export default memo(ResultScreen);
