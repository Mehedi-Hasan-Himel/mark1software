/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          success: "#34751a",
          neutral: "#242742",
          "base-100": "#F7F7F8",
          secondary: "#f46164",
          accent: "#87edda",
          info: "#51D1F5",
          warning: "#f24040",
          error: "#F64174",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
