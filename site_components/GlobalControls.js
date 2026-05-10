'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Activity } from 'lucide-react';
import SoundToggle from './SoundToggle';
import ThemeToggle from './ThemeToggle';
import StatsModal from './StatsModal';

const GlobalControls = () => {
  const [showStats, setShowStats] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenStats = useCallback((e) => {
    e.preventDefault();
    setShowStats(true);
  }, []);

  const handleCloseStats = useCallback(() => {
    setShowStats(false);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[100] flex items-center gap-2 md:gap-3 animate-fadeIn">
        {/* Activity/Stats Button */}
        <button 
          onClick={handleOpenStats} 
          className="p-2 md:p-3 glass rounded-xl hover:bg-royal-500/10 transition-all active:scale-95 hover:scale-110 shadow-sm border border-white/5 group relative overflow-hidden" 
          aria-label="পরিসংখ্যান"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-royal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Activity className="w-5 h-5 text-royal-500 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all" />
        </button>

        <SoundToggle />
        <ThemeToggle />
      </div>

      {showStats && <StatsModal isOpen={showStats} onClose={handleCloseStats} />}
    </>
  );
};

export default GlobalControls;
