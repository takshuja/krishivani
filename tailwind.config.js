/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  // darkMode: false,
  media: false,
}

