'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { 
  Trophy, 
  ArrowLeft, 
  Brain, 
  AlertCircle,
  Crown,
  History
} from 'lucide-react';
import useTheme from '../site_hooks/useTheme';
import Genie from './Genie';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import AnswerButtons from './AnswerButtons';
import ResultScreen from './ResultScreen';
import { 
  playQuestion, 
  playAnswer, 
  playThinking, 
  stopThinking, 
  playCelebration, 
  playFail 
} from '../lib/sounds';

const HEARTBEAT_INTERVAL = 3000;
const DISCONNECT_THRESHOLD = 20000;

const ScoreBoard = ({ players, scores, currentGuesser, currentRound, totalRounds, hostName }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-6 md:mb-10 animate-fadeIn px-2">
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 bengali-font">রাউন্ড</span>
          <span className="px-3 py-1 bg-royal-500 text-white rounded-full text-xs font-bold leading-none">{currentRound} / {totalRounds}</span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 bengali-font">স্কোরবোর্ড</div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {players.map((p) => {
          const isGuesser = p === currentGuesser;
          const isHost = p === hostName;
          return (
            <div 
              key={p} 
              className={`player-card relative p-3 md:p-5 rounded-2xl md:rounded-[2rem] border-2 transition-all duration-500 overflow-hidden
                ${isDark ? 'glass bg-white/[0.02]' : 'bg-white shadow-xl shadow-purple-200/20'}
                ${isGuesser ? 'border-royal-500 shadow-glow-purple scale-[1.02]' : 'border-transparent opacity-70'}
              `}
            >
              <div className="flex items-center gap-2 md:gap-4">
                <div className={`shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-white text-sm md:text-lg relative
                  ${isGuesser ? 'bg-royal-500 shadow-lg' : 'bg-gray-400 opacity-50'}
                `}>
                  {p.charAt(0).toUpperCase()}
                  {isHost && (
                    <div className="absolute -top-2 -right-2 bg-gold-400 p-0.5 rounded-full shadow-lg border border-white/20">
                      <Crown className="w-3 h-3 text-deep-900" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xs md:text-base truncate bengali-font leading-tight">{p}</h3>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-gold-400" />
                    <span className="text-xs md:text-lg font-black text-royal-500">{scores[p] || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function MultiplayerBoard({ roomCode, playerName, players, onExit }) {
  const { isDark } = useTheme();
  const [gamePhase, setGamePhase] = useState('setup');
  const [currentRound, setCurrentRound] = useState(1);
  const totalRounds = 4;
  const [scores, setScores] = useState(players.reduce((acc, p) => ({ ...acc, [p]: 0 }), {}));
  const [currentGuesser, setCurrentGuesser] = useState(players[0]);
  const [currentThinkingPlayer, setCurrentThinkingPlayer] = useState(players[1]);
  const [secretCharacter, setSecretCharacter] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [result, setResult] = useState(null);
  const [genieState, setGenieState] = useState('idle');
  const [roundResults, setRoundResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFriendConnected, setIsFriendConnected] = useState(true);
  const [hostName, setHostName] = useState("");

  const fetchQuestion = useCallback(async (msgs) => {
    setIsLoading(true);
    setGenieState('thinking');
    playThinking();
    try {
      const resp = await fetch('/api/chintabot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: msgs, 
          questionCount, 
          category: 'all' 
        }),
      });
      const data = await resp.json();
      if (data.type === 'question') {
        setCurrentQuestion(data.text);
        setConfidence(data.confidence || 0);
        setGenieState(data.confidence > 70 ? 'excited' : 'asking');
        setMessages([...msgs, { role: 'assistant', text: data.text }]);
        setQuestionCount(prev => prev + 1);
        playQuestion();
      } else if (data.type === 'guess' || data.type === 'unknown') {
        setResult(data);
        setGenieState(data.type === 'guess' ? 'celebrating' : 'sad');
        setGamePhase('guessing');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
      stopThinking();
    }
  }, [questionCount]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const resp = await fetch(`/api/multiplayer?roomCode=${roomCode}&playerName=${playerName}`);
        const data = await resp.json();
        
        if (data.success && data.room) {
          const room = data.room;
          if (room.host) setHostName(room.host);
          
          // Sync scores and game state
          if (room.scores) setScores(room.scores);
          
          if (room.status === 'playing' && gamePhase === 'setup' && room.secretCharacter) {
             setSecretCharacter(room.secretCharacter);
             setGamePhase('playing');
             const startMsg = { role: 'user', text: "নতুন গেম শুরু করো।" };
             setMessages([startMsg]);
             fetchQuestion([startMsg]);
          }

          const friendName = players.find(p => p !== playerName);
          if (friendName) {
             const lastSeen = room.lastSeen?.[friendName] || 0;
             setIsFriendConnected(Date.now() - lastSeen < DISCONNECT_THRESHOLD);
          }
        }
      } catch (e) {
        console.error("Board sync error:", e);
      }
    }, HEARTBEAT_INTERVAL);
    return () => clearInterval(interval);
  }, [roomCode, playerName, players, gamePhase, fetchQuestion]);

  const handleStartRound = async () => {
    if (!secretCharacter.trim()) return;
    
    try {
      await fetch('/api/multiplayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'startRound', 
          roomCode, 
          playerName, 
          secretCharacter 
        })
      });
      
      setGamePhase('playing');
      const startMsg = { role: 'user', text: "নতুন গেম শুরু করো।" };
      setMessages([startMsg]);
      setQuestionCount(0);
      setConfidence(0);
      fetchQuestion([startMsg]);
    } catch (e) {
      console.error("Start round error:", e);
    }
  };

  const handleAnswer = (ans) => {
    if (isLoading) return;
    playAnswer(ans);
    const updMsgs = [...messages, { role: 'user', text: ans }];
    setMessages(updMsgs);
    fetchQuestion(updMsgs);
  };

  const handleGuessResponse = (correct) => {
    if (correct) {
      playCelebration();
    } else {
      playFail();
    }
    const points = correct ? Math.max(1, 21 - questionCount) : 0;
    const newScores = { ...scores, [currentGuesser]: (scores[currentGuesser] || 0) + points };
    setScores(newScores);
    setRoundResults([...roundResults, { round: currentRound, guesser: currentGuesser, won: correct, steps: questionCount, points, character: secretCharacter }]);
    setGamePhase('roundEnd');
  };

  const nextRound = () => {
    if (currentRound >= totalRounds) {
      setGamePhase('finalResult');
    } else {
      setCurrentGuesser(currentThinkingPlayer);
      setCurrentThinkingPlayer(currentGuesser);
      setCurrentRound(prev => prev + 1);
      setSecretCharacter("");
      setMessages([]);
      setResult(null);
      setQuestionCount(0);
      setConfidence(0);
      setGamePhase('setup');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col p-4 md:p-8 animate-fadeIn ${isDark ? 'bg-deep-800' : 'bg-[#fcf8ff]'}`}>
      
      {!isFriendConnected && (
         <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 bg-red-500 text-white rounded-full font-bold bengali-font flex items-center gap-3 animate-shake shadow-xl">
           <AlertCircle className="w-5 h-5" />
           বন্ধু সংযোগ হারিয়েছে! অপেক্ষা করুন...
         </div>
      )}

      <nav className="flex justify-between items-center mb-6">
        <button onClick={onExit} className="p-3 glass rounded-xl shadow-sm hover:scale-110 transition-all"><ArrowLeft className="w-5 h-5" /></button>
        <div className="bg-royal-500/10 px-4 py-2 rounded-full border border-royal-500/20 shadow-inner">
           <span className="text-xs font-black font-mono text-royal-600">ROOM: {roomCode}</span>
        </div>
        <div className="w-10"></div>
      </nav>

      <ScoreBoard 
        players={players} 
        scores={scores} 
        currentGuesser={currentGuesser} 
        currentRound={currentRound} 
        totalRounds={totalRounds}
        hostName={hostName}
      />

      {gamePhase === 'setup' && (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md glass p-10 rounded-[3rem] text-center space-y-6 animate-bounceIn shadow-glow-purple/20">
            <Brain className="w-16 h-16 mx-auto text-royal-500" />
            <div className="space-y-1">
              <h2 className="text-3xl font-black bengali-font">চরিত্র নির্বাচন</h2>
              <p className="text-sm opacity-50 bengali-font">{currentThinkingPlayer} ভাবছেন, {currentGuesser} ধরবেন</p>
            </div>
            <input 
              type="password" 
              value={secretCharacter}
              onChange={(e) => setSecretCharacter(e.target.value)}
              placeholder="গোপন চরিত্র..."
              className={`w-full p-5 rounded-2xl text-center font-bold bengali-font border-2 outline-none transition-all ${isDark ? 'bg-black/20 border-white/5 focus:border-royal-500' : 'bg-gray-50 border-gray-100 focus:border-royal-500 shadow-inner'}`}
            />
            <button onClick={handleStartRound} className="w-full py-5 bg-royal-500 text-white rounded-2xl font-bold bengali-font shadow-lg hover:scale-105 active:scale-95 transition-all">খেলা শুরু</button>
          </div>
        </div>
      )}

      {gamePhase === 'playing' && (
        <div className="flex-1 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center"><Genie state={genieState} /></div>
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ProgressBar questionCount={questionCount} maxQuestions={21} confidence={confidence} />
            <QuestionCard question={currentQuestion} questionNumber={questionCount} category="Multiplayer" isLoading={isLoading} />
            <AnswerButtons onAnswer={handleAnswer} isLoading={isLoading} lastAnswer={null} />
          </div>
        </div>
      )}

      {gamePhase === 'guessing' && (
        <ResultScreen result={result} questionCount={questionCount} onRestart={onExit} isMultiplayer={true} onResponse={handleGuessResponse} />
      )}

      {gamePhase === 'roundEnd' && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
           <div className="glass p-10 rounded-[3rem] text-center space-y-6 animate-bounceIn min-w-[320px]">
             <Trophy className="w-16 h-16 mx-auto text-gold-400" />
             <div className="space-y-2">
               <h2 className="text-4xl font-black bengali-font">রাউন্ড শেষ!</h2>
               <p className="font-bold opacity-60 bengali-font">{currentGuesser} পেয়েছেন {roundResults[roundResults.length-1]?.points} পয়েন্ট</p>
             </div>
             <button onClick={nextRound} className="w-full py-5 bg-royal-500 text-white rounded-2xl font-bold bengali-font shadow-lg hover:scale-105 active:scale-95 transition-all">পরের রাউন্ড</button>
           </div>
           
           {/* Round Summary List */}
           <div className="w-full max-w-md space-y-3 opacity-0 animate-slideUp [animation-delay:0.5s]">
              <div className="flex items-center gap-2 px-4 opacity-40 uppercase text-[10px] tracking-widest font-black">
                <History className="w-3 h-3" /> ইতিহাস
              </div>
              {roundResults.map((res, i) => (
                <div key={i} className="glass p-4 rounded-2xl flex items-center justify-between border-l-4 border-royal-500">
                  <div className="text-left">
                    <p className="text-xs opacity-50 bengali-font">রাউন্ড {res.round}</p>
                    <p className="font-bold bengali-font">{res.character}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-royal-500">+{res.points} pts</p>
                    <p className="text-[10px] opacity-40">{res.steps} ধাপ</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      )}

      {gamePhase === 'finalResult' && (
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
           <div className="text-center space-y-4">
             <Crown className="w-20 h-20 mx-auto text-gold-400 animate-bounce" />
             <h1 className="text-6xl font-black text-gold-shimmer bengali-font uppercase">গেম শেষ!</h1>
           </div>
           
           <div className="grid grid-cols-2 gap-6 w-full max-w-2xl px-4 animate-slideUp">
             {players.sort((a,b) => scores[b] - scores[a]).map((p, i) => (
               <div key={p} className={`glass p-8 rounded-[3rem] text-center border-2 ${i === 0 ? 'border-gold-400 shadow-glow-gold' : 'border-transparent opacity-60'} transition-all`}>
                 <p className="text-xs font-bold opacity-40 bengali-font uppercase tracking-widest">{i === 0 ? 'বিজেতা' : 'রানার্স আপ'}</p>
                 <h2 className="text-3xl font-black bengali-font mb-2">{p}</h2>
                 <p className="text-5xl font-black text-royal-500">{scores[p]}</p>
                 <p className="text-xs font-bold opacity-30 mt-2 uppercase tracking-tighter">TOTAL POINTS</p>
               </div>
             ))}
           </div>

           <button onClick={onExit} className="px-12 py-5 bg-royal-500 text-white rounded-full font-black text-xl bengali-font shadow-xl hover:scale-110 active:scale-95 transition-all">গেম ক্লোজ করুন</button>
        </div>
      )}
    </div>
  );
}

export default memo(MultiplayerBoard);
