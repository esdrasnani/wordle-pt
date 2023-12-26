/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],

  theme: {
    extend: {
      screens: {
        '2sm': '300px',
      },
      // custom color
      // colors: {
      //   primary: '#57479c',
      //   dark: '#121212',
      //   'dark-secondary': '#242424',
      // },
      // custom font
      // fontFamily: {
      //   sans: ['var(--font-graphie)'],
      //   serif: ['var(--font-termina)'],
      // },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
