/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080B16",
        navy: "#11162A",
        card: "#151B32",
        brand: {
          purple: "#7C3AED",
          cyan: "#06B6D4",
          blue: "#2563EB",
        },
        snow: "#F8FAFC",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.18)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.16)",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
