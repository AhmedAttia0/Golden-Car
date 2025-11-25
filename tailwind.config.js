const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
        hero2: "url('/hero2.png')",
        nombers: "url('/nombers.png')"
      },
      colors: {
        div: {
          lightgray: "#FAFAFA",
          purple: "#5937E0",
        },
      },
    },
  },
  plugins: [],
});
