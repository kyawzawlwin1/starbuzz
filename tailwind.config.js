/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#5515ef',
        'theme-pink': '#3c01ca',
        'theme-blue-dark': '#eb589e',
      }
    },
  },
  plugins: [],
}

