/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        darkGray: "#414d59",
        lightGray: "#5c676b",
        black: "#1f2834",
        white: "#edeef2",
        creamy: "#efe9db",
        gray: "#ccced1",
        lightBlue: "#4d8dc1",
        orange: "#c45a2d",
        pink: "#f66e6e",
        darkPurple: "#27284d",
        indigoBlue: "#00d4ff",
        fadedOrange: "#c78862",
      },
    },
  },
  plugins: [],
};
