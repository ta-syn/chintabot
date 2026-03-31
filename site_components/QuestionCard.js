'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import { Quote } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

function QuestionCard({ 
  question, 
  questionNumber, 
  category, 
  isLoading,
  isAnimating 
}) {
  const { isDark } = useTheme();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const cardRef = useRef(null);

  // Focus management
  useEffect(() => {
    if (question && !isLoading && !isAnimating && cardRef.current) {
      cardRef.current.focus();
    }
  }, [question, isLoading, isAnimating]);

  // Typewriter effect
  useEffect(() => {
    if (question && !isAnimating) {
      setIsTyping(true);
      setDisplayedText("");
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(question.slice(0, i + 1));
        i++;
        if (i >= question.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [question, isAnimating]);

  const getFontSizeClass = () => {
    if (question.length > 50) return 'text-xl md:text-2xl';
    return 'text-2xl md:text-4xl';
  };

  return (
    <div 
      ref={cardRef}
      tabIndex={-1} 
      role="status"
      aria-live="polite"
      className={`
        w-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 transition-all duration-500 relative overflow-hidden accelerate translate-z-0 focus:outline-none
        ${isDark ? 'glass border-white/5' : 'bg-white shadow-2xl shadow-purple-200/40 border-purple-100'}
        ${isAnimating ? 'animate-slideLeft' : 'animate-slideRight'}
      `}
    >
      <div className="absolute top-6 left-6 opacity-10">
        <Quote className="w-12 h-12 md:w-16 md:h-16 text-royal-500" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 md:gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-royal-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-40 bengali-font">প্রশ্ন {questionNumber}</span>
          </div>
          {category && (
            <span className="hidden xs:block px-3 py-1 bg-royal-500/10 text-royal-500 text-[10px] font-bold rounded-full uppercase tracking-tighter bengali-font">
              {category}
            </span>
          )}
        </div>

        <div className="min-h-[100px] flex items-center">
          {isLoading && !isAnimating ? (
            <div className="w-full space-y-4">
              <div className="h-8 bg-royal-500/5 rounded-full w-3/4 animate-pulse" />
              <div className="h-8 bg-royal-500/5 rounded-full w-1/2 animate-pulse" />
            </div>
          ) : (
            <h2 className={`${getFontSizeClass()} font-black bengali-font leading-tight text-text-primary`}>
              {displayedText}
              {isTyping && <span className="inline-block w-2 h-8 bg-royal-500 ml-1 animate-pulse" aria-hidden="true" />}
            </h2>
          )}
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal-500/5 rounded-full blur-[40px] pointer-events-none" />
    </div>
  );
}

export default memo(QuestionCard);
