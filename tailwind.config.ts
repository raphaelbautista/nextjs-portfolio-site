import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        emerald: {
          500: "#10b981",
          600: "#059669",
        },
        // Light Mode (Optional)
        "primary-text-light": "#2D3748",
        "secondary-text-light": "#4A5568",
        "accent-light": "#FFD700", // Yellow accent for light mode
        "background-light": "#FFFFFF",
        "section-light": "#F7FAFC",

        // Dark Mode
        "primary-text-dark": "#E2E8F0", // Light gray text for readability
        "secondary-text-dark": "#CBD5E0", // Slightly darker gray text
        "accent-dark": "#FFD700", // Bright yellow accent for highlights
        "background-dark": "#121212", // Dark charcoal background
        "section-dark": "#1E1E1E", // Slightly lighter charcoal for sections
        charcoal: "#121212", // Dark charcoal
        "subtle-yellow": "#333300", // Subtle yellow

        // Accent Colors
        success: "#48BB78",
        "success-dark": "#68D391",
        warning: "#ED8936",
        "warning-dark": "#F6AD55",
        error: "#F56565",
        "error-dark": "#FC8181",
      },
      fontFamily: {
        heading: ["Urbanist", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
