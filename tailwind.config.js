/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        red: "#DC4492",
        orange: "#EE6002",
        "deep-orange": "#E54305",
        grey: "#ededed",
        "dark-grey": "#191C18",
        "opaque-black": "rgba(0,0,0,0.35)",
        "light-grey": "#F5EEFA",
        "text-grey": "#948F99",
        "footer-grey": "#313033",
        "pale-grey": "#C4C9BC",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #EE6002 14.53%, #EE023B 69.36%, #DB315A 117.73%)",
        hero: "url('./assets/cover_pic.jpg')",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        cover: "url('./assets/cover_pic.jpg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
