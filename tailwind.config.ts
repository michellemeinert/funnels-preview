import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        accent: "rgba(var(--accent))",
        "accent-hover": "rgba(var(--accent-hover))",
        primary: "rgba(var(--primary))",
        error: "rgba(var(--error))"
      }
    },
  },
  plugins: [],
};
export default config;
