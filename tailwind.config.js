/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Atkinson Hyperlegible', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'a-yellow': '#FECF54',
        'a-red': '#E72E54',
        'a-green': '#51B1B0',
        'a-blue': '#437ABE',
        'grey-150': '#DDDDDD',
        'grey-160': '#00000029',
        'black-160': '#0A0A0A',
      },
      boxShadow: {
        'a-blue': '10px 10px 0px #4559A4',
        'a-green': '10px 10px 0px #088796',
        'a-red': '10px 10px 0px #B02117',
        'a-yellow': '10px 10px 0px #FECF54',
      },
      fontSize: {
        body1: 'clamp(1.125rem, 0.5vw + 1rem, 1.563rem)',
      },
      borderWidth: {
        5: '5px',
      },
      screens: {
        desktop: '1920px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
