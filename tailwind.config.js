/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "qr-lg": "hsl(212, 45%, 89%)",
      "qr-gb": "hsl(220, 15%, 55%)",
      "qr-db": "hsl(218, 44%, 22%)",
      white: " hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
