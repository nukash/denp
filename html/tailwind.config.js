const defaultTheme = require("tailwindcss/defaultTheme");
console.log('Tailwind config loading...' + process.env.NODE_ENV);

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: [
          // '"Kosugi Maru"',
          // '"Kosugi"',
          '"Noto Serif JP"',
          ...defaultTheme.fontFamily.serif,
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
