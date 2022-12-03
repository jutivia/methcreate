/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "cursive"],
        inter: ["inter", "sans-serif"],
      },
      fontSize: {
        "h-text": "clamp(34px, 10.5vw, 91px);",
      },
      colors: {
        "h-gradient":
          "radial-gradient(81.71% 80.16% at 18.29% 23.54%, rgba(47, 42, 60, 0.8) 0%, rgba(22, 22, 22, 0.336) 100%)",
      },
    },
  },
};
