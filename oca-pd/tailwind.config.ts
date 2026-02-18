import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   // tailwind.config.ts — replace the entire colors block inside extend: {}
colors: {
  primary: {
    50:  "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#7c3aed",   // Main brand purple (matches wheelchair figure)
    600: "#6d28d9",
    700: "#5b21b6",
    800: "#4c1d95",
    900: "#2e1065",
  },
  secondary: {
    50:  "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#d97706",   // Gold (matches central figure)
    600: "#b45309",
    700: "#92400e",
    800: "#78350f",
    900: "#451a03",
  },
},
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tahoma", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
