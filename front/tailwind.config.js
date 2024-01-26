//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 660px) { ... }
      md: "660px",
      // => @media (min-width: 768px) { ... }
      lg: "960px",
      // => @media (min-width: 1024px) { ... }
      xl: "1260px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        AltoneNormal: ["AltoneNormal", "sans-serif"],
        AltoneBold: ["AltoneBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
