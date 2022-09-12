/** @type {import('tailwindcss').Config} */ 
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				Navbar_bg: "#041C32",
				Navbar_text_color: "#ECB365",
				G_Purple: "#aa076b",
				Footer_bg: "#041248;",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				Overpass: ["Overpass", "sans - serif"],
			},
		},
	},
	plugins: [],
};

