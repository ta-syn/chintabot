"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../../site_components/ThemeToggle";
import { Brain, ArrowLeft, Sparkles } from "lucide-react";

export default function SinglePlayer() {
  const [gameState, setGameState] = useState("start"); // start, playing, result, finish
  const [history, setHistory] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const fetchAIResponse = async (msgs) => {
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
      
      if (data.error) {
        return { type: 'error', text: data.message || 'Error occurred' };
      }
      return data;
    } catch (err) {
      return { type: 'error', text: 'সংযোগে সমস্যা হচ্ছে।' };
    }
  };

  const startGame = async () => {
    setGameState("playing");
    setIsLoading(true);
    
    const initialMsg = { role: "user", text: "নতুন গেম শুরু করো।" };
    const data = await fetchAIResponse([initialMsg]);
    
    if (data.type === 'question') {
      setCurrentQuestion(data.text);
      setHistory([initialMsg, { role: "assistant", text: data.text }]);
      setQuestionCount(1);
    } else {
      setCurrentQuestion(data.text || "দুঃখিত, পুনরায় চেষ্টা করুন।");
    }
    setIsLoading(false);
  };

  const handleAnswer = async (answer) => {
    if (isLoading) return;
    setIsLoading(true);
    
    // ১. ইউজারের উত্তর হিস্ট্রিতে যোগ করা
    const userMsg = { role: "user", text: answer };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    
    // ২. এপিআই কল করা
    const data = await fetchAIResponse(newHistory);
    
    if (data.type === 'question') {
      setCurrentQuestion(data.text);
      setHistory([...newHistory, { role: "assistant", text: data.text }]);
      setQuestionCount(prev => prev + 1);
    } else if (data.type === 'guess') {
      setGameState("finish");
      setCurrentQuestion(`আমি নিশ্চিত আপনার চরিত্রটি হলো: ${data.banglaName || data.character}`);
      setHistory([...newHistory, { role: "assistant", text: data.character }]);
    } else if (data.type === 'error') {
      setCurrentQuestion(data.text);
    }
    
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 bengali-font flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full max-w-4xl p-6 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-30 border-b border-border">
        <Link href="/" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>ফিরে যান</span>
        </Link>
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg">চিন্তাবট</span>
        </div>
        <ThemeToggle />
      </nav>

      <div className="flex-1 w-full max-w-2xl px-4 py-12 flex flex-col items-center justify-center gap-8">
        {gameState === "start" && (
          <div className="premium-card p-10 text-center space-y-6 w-full animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto text-primary animate-float">
              <Sparkles className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold">আপনি কি প্রস্তুত?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              মনে মনে একটি বিখ্যাত চরিত্র (বাস্তব বা কাল্পনিক) চিন্তা করুন। আমি আপনার মনের কথা পড়ার চেষ্টা করবো!
            </p>
            <button
              onClick={startGame}
              className="bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-blue-500/30 transform transition-all active:scale-95 text-xl"
            >
              শুরু করি!
            </button>
          </div>
        )}

        {(gameState === "playing" || gameState === "finish") && (
          <div className="w-full space-y-6 animate-in slide-in-from-bottom-5 duration-500">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-tr from-primary to-blue-400 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/20 animate-pulse">
                  <Brain className="w-12 h-12" />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 ${gameState === 'finish' ? 'bg-amber-500' : 'bg-green-500'}`}></div>
              </div>

              <div className="premium-card p-8 w-full relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-900 border-t border-l border-border rotate-45"></div>
                {isLoading ? (
                  <div className="flex justify-center items-center py-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-2xl font-semibold text-center leading-relaxed">
                    {currentQuestion}
                  </p>
                )}
              </div>
            </div>

            {gameState === "playing" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button
                  disabled={isLoading}
                  onClick={() => handleAnswer("হ্যাঁ")}
                  className="py-4 px-6 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-lg shadow-green-500/20 transition-all disabled:opacity-50"
                >
                  হ্যাঁ
                </button>
                <button
                  disabled={isLoading}
                  onClick={() => handleAnswer("না")}
                  className="py-4 px-6 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold text-lg shadow-lg shadow-red-500/20 transition-all disabled:opacity-50"
                >
                  না
                </button>
                <button
                  disabled={isLoading}
                  onClick={() => handleAnswer("জানি না")}
                  className="py-4 px-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-bold text-lg transition-all disabled:opacity-50"
                >
                  জানি না
                </button>
                <button
                  disabled={isLoading}
                  onClick={() => handleAnswer("হয়তো")}
                  className="py-4 px-6 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-bold text-lg transition-all disabled:opacity-50"
                >
                  হয়তো
                </button>
              </div>
            )}

            {gameState === "finish" && (
              <div className="flex justify-center pt-6">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all active:scale-95"
                >
                  আবার খেলুন
                </button>
              </div>
            )}

            <div className="text-center text-slate-400 text-sm mt-8">
              প্রশ্ন সংখ্যা: {questionCount}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
