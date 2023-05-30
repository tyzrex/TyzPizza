/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-dark-main": "#212121",
        "accent-1": "#e4a62c",
        "accent-2": "#dc6968",
        "accent-3": "#e07636",
        "accent-4": "#de5f3c",
      },
    },
  },
  plugins: [],
};
