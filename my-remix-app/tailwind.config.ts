import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors:{
      purple:{
        700: '#714575',
        800: '#5a2b5c',
        900: '#3c073d'
      }
    }
    },
  },
  plugins: [],
} satisfies Config;
