'use client';

import React, { useState, useEffect, memo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { isMuted, toggleMute, playClick } from '../lib/sounds';

function SoundToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // Avoid synchronous setState in effect to prevent cascading renders
    const timer = setTimeout(() => {
      setMuted(isMuted());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const newVal = toggleMute();
    setMuted(newVal);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={muted ? "সাউন্ড অন করুন" : "সাউন্ড মিউট করুন"}
      className={`
        relative p-2 md:p-3 rounded-xl glass transition-all duration-300 group overflow-hidden
        hover:bg-royal-500/10 text-royal-500 shadow-sm border border-white/5
        active:scale-95 hover:scale-110
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        {muted ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6 transition-all group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 transition-all group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
        )}
      </div>
    </button>
  );
}

export default memo(SoundToggle);
