/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile': {'max': '560px'},
            'tablet': {'min': '561px', 'max': '800px'},
            'Desktop': {'min': '801px'},
        },
        extend: {},
    },
    plugins: [],
}

