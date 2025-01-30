import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    animation: {
      "fade-in": "fade-in 0.3s ease-in-out",
      "fade-out": "fade-out 0.3s ease-in-out",
      "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
      "slide-out-to-right": "slide-out-to-right 0.3s ease-in",
      pulse: "pulse 1.5s infinite",
    },
    keyframes: {
      pulse: {
        "0%, 100%": { transform: "scale(1)", opacity: "1" },
        "50%": { transform: "scale(1.05)", opacity: "0.7" },
      },
    },

    plugins: ["animate"],
  },
  plugins: [animate],
} satisfies Config;
