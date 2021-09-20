module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"light-blue": "#11B4F5",
				"lighter-blue": "#E8F8FE",
				"light-gary": "#CCCCCC",
			},
			minHeight: {
				12: "12vh",
				70: "70vh",
				90: "90vh",
				88: "88vh",
			},
			maxHeight: {
				88: "88vh",
			},
			zIndex: {
				"-2": "-2",
			},
			width: {
				85: "23rem",
				"w-full-90": "90%",
				411:"411px",
				100:"750px",
			},
			height:{
				264:"264px",
			},
			scale: {
				135: "1.35",
			},
			maxWidth: {
				"screen-2.5xl": "1728px",
			},
			margin:{
				67:"275px",
			},
			inset:{
				67:"280px",
				100:"660px"
			},
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
