/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  
  plugins: [require("@tailwindcss/typography"), require('flowbite/plugin'), require("@tailwindcss/forms")],
  
  extend: {

    animation: {
      shine: "shine 1s",
    },
    keyframes: {
      shine: {
        "100%": { left: "125%" },
      },
    },
    
  },
};