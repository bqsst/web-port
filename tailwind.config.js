// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    from: { width: '0%' },
                    to: { width: '100%' },
                },
            },
            animation: {
                typing: 'typing 4s linear forwards',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
