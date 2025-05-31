module.exports = {
  content: [
    "./src/**/*.{html,njk,md}",
    "./src/_includes/**/*.{njk,html}", // adjust if your layouts are in a different place
    "./src/_layouts/**/*.{njk,html}",  // or wherever your new layout lives
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        flama: ['"Flama Condensed"', 'sans-serif'],
      },
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};