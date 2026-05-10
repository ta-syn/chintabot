'use client';

import React, { useEffect, useState } from 'react';
import { playClick } from '../lib/sounds';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onGlobalClick = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName) ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      if (isInteractive) {
        playClick();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('click', onGlobalClick);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('click', onGlobalClick);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smoother trailing effect
  useEffect(() => {
    let requestRef;
    const animate = () => {
      setTrailingPosition(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      requestRef = requestAnimationFrame(animate);
    };
    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, [position]);

  if (!mounted) return null;

  return (
    <div className={`cursor-container ${isVisible ? 'visible' : ''}`} style={{ pointerEvents: 'none' }}>
      {/* The main dot */}
      <div 
        className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isMouseDown ? 'active' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />
      
      {/* The trailing ring */}
      <div 
        className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isMouseDown ? 'active' : ''}`}
        style={{
          transform: `translate3d(${trailingPosition.x}px, ${trailingPosition.y}px, 0)`
        }}
      />

      {/* Glow effect */}
      <div 
        className="cursor-glow"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />

      <style jsx global>{`
        body, a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }

        .cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cursor-container.visible {
          opacity: 1;
        }

        .cursor-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #8b5cf6;
          border-radius: 50%;
          top: -4px;
          left: -4px;
          transition: width 0.2s ease, height 0.2s ease, background 0.3s ease;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
          z-index: 2;
        }

        .cursor-dot.hovering {
          width: 6px;
          height: 6px;
          background: #facc15;
          box-shadow: 0 0 15px rgba(250, 204, 21, 0.9);
        }

        .cursor-ring {
          position: absolute;
          width: 32px;
          height: 32px;
          border: 1.5px solid rgba(139, 92, 246, 0.4);
          border-radius: 50%;
          top: -16px;
          left: -16px;
          transition: width 0.3s ease, height 0.3s ease, border 0.3s ease, background 0.3s ease;
          z-index: 1;
        }

        .cursor-ring.hovering {
          width: 50px;
          height: 50px;
          top: -25px;
          left: -25px;
          background: rgba(250, 204, 21, 0.1);
          border: 1.5px solid rgba(250, 204, 21, 0.6);
        }

        .cursor-ring.active {
          width: 24px;
          height: 24px;
          top: -12px;
          left: -12px;
          background: rgba(139, 92, 246, 0.3);
        }

        .cursor-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 70%);
          top: -100px;
          left: -100px;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .cursor-container {
            display: none;
          }
          body {
            cursor: auto !important;
          }
          a, button, [role="button"] {
            cursor: pointer !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;
