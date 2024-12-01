module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundColor:{
        'linear-bg': '#00A9E0'

      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }