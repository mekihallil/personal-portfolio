import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Miranda_Sans", "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
    keyframes: {
      shine: {
        "0%": { backgroundPosition: "-200% center" },
        "100%": { backgroundPosition: "200% center" },
      },
    },
    animation: {
      shine: "shine 2s linear infinite",
    },
  },
} satisfies Config;
