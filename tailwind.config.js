/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012030',
        secondary: '#003A47',
        parchment: '#F2E3D5',
        cloudy: '#A9A29C',
        cyprus: '#013440',
        daintree: '#012F39',
        java: '#0FC2C0',
        redOrange: '#FF3737',
        crusta: '#F6742A',
      },
      padding: {
        '150': '150px'
      },
      borderRadius: {
        xl: '0.625rem'
      },
      screens: {
        'xl': '1200px',
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

