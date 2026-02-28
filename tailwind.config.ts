import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0B3D2E",
          50: "#1A5C45",
          100: "#15503C",
          200: "#114433",
          300: "#0D3829",
          400: "#0B3D2E",
          500: "#082B20",
          600: "#051F17",
          700: "#03130E",
          800: "#010705",
          900: "#000000",
        },
        gold: {
          DEFAULT: "#D4A853",
          50: "#F5E6C8",
          100: "#F0DEBB",
          200: "#E8CEA0",
          300: "#E0BE85",
          400: "#D4A853",
          500: "#C89A3E",
          600: "#A67E30",
          700: "#7D5F24",
          800: "#544018",
          900: "#2B210C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
