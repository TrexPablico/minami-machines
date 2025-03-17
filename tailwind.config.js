/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#50C878",
        primaryYellow: "#FF9C00",
      },
    },
  },
  plugins: [],
};
