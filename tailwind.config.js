/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: 'var(--theme-background-dark)',
                    darker: 'var(--theme-background-darker)',
                },
                border: {
                    DEFAULT: 'var(--theme-background-dark)',
                    dark: 'var(--theme-background-dark)',
                    darker: 'var(--theme-background-darker)',
                },
                text: {
                    primary: 'var(--theme-text-primary)',
                    secondary: 'var(--theme-text-secondary)',
                },
                hover: {
                    bg: 'var(--theme-hover-background)',
                },
                active: {
                    bg: 'var(--theme-active-background)',
                },
                primary: 'var(--theme-primary)',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}