const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.md',
    './src/**/*.njk'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        rose: colors.rose
      },
      fontFamily: {
        // serif: ["'Abel'", ...defaultTheme.fontFamily.serif],
        // sans: ["'Indie Flower'", ...defaultTheme.fontFamily.sans],
        // mono: ["'Major Mono Display'", ...defaultTheme.fontFamily.mono],
        // icon: "Material Design Icons",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
