'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import { Quote } from 'lucide-react';
import PropTypes from 'prop-types';
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
        w-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 transition-all duration-700 relative overflow-hidden accelerate translate-z-0 focus:outline-none card-hover
        ${isDark ? 'glass bg-white/[0.08] border-white/20 shadow-xl' : 'bg-white shadow-2xl border-purple-100'}
        ${isAnimating ? 'animate-slideLeft' : 'animate-slideRight'}
      `}
    >
      {/* Magical Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-royal-500/15 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/15 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="absolute top-6 left-6 opacity-[0.08] dark:opacity-[0.15]">
        <Quote className="w-16 h-16 md:w-20 md:h-20 text-royal-500" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 md:gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-royal-500 animate-ping" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-royal-400 bengali-font">
              প্রশ্ন {questionNumber}
            </span>
          </div>
          {category && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-royal-500/15 border border-royal-500/30 rounded-full shadow-lg backdrop-blur-md">
               <span className="w-1 h-1 rounded-full bg-royal-500 animate-pulse" />
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest bengali-font text-royal-400">
                {category}
               </span>
            </div>
          )}
        </div>

        <div className="min-h-[100px] flex items-center">
          {isLoading && !isTyping ? (
            <div className="w-full space-y-4">
              <div className="h-10 bg-royal-500/10 rounded-2xl w-full animate-pulse" />
              <div className="h-10 bg-royal-500/10 rounded-2xl w-4/5 animate-pulse [animation-delay:0.2s]" />
            </div>
          ) : (
            <h2 className={`${getFontSizeClass()} font-black bengali-font leading-[1.3] text-text-primary drop-shadow-sm text-center w-full`}>
              {displayedText}
              {isTyping && <span className="inline-block w-1.5 h-10 bg-royal-500 ml-2 animate-pulse rounded-full align-middle" aria-hidden="true" />}
            </h2>
          )}
        </div>
      </div>

      {/* Decorative Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-royal-500/50 to-transparent" />
    </div>



  );
}

QuestionCard.propTypes = {
  question: PropTypes.string,
  questionNumber: PropTypes.number,
  category: PropTypes.string,
  isLoading: PropTypes.bool,
  isAnimating: PropTypes.bool
};

export default memo(QuestionCard);
