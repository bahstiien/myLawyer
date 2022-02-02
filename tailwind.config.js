module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Armata", "sans-serif"],
      second: ["Hind Madurai", "sans-serif"],
      third: ["Viga", "sans-serif"],
    },
    extend: {
      colors: {
        one: "#F8EDE3",
        two: "#BDD2B6",
        three: "#A2B29F",
        four: "#798777",
        five: "#5B8A72",
        six: "#56776C",
        seven: "#2e403a",
      },
    },
    plugins: [],
  },
};
