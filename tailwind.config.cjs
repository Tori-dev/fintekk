/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E5CFF",
          1: "#172E80",
        },
        grey: {
          DEFAULT: "#777777",
          1: "#171717",
        },
        white: "#FBFBFB",
      },
      backgroundImage: {
        // hero: 'url("/src/assets/img/heroimg.jpg")',
        cta: 'url("/src/assets/img/darkbg.png")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [],
};