/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#1d1d1e',
        accent: '#d2f558',
        'accent-hover': '#c3e645',
        text: '#ffffff',
        surface: '#2a2a2b',
        'surface-hover': '#333334',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(210, 245, 88, 0.4)',
        'neon-hover': '0 0 30px rgba(210, 245, 88, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
