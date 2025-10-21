/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font families here
        'space-reg': ['D-DIN-REG', 'sans-serif'],
        'space': ['D-DIN', 'sans-serif'],          // SpaceX's primary font
        'din': ['D-DIN-Bold', 'sans-serif'],       // SpaceX's bold font
        'heading': ['D-DIN-Condensed', 'sans-serif'] // SpaceX's condensed font for headings
      }
    },
  },
  plugins: [],
}