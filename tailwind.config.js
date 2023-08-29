/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./App.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			placeholder: "#9C9C9C",
			primary: "#444444",
			white: "#FFFFFF",
			fade: "#6F6F6F",
			black: "#1E1E1E",
			blue: "#265BD3",
			red: "#F44336",
		},
		extend: {
			fontFamily: {},
		},
	},
	plugins: [],
};
