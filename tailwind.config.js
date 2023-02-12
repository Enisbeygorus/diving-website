/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0369a1",
        primaryDark: "#334155",
        primaryDark2: "#1f2937",
        primaryHover: "#1e293b",
        primaryLightBg1: "#eaf5ff",
      },
      screens: {
        landscapeM: {
          raw: "(max-width: 1024px) and (max-height: 600px) and (orientation: landscape)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
