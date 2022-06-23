module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#fb923c',
        orangeHover: '#f97316',        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
