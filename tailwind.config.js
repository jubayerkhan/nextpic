/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'max-mdx': { max: '769px' }, // for ≤768px
      },
    },
  },
  plugins: [],
}
