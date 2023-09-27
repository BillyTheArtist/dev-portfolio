import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nonBlack: '#242120',
        almostBlack: '#08080a',
        brightGrey: '#F5F5F5',
        standardGrey: '#E2DED1',
        baseGrey: '#393C45',
        baseBG: '#0C1328',
        baseBox: '#1C2237',
        blueGrey: '#1C1F2C',
        darkBlueGrey: '#090914',
        darkishBlueGrey: '#12141f',
        darkOrange: '#9F4811',
        niceOrange: '#D6613A',
        niceCreamOrange: '#e87c58',
        buttonOrange: '#FF862F',
        niceDarkOrange: '#9e4f34',
        baseOrange: '#BF5616',
        burntOrange: '#7E3B0D',
        negativeOrange: '#5E2C0A',
      },
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
