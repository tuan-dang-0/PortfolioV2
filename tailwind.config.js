/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#18294C",
      },
      black: colors.black,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
