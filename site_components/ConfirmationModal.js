'use client';

import React, { memo } from 'react';
import { RotateCcw, Play, X } from 'lucide-react';

function ConfirmationModal({ isOpen, message, onConfirm, onCancel, confirmText = "হ্যাঁ", cancelText = "না" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-sm w-full glass rounded-[2.5rem] p-8 shadow-2xl border border-white/20 animate-scaleIn text-center relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-royal-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/20 blur-3xl rounded-full" />
        
        <div className="w-16 h-16 bg-royal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-royal-500">
          <RotateCcw className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-bold mb-8 bengali-font text-text-primary leading-relaxed">
          {message}
        </h3>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full py-4 bg-royal-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-royal-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <Play className="w-5 h-5 fill-current" /> {confirmText}
          </button>
          
          <button
            onClick={onCancel}
            className="w-full py-4 glass border border-white/10 rounded-2xl font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-2 opacity-70 hover:opacity-100"
          >
            <X className="w-5 h-5" /> {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ConfirmationModal);
