const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
        hero2: "url('/hero2.png')",
        nombers: "url('/nombers.png')",
        hero3: "url('/heroGemR.png')",
      },
      colors: {
        lightgray: "#FAFAFA",
        purple: "#5937E0",
        navyblue: "#24272F",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
});
