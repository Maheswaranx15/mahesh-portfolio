import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#090B0F",
        graphite: "#12161D",
        steel: "#1E242E",
        mist: "#AAB6CA",
        amber: "#FFB347",
        gold: "#CFA35A",
        ice: "#7FC9FF",
        ember: "#C1453A"
      },
      boxShadow: {
        tactical: "0 20px 55px rgba(0, 0, 0, 0.5)",
        glowAmber: "0 0 40px rgba(255, 179, 71, 0.22)",
        glowIce: "0 0 30px rgba(127, 201, 255, 0.2)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: [],
};

export default config;
