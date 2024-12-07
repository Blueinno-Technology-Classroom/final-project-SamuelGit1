module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: [],
        play: ["Play"],
        inter: ["Inter"],
      },
    },
  },
  daisyui: {
    themes: ["retro", "valentine", "lemonade", "black", "dark"],
  },
  plugins: [require("daisyui")],
};
