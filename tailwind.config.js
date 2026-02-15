/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FACC15", // yellow-400
          orange: "#F97316", // orange-500
          stone: "#F5F5F4",  // stone-100
        }
      },
      borderRadius: {
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
