'use client';

import React, { useState, useEffect, memo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { isMuted, toggleMute } from '../lib/sounds';

function SoundToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(isMuted());
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
        relative p-3 rounded-2xl glass transition-all duration-300 group overflow-hidden
        hover:bg-royal-500/10 text-royal-500 shadow-sm border border-purple-100/10
      `}
    >
      <div className="relative z-10">
        {muted ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
        )}
      </div>
    </button>
  );
}

export default memo(SoundToggle);
