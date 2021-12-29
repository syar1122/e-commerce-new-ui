const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Sacramento", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
