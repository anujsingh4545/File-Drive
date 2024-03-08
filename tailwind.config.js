/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      madami: ["Madimi One", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
