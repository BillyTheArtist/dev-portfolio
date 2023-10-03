/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{ts,tsx}',
    ['./App.jsx'],
	],
  theme: {
    scale: {
      '103': '1.03',
      
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
      'around': '0 5px 40px 20px rgba(0, 0, 0, 0.3)',
      'lightGlow': '0 0px 30px 8px #545EC4',
      'purpleGlow': '0 0px 30px 8px #9f60e6',
      'goldGlow': '0 0px 30px 8px #cea364',
      'fairGlow': '0 0px 30px 8px #b1bee7',
    },
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
  plugins: [require("tailwindcss-animate")],
}