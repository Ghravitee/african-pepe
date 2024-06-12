import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heroportrait": "url('/African-Pepe.jpg')",
        "herolandscape": "url('/African-Pepe-Landscape.jpg')",
        "herobackground": "url('/pepe-background.PNG')",
        "heropepe": "url('/hero-pepe.PNG')"
      },
      colors: {
        forestGreen: 'rgb(79, 152, 67)',
        myyellow: '#ffd466',
        myorange: '#ff9900',
      },
    },
  },
  plugins: [],
};
export default config;
