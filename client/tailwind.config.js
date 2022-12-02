

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
        yellow: "#FFD700",
        black: {
          200: "#1E1E1E",
        },
        grey_p: "#D4D4D4",
        head_white: "#FAFAFA",
      },
      fontFamily: {
        audio: ["Audiowide", "cursive"],
        pop: ["Poppins", "sans-serif"],
        nexa: ["Nexa Text-Trial", "sans-serif"],
      },
     
      fontSize: {
        "9xl": "clamp(2.5rem, 10.5vw, 7rem);",
      },
    },
  },

};
