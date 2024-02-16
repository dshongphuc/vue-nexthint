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
      colors: {
        miro: {
          primary: 'var(--color-primary)',
          blue: '#336CFB',
          purple: '#0B63F8',
          green: '#33B959',
          'gray-light': '#D9D9D9',
          gray: '#D8D8D8',
          'gray-lighter': '#F8F8F8',
          'green-landing': '#007360',
          yellow: '#DBBE71',
          mint: '#F8FEFF',
          orangeskin: '#FB8E67',
          orange: '#FF6D4A',
        },
      },
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
