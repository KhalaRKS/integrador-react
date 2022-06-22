module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '180': '50rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin'),
  ],
}