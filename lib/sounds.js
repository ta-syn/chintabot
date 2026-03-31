'use client';

let audioContext = null;
let currentThinkingOsc = null;

const getAudioCtx = () => {
  if (typeof window === 'undefined') return null;
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

const isMuted = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('chintabot_muted') === 'true';
};

const playTone = (freq, duration, volume = 0.5, type = 'sine') => {
  const ctx = getAudioCtx();
  if (!ctx || isMuted()) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
};

export const playQuestion = () => {
  playTone(523.25, 0.4, 0.2); // C5
  setTimeout(() => playTone(659.25, 0.4, 0.2), 100); // E5
};

export const playAnswer = (type) => {
  if (type === 'হ্যাঁ') {
    [261.63, 329.63, 392.00].forEach((f, i) => {
      setTimeout(() => playTone(f, 0.3, 0.2), i * 100);
    });
  } else if (type === 'না') {
    [440.00, 349.23, 293.66].forEach((f, i) => {
      setTimeout(() => playTone(f, 0.3, 0.2), i * 100);
    });
  } else {
    // Maybe/Unknown - Wobbly tone
    const ctx = getAudioCtx();
    if (!ctx || isMuted()) return;
    const osc = ctx.createOscillator();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    const gain = ctx.createGain();

    osc.frequency.setValueAtTime(330, ctx.currentTime);
    lfo.frequency.setValueAtTime(10, ctx.currentTime);
    lfoGain.gain.setValueAtTime(20, ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

    osc.start();
    lfo.start();
    osc.stop(ctx.currentTime + 0.5);
    lfo.stop(ctx.currentTime + 0.5);
  }
};

export const playThinking = () => {
  const ctx = getAudioCtx();
  if (!ctx || isMuted() || currentThinkingOsc) return null;

  const osc = ctx.createOscillator();
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(80, ctx.currentTime);
  
  lfo.frequency.setValueAtTime(2, ctx.currentTime); // 2Hz oscillation
  lfoGain.gain.setValueAtTime(0.1, ctx.currentTime);

  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);
  osc.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  
  osc.start();
  lfo.start();
  currentThinkingOsc = { osc, lfo, gain };
  return currentThinkingOsc;
};

export const stopThinking = () => {
  if (!currentThinkingOsc) return;
  const { osc, lfo, gain } = currentThinkingOsc;
  const ctx = getAudioCtx();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
  setTimeout(() => {
    osc.stop();
    lfo.stop();
  }, 500);
  currentThinkingOsc = null;
};

export const playReveal = () => {
  [261.63, 329.63, 392.00, 523.25].forEach((f, i) => {
    setTimeout(() => playTone(f, 0.8, 0.3, 'triangle'), i * 150);
  });
};

export const playCelebration = () => {
  const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
  notes.forEach((f, i) => {
    setTimeout(() => playTone(f, 0.4, 0.2, 'square'), i * 80);
  });
};

export const playFail = () => {
  [440.00, 349.23, 293.66, 220.00].forEach((f, i) => {
    setTimeout(() => playTone(f, 0.6, 0.2, 'sawtooth'), i * 200);
  });
};

export const playHint = () => {
  for(let i=0; i<5; i++) {
    setTimeout(() => playTone(1000 + Math.random() * 2000, 0.1, 0.1, 'sine'), i * 50);
  }
};

export const toggleMute = () => {
  if (typeof window === 'undefined') return true;
  const current = isMuted();
  const newVal = !current;
  localStorage.setItem('chintabot_muted', String(newVal));
  if (newVal && currentThinkingOsc) stopThinking();
  return newVal;
};

export { isMuted };
