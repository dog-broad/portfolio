/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        // Black color
        'space-dark': '#1A1A1A',  // Adjusted to black
        // Dark gray color
        'space-light': '#333333', // Adjusted to dark gray
        'accent': '#FFA500',      // Orange accent color (unchanged)
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('preline/plugin')],
}
