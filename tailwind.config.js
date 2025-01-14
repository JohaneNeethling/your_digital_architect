/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["'Noto Serif Display'", "serif"],
      },
      colors: {
        "custom-light": "#E6CF9B",
      },
    },
  },
  plugins: [],
};
