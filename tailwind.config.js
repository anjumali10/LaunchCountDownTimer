/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dsblue: 'hsl(236, 21%, 26%)',
        vdblue: 'hsl(235, 16%, 14%)',
        softred: 'hsl(345, 95%, 68%)',
        gblue: 'hsl(237, 18%, 59%)',
      },
      fill:{
        softred: 'hsl(345, 95%, 68%)',
        gblue: 'hsl(237, 18%, 59%)',
      },
      fontFamily: {
        redHat: ['"Red Hat Text"', 'sans-serif'],
      },
      letterSpacing: {
        custom: '0.35em', // Adjust the value as needed
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        flip: 'flip 0.6s ease-in-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
      });
    },
  ],
}