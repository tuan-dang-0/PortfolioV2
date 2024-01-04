/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  important: true,
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
        800: '#1f6d8e',
        700: '#247da2',
        600: '#298cb7',
        DEFAULT: '#2D9CCB',
        400: '#42a6d0',
        300: '#57b0d5',
        200: '#6cbadb',
      },
      tertiary: {
        DEFAULT: '#28658A',
      },
      black: colors.black,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
