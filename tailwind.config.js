/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        softblue: {
          50: '#f0f7ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 10px 30px -5px rgba(2, 132, 199, 0.28)',
        'card-soft': '0 10px 30px -10px rgba(14, 165, 233, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 35px -10px rgba(2, 132, 199, 0.20), 0 1px 3px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
