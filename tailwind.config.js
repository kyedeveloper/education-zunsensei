/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090D16',
        panel: '#0D1424',
        card: '#111827',
        line: '#1E293B',
        cyan: {
          DEFAULT: '#38BDF8',
          soft: '#7DD3FC'
        },
        violet: {
          DEFAULT: '#818CF8',
          soft: '#A5B4FC'
        },
        emerald: {
          DEFAULT: '#34D399',
          soft: '#6EE7B7'
        },
        rose: {
          DEFAULT: '#FB7185',
          soft: '#FDA4AF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-24px,0) scale(1.06)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(900%)', opacity: '0' }
        }
      },
      animation: {
        float: 'float 16s ease-in-out infinite',
        shimmer: 'shimmer 2.4s ease-in-out infinite',
        scan: 'scan 1.1s ease-out forwards'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.28), 0 0 48px -14px rgba(56,189,248,0.5)'
      }
    }
  },
  plugins: []
}