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
        "theme-background": "var(--background-color)",
        "theme-foreground": "var(--foreground-color)",
        main: "#F43F5E",
      },
      fontFamily: {
        plex: ["var(--plex-mono)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
