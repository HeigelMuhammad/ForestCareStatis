/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hijau: "#D5ED9F",
        cream: "#FFFBE6",
        orange: "#FF9100", //primary orange
        orangefc: "#E48200", //saat focus
        orangehv: "#E48200", //saat hover
        hijaugel: "#EAE4C2", //bg button nav
      },
    },
  },
  plugins: [],
};
