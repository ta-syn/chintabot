'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Home, DoorOpen, Copy, Check, Crown, Loader2, XCircle, ChevronRight } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';


export default function MultiplayerLobby({ onStartGame, onBack }) {
  const { isDark } = useTheme();
  const [mode, setMode] = useState(null); // 'create' | 'join'
  const [playerName, setPlayerName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [players, setPlayers] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  
  const pollInterval = useRef(null);

  const generateRoomCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCreate = async () => {
    if (!playerName.trim()) {
      setError("দয়া করে আপনার নাম লিখুন");
      return;
    }
    setError("");
    const code = generateRoomCode();
    setGeneratedCode(code);
    setIsWaiting(true);
    setMode('create');

    try {
      const resp = await fetch('/api/multiplayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'create', playerName, roomCode: code })
      });
      const data = await resp.json();
      if (!data.success) throw new Error(data.error);

      // Heartbeat & Polling
      const startTime = Date.now();
      pollInterval.current = setInterval(async () => {
        if (Date.now() - startTime > 5 * 60 * 1000) {
           clearInterval(pollInterval.current);
           setIsWaiting(false);
           setMode(null);
           setError("রুমের সময় শেষ! ৫ মিনিট অপেক্ষা করার পর বাতিল করা হয়েছে।");
           return;
        }
        try {
          const pollResp = await fetch(`/api/multiplayer?roomCode=${code}&playerName=${playerName}`);
          const pollData = await pollResp.json();
          
          if (pollData.success && pollData.room) {
            setPlayers(pollData.room.players);
            if (pollData.room.players.length >= 2) {
              clearInterval(pollInterval.current);
              setIsWaiting(false);
              onStartGame({ 
                roomCode: code, 
                playerName, 
                isHost: true, 
                players: pollData.room.players 
              });
            }
          }
        } catch (e) {
          console.error("Polling error:", e);
        }
      }, 3000);
    } catch (err) {
      setError("রুম তৈরি করতে সমস্যা হয়েছে: " + err.message);
      setIsWaiting(false);
      setMode(null);
    }
  };

  const handleJoin = async () => {
    if (!playerName.trim() || !roomCode.trim()) {
      setError("নাম এবং রুম কোড লিখুন");
      return;
    }
    const cleanCode = roomCode.toUpperCase();
    
    try {
      const resp = await fetch('/api/multiplayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'join', playerName, roomCode: cleanCode })
      });
      const data = await resp.json();
      
      if (!data.success) {
        setError(data.error || "রুম এ প্রবেশ করতে সমস্যা হয়েছে");
        return;
      }

      onStartGame({ 
        roomCode: cleanCode, 
        playerName, 
        isHost: false, 
        players: data.room.players 
      });
    } catch {
      setError("সংযোগ সমস্যা! আবার চেষ্টা করুন।");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (pollInterval.current) clearInterval(pollInterval.current);
    };
  }, []);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-10 transition-all duration-500 accelerate translate-z-0 ${isDark ? 'bg-deep-800' : 'bg-[#fcf8ff]'}`}>
      
      <div className="stars-container pointer-events-none opacity-30">
        <div className="nebula" />
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center mb-8 md:mb-12 animate-slideDown px-4 relative">
        <div className="w-full flex justify-start mb-6">
          <button 
            aria-label="ফিরে যান"
            onClick={() => {
              if (mode) {
                setMode(null);
                setError("");
              } else {
                onBack();
              }
            }} 
            className="p-4 glass rounded-2xl hover:bg-royal-500/10 transition-all active:scale-95 group shadow-lg border border-white/5"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-royal-500/20 blur-3xl rounded-full opacity-50 animate-pulse" />
          <h1 className="relative text-5xl md:text-8xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-400 via-gold-400 to-purple-400 text-center leading-tight tracking-tighter drop-shadow-2xl">
            রুম মাল্টিপ্লেয়ার 👥
          </h1>
        </div>
        <p className="text-text-secondary bengali-font opacity-60 mt-2 font-bold tracking-wide">বন্ধুর সাথে সরাসরি লড়াই করুন</p>
      </div>

      <div className="w-full max-w-lg space-y-8 px-4 z-10">
        
        {!isWaiting && (
          <div className="space-y-4 animate-slideUp accelerate">
            <div className="flex items-center gap-2 px-2">
               <div className="w-1.5 h-1.5 rounded-full bg-royal-500" />
               <label className="text-[10px] font-black uppercase tracking-widest opacity-40 bengali-font">আপনার পরিচয়</label>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-royal-500 to-purple-500 rounded-[2.2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <input
                  type="text"
                  aria-label="আপনার নাম"
                  value={playerName}
                  maxLength={15}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="আপনার নাম লিখুন..."
                  className={`relative w-full p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-500 outline-none font-black bengali-font text-xl md:text-2xl ${
                    isDark ? 'bg-black/40 border-white/5 text-white focus:border-royal-500 shadow-inner' : 'bg-white border-purple-100 text-gray-800 focus:border-royal-500 shadow-xl shadow-purple-200/20'
                  }`}
                />
            </div>
          </div>
        )}

        {!mode && !isWaiting && (
          <div className="grid grid-cols-1 gap-5 animate-slideUp [animation-delay:200ms]">
            <button onClick={handleCreate} className={`group relative p-8 rounded-[2.5rem] flex items-center gap-6 border-2 transition-all duration-500 hover:scale-[1.03] active:scale-95 overflow-hidden ${isDark ? 'bg-white/[0.03] border-white/5 hover:border-royal-500/50' : 'bg-white border-purple-50 shadow-2xl shadow-purple-200/40'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-royal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="shrink-0 w-16 h-16 bg-royal-500/10 rounded-2xl flex items-center justify-center text-royal-500 transition-all duration-500 group-hover:bg-royal-500 group-hover:text-white group-hover:rotate-12 group-hover:shadow-glow-purple">
                <Home className="w-8 h-8" />
              </div>
              <div className="text-left flex-1 relative z-10">
                <h3 className="font-black text-xl md:text-2xl bengali-font leading-tight">নতুন রুম খুলুন</h3>
                <p className="text-xs opacity-50 bengali-font mt-1">আপনি হবেন গেমের হোস্ট</p>
              </div>
              <div className="opacity-0 group-hover:opacity-20 transition-opacity">
                <ChevronRight className="w-8 h-8" />
              </div>
            </button>

            <button onClick={() => setMode('join')} className={`group relative p-8 rounded-[2.5rem] flex items-center gap-6 border-2 transition-all duration-500 hover:scale-[1.03] active:scale-95 overflow-hidden ${isDark ? 'bg-white/[0.03] border-white/5 hover:border-teal-500/50' : 'bg-white border-purple-50 shadow-2xl shadow-purple-200/40'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="shrink-0 w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-600 transition-all duration-500 group-hover:bg-teal-500 group-hover:text-white group-hover:rotate-12 group-hover:shadow-glow-green">
                <DoorOpen className="w-8 h-8" />
              </div>
              <div className="text-left flex-1 relative z-10">
                <h3 className="font-black text-xl md:text-2xl bengali-font leading-tight">রুমে যোগ দিন</h3>
                <p className="text-xs opacity-50 bengali-font mt-1">কোড ব্যবহার করে খেলায় নামুন</p>
              </div>
              <div className="opacity-0 group-hover:opacity-20 transition-opacity">
                <ChevronRight className="w-8 h-8" />
              </div>
            </button>
          </div>
        )}

        {mode === 'join' && !isWaiting && (
          <div className="space-y-8 animate-fadeIn">
            <div className="relative group">
              <div className="absolute -inset-1 bg-teal-500/20 rounded-[2.2rem] blur opacity-25" />
              <input
                type="text"
                aria-label="রুম কোড"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                placeholder="কোড দিন"
                maxLength={6}
                className={`relative w-full p-8 text-4xl md:text-5xl tracking-[0.4em] font-mono font-black text-center rounded-[2rem] border-2 transition-all duration-500 outline-none ${
                   isDark ? 'bg-black/60 border-white/10 text-teal-400 focus:border-teal-500' : 'bg-gray-50 border-teal-100 text-teal-600 shadow-inner focus:border-teal-500'
                }`}
              />
            </div>
            <button onClick={handleJoin} className="group w-full py-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-[2rem] font-black text-2xl shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 active:scale-95 transition-all duration-500 bengali-font relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">খেলায় যোগ দিন 🚀</span>
            </button>
          </div>
        )}

        {isWaiting && (
          <div className="glass p-10 rounded-[3rem] space-y-12 animate-bounceIn text-center relative border-t-8 border-royal-500 shadow-2xl shadow-royal-500/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-shimmer" />
            <div className="space-y-4">
              <p className="text-xs font-black text-royal-500 bengali-font uppercase tracking-widest">রুম কোড (বন্ধুকে দিন)</p>
              <button 
                aria-label="কোড কপি করুন"
                className="group relative flex items-center justify-center gap-4 bg-black/20 p-8 rounded-[2rem] border border-white/10 cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-royal-500/50 transition-all hover:bg-black/40" 
                onClick={copyToClipboard}
              >
                <span className="text-5xl md:text-6xl font-mono font-black tracking-widest text-gold-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                  {generatedCode}
                </span>
                <div className={`p-4 rounded-2xl transition-all duration-500 ${copied ? 'bg-green-500 text-white scale-110' : 'bg-royal-500/10 text-royal-500 group-hover:scale-110'}`}>
                  {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                </div>
              </button>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-3 text-royal-400 font-black bengali-font bg-royal-500/10 px-6 py-3 rounded-full border border-royal-500/20">
                <Loader2 className="w-5 h-5 animate-spin" />
                বন্ধুর জন্য অপেক্ষা করছি...
              </div>
              
              <div className="w-full space-y-4 pt-8 border-t border-white/5">
                {players.map((p, i) => (
                  <div key={i} className={`flex items-center justify-between p-6 rounded-3xl border transition-all duration-500 animate-slideUp ${isDark ? 'bg-white/5 border-white/10 shadow-inner' : 'bg-gray-50 border-gray-200 shadow-lg'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                      <span className="font-extrabold bengali-font text-xl">{p}</span>
                    </div>
                    {i === 0 && <Crown className="w-6 h-6 text-gold-400 animate-bounce" />}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => {
              if (pollInterval.current) clearInterval(pollInterval.current);
              setIsWaiting(false);
              setMode(null);
            }} className="text-xs font-bold text-red-500/40 hover:text-red-500 transition-colors bengali-font px-4 py-2 hover:bg-red-500/5 rounded-lg">রুম বাতিল করুন</button>
          </div>
        )}

        {error && (
          <div className="p-5 glass border-red-500/40 bg-red-500/5 text-red-500 rounded-3xl text-center bengali-font animate-shake font-black flex items-center justify-center gap-3">
            <XCircle className="w-6 h-6" /> {error}
          </div>
        )}
      </div>
    </div>
  );
}
