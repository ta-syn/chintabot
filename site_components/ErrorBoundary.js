'use client';

import React from 'react';
import { XCircle, RefreshCcw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-[#05000f] text-white">
          <div className="max-w-md w-full glass-dark p-8 rounded-[3rem] text-center space-y-6 border border-red-500/30">
            <XCircle className="w-16 h-16 mx-auto text-red-500 animate-pulse" />
            <div className="space-y-2">
              <h2 className="text-2xl font-black bengali-font">কিছু একটা ভুল হয়েছে!</h2>
              <p className="text-sm opacity-60 bengali-font text-red-200">
                {this.state.error?.message || "অ্যাপটি ক্র্যাশ করেছে। দয়া করে রিলোড করুন।"}
              </p>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold bengali-font flex items-center justify-center gap-2 transition-colors"
            >
              <RefreshCcw className="w-5 h-5" /> রিলোড করুন
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
