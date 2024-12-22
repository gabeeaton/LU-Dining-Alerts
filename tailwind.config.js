/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'liberty-navy': '#0A254E',
        'liberty-red' : '#990000'
      },
      height: {
        '1/10': '10vh', // 10% of the viewport height
        '9/10': '90vh'
      },
    },
  },
  plugins: [],
}

