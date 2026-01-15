/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'antares-dark': '#0a0e17',
        'antares-cyan': '#00d1ff',
        'antares-slate': '#1a1f2e',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
