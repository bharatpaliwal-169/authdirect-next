/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.750rem', '1rem'],
      sm: ['1rem', '1.25rem'],
      lg: ['1.50rem', '1.75rem'],
      xl: ['2rem', '2.25rem'],
      '2xl': ['2.5rem', '2.75rem'],
      '4xl': ['3rem', '4rem'],
      '6xl': ['4rem','4.5rem'],
      '8xl': ['5rem', '6rem']
    },

    extend: {
      colors: {
        "brand-white": "#f9f9f7",
        "brand-dark": "#302b70",
        "brand-gray": "#6D6D6D",
        "brand-regular": "#6061b0",
        "brand-light": "#787cd1"
      },
    },
  },
  plugins: [],
}