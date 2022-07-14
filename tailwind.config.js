module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#323737',
        'secondary': '#5d5d5d',
        'textPrimary': '#a3f7Ff',
        'komponen': '#00adb5'
      },
      backgroundImage: {
        'elemen': "url('/img/elemen.png')",
        'bgsection': "url('../img/bgsection.jpg')",
      },
      fontFamily: {
        'dscript': ['Dancing Script', 'cursive'],
        'jost': ['Jost', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif']
      }
    },

  },
  plugins: [],
}