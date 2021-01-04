module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'principal': '#fe2c55',
        'principal-hover': '#ef2950',
      },
    },
  },
  variants: {},
  plugins: [],
}