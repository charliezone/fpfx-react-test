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

