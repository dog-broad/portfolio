/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif']
      },
      colors: {
        // Define your colors here
        'space-dark': '#1A1A1A',
        'space-light': '#333333',
        'accent': '#ef4444',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('preline/plugin')],
}
