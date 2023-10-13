const { createThemes } = require("tw-colors");
import Image from 'next/image'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    ["./App.jsx"],
  ],
  theme: {
    scale: {
      103: "1.03",
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
      altBG: "#171E2A",
      liteBG: "#16182A",
      hiBG: "#1C1E3B",
      footerBG: "#0D1227",
      baseBox: "#1C2237",
      boxLite: "#696984",
      boxMed: "#5b5b73",
      blueGrey: "#1C1F2C",
      darkBlueGrey: "#090914",
      darkishBlueGrey: "#12141f",
      darkOrange: "#9F4811",
      reactBlue: "#50bbd8",
      niceOrange: "#D6613A",
      niceCreamOrange: "#e87c58",
      buttonOrange: "#FF862F",
      niceDarkOrange: "#9e4f34",
      baseOrange: "#BF5616",
      burntOrange: "#7E3B0D",
      negativeOrange: "#5E2C0A",
      transparent: "#0000",
    },
    boxShadow: {
      around: "0 5px 40px 20px rgba(0, 0, 0, 0.3)",
      slight: "0 5px 30px 2px rgba(0, 0, 0, 0.3)",
      lightGlow: "0 0px 30px 8px #545EC4",
      boxGlow: "0 0px 30px 8px #1C2237",
      purpleGlow: "0 0px 30px 8px #9f60e6",
      goldGlow: "0 0px 30px 8px #cea364",
      fairGlow: "0 0px 30px 8px #b1bee7",
    },
    animation: {
      blob: "blob 9s infinite",
      blink: "blink 10s ",
    },
    keyframes: {
      blink: {
        '0%, 18.1818%': {
          opacity: 0,
        },
        '9.0909%, 27.2727%': {
          opacity: 1,
        },
        '36.3636%, 54.5455%': {
          opacity: 0,
        },
        '45.4545%, 63.6364%': {
          opacity: 1,
        },
        '72.7273%, 90.9091%': {
          opacity: 0,
        },
        '100%': {
          opacity: 0,
        },
      },
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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    createThemes({
      light: {
        primary: "#F3F",
        secondary: "#F3F",
        brand: "#F3F",
        copyColor: "#2f323a",
        copyAltColor: "#0063d5",
        buttonColor: "#2f323a",
        buttonText: "#F5F5F5",
        gradientStart: "##eff0f2",
        gradientEnd: "##eff0f2",
        bottomGradientStart: "#F5F5F5",
        bottomGradientEnd: "#eff0f2",
        backgroundMain: "#eff0f2",
        skillBackground: "#eff0f2",
        pageGradient: "#99c9ff",
        navBG: "#0063d5",
        iconColor: "#2f323a",
        blobLeft: "#0063d5",
        blobRight: "#50bbd8",
        blobBottom: "#696984",
        footerGradientTop: "#eff0f2",
        footerGradientBottom: "#3f81cc",
        modalText: "#0063d5",
        modalClose: "#2f323a",
        skillsGradientTop: "#99c9ff",
        skillsGradientBottom: "#0063d5",
      },
      dark: {
        primary: "#9f60e6",
        secondary: "#9f60e6",
        brand: "#9f60e6",
        copyColor: "#F5F5F5",
        copyAltColor: "#FF862F",
        buttonColor: "#FF862F",
        gradientStart: "#181514",
        gradientEnd: "#08080a",
        bottomGradientStart: "#0C1328",
        bottomGradientEnd: "#16182A",
        backgroundMain: "#16182A",
        pageGradient: "#181514",
        navBG: "#16182A",
        iconColor: "#FF862F",
        blobLeft: "#D6613A",
        blobRight: "#5E2C0A",
        blobBottom: "#696984",
        footerGradientTop: "#16182A",
        footerGradientBottom: "#D6613A",
        modalText: "#F5F5F5",
        modalClose: "#FF862F",
        skillsGradientTop: "#0C1328",
        skillsGradientBottom: "#1C2237",
        skillBackground: '#1C1E3B'
      },
    }),
  ],
};
