/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        daintree: '#012030',
      },
      padding: {
        '150px': '150px'
      }
    },
  },
  plugins: [],
}

