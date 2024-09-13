/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    // Custom Colors
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      netflixColor: "#E50914",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#595959",
    },
    // Custom Fonts
    extend: {
      fontFamily: {
        sans: ["open-sans", "sans-serif"],
        montserrat: ["montserrat", "sens-serif"],
        roboto: ["roboto", "sens-serif"],
      },
    },
  },
  plugins: [],
};
