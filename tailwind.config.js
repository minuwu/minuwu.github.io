/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F9F9F7',
        surface: '#FFFFFF',
        'surface-alt': '#F9F9F7',
        primary: '#111111',
        secondary: '#525252',
        muted: '#A3A3A3',
        accent: '#CC0000',
        'accent-hover': '#990000',
        border: '#111111',
        'tag-bg': '#E5E5E0',
        'tag-text': '#111111',
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
        display: ['Playfair Display', 'Times New Roman', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
