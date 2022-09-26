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
            DEFAULT :'#cd9042',
            light:'#f0c14b',
          },
          white:{
            DEFAULT : '#ffffff',
            light : '#f3f3f3',
            darker :'#dddddd',
          },
          black:{
            light:'#111111'
          },
          gray:{
            light:'#D3D3D3',
          }
      },
    },
  },
  plugins: [],
}
