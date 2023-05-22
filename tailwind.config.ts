import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        raleway: ['var(--font-raleway)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
