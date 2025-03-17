/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00703C",
        primaryYellow: "#FF9C00",
      },
    },
  },
  plugins: [],
};
