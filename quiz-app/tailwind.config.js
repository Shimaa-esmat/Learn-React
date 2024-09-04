/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ["Roboto", 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

