'use strict';

var color = {
  purple: '#4109e2',
  vivid: '#4728ff',
  font: '#444444',
  tooltip: '#cddc39'
};


var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2F;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}


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
        color: color.font, // Variables!

        body: { // Nested styles!
          height: '100vh',
          width: '100vw',
          'box-sizing': 'border-box',
          overflow: 'auto',
          margin: 0,
          padding: '40px 60px'
        }
      },

      h1: {
        'letter-spacing': '1px',
        'margin': '0',
        'font-weight': '300',
        'text-transform': 'uppercase'
      },
      h3: {
        color: color.purple,
        'font-weight': '400'
      },

      p: {
        'max-width': '40ch'
      },

      li: {
        'margin-bottom': '6px'
      },

      code: {
        'letter-spacing': '0.5px',
        'background-color': '#eeeeee',
        padding: '4px'
      },

      tooltip: {
        display: 'inline',
        position: 'relative',

        'tip::before, tip::after': {
          'border': 'solid transparent',
          bottom: '100%',
          left: 0,
          position: 'absolute',
          height: 0,
          width: 0,
          content: '" "'
        },

        tip: {
          'font-family': '"Raleway"',
          'font-size': '11px',
          'white-space': 'nowrap',
          position: 'absolute',
          'border-radius': '4px',
          padding: '4px',
          'background-color': color.tooltip,
          // 'border': '1px solid ' + 'gray',
          left: '10%',
          top: 'calc(100% + 8px)',

          '&::before': {
            'border-width': '6px',
            // 'border-bottom-color': 'gray', // tip border
            'margin-left': '6px'
          },
          '&::after': {
            'border-width': '5px',
            'border-bottom-color': color.tooltip, // tip color
            'margin-left': '7px'
          }

        }
      }
    }]
  ],
  [
    'body',

    ['a', {
      style: {
        'text-decoration': 'none',
        color: 'gray'
      },
      href: 'https://github.com/makakoa/yeezyhtml'
    }, '< github'],
    ['br'],

    [
      'page-title',
      {
        style: {
          display: 'flex',
          'align-items': 'center'
        }
      },
      ['h1', 'yeezyhtml'],
      [
        'h5',
        {
          style: {
            'margin': '0 15px'
          }
        },
        'by ',
        ['a', {
          style: {
            color: color.vivid
          },
          href: 'http://cameron-yee.com'
        }, 'makakoa']
      ]],

    ['h3', 'Yeezy to read. Yeezy to write.'],

    [
      'p',
      'Yeezyhtml is a simple compiler which uses syntax inspired by o2.js ',
      'to write static HTML and CSS.'
    ],

    [
      'div',
      'Examples',
      [
        'ul',

        ['li',
         ['code', '[\'a\', {href: \'http://github.com\'}, \'Github\']'],
         ' ---> ',
         ['code', escapeHtml('<a href=\'http://github.com\'>Github</a>')]
        ],

        ['li', ['a', {
          target: '_blank',
          href: 'https://github.com/makakoa/yeezyhtml/blob/master/example.js'
        }, 'This page (source)']],
        [
          'li',
          ['a', {
            target: '_blank',
            href: 'https://makakoa.github.io/yeezyhtml/resume'
          }, 'My resume'],

          ' + ',

          ['a', {
            target: '_blank',
            href: 'https://github.com/makakoa/yeezyhtml/blob/master/resume/' +
              'index.js'
          }, '(source)']

        ]
      ]
    ],


    [
      'div',
      ['p', 'Compiling '],
      [
        'code',
        'node index.js',
        tooltip(' example', 'Entry'), // Functions!
        tooltip(' index.html', 'Output')
      ]
    ],

    ['br'],

    [
      'div',
      ['p', 'Tip: use nodemon for development '],
      [
        'code',
        tooltip('nodemon', 'Immediately updates on changes!'),
        ' index.js example index.html'
      ]
    ]





  ]
];

function tooltip(target, tip) {
  return [
    'tooltip',
    target,
    ['tip', tip]
  ];
}
