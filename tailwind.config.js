/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px" },
    },
    extend: {},
  },
  plugins: [],
};
