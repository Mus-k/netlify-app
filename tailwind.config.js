/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#022c43",
        secondary: "#ffd700",
        color: "#444",
        navBg: "#181818",
        hover: "#ccd6f6",
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "dee-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,.35)",
      },
    },
    screens: {
      sm: "420px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  plugins: [],
};
