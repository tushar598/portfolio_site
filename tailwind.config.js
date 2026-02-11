/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          orange: '#FF5428', // Primary Vibrant
          dark: '#0f0f11',   // Primary Dark Mode Background
          darker: '#08080a', // Secondary Dark Mode Background
          light: '#FFFBF7',
          gray: '#F2F2F2',
          blue: '#2B4CFF',   // Secondary Vibrant
          accent: '#00D1FF'  // Cyan accent for dark mode
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}
