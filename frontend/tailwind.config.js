module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
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
