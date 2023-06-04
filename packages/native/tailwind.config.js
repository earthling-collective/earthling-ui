const colors = require("./lib/theme.colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
};
