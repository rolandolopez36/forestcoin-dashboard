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
        // ForestCoin color palette
        forest: {
          main: "#0B4F3F",
          accent: "#3BB273",
        },
        slate: {
          dark: "#0F1615",
          grey: "#1E2A29",
        },
        mist: "#E8F4F0",
        positive: "#4ADE80",
        negative: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
