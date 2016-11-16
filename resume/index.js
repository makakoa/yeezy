'use strict';

module.exports = [
  'html',
  [
    'head',

    ['title', 'Resume'],

    ['link', {
      href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,600',
      rel: 'stylesheet'
    }],

    require('./styles'),

    ['style', {
      '@media print': {
        'html': {
          height: '100%',
          width: '100%',
          'padding': 0
        }
      }
    }]

  ],
  [
    'body',

    require('./header'),

    ['main', 'Work'],

    ['footer', 'School']

  ]
];
