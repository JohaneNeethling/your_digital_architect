/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["'Noto Serif Display'", "serif"],
      },
      colors: {
        "custom-light": "#C2A28B",
        "custom-dark": "#292F41",
      },
    },
  },
  plugins: [],
};
