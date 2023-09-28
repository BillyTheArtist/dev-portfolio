import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px,20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
      },
      colors: {
        nonBlackGrey: "#242120",
        nonBlack: "#181514",
        almostBlack: "#08080a",
        brightGrey: "#F5F5F5",
        standardGrey: "#E2DED1",
        baseCream: "#F6CFAA",
        baseGrey: "#393C45",
        baseBG: "#0C1328",
        liteBG: "#16182A",
        footerBG: "#0D1227",
        baseBox: "#1C2237",
        boxLite: "#696984",
        blueGrey: "#1C1F2C",
        darkBlueGrey: "#090914",
        darkishBlueGrey: "#12141f",
        darkOrange: "#9F4811",
        niceOrange: "#D6613A",
        niceCreamOrange: "#e87c58",
        buttonOrange: "#FF862F",
        niceDarkOrange: "#9e4f34",
        baseOrange: "#BF5616",
        burntOrange: "#7E3B0D",
        negativeOrange: "#5E2C0A",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
