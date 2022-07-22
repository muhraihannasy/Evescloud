/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{js}"],
  theme: {
    extend: {
      colors: {
        green: "#12FF00",
        blackol: "#333333",
        semiblack: "#444444",
        grey: "#555555",
        semigrey: "#666666",
        white1: "#ECECEC",
        white2: "#EEEEEE",
        white3: "#EFEFEF",
        white4: "#F5F5F5",
        red: "#FF0D0D",
        blueair: "#18A0FB",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/bg.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: { tablet: "900px", phone: "424px", phone2: "449px" },
    },
  },
  plugins: [],
};
