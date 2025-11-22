/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-montserrat)", "sans-serif"],
            },
            colors: {
                primary: "#1d4ed8",
                "primary-foreground": "#f8fafc",
                accent: "#f59e0b",
                "accent-foreground": "#1f2937",
                background: "#f8fafc",
                surface: "#ffffff",
                heading: "#0f172a",
                body: "#334155",
                muted: "#64748b",
            },
        },
    },
    plugins: [],
};

module.exports = config;

