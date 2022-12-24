/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#004C7D',
      'light-blue': '#4B7CB2',
      'new-white': '#DBF2FF',
      'neon-tint': '#29ffff',
    },
    backgroundImage: {
      blob: "url('./assets/magicpattern-blob-1671897586972 (1).png')",
      blob_small: "url('./assets/magicpattern-blob-1671897586972 (1) (1).png')"
    },
    plugins: [],
  }
}