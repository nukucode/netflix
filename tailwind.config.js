/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
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
