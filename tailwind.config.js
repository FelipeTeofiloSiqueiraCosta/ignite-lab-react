/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ //nessa sessão content precisamos passar os arquivos que eu vou utilizar o tailwindcss
    './src/**/*.tsx' // dentro da minha pasta src, em qualquer pasta e em arquivos que terminarem com tsx
                    // saõ arquivos que eu quero utilizar o tailwind        
  ],
  theme: {
    extend: { //posso alterar as cores ou css do tail por aqui de acordo com o nome da classe que queremos alterar
      backgroundImage:{
        blur: 'url(/src/assets/blur22.png)'
      },
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      colors:{
        green:{
          300: '#00b37e',
          700: '#00875f',
          500: '#015f43'
        },
        blue:{
          500: '#81d8f7'
        },
        orange:{
          500: '#fba94c'
        },
        red:{
          500: '#f75a68'
        },
        gray:{
          100: '#e1e1e6',
          200: '#c4c4cc',
          300: '#8d8d99',
          500: '#323238',
          600: '#29292e',
          700: '#121214',
          900: '#09090a',
        }
      }
    }, 
  },
  plugins: [],
}
