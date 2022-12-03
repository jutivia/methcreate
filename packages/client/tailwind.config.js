

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#D4D4D4",
        black: "#060606",
        primary: "#6624FF",
        
      },
      fontFamily: {
        audio: ["Audiowide", "cursive"],
        pop: ["Poppins", "sans-serif"],
        nexa: ["Nexa Text-Trial", "sans-serif"],
        inter:['Inter', "sans-serif"],
      },
      screens: {
        mobile: "360px",
        tablet: "480px",
        laptop: "780px",
        desktop: "1020px",
        xl: "1400px",
      },
     
      fontSize: {
        "9xl": "clamp(2.5rem, 10.5vw, 7rem);",
      },
      
    },
  },

};


