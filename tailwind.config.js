/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./site_components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#f8f4ff',
        'light-surface': '#ffffff',
        'light-card': '#f0ebff',
        'light-border': '#d8b4fe',
        'light-text': '#1e0a3c',
        'light-muted': '#6b21a8',
        'deep-900': '#05000f',
        'deep-800': '#0a0015',
        'royal-500': '#8b5cf6',
        'gold-400': '#facc15',
      },
      fontFamily: {
        bangla: ['Hind Siliguri', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(139,92,246,0.5)',
        'glow-gold': '0 0 20px rgba(234,179,8,0.5)',
        'glow-green': '0 0 20px rgba(34,197,94,0.4)',
        'glow-red': '0 0 20px rgba(239,68,68,0.4)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(139,92,246,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0)' },
          '50%': { transform: 'scale(1.2) rotate(15deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-30px)', opacity: '0' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-100px) rotate(0)' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite alternate',
        'float-slow': 'float-slow 5s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 2s infinite',
        shimmer: 'shimmer 2s linear infinite',
        sparkle: 'sparkle 1.5s infinite',
        fadeIn: 'fadeIn 0.5s ease forwards',
        slideUp: 'slideUp 0.4s ease forwards',
        slideInRight: 'slideInRight 0.4s ease forwards',
        slideOutLeft: 'slideOutLeft 0.3s ease forwards',
        bounceIn: 'bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        confettiFall: 'confettiFall 3s linear forwards',
        twinkle: 'twinkle 2s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
        swing: 'swing 3s ease-in-out infinite',
        typewriter: 'typewriter 2s steps(30) forwards',
        'ping-slow': 'ping-slow 2s infinite',
        'theme-transition': 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      },
    },
  },
  plugins: [],
}
