/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9A2B14',
          hover: '#7E210D',
          dark: '#5A1507',
          light: '#B83A1E',
          gold: '#C87A1E',
        },
        'deep-brown': {
          DEFAULT: '#2A140B',
          dark: '#1A0B05',
          light: '#422013',
        },
        cream: {
          DEFAULT: '#FAF6F0',
          card: '#F5ECE1',
        },
        'light-beige': {
          DEFAULT: '#EADCCE',
          hover: '#DFCFBE',
        },
        'muted-green': {
          DEFAULT: '#9A2B14',
          dark: '#7E210D',
          light: '#B83A1E',
        },
        gold: {
          DEFAULT: '#C87A1E',
          light: '#E29433',
          dark: '#9E580B',
        },
        'dark-text': '#22120B',
        'muted-text': '#6E5648',
      },
      fontFamily: {
        serif: ['"Tenor Sans"', 'Georgia', 'serif'],
        sans: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        tenor: ['"Tenor Sans"', 'serif'],
        nunito: ['"Nunito"', 'system-ui', '-apple-system', 'sans-serif'],
        jost: ['"Jost"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'sm': 'none',
        DEFAULT: 'none',
        'md': 'none',
        'lg': 'none',
        'xl': 'none',
        '2xl': 'none',
        'inner': 'none',
        'none': 'none',
        'subtle': 'none',
        'warm': 'none',
        'luxury': 'none',
      },
      dropShadow: {
        'sm': 'none',
        DEFAULT: 'none',
        'md': 'none',
        'lg': 'none',
        'xl': 'none',
        '2xl': 'none',
        'none': 'none',
      },
    },
  },
  plugins: [],
}
