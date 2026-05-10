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
        relative p-2 md:p-3 rounded-xl glass transition-all duration-300 group overflow-hidden accelerate translate-z-0
        active:scale-95 hover:scale-110 border border-white/5 shadow-sm
        ${isDark ? 'hover:bg-royal-500/20 text-yellow-400' : 'hover:bg-royal-500/10 text-royal-600'}
        ${isRotating ? 'rotate-[360deg]' : 'rotate-0'}
      `}
      style={{ transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease' }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-royal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        {isDark ? (
          <Moon className="w-5 h-5 md:w-6 md:h-6 transition-all group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
        ) : (
          <Sun className="w-5 h-5 md:w-6 md:h-6 transition-all group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.4)]" />
        )}
      </div>
    </button>
  );
}

export default memo(ThemeToggle);
