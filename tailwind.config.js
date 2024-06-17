/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#f2faaa",
        "secondary-color": "#0fffaa",
        "tertiary-color": {
          DEFAULT: "#f2faaa",
          dark: "#f2f",
          light: "#f2a",
        },
        
        
      }
      ,
      fontFamily: {
        "body-font": ["Tiny"],
        
  
      }
    }
  },
  plugins: [],
};

