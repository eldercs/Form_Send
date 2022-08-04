/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width:{
        '793': '793px',
        '170': '170px',
        '30': '30%',
        '24': '24%'
      },
      height:{
        '226': '226px',
        '500': '500px'
      },
      spacing:{
        '195': '195px',
        '420': '420px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
