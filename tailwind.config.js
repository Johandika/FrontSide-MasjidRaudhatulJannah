import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //johan
        greenBackground: "#379477",
        greenText: "#038767",
        black: "#34364A",
        paragraph: "#64748B",
        yellow: "#FFEC94",
        white: "#FFFFFF",
        //alex
        primary: "#041059",
        primaryDark: "#041059",
        primaryLight: "#091877",
        TextDark: "#333333",
        TextLight: "#757575",
        TextYellow: "#FFEC94",
        Gray1: "#E2E8F0",
        Gray2: "#CBD5E1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [flowbitePlugin],
};
