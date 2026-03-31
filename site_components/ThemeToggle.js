'use client';

import React, { useState, memo } from 'react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isDark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}
      className={`
        relative p-3 rounded-2xl glass transition-all duration-300 group overflow-hidden accelerate translate-z-0
        ${isDark ? 'hover:bg-royal-500/20 text-gold-400' : 'hover:bg-royal-500/10 text-royal-600 shadow-sm border border-purple-100'}
        ${isRotating ? 'rotate-[360deg]' : 'rotate-0'}
      `}
      style={{ transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease' }}
    >
      <div className="relative z-10">
        {isDark ? (
          <Moon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
        ) : (
          <Sun className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-royal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}

export default memo(ThemeToggle);
