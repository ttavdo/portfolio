import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050508',
        surface: '#0d0d1a',
        'glass-bg': 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'neon-cyan': '#00f5ff',
        'neon-violet': '#7c3aed',
        'text-primary': '#f0f4ff',
        'text-secondary': '#8892b0',
        'text-accent': '#00f5ff',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
        neon: '0 0 20px rgba(0, 245, 255, 0.15)',
        'neon-strong': '0 0 30px rgba(0, 245, 255, 0.3)',
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0,245,255,0.3), 0 0 20px rgba(0,245,255,0.1)' },
          '50%': { textShadow: '0 0 20px rgba(0,245,255,0.6), 0 0 40px rgba(0,245,255,0.3)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
