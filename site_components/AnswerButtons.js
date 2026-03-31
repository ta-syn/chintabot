'use client';

import React, { useState, memo, useRef, useCallback } from 'react';
import useTheme from '../site_hooks/useTheme';

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
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6 mt-4 px-2 translate-z-0">
      <div className="flex flex-row gap-2 sm:gap-4 w-full">
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
              relative flex-1 py-5 px-2 sm:px-6 rounded-3xl font-black text-white transition-all duration-300 accelerate translate-z-0 overflow-hidden group
              ${btn.color} ${btn.shadow}
              ${isLoading ? 'opacity-50 grayscale-[0.2] cursor-not-allowed' : 'hover:scale-[1.05] hover:shadow-xl active:scale-95'}
              ${(lastAnswer === btn.label || clickedBtn === btn.label) ? 'ring-4 ring-white ring-offset-4 ring-offset-royal-500/20 scale-[1.05]' : ''}
              bengali-font min-h-[58px] animate-slideUp
            `}
            style={{ animationDelay: `${btn.delay}ms` }}
          >
            <span className="flex items-center justify-center gap-2 relative z-10">
              <span className="text-xl group-hover:animate-bounce">{btn.icon}</span>
              <span className="hidden sm:inline text-lg">{btn.label}</span>
            </span>
            
            {ripples.map(ripple => (
              <span
                key={ripple.id}
                className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
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

      <div className="flex flex-col items-center gap-4 animate-slideUp accelerate translate-z-0" style={{ animationDelay: '300ms' }}>
        <button
          disabled={isLoading}
          aria-label="আমি জানি না"
          onClick={() => handleAction('জানি না')}
          className={`
            w-full sm:w-auto py-4 px-10 text-base font-black rounded-full border-2 transition-all group bengali-font
            ${isDark 
              ? 'border-royal-500/30 text-purple-200 hover:bg-royal-500/10' 
              : 'border-purple-200 text-purple-600 hover:bg-purple-50 shadow-sm'
            }
            ${isLoading ? 'opacity-50' : 'active:scale-95 hover:scale-105'}
          `}
        >
          <span className="group-hover:rotate-12 inline-block transition-transform mr-2">⚪</span>
          জানি না
        </button>
      </div>

      <style jsx>{`
        @keyframes ripple {
          from { transform: scale(0); opacity: 1; }
          to { transform: scale(4); opacity: 0; }
        }
        .animate-ripple { animation: ripple 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}

export default memo(AnswerButtons);
