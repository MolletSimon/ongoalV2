/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-danger",
    "bg-success",
    "bg-primary",
    "bg-green-600",
    "bg-pink",
    "bg-warning",
    "border-2",
    "rounded-lg",
    "border-danger",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["LEXEND", "sans-serif"],
        mabry: ["Mabry", "sans-serif"]
      },
      colors: {
        current: "#555249",
        success: "#49A078",
        danger: "#BD1E1E",
        pink: "#D88373",
        warning: "#F6BD60",
        lightGrey: "#F7EDE2",
        primary: "#216869",
      },
    },
  },
  plugins: [],
};
