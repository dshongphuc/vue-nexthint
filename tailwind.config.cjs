/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './demo/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      content: ['Open Sans', 'sans-serif'],
      heading: ['Crimson Text', 'serif'],
      logo: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        '2lg': '1.375rem', // 22px
        '2.1xl': '1.5625rem', // 25px
        '2.5xl': '1.75rem', // 28px
        '4.5xl': '2.8125rem', // 45px
        '5.1xl': '3.125rem', // 50px
      },
      height: {
        29: '7.375rem', // 118px
        37: '9.4375rem', // 151px
      },
      margin: {
        30: '6.5rem',
      },
    },
  },
  plugins: [],
}
