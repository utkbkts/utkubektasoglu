/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        sm: "548px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        title: ["Roboto", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1a1a1a",
        secondary: "#f5f5f5",
        destructive: "#e63946",
      },
    },
  },
  plugins: [],
};
