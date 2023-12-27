/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        black: "#333",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(81deg, rgba(0, 103, 92, 0.20) 2.22%, rgba(0, 103, 92, 0.00) 51.76%);",
      },
      letterSpacing: {
        "extremely-wide": ".5em",
      },
    },
  },
  plugins: [nextui()],
};
