'use client';

import React, { useEffect, useState, useCallback, memo } from 'react';
import { X, RotateCcw, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import useTheme from '../site_hooks/useTheme';

const icons = {
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />
};

const borderColors = {
  error: 'border-red-500',
  warning: 'border-amber-500',
  info: 'border-blue-500'
};

const progressColors = {
  error: 'bg-red-500',
  warning: 'bg-amber-500',
  info: 'bg-blue-500'
};

function ErrorToast({ message, type = "error", onRetry, onDismiss }) {
  const { isDark } = useTheme();
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      if (onDismiss) onDismiss();
    }, 400);
  }, [onDismiss]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss();
    }, 5000);
    return () => clearTimeout(timer);
  }, [handleDismiss]);

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4 animate-slideInDown transition-all duration-400 ${isExiting ? 'opacity-0 -translate-y-10 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
      <div className={`
        relative overflow-hidden rounded-2xl border-2 p-5 shadow-2xl flex items-center gap-4
        ${isDark ? 'glass-dark' : 'bg-white'}
        ${borderColors[type]}
      `}>
        <div className="shrink-0">
          {icons[type]}
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <p className={`text-sm font-bold text-text-primary bengali-font leading-relaxed`}>
            {message}
          </p>
          {onRetry && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onRetry();
              }}
              className={`mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg border border-current hover:bg-current hover:text-white transition-all w-fit`}
            >
              <RotateCcw className="w-3 h-3" /> আবার চেষ্টা করুন
            </button>
          )}
        </div>

        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 opacity-50 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className={`h-full ${progressColors[type]} transition-linear`}
            style={{ 
              animation: 'toastProgress 5s linear forwards',
              width: '100%'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes toastProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-slideInDown {
          animation: slideInDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translate(-50%, -20px) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default memo(ErrorToast);
