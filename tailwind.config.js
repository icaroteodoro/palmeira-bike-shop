/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily:{
        sunflower: 'sunflower, sans-serif',
        K2D: 'K2D, sans-serif',
      },
      backgroundImage:{
        app:'url(/imgHome.png)'
      },
      colors:{
        gray: {
          200: '#D9D9D9',
          400: '#8D8D8D',
          700: '#404040',
          900: '#2F2F2F'
        },
      }
    },
  },
  plugins: [],
}
