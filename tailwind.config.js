/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "source-sans-pro": ["Source Sans Pro", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
