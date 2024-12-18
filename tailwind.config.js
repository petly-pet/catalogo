const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...colors, // Esto extiende y carga todos los colores
      },
    },
  },
  plugins: [],
}
