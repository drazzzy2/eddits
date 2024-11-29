/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'title': 'title 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'title-delayed': 'title-delayed 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'color-cycle': 'color-cycle 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.15 },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'title': {
          '0%': { 
            opacity: '0',
            transform: 'scale(1.5)',
            filter: 'blur(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
            filter: 'blur(0px)',
          }
        },
        'title-delayed': {
          '0%': { 
            opacity: '0',
            transform: 'scale(1.5)',
            filter: 'blur(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
            filter: 'blur(0px)',
          }
        },
        'gradient-shift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(15deg) brightness(1.1)',
          }
        },
        'color-cycle': {
          '0%, 100%': {
            'background-image': 'linear-gradient(to right, rgb(56, 189, 248, 0.8), rgb(255, 255, 255, 0.9), rgb(59, 130, 246, 0.8))'
          },
          '33%': {
            'background-image': 'linear-gradient(to right, rgb(167, 139, 250, 0.8), rgb(255, 255, 255, 0.9), rgb(236, 72, 153, 0.8))'
          },
          '66%': {
            'background-image': 'linear-gradient(to right, rgb(52, 211, 153, 0.8), rgb(255, 255, 255, 0.9), rgb(14, 165, 233, 0.8))'
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          DEFAULT: '#0A0B0F',
          lighter: '#12141C',
          border: '#2A2D3A',
        },
      },
    },
  },
  plugins: [],
};