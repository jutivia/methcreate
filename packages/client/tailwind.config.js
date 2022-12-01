/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	// purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./utilities/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  
		},
		fontFamily: {
		  audio: ["Audiowide", "cursive"],
		  pop: ["Poppins", "sans-serif"],
		  nexa: ["Nexa Text-Trial", "sans-serif"],
		},
		
		backgroundImage: {
		  
		},
		fontSize: {
		  "9xl": "clamp(2.5rem, 10.5vw, 7rem);",
		},
	  },
	},
	
  };
  
