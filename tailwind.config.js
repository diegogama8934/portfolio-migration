/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'selector' for media query approach
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
      }
    },
  },
  plugins: [],
} 