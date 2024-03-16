/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '550px'},
     

      'md': {'min': '550px', 'max': '700px'},
     

      'lg': {'min': '1024px', 'max': '1536px'},
    

  
    
    },
  }
}

