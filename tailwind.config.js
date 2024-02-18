/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        abc: ["Actor", "sans-serif"],
      }
    },
  },
  plugins: [],
}