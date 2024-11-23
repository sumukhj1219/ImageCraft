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
        background: "var(--background)",
        foreground: "var(--foreground)",
        columns: {
          1: '1',
          2: '2',
          3: '3',
          4: '4',
        },
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
