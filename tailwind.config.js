/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      brand: "#5E5ADB",
      brand_dark: "#111827",
      brand_light: "#F4F4FF",
      border_brand: "#E0DFF8",
      border_light: "#F3F2FC",
      gray_light: "#E4E4E7",
      gray_default: "#8D8D8D",
      gray_dark: "#393939E5",
      gray_darker: "#282828",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  plugins: [],
};
