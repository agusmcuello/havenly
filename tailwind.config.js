import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
        fadeIn: "fadeIn 1s ease-out",
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["cupcake", "synthwave"],
  },
};
