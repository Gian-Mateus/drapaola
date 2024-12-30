/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Josefin Sans', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

