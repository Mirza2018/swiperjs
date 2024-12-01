/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],// Enable dark mode by class strategy
  theme: {
    extend: {
      colors: {
        primary: '#014954',   
        secondary: '#FF0000', 
        optional: '#00FF00',
        primarybg: '#c4e9ff',   
        secondarybg: '#FF0000', 
        optionalbg: '#00FF00',
        primarybtn: '#000000',
        secondarybtn: '#FF0000',
        optionalbtn: '#00FF00',
      },
      boxShadow:{
        neon:"0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')"
      }
    },
  },
  plugins: [],
};
