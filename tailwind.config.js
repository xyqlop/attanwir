/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        light: "#f5ebe0",
        dark: "#262626",
        primary: "#2D6A4F",
        secondary: "#F0F0F0",
        tertiary: "#344e41",
        quaternary: "#37815F",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
