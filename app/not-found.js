'use client';

import React from 'react';
import Link from 'next/link';
import Genie from '../site_components/Genie';
import useTheme from '../site_hooks/useTheme';

export default function NotFound() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 text-center ${isDark ? 'bg-deep-800 text-white' : 'bg-[#fcf8ff] text-deep-900'}`}>
      <div className="space-y-8 animate-bounceIn">
        <div className="w-56 h-72 mx-auto">
          <Genie state="sad" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-500 to-purple-400">
            এই পৃষ্ঠা খুঁজে পাইনি 😢
          </h1>
          <p className="text-lg md:text-xl opacity-60 bengali-font">
            মনে হচ্ছে জিনী আপনাকে ভুল রাস্তায় নিয়ে এসেছে!
          </p>
        </div>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-10 py-5 bg-royal-500 text-white rounded-3xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-royal-500/30 bengali-font"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}
