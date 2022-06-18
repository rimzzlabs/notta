/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        primary: colors.sky,
        main: colors.neutral
      }
    }
  },
  plugins: []
}
