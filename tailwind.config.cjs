/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage:{
        "Intro":"url('./src/Intro2.png')"
      }
    },
  },
  plugins: [],
}
