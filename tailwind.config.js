module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundColor:{
        'linear-bg':  '#A9D3F6' 

      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }