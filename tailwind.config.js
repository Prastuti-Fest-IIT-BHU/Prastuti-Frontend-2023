/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-pattern': "url('/src/assets/wave-haikei.svg')",
      }
    },
  },
  plugins: [],
};
