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
				12: "12vh",
				70: "70vh",
				90: "90vh",
			},
			maxHeight: {
				88: "88vh",
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
			maxWidth: {
				"screen-2.5xl": "1728px",
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
