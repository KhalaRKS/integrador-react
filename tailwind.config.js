module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}