/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#F2F9FF",
        "baby-pink": "#FFCCE1",
        "dark-pink": "#E195AB",
        "light-yellow": "#FFF5D7",
        "dark-blue": "#3AA6B9",
        "dark-black": "#2A3335",
        "beige-white": "#F8F4EC",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
