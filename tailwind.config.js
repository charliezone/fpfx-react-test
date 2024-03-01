/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#012030',
        secondary: '#003A47'
      },
      padding: {
        '150': '150px'
      },
      borderRadius: {
        xl: '0.625rem'
      },
      screens: {
        'xl': '1200px',
      }
    },
  },
  plugins: [],
}

