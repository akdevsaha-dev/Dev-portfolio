// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-indigo-to-pink": {
            background: "linear-gradient(to right, #6366f1, #9f7aea, #f472b6)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
          ".underline-animation": {
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
          },
          ".underline-animation::after": {
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "0",
            height: "2px",
            backgroundColor: "currentColor",
            transition: "width 0.3s ease",
          },
          ".underline-animation:hover::after": {
            width: "100%",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
