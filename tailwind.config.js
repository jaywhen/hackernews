/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'link': '#536471',
        'link-title': '#0F1419',
        'link-desc': '#536471'
      },
      fontFamily: {
        'Mono': ['"JetBrains Mono"']
      }
    },
  },
  plugins: [],
}
