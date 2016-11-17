'use strict';

var util = require('./util');

module.exports = [
  'html',
  [
    'head',

    ['title', 'Cameron Yee'],

    ['link', {
      rel: 'icon',
      type: 'image/png',
      href: 'https://res.cloudinary.com/flybox-local/image/upload/' +
        '1-4d50d0d96102b3bc8f6dd2f1556b0daaf355c24acfee4a26f0f1921f53149cd2.png'
    }],

    ['script', {
      src: 'https://use.fontawesome.com/3dc715028b.js'
    }],

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
        },
        'yeezyhtml-tag': {
          display: 'none'
        }
      }
    }]

  ],
  [
    'body',

    require('./header'),
    ['br'],

    [
      'div',
      ['h2', 'Skills'],
      [
        'table',
        {style: {
          width: '100%'
        }},
        [
          'tr',
          ['td', 'JavaScript'],
          ['td', 'Node'],
          ['td', 'Git'],
          ['td', 'Java']
        ],
        [
          'tr',
          ['td', 'HTML'],
          ['td', 'CSS'],
          ['td', 'React'],
          ['td', 'Angular']
        ],
        [
          'tr',
          ['td', 'Postgres'],
          ['td', 'Mongo'],
          ['td', 'Heroku'],
          ['td', 'REST']
        ]
      ]
    ],
    ['br'],

    [
      'div',
      ['h2', 'Work'],

      [
        'section',
        [
          'section-header',
          [
            'left',
            'Creator of ',
            ['section-name', 'Flybox'],
            ['section-description', ' an Email Compatible Messaging Platform']
          ],
          [
            'right',
            'July 2016 - Present'
          ]
        ],
        [
          'section-content',
          util.list([
            'Designed and built web app from scratch using React with Flux architecture',
            'Constructed REST API with Node and Express backed by a PostgreSQL DB',
            'Implemented responsive design and ported App to iOS and Android apps through Cordova',
            'Managed DevOps and tasking',
            'Integrated AWS, GDC, Heroku, PubNub'
          ])
        ]
      ],
      ['br'],

      [
        'section',
        [
          'section-header',
          [
            'left',
            'Software Engineer at ',
            ['section-name', 'Nomic'],
            ['section-description', ' a Recruiting Platform Startup']
          ],
          [
            'right',
            'May 2015 - July 2016'
          ]
        ],
        [
          'section-content',
          util.list([
            'Collaborated on multiple web and mobile apps built with and in-house framework o2.js',
            'Interviewed engineering candidates and onboarded new team members',
            'Contributed to UI design and App architecture',
            'Frequently pair programmed and code reviewed'
          ])
        ]
      ]

    ],
    ['br'],

    [
      'div',
      'Projects',
      [
        'ul',
        ['li', 'braincryption'],
        ['li', 'the council'],
        ['li', 'yeezyhtml']
      ]
    ],
    ['br'],

    [
      'div',
      'Education',
      [
        'ul',
        ['li', 'Code Fellows'],
        ['li', 'University of Washington']
      ]
    ],

    [
      'yeezyhtml-tag',
      'built with ',
      ['a', {
        href: 'https://github.com/makakoa/yeezyhtml'
      }, 'yeezyhtml']
    ]

  ]
];
