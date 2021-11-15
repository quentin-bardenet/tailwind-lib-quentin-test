module.exports = {
  purge: {
    enabled: false,
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffedef",
          100: "#ffd2d5",
          200: "#f9a39f",
          300: "#f37f79",
          400: "#ff6355",
          500: "#ff5539",
          600: "#f74e3a",
          700: "#e44333",
          800: "#d73d2c",
          900: "#c83320",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
