//
// This is your Tailwind CSS configuration, where
// you can define global style constants such as
// color palette, fonts and sizes.
//
// Read more at https://tailwindcss.com.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  theme: {
    screens: Object.assign(defaultTheme.screens, { xs: '475px' }),
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        lightBlue: colors.lightBlue,
        turquoise: {
          50: '#effdfd',
          100: '#d2f7f9',
          200: '#aaf0f4',
          300: '#76e4ec',
          400: '#39d0dd',
          500: '#14b4c6',
          600: '#0892a2',
          700: '#097684',
          800: '#0b5e6b',
          900: '#0d4f5a',
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono],
        system: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}