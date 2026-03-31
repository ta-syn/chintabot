'use client';

import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import { 
  XCircle, 
  Sparkles, 
  RotateCcw
} from 'lucide-react';
import useTheme from '../site_hooks/useTheme';
import Genie from './Genie';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import AnswerButtons from './AnswerButtons';
import ResultScreen from './ResultScreen';
import ErrorToast from './ErrorToast';
import AchievementNotification from './AchievementNotification';
import SoundToggle from './SoundToggle';
import ConfirmationModal from './ConfirmationModal';
import { saveGameResult, getStats } from '../lib/gameStats';
import { checkAndUnlock } from '../lib/achievements';
import { 
  playQuestion, 
  playAnswer, 
  playThinking, 
  stopThinking, 
  playCelebration, 
  playFail 
} from '../lib/sounds';

const SESSION_KEY = 'chintabot_session_v1';

function GameBoard({ selectedCategory = 'all', difficulty, onExit }) {
  const { isDark } = useTheme();
  const [gameState, setGameState] = useState('welcome'); // welcome, playing, result, error
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [genieState, setGenieState] = useState('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastAnswer, setLastAnswer] = useState(null);
  const [newAchievements, setNewAchievements] = useState([]);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [pendingResumeData, setPendingResumeData] = useState(null);
  
  const retryCount = useRef(0);
  const jsonFailureCount = useRef(0);
  const isLoadingRef = useRef(false);
  const gameStartedRef = useRef(false);

  const fetchQuestion = useCallback(async (msgs, isRetry = false) => {
    if (isLoadingRef.current && !isRetry) return;
    isLoadingRef.current = true;
    setGenieState('thinking');
    playThinking();
    
    try {
      const resp = await fetch('/api/chintabot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: msgs,
          questionCount,
          confidence,
          category: selectedCategory,
          difficulty 
        }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          setError({ message: "একটু ধীরে! ৩০ সেকেন্ড অপেক্ষা করুন ⏳", type: "warning", duration: 30000 });
          setTimeout(() => fetchQuestion(msgs, true), 30000);
          return;
        }
        
        const errorData = await resp.json().catch(() => ({}));
        setError({ message: errorData.message || "সার্ভার সমস্যা! একটু পর চেষ্টা করুন।", type: "error" });
        setGenieState('sad');
        return;
      }

      const data = await resp.json();
      
      if (data.error === "NO_API_KEY") {
        setGameState('setup_guide');
        return;
      }
      
      if (data.error) {
        setError({ message: data.message || "AI কোনো উত্তর দিল না। আবার চেষ্টা করুন।", type: "error" });
        setGenieState('sad');
        return;
      }

      if (data.type === 'question') {
        setCurrentQuestion(data.text);
        setConfidence(data.confidence || 0);
        setGenieState(data.confidence > 75 ? 'excited' : 'asking');
        setMessages([...msgs, { role: 'assistant', text: data.text }]);
        setQuestionCount(prev => prev + 1);
        
        // Save session
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({
          messages: [...msgs, { role: 'assistant', text: data.text }],
          questionCount: questionCount + 1,
          confidence: data.confidence,
          category: selectedCategory
        }));
        
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
          setGenieState('idle');
        }, 500);
        
        retryCount.current = 0;
        playQuestion();

      } else if (data.type === 'guess' || data.type === 'unknown') {
        setResult(data);
        setGenieState(data.type === 'guess' ? 'celebrating' : 'sad');
        setGameState('result');
        sessionStorage.removeItem(SESSION_KEY);
        
        const gameResults = {
          character: data.character || data.banglaName || "Unknown",
          questionCount,
          won: data.correct !== false && data.type !== 'unknown',
          category: selectedCategory,
          confidence: data.confidence,
          date: Date.now()
        };
        saveGameResult(gameResults);
        const stats = getStats();
        const unlocks = checkAndUnlock(gameResults, stats);
        setNewAchievements(unlocks);

        if (gameResults.won) {
          playCelebration();
        } else {
          playFail();
        }
      } else {
        // Not question, guess, or unknown -> Invalid JSON structure
        throw new Error("INVALID_JSON");
      }
    } catch (err) {
      if (err.message === "INVALID_JSON") {
        jsonFailureCount.current++;
        if (jsonFailureCount.current === 2) {
          setError({ message: "জিনী একটু বিভ্রান্ত! আবার চেষ্টা করা হচ্ছে...", type: "warning" });
          setTimeout(() => fetchQuestion(msgs, true), 1000);
        } else if (jsonFailureCount.current >= 3) {
          setGameState('json_error');
        } else {
          // 1st failure: Simple retry
          fetchQuestion(msgs, true);
        }
        return;
      }

      if (retryCount.current < 2) {
        retryCount.current++;
        setError({ message: `সংযোগ সমস্যা! পুনরায় চেষ্টা করা হচ্ছে (${retryCount.current}/2)...`, type: "info" });
        console.warn(`Retrying fetch... Attempt ${retryCount.current}`);
        setTimeout(() => fetchQuestion(msgs, true), 2000);
      } else {
        const errorMsg = err.message || "Unknown error";
        setError({ message: `AI কাজ করছে না: ${errorMsg}`, type: "error" });
        console.error("GameBoard Fetch Error:", err);
      }
    } finally {
      isLoadingRef.current = false;
      stopThinking();
    }
  }, [questionCount, selectedCategory, difficulty]);

  const startGame = useCallback(() => {
    setGameState('playing');
    const startText = selectedCategory !== 'all' 
      ? `আমি ${selectedCategory} নিয়ে গেম শুরু করতে চাই। চ্যালেঞ্জিং প্রশ্ন দিয়ে শুরু করো।` 
      : "নতুন গেম শুরু করো।";
    const initialMsg = { role: 'user', text: startText };
    setMessages([initialMsg]);
    fetchQuestion([initialMsg]);
    gameStartedRef.current = true;
  }, [fetchQuestion, selectedCategory]);

  const handleAnswer = useCallback((answer) => {
    if (isLoadingRef.current || isAnimating || gameState !== 'playing') return;
    
    playAnswer(answer);
    setLastAnswer(answer);
    const updatedMessages = [...messages, { role: 'user', text: answer }];
    setMessages(updatedMessages);
    
    // Defer for animation
    setTimeout(() => fetchQuestion(updatedMessages), 300);
  }, [messages, isAnimating, gameState, fetchQuestion]);

  // Welcome message effect
  useEffect(() => {
    if (gameState === 'welcome') {
      const welcomeTexts = {
        all: "স্বাগতম! আমি চিন্তাবট। আপনার মনের চরিত্রটি আন্দাজ করার জন্য আমি তৈরি।",
        bd: "বাংলাদেশের বিখ্যাত ব্যক্তিদের নিয়ে খেলতে চান? চমৎকার! আমি প্রস্তুত।",
        cricket: "ক্রিকেট ম্যানিয়া! কোনো কিংবদন্তি খেলোয়াড়ের কথা ভাবুন তো দেখি।",
        bollywood: "বলিউডের রঙিন দুনিয়া! কোনো সুপারস্টারের কথা ভাবছেন তো?",
        anime: "এনিমে দুনিয়ার কোনো রোমাঞ্চকর চরিত্রের কথা ভাবুন!",
        music: "সুর আর ছন্দের জাদুকর কাউকে নিয়ে ভাবছেন কি?",
        sports: "খেলার মাঠের কোনো তারকার কথা চিন্তা করুন!",
        history: "ইতিহাসের পাতা থেকে কোনো অবিস্মরণীয় ব্যক্তির কথা ভাবুন।",
        marvel: "সুপারহিরো বা অতিমানবিক কোনো চরিত্রের কথা ভাবছেন কি?"
      };
      setCurrentQuestion(welcomeTexts[selectedCategory] || welcomeTexts.all);
    }
  }, [gameState, selectedCategory]);

  // Session recovery
  useEffect(() => {
    if (gameStartedRef.current) return;
    
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.messages && parsed.messages.length > 0) {
          setPendingResumeData(parsed);
          setShowResumeModal(true);
        }
      } catch (e) {
        sessionStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const confirmResume = useCallback(() => {
    if (pendingResumeData) {
      setGameState('playing');
      setMessages(pendingResumeData.messages);
      setQuestionCount(pendingResumeData.questionCount);
      setConfidence(pendingResumeData.confidence);
      const lastAssistantMsg = [...pendingResumeData.messages].reverse().find(m => m.role === 'assistant');
      if (lastAssistantMsg) setCurrentQuestion(lastAssistantMsg.text);
      gameStartedRef.current = true;
    }
    setShowResumeModal(false);
    setPendingResumeData(null);
  }, [pendingResumeData]);

  const cancelResume = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setShowResumeModal(false);
    setPendingResumeData(null);
  }, []);


  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '1') handleAnswer('হ্যাঁ');
      if (e.key === '2') handleAnswer('না');
      if (e.key === '3') handleAnswer('হয়তো');
      if (e.key === '4') handleAnswer('জানি না');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAnswer]);

  const handleRestart = useCallback(() => {
    setGameState('playing');
    setMessages([]);
    setQuestionCount(0);
    setConfidence(0);
    setResult(null);
    setLastAnswer(null);
    setNewAchievements([]);
    gameStartedRef.current = false; // Allow restart
  }, []);

  const undoLastAction = useCallback(() => {
    if (isLoadingRef.current || isAnimating || messages.length < 2 || gameState !== 'playing') {
      if (messages.length < 2) {
         setError({ message: "পিছিয়ে যাওয়ার মতো আর কিছু নেই!", type: "info" });
      }
      return;
    }
    
    // History looks like: [UserStart, AssistantQ1, UserA1, AssistantQ2, UserA2...]
    // If we want to undo UserA2, we remove UserA2 and AssistantQ2? 
    // No, usually user wants to change their LAST answer (UserA2).
    // So we remove UserA2 and the following (not yet existing) response? 
    // Actually, if we are AT AssistantQ3 and undo, we go back to AssistantQ2.
    
    const newMessages = messages.slice(0, -1); // Remove the last user answer
    setMessages(newMessages);
    
    // Find the previous question
    const lastAssistantMsg = [...newMessages].reverse().find(m => m.role === 'assistant');
    if (lastAssistantMsg) {
      setCurrentQuestion(lastAssistantMsg.text);
      setQuestionCount(prev => Math.max(1, prev - 1)); 
    } else {
      // If we go back to the very start
      setCurrentQuestion("আপনার চরিত্রটি নিয়ে ভাবুন... আমি তৈরি!");
      setQuestionCount(0);
    }
    
    setLastAnswer(null);
    setConfidence(prev => Math.max(0, prev - 5));
    
    // Update session
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      messages: newMessages,
      questionCount: Math.max(0, questionCount - 1),
      confidence: Math.max(0, confidence - 5),
      category: selectedCategory
    }));
  }, [messages, questionCount, confidence, selectedCategory, isAnimating, gameState]);

  return (
    <div className={`min-h-screen flex flex-col p-4 md:p-8 animate-fadeIn ${isDark ? 'bg-deep-800' : 'bg-[#fcf8ff]'}`}>
      <nav className="flex justify-between items-center mb-8 max-w-6xl mx-auto w-full">
        <button onClick={onExit} className="p-3 glass rounded-xl shadow-sm hover:scale-110 active:scale-95 transition-all">
          <XCircle className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <button 
            onClick={undoLastAction}
            disabled={messages.length < 2 || isLoadingRef.current || isAnimating}
            className={`p-3 glass rounded-xl shadow-sm transition-all flex items-center gap-2 group ${messages.length < 2 ? 'opacity-20 grayscale cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
          >
            <RotateCcw className={`w-5 h-5 transition-transform ${!isLoadingRef.current && !isAnimating ? 'group-hover:-rotate-45' : ''}`} />
            <span className="hidden md:inline text-xs font-bold bengali-font">পিছিয়ে যান</span>
          </button>
          <SoundToggle />
        </div>
      </nav>

      <div className="flex-1 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
        <div className="lg:col-span-5 flex flex-col items-center justify-center translate-z-0">
          <Genie state={genieState} />
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6 w-full max-w-2xl mx-auto">
          <ProgressBar 
            questionCount={questionCount} 
            maxQuestions={difficulty.maxQuestions || 20} 
            confidence={confidence} 
          />
          
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <QuestionCard 
              question={currentQuestion} 
              questionNumber={questionCount}
              category={selectedCategory}
              isLoading={isLoadingRef.current}
            />
          </div>

          {gameState === 'welcome' ? (
            <button 
              onClick={startGame}
              className="w-full py-6 md:py-8 bg-royal-500 text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-xl md:text-2xl bengali-font shadow-2xl shadow-purple-500/20 hover:scale-[1.02] active:scale-95 transition-all animate-bounceIn flex items-center justify-center gap-3 group"
            >
              খেলা শুরু করি! <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>
          ) : (
            <AnswerButtons 
              onAnswer={handleAnswer} 
              isLoading={isLoadingRef.current || isAnimating}
              lastAnswer={lastAnswer}
            />
          )}

          <div className="flex justify-center mt-4">
            <div className={`text-[10px] md:text-sm font-bold opacity-30 flex items-center gap-4 transition-opacity ${gameState === 'playing' ? 'opacity-30' : 'opacity-0'}`}>
              <div className="flex items-center gap-1.5"><kbd className="px-2 py-0.5 glass rounded-md">1</kbd> হ্যাঁ</div>
              <div className="flex items-center gap-1.5"><kbd className="px-2 py-0.5 glass rounded-md">2</kbd> না</div>
              <div className="flex items-center gap-1.5"><kbd className="px-2 py-0.5 glass rounded-md">3</kbd> হয়তো</div>
              <div className="flex items-center gap-1.5"><kbd className="px-2 py-0.5 glass rounded-md">4</kbd> জানি না</div>
            </div>
          </div>
        </div>
      </div>

      {gameState === 'result' && (
        <ResultScreen 
          result={result} 
          questionCount={questionCount} 
          onRestart={handleRestart}
        />
      )}

      {gameState === 'setup_guide' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          <div className={`relative max-w-lg w-full p-10 rounded-[3rem] border-2 border-royal-500/30 text-center space-y-8 animate-bounceIn ${isDark ? 'glass-dark' : 'bg-white'}`}>
            <div className="w-20 h-20 bg-royal-500/10 rounded-full flex items-center justify-center mx-auto text-royal-500">
              <Sparkles className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black bengali-font">API কি সেটআপ করুন</h2>
              <p className="text-sm opacity-60 bengali-font">ChintaBot চালানোর জন্য Gemini API Key প্রয়োজন।</p>
            </div>
            <div className={`p-6 rounded-2xl text-left text-xs space-y-3 font-mono border ${isDark ? 'bg-black/40 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
              <p className="text-royal-500 font-bold bengali-font">কিভাবে যুক্ত করবেন:</p>
              <ol className="list-decimal list-inside space-y-1 opacity-80">
                <li>Google AI Studio থেকে API Key নিন</li>
                <li>প্রজেক্টের মূল ফোল্ডারে `.env.local` ফাইল খুলুন</li>
                <li>নিচের লাইনটি যোগ করুন:</li>
              </ol>
              <div className="p-3 bg-black/20 rounded-lg text-amber-500 select-all">
                GEMINI_API_KEY=YOUR_KEY_HERE
              </div>
            </div>
            <button onClick={() => window.location.reload()} className="w-full py-5 bg-royal-500 text-white rounded-2xl font-bold bengali-font shadow-lg hover:scale-105 transition-all">সেটআপ শেষ করে রিলোড দিন</button>
          </div>
        </div>
      )}

      {gameState === 'json_error' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          <div className={`relative max-w-md w-full p-10 rounded-[3rem] text-center space-y-6 animate-bounceIn ${isDark ? 'glass-dark' : 'bg-white'}`}>
            <XCircle className="w-16 h-16 mx-auto text-red-500" />
            <div className="space-y-1">
              <h2 className="text-2xl font-black bengali-font">জিনী কাজ করতে পারছে না</h2>
              <p className="text-sm opacity-60 bengali-font">সার্ভার থেকে সঠিক রেসপন্স পাওয়া যাচ্ছে না। দয়া করে আবার শুরু করুন।</p>
            </div>
            <button onClick={onExit} className="w-full py-5 bg-royal-500 text-white rounded-2xl font-bold bengali-font shadow-lg">রিস্টার্ট করুন</button>
          </div>
        </div>
      )}

      {error && <ErrorToast error={error.message} type={error.type} onClose={() => setError(null)} />}
      {newAchievements.length > 0 && <AchievementNotification achievements={newAchievements} onDismiss={() => setNewAchievements([])} />}
      
      <ConfirmationModal 
        isOpen={showResumeModal}
        message="আপনার আগের খেলাটি মাঝপথে বন্ধ হয়েছিল। আপনি কি সেখান থেকেই চালিয়ে যেতে চান?"
        onConfirm={confirmResume}
        onCancel={cancelResume}
        confirmText="হ্যাঁ, চালান"
        cancelText="না, নতুন শুরু"
      />
    </div>
  );
}

export default memo(GameBoard);
