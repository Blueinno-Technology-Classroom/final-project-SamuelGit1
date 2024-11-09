module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "valentine", "lemonade", "black"],
  },
  plugins: [require("daisyui")],
};
