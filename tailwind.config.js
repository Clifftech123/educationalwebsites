/** @type {import('tailwindcss').Config} */ 
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				Navbar_bg: "#041C32",
				Navbar_text_color: "#ECB365",
			},
       fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
       }
		},
	},
	plugins: [],
};

