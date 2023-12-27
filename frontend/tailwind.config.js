/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1067a7",
        secondaryColor: "#ff3038",
        bgColor: "#dae0e6"
      },
      height: {
        'footer': '2.5rem'
      },
      minHeight: {
        'section': '90vh'
      }
    },
  },
  plugins: [],
}