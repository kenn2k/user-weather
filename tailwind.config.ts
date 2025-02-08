import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./user/**/*.{js,ts,jsx,tsx,mdx}",
    "./weather/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#88BDBC",
        secondary: "#1d4ed7",
        accent: "#1e40af",

        text: "#BFDBFE",
      },
      backgroundColor: {
        DEFAULT: "#eff6ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
