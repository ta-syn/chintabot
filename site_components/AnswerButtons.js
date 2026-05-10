'use client';

import React, { useState, memo, useRef, useCallback } from 'react';
import useTheme from '../site_hooks/useTheme';
import { playClick } from '../lib/sounds';

function AnswerButtons({ onAnswer, isLoading, lastAnswer }) {
  const { isDark } = useTheme();
  const [ripples, setRipples] = useState([]);
  const [clickedBtn, setClickedBtn] = useState(null);
  const rippleIdRef = useRef(0);

  const handleAction = useCallback((label) => {
    if (isLoading) return;
    setClickedBtn(label);
    setTimeout(() => {
      onAnswer(label);
      setClickedBtn(null);
    }, 300);
  }, [isLoading, onAnswer]);

  const createRipple = useCallback((e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const id = ++rippleIdRef.current;
    const newRipple = { id, x, y, size };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  }, []);

  const buttons = [
    { label: 'হ্যাঁ', icon: '✅', color: 'bg-gradient-to-br from-green-500 to-green-600', shadow: 'shadow-green-500/30', delay: 0 },
    { label: 'না', icon: '❌', color: 'bg-gradient-to-br from-red-500 to-red-600', shadow: 'shadow-red-500/30', delay: 100 },
    { label: 'হয়তো', icon: '🤔', color: 'bg-gradient-to-br from-amber-500 to-amber-600', shadow: 'shadow-amber-500/30', delay: 200 },
  ];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-4 mt-2 px-4 translate-z-0">
      <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            disabled={isLoading}
            aria-label={`${btn.label} উত্তর দিন`}
            onClick={(e) => {
              createRipple(e);
              handleAction(btn.label);
            }}
            className={`
              relative py-3 md:py-4 px-1 rounded-2xl md:rounded-3xl font-black text-white transition-all duration-500 overflow-hidden group 
              border-2 border-transparent hover:border-white/50 active:scale-95 hover:scale-[1.08]
              ${btn.color} ${btn.shadow}
              ${isLoading ? 'opacity-40 grayscale-[0.4] cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'}
              ${(lastAnswer === btn.label || clickedBtn === btn.label) ? 'border-white shadow-[0_0_40px_rgba(255,255,255,0.5)] z-10 scale-[1.05]' : ''}
              bengali-font min-h-[60px] md:min-h-[75px] animate-slideUp
            `}
            style={{ animationDelay: `${btn.delay}ms` }}
          >
            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="flex flex-col items-center justify-center gap-1 md:gap-1.5 relative z-10">
              <span className="text-xl md:text-2xl transform group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{btn.icon}</span>
              <span className="text-[10px] md:text-base font-black tracking-tight drop-shadow-md">{btn.label}</span>
            </span>
            
            {ripples.map(ripple => (
              <span
                key={ripple.id}
                className="absolute bg-white/40 rounded-full animate-ripple pointer-events-none"
                style={{
                  width: ripple.size,
                  height: ripple.size,
                  left: ripple.x,
                  top: ripple.y,
                }}
              />
            ))}
          </button>
        ))}
      </div>

      <div className="flex justify-center animate-slideUp" style={{ animationDelay: '300ms' }}>
        <button
          disabled={isLoading}
          aria-label="আমি জানি না"
          onClick={() => handleAction('জani না')}
          className={`
            group relative py-2.5 px-8 text-[10px] md:text-xs font-black rounded-xl border-2 transition-all bengali-font overflow-hidden
            ${isDark 
              ? 'border-white/10 text-white glass bg-white/5 hover:border-royal-400 hover:bg-royal-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]' 
              : 'border-royal-500/20 text-royal-700 bg-white hover:border-royal-500 hover:bg-royal-50 shadow-md'
            }
            ${isLoading ? 'opacity-30' : 'active:scale-95 hover:scale-105'}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-royal-500/0 via-royal-500/10 to-royal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="flex items-center gap-2 relative z-10">
            <span className="opacity-60 group-hover:rotate-180 transition-transform duration-700">⚪</span>
            জানি না
          </span>
        </button>
      </div>



      <style jsx>{`
        @keyframes ripple {
          from { transform: scale(0); opacity: 1; }
          to { transform: scale(4); opacity: 0; }
        }
        .animate-ripple { animation: ripple 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>


  );
}

export default memo(AnswerButtons);
