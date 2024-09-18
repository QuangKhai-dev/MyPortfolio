import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        light: {
          primary: "#FF5733", // Màu chủ đạo
          secondary: "#6C757D", // Màu phụ
          background: "#FFFFFF", // Màu nền
          accent: "#FFC107", // Màu nhấn
          text: "#343A40", // Màu văn bản
        },
        dark: {
          primary: "#17A2B8", // Màu chủ đạo
          secondary: "#ADB5BD", // Màu phụ
          background: "#0b0e17", // Màu nền
          accent: "#FD7E14", // Màu nhấn
          text: "#E9ECEF",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        fontCalibre: ["var(--font-calibre)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
