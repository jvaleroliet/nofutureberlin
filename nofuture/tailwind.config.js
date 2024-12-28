module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_releases/**/*.html',
      './_dates/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
        extend: {
          colors: {
            'base1':'#B14A7A',
            'base2':'#864E68',
            'base3':'#DB3682',
            'base4':'#5C4550'
          },
          fontFamily: {
            'karrik' : ['karrik', 'sans-serif'],  
          }
        },
    },
    plugins: []
  }

