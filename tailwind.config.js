/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center : true,
      padding : '16px',

    },
    extend: {
      colors: {
        bgdark: '#20364b',
        cpyellow: '#fdc11f',
        cplight : '#F3EFE0',
        cpdark: '#222222',
        cpsecond: '#434242',
        cpprimary: '#22A39F',
      },
      screens : {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}