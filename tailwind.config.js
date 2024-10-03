/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: {
        text: "hsl(0, 0%, 100%)",
        bg: " hsl(207, 26%, 17%)",
        element: "hsl(209, 23%, 22%)",
      },
      tr: "#0000",
      light: {
        element: "hsl(0, 0%, 100%)",
        input: "hsl(0, 0%, 52%)",
        bg: " hsl(0, 0%, 98%)",
        text: " hsl(200, 15%, 8%)",
      },
    },
    screens: {
      l: { max: "1200px" },
      md: { max: "1000px" },
      s: { max: "800px" },
      xs: { max: "650px" },
      xs2: { max: "550px" },
    },
    extend: {
      fontFamily: {
        font: ['"Nunito Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
