module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"light-blue": "#11B4F5",
				"lighter-blue": "#E8F8FE",
			},
			minHeight: {
				10: "10vh",
				70: "70vh",
				90: "90vh",
			},
			zIndex: {
				"-2": "-2",
			},
			width: {
				85: "23rem",
			},
			scale: {
				135: "1.35",
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
