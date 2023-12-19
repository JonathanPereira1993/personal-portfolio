/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Aldrich"],
    },
    colors: {
      colorPrimary: "#5221E6",
      colorSecondary: "#0B021A",
      colorSecondaryLight: "#19192C",
      colorWhite: "#FFFFFF",
      colorLightGrey: "#D6CDF0",
    },
  },
  plugins: [],
};
