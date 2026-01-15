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
        'antares-white': '#ffffff',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.5rem', { lineHeight: '1.1' }], // Ajustado levemente
        '7xl': ['4rem', { lineHeight: '1' }],   // Ajustado levemente
        '8xl': ['5.5rem', { lineHeight: '1' }], // Ajustado para evitar atropelar o header
        '9xl': ['7rem', { lineHeight: '1' }],   // Ajustado
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
