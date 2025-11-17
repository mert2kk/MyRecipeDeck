/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

      "md-tall": { raw: "(min-width: 768px) and (min-height: 700px)" },
      "lg-tall": { raw: "(min-width: 1024px) and (min-height: 900px)" },
    },
    extend: {},
  },
  plugins: [],
};
