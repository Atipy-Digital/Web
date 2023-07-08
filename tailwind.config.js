import defaultTheme from 'tailwindcss/defaultTheme';

const colors = {
  'a-yellow': '#FECF54',
  'a-red': '#E72E54',
  'a-green': '#51B1B0',
  'a-blue': '#437ABE',
  'grey-150': '#DDDDDD',
  'grey-160': '#00000029',
  'black-160': '#0A0A0A',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
        secondary: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
