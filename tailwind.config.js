/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0B0F19',
          900: '#111827',
          850: '#161E2E',
          800: '#1F2937',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          heavy: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
        },
        accent: {
          teal: '#0d9488',
          cyan: '#22d3ee',
          purple: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'drift-slow': 'drift 25s infinite alternate ease-in-out',
        'drift-slower': 'drift 35s infinite alternate-reverse ease-in-out',
        'pulse-slow': 'pulse 8s infinite cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(5%, 5%) scale(1.1)' },
          '100%': { transform: 'translate(-5%, 2%) scale(0.95)' },
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      }
    },
  },
  plugins: [],
}