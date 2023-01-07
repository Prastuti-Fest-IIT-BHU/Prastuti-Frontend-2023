/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'Catamaran' : ['Catamaran','sans-serif'],
        'Manrope' : ['Manrope' , 'sans-serif'],
      },
      colors: {
        'dark-blue': '#004C7D',
        'light-blue': '#4B7CB2',
        'new-white': '#DBF2FF',
        'neon-tint': '#29ffff',
        'white':'#ffffff',
        'black':'#000000',
      },
      // backgroundImage: {
      //   blob: "url('./assets/Register/magicpattern-blob-1671897586972 (1).png')",
      //   blob_small: "url('./assets/Register/magicpattern-blob-1671897586972 (1) (1).png')"
      // },
      screens: {
        'sm': '520px',
        'md': '768px',
        'lg': '1100px',
      },
    },
    plugins: [],
  }
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
