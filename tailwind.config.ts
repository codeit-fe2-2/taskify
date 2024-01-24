import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      xl2: "1460px",
    },
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
    },
    colors: {
      white: "#FFFFFF",
      gray1: "#FAFAFA",
      gray2: "#EEEEEE",
      gray3: "#D9D9D9",
      gray4: "#9FA6B2",
      gray5: "#787486",
      black1: "#4B4B4B",
      black2: "#333236",
      black3: "#171717",
      black4: "#000000",
      violet1: "#F1EFFD",
      violet2: "#5534DA",
      red: "#D6173A",
      green: "#7AC555",
      purple: "#760DDE",
      orange: "#FFA500",
      blue: "#76A5EA",
      pink: "#E876EA",
    },
  },
  plugins: [],
};
export default config;
