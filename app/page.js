'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import useTheme from '../site_hooks/useTheme';

// Heavy components - Dynamic Import
const StartScreen = dynamic(() => import('../site_components/StartScreen'), { ssr: false });
const GameBoard = dynamic(() => import('../site_components/GameBoard'), { ssr: false });
const MultiplayerBoard = dynamic(() => import('../site_components/MultiplayerBoard'), { ssr: false });
const MultiplayerLobby = dynamic(() => import('../site_components/MultiplayerLobby'), { ssr: false });
const CategorySelect = dynamic(() => import('../site_components/CategorySelect'), { ssr: false });

const TIPS = [
  "জানেন কি? ChintaBot ১০,০০০+ চরিত্র চেনে!",
  "Gemini AI দিয়ে তৈরি!",
  "বাংলাদেশের জন্য বিশেষভাবে বানানো!",
  "জিনী যত বেশি খেলবে, তত বেশি শিখবে!",
  "আপনার চরিত্রটি কি বিখ্যাত কেউ? জিনী অবশ্যই বলবে!",
  "ম্যাজিক ল্যাম্পের আশীর্বাদ আপনার সাথে থাকুক!"
];

export default function Home() {
  const { isDark } = useTheme();
  const [appState, setAppState] = useState("loading"); // loading, start, categorySelect, playing, multilobby, multiplaying
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [difficulty, setDifficulty] = useState({ maxQuestions: 20, hints: 1 });
  const [multiplayerData, setMultiplayerData] = useState(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [welcomeMessage, setWelcomeMessage] = useState(null);

  useEffect(() => {
    // Check for returning user
    try {
      if (typeof window !== 'undefined') {
        const stats = localStorage.getItem('chintabot_stats');
        if (stats) {
          const parsed = JSON.parse(stats);
          if (parsed && Array.isArray(parsed) && parsed.length > 0) {
            const lastGame = parsed[0];
            // Use timeout to avoid synchronous setState warning
            setTimeout(() => {
              setWelcomeMessage(`আবার স্বাগতম! আপনার শেষ চরিত্রটি ছিল ${lastGame.character}। জিনী আপনার জন্য নতুন চ্যালেঞ্জ নিয়ে তৈরি! ✨`);
            }, 0);
          }
        }
      }
    } catch (e) {
      console.warn("Storage check failed");
    }

    // Initial loading sequence
    const timer = setTimeout(() => {
      setIsAppReady(true);
      setAppState("start");
    }, 2000);

    const tipTimer = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % TIPS.length);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(tipTimer);
    };
  }, []);

  const handleStartSingle = useCallback(() => setAppState("categorySelect"), []);
  const handleStartMultiplayer = useCallback(() => setAppState("multilobby"), []);
  const handleBackToStart = useCallback(() => setAppState("start"), []);
  
  const handleCategorySelect = useCallback((data) => {
    setSelectedCategory(data.category);
    setDifficulty(data.difficulty);
    setAppState("playing");
  }, []);

  const handleMultiLobbyStart = useCallback((data) => {
    setMultiplayerData(data);
    setAppState("multiplaying");
  }, []);

  if (!isAppReady) {
    return (
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1000 ${isDark ? 'bg-[#05000f]' : 'bg-[#fcf8ff]'}`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-royal-500/10 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center p-6">
          <div className="relative w-56 h-36 md:w-72 md:h-48 mb-10 animate-float translate-z-0">
            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gold-400/20 rounded-full blur-[40px] animate-pulse" />
            
            <svg viewBox="0 0 240 120" className="w-full h-full drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]">
              <defs>
                <linearGradient id="gold-master" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#facc15" />
                  <stop offset="60%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
                <linearGradient id="gold-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Handle */}
              <path d="M190 65 C230 65 230 30 190 30 C170 30 160 50 170 65" fill="none" stroke="url(#gold-master)" strokeWidth="8" strokeLinecap="round" />
              
              {/* Main Body */}
              <ellipse cx="110" cy="75" rx="70" ry="35" fill="url(#gold-master)" filter="url(#glow)" />
              <ellipse cx="110" cy="72" rx="65" ry="30" fill="url(#gold-master)" opacity="0.9" />
              
              {/* Shine highlight */}
              <ellipse cx="100" cy="65" rx="35" ry="12" fill="white" opacity="0.2" />
              
              {/* Spout */}
              <path d="M45 70 C10 70 5 45 25 40 L50 40 C40 70 45 75 55 75 Z" fill="url(#gold-master)" />
              <path d="M47 68 C15 68 12 48 28 45 L50 45 C42 68 45 72 52 72 Z" fill="url(#gold-master)" opacity="0.8" />
              
              {/* Base */}
              <rect x="75" y="105" width="70" height="10" rx="5" fill="#854d0e" />
              <ellipse cx="110" cy="105" rx="45" ry="6" fill="url(#gold-master)" />
              
              {/* Lid / Topper */}
              <ellipse cx="110" cy="40" rx="20" ry="10" fill="url(#gold-master)" />
              <circle cx="110" cy="30" r="6" fill="url(#gold-master)" />
              <circle cx="110" cy="30" r="2" fill="white" opacity="0.5" />
            </svg>
          </div>
          <div className="text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-black text-gold-shimmer tracking-tighter drop-shadow-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>CHINTABOT</h1>
            <div className="space-y-3">
              <p className="text-sm md:text-lg font-bold bengali-font text-royal-500 animate-pulse min-h-[1.5rem] px-6">
                {TIPS[currentTip]}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-deep-800' : 'bg-[#fcf8ff]'}`}>
      <div className="relative z-10 w-full min-h-screen">
        {appState === "start" && (
          <StartScreen 
            welcomeMessage={welcomeMessage}
            onStartSingle={handleStartSingle}
            onStartMultiplayer={handleStartMultiplayer}
          />
        )}
        {appState === "categorySelect" && (
          <CategorySelect 
            onSelect={handleCategorySelect}
            onBack={handleBackToStart}
          />
        )}
        {appState === "playing" && (
          <GameBoard 
            selectedCategory={selectedCategory}
            difficulty={difficulty}
            onExit={handleBackToStart}
          />
        )}
        {appState === "multilobby" && (
          <MultiplayerLobby 
            onStartGame={handleMultiLobbyStart}
            onBack={handleBackToStart}
          />
        )}
        {appState === "multiplaying" && (
          <MultiplayerBoard 
            {...multiplayerData}
            onExit={handleBackToStart}
          />
        )}
      </div>
    </main>
  );
}
