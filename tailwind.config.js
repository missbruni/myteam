/** @type {import('tailwindcss').Config} */

const theme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['"Livvic"', ...theme.fontFamily.sans]
      },
      colors: {
        'midnight-green': '#014E56',
        'light-coral': '#F67E7E',
        'rapture-blue': '#79C8C7',
        'police-blue': '#2C6269',
        'deep-jungle': '#004047',
        sacramento: '#012F34',
        'dark-green': '#002529'
      },
      fontSize: {
        'h1-large': [
          '6rem',
          {
            lineHeight: '6rem',
            fontWeight: 700
          }
        ],
        'h1-small': [
          '4rem',
          {
            lineHeight: '4rem',
            fontWeight: '700'
          }
        ],
        h2: [
          '3rem',
          {
            lineHeight: '3rem',
            fontWeight: '700'
          }
        ],
        h3: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700'
          }
        ],
        body1: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600'
          }
        ],
        body2: [
          '1.0.938rem',
          {
            lineHeight: '1.563',
            fontWeight: '600'
          }
        ]
      }
    }
  },
  plugins: [require('preline/plugin')]
};
