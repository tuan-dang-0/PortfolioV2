/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        800: '#111d35',
        700: '#13213d',
        600: '#162544',
        DEFAULT: '#18294C',
        400: '#2f3e5e',
        300: '#465470',
        200: '#5d6982',
        100: '#747f94',
      },
      secondary: {
        DEFAULT: '#2D9CCB',
      },
      black: colors.black,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
