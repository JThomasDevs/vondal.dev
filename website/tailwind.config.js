/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ['./src/**/*.{html,js}'],
  theme: {
      extend: {
          fontSize: {
              'header-text': '40px',
              'content-text': '24px',
            },
          padding: {
              '25vw': '25vw',
              '10vw': '10vw',
          },
          colors: {
              link: '#808080',
              github: '#6e5494',
              portfolio: '#d28001',
              python: '#3776ab',
              cpp: '#004488',
              rust: '#ce422b',
              java: '#f89820',
              htmlcssjs: '#ec7419',
              ottomated: '#808080',
              selenium: '#2cb134',
              tkinter: '#fff100',
              firebase: '#ffcb2b',
              node: '#68a063',
              react: '#61dafb',
              tailwind: '#06b6d4',
          },
      },
      variants: {
            extend: {
                padding: ['responsive']
            }
      }
  },
  plugins: [],
}

