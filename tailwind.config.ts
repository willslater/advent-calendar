import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cvBlue: "#164294",
        cvRed: "#E30613"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.07)"
      }
    }
  },
  plugins: []
};
export default config;