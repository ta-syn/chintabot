'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Home, DoorOpen, Copy, Check, Crown, Loader2, XCircle } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

const ROOM_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

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
      pollInterval.current = setInterval(async () => {
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
    } catch (err) {
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

      <div className="w-full max-w-4xl flex flex-col items-center mb-10 md:mb-20 animate-slideDown px-4">
        <div className="w-full flex justify-start mb-6">
          <button onClick={onBack} className="p-4 glass rounded-[1.5rem] hover:bg-royal-500/10 transition-all active:scale-95 group shadow-lg">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
        <h1 className="text-4xl md:text-7xl font-black bengali-font bg-clip-text text-transparent bg-gradient-to-r from-royal-500 to-purple-400 mb-4 text-center leading-tight tracking-tighter drop-shadow-lg">
          রুম মাল্টিপ্লেয়ার 👥
        </h1>
      </div>

      <div className="w-full max-w-lg space-y-8 px-4 z-10">
        
        {!isWaiting && (
          <div className="space-y-4 animate-slideUp accelerate">
            <label className="text-xs font-bold uppercase tracking-widest opacity-40 bengali-font block px-2">আপনার নাম</label>
             <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="যেমন: জাদুকর"
                className={`w-full p-6 md:p-8 rounded-[2rem] border-2 transition-all outline-none font-black bengali-font text-xl md:text-2xl ${
                  isDark ? 'bg-white/5 border-white/10 text-white focus:border-royal-500 shadow-inner' : 'bg-white border-purple-100 text-gray-800 focus:border-royal-500 shadow-xl shadow-purple-200/20'
                }`}
              />
          </div>
        )}

        {!mode && !isWaiting && (
          <div className="grid grid-cols-1 gap-4 animate-slideUp [animation-delay:200ms]">
            <button onClick={handleCreate} className={`group glass p-8 rounded-[3rem] flex items-center gap-6 border-2 border-transparent hover:border-royal-500/30 transition-all hover:scale-[1.05] active:scale-95 ${isDark ? 'bg-white/[0.03]' : 'bg-white shadow-2xl'}`}>
              <div className="shrink-0 w-16 h-16 bg-purple-500/10 rounded-[1.5rem] flex items-center justify-center text-purple-600 transition-all group-hover:bg-royal-500 group-hover:text-white">
                <Home className="w-8 h-8" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-black text-xl md:text-2xl bengali-font">রুম তৈরি করুন</h3>
                <p className="text-sm opacity-50 bengali-font">চালকের ভূমিকা পালন করুন</p>
              </div>
            </button>

            <button onClick={() => setMode('join')} className={`group glass p-8 rounded-[3rem] flex items-center gap-6 border-2 border-transparent hover:border-teal-500/30 transition-all hover:scale-[1.05] active:scale-95 ${isDark ? 'bg-white/[0.03]' : 'bg-white shadow-2xl'}`}>
              <div className="shrink-0 w-16 h-16 bg-teal-500/10 rounded-[1.5rem] flex items-center justify-center text-teal-600 transition-all group-hover:bg-teal-500 group-hover:text-white">
                <DoorOpen className="w-8 h-8" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-black text-xl md:text-2xl bengali-font">রুমে প্রবেশ করুন</h3>
                <p className="text-sm opacity-50 bengali-font">বন্ধুর দেওয়া কোড ব্যবহার করুন</p>
              </div>
            </button>
          </div>
        )}

        {mode === 'join' && !isWaiting && (
          <div className="space-y-8 animate-fadeIn">
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              placeholder="কোড"
              maxLength={6}
              className={`w-full p-8 text-4xl tracking-[0.4em] font-mono font-black text-center rounded-[2.5rem] border-2 transition-all outline-none ${
                 isDark ? 'bg-black/40 border-white/10 text-royal-400' : 'bg-gray-50 border-purple-100 text-royal-600 shadow-inner'
              }`}
            />
            <button onClick={handleJoin} className="w-full py-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-[2.5rem] font-black text-2xl shadow-xl active:scale-95 transition-all bengali-font">
              যোগ দিন
            </button>
          </div>
        )}

        {isWaiting && (
          <div className="glass p-10 rounded-[4rem] space-y-12 animate-bounceIn text-center relative border-t-8 border-royal-500">
            <div className="space-y-4">
              <p className="text-sm font-black text-royal-500 bengali-font">রুম কোড:</p>
              <div className="flex items-center justify-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5 cursor-pointer" onClick={copyToClipboard}>
                <span className="text-5xl font-mono font-black tracking-widest text-gold-400">
                  {generatedCode}
                </span>
                <div className={`p-4 rounded-2xl transition-all ${copied ? 'bg-green-500 text-white' : 'bg-royal-500/10 text-royal-500'}`}>
                  {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 text-royal-500 font-bold bengali-font animate-pulse">
                <Loader2 className="w-6 h-6 animate-spin" />
                বন্ধুর জন্য অপেক্ষা করছি...
              </div>
              
              <div className="w-full space-y-4 pt-8 border-t border-white/5">
                {players.map((p, i) => (
                  <div key={i} className={`flex items-center justify-between p-6 rounded-[2rem] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200 shadow-xl'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-extrabold bengali-font text-xl">{p}</span>
                    </div>
                    {i === 0 && <Crown className="w-6 h-6 text-gold-400 animate-bounce" />}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => window.location.reload()} className="text-xs font-bold text-red-500/40 hover:text-red-500 transition-colors bengali-font">রুম বাতিল করুন</button>
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
