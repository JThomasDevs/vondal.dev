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
          inset: {
            '2.5': '10px',
          },
          colors: {
              github: '#6e5494',
              portfolio: '#d28001',
              python: '#3776ab',
              cpp: '#004488',
              rust: '#ce422b',
              java: '#f89820',
              htmlcssjs: '#ec7419',
              selenium: '#2cb134',
              tkinter: '#fff100',
              other: '#ffcb2b',
              android: '#a4c639',
              link: '#808080',
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

