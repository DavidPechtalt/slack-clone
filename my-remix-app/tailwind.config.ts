import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "Open-Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        small: "40px",
        medium: "895px",
      },
      colors: {
        seaBlue: "#1d9bd1",
        lightBlack: "#1a1d21",
        lightGray: "#acacad",
        purple: {
          50: "#f9edff",
          100: "#bea9c4",
          300: "#d8c5de",
          600: "#866487",
          650: "#754778",
          700: "#714575",
          800: "#5a2b5c",
          900: "#410d42",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
