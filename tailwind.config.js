/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(81deg, rgba(0, 103, 92, 0.20) 2.22%, rgba(0, 103, 92, 0.00) 51.76%);",
      },
    },
  },
  plugins: [],
};
