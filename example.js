'use strict';

var color = {
  font: '#444444'
};

module.exports = [
  'html',
  [
    'head',

    ['title', 'yeezyhtml'],

    ['link', {
      href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,600',
      rel: 'stylesheet'
    }],

    ['style', {
      html: {
        'font-family': '"Raleway"',
        color: color.font,

        body: {
          padding: '20px'
        }
      },
      h1: {
        'font-weight': '300',
        'text-transform': 'uppercase'
      }
    }]
  ],
  [
    'body',

    ['h1', 'yeezyhtml'],
    ['p', 'JS HTML'],
    ['p', 'Yeezy to read. Yeezy to write.']

  ]
];
