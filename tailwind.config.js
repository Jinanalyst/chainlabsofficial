/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070D',
          900: '#070A12',
          850: '#0A0F1F',
          800: '#0F1530',
          700: '#131A3A',
        },
        brand: {
          50: '#EAF1FF',
          100: '#CFDFFF',
          200: '#A8C4FF',
          300: '#7FA8FF',
          400: '#5B91FF',
          500: '#2F7BFF',
          600: '#1E5EE0',
          700: '#1746B0',
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.16)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 8px 30px rgba(47,123,255,0.35)',
        'glow-lg': '0 24px 80px rgba(47,123,255,0.30)',
        card: '0 24px 60px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(47,123,255,0.18), transparent 60%)',
      },
      animation: {
        'float-slow': 'float 18s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        'fade-up': 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(20px,-30px,0) scale(1.06)' },
        },
        shine: {
          to: { backgroundPosition: '-200% 0' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
