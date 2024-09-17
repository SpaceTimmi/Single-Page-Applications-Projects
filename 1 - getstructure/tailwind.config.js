/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'aliceBlue': '#F6F7F9',
      'amber': colors.amber,
      'white': colors.white,
      'sky': colors.sky,
      'gray': colors.gray,
      'black': colors.black,
    },
    extend: {},
  },
  plugins: [],
}

