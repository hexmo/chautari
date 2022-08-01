/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chautari-image":
          "url('./assets/images/landing-page/chautari-image.png')",
      },
    },
  },
  plugins: [],
};
