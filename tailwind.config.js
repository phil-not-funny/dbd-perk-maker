/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: "Roboto"
      }
    },
    colors: {
      common: "#523D2B",
      uncommon: "#e3cc36",
      rare: "#1C7A23",
      veryrare: "#9C4CB9",
      iridescent: "#BB0C40",
      teachable: "#CE4703",
      dark: "#1F1F1F",
      hoverDark: "#403f3f",
      blackLight: "#1a1919",
      description: "#E2CE97",
      beige: "#E2CE97",
      beigeLight: "#FFFAEB",
      quote: '#bfb599',
      ...colors
    }
  },
  plugins: [],
}
