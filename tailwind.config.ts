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
        secondary: "#254E58",
        accent: "#6E6668",
        text: "#4F4A41",
        dark: "#112D32",
      },
      backgroundColor: {
        DEFAULT: "#88BDBC",
      },
    },
  },
  plugins: [],
} satisfies Config;
