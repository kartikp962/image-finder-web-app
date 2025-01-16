/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#111827',
        'custom-light-blue': '#243251',

      }
    },
  },
  plugins: [],
}

