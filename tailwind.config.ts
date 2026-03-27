import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#131313',
        surface: '#201f1f',
        primary: '#e9c176',
        outline: '#9a8f80',
        onBackground: '#e5e2e1'
      },
      fontFamily: {
        headline: ['Noto Serif', 'serif'],
        body: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
