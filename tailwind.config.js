/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
          blue:{
            DEFAULT : '#131921'
          },
          yellow:{
            DEFAULT :'#cd9042'
          },
          white:{
            DEFAULT : '#ffffff',
          }
      },
    },
  },
  plugins: [],
}
