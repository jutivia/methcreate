module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./utilities/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			width: {
				"7/10": "70%",
			},
			colors: {
				"dark-blue": "#2d314d",
				"lime-green": "#31d35c",
				"bright-cyan": "#2bb7da",
				"grayish-blue": "#9698a6",
				"light-greyish-blue": "#f3f4f6",
				"light-gray": "#fafafa",
			},
			zIndex: {
				top: "9999",
				"second-top": "9998",
			},
			backgroundImage: {
				"desktop-bg": `url(../images/bg-intro-desktop.svg)`,
			},
			fontSize: {
				"section-title": "40px",
			},
			flexGrow: {
				2: "2",
			},
		},
		screens: {
			sm: "639px",
			md: "767px",
			lg: "1023px",
			xl: "1279px",
			"2xl": "1535px",
		},
	},
	plugins: [],
};
