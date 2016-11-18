'use strict';

var util = require('./util'),
    fs = require('fs'),
    _ = require('lodash');

var keywords = fs.readFileSync('./resume/keywords.txt')
      .toString()
      .split('\n')
      .join(' ');

var skills = {
  'General': ['JavaScript', 'Git', 'Java', 'Algorithms', 'Data Models',
              'Code Review'],
  'Front-end': ['React', 'Flux', 'Angular', 'HTML', 'CSS', 'LESS'],
  'Back-end': ['Node', 'Express', 'REST', 'PostgreSQL', 'MongoDB', 'Auth']
};

var expanded = {
  'Third Party': ['Heroku', 'AWS', 'GoogleAPIs', 'OAuth', 'PubNub'],
  'DevOps': ['Testing', 'Webpack', 'Make', 'Grunt', 'Gulp'],
  'Utility': ['Machine Learning', 'Full-text Search', 'Form Validation',
              'Rich Text Editing', 'Push Notifications'],
  'Platform': ['Web', 'Mobile Web', 'iOS', 'Android', 'Cloud']
};

module.exports = [
  'html',
  [
    'head',

    ['title', 'Cameron Yee'],

    ['meta', {
      name: 'viewport',
      content: 'width=device-width, height=device-height, initial-scale=1, '
        + 'maximum-scale=1, user-scalable=no'
    }],


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
      '@media (max-device-width: 640px)': {
        html: {
          display: 'block',
          overflow: 'auto',
          padding: 0,
          height: '100vh',
          width: '100vw',
          body: {
            overflow: 'auto',
            height: 'initial',
            padding: '20px'
          }
        },
        'header': {
          'text-align': 'center',
          'flex-direction': 'column',
          '.header-info-item': {
            'margin-top': '4px',
            padding: '4px'
          }
        },
        'section': {
          'section-header': {
            'flex-direction': 'column',
            'section-description': {
              'margin': '4px 0',
              display: 'block'
            }
          }
        },
        table: {
          display: 'block',
          tr: {
            display: 'block',
            'margin-bottom': '8px'
          },
          th: {
            display: 'block'
          },
          td: {
            display: 'inline-block',
            'margin-right': '4px'
          }
        },
        'ul': {
          'padding-left': '20px',
          li: {
            margin: '4px 0'
          }
        }
      },

      '@media print': {
        'html': {
          height: '100%',
          width: '100%',
          'padding': 0,
          'body': {
            height: '100%',
            width: '100%'
          }
        },
        '#expandskills': {
          display: 'none'
        },
        'qr-code': {
          display: 'block'
        },
        'yeezyhtml-tag': {
          display: 'none'
        },
        actions: {
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
      {
        class: 'skills',
        style: {position: 'relative'}
      },

      ['h2', 'Skills', util.icon('code')],

      [
        'table',
        {id: 'shortlist'},
        _.map(skills, function(v, k) {
          return [
            'tr',
            ['th', k],
            _.map(v, function(s) {
              return ['td', s];
            })
          ];
        })
      ],

      ['input', {
        id: 'expandcheck',
        type: 'checkbox'
      }],
      [
        'div',
        {id: 'expandedlist'},
        [
          'table',
          _.map(expanded, function(v, k) {
            return [
              'tr',
              ['th', k],
              _.map(v, function(s) {
                return ['td', s];
              })
            ];
          })
        ],
        ['label', {
          id: 'expandskills',
          for: 'expandcheck'
        }, 'Collapse']

      ],

      ['label', {
        id: 'expandskills',
        for: 'expandcheck'
      }, 'Expand Skills']

    ],
    ['br'],

    [
      'div',
      ['h2', 'Work', util.icon('calendar-check-o')],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Creator of '],
            // ['u', 'Creator'],
            // ' of ',
            ['section-name', 'Flybox'],
            ['section-description', ' Email Compatible Messaging Platform']
          ],
          [
            'right',
            ['a', {
              href: 'https://alpha.flybox.online/about'
            }, 'flybox.online'],
            ' July 2016 - Present'
          ]
        ],
        [
          'section-content',
          util.list([
            'Designed and built web app from scratch using React with Flux architecture',
            'Constructed REST API with Node and Express backed by a PostgreSQL DB',
            'Integrated AWS, GDC, Heroku, PubNub',
            'Implemented responsive design and ported app to iOS and Android through Cordova',
            'Managed DevOps and project management'
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
            ['position', 'Engineer at '],
            // ['u', ' Engineer'],
            // ' at ',
            ['section-name', 'Nomic'],
            ['section-description', ' Recruiting Platform Startup']
          ],
          [
            'right',
            ['a', {
              href: 'https://nomic.com'
            }, 'nomic.com'],
            ' April 2015 - July 2016'
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
      ],
      ['br'],

      [
        'section',
        [
          'section-header',
          ['left', 'Bioinformatics Intern at Garmire Lab UHCC'],
          ['right', 'Summer 2013']
        ]
      ],

      [
        'section',
        [
          'section-header',
          ['left', 'Calculus Tutor at University of Washington Learning Center'],
          ['right', '2011-2013']
        ]
      ]

    ],
    ['br'],

    [
      'div',
      ['h2', 'Projects', util.icon('code-fork')],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['section-name', 'Braincryption'],
            ['section-description', ' Visual Encryption Experiment']
          ],
          [
            'right',
            ['a', {
              href: 'http://makakoa.github.io/braincryption/app/'
            }, 'makakoa.github.io/braincryption/app']
          ]
        ],
        [
          'section-content',
          util.list([
            'Web App built with Vanilla JavaScript, HTML, and CSS',
            'Created Supplementary Chrome Extension'
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
            ['section-name', 'The Council'],
            ['section-description', ' Crowd-sourced Coin Flipping']
          ],
          [
            'right',
            ['a', {
              href: 'http://thecouncil.herokuapp.com'
            }, 'thecouncil.herokuapp.com'],
            ' & ',
            ' on iOS'
          ]
        ],
        [
          'section-content',
          util.list([
            'Web App built with React and Flux architecture',
            'Socket API built with Node and Socket.io',
            'Ported app to iOS with Cordova and published on App Store'
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
            ['section-name', 'YeezyHTML'],
            ['section-description', ' HTML that thinks it\'s JS']
          ],
          [
            'right',
            ['a', {
              href: 'https://makakoa.github.io/yeezyhtml/'
            }, 'makakoa.github.io/yeezyhtml'],
          ]
        ],
        [
          'section-content',
          util.list([
            'JS to static HTML + CSS compiler',
            'Used to build this resume (source in project page)'
          ])
        ]
      ],
      ['span', {
        style: {
          width: '100%',
          'text-align': 'right',
          display: 'inline-block',
          margin: '8px 0',
          color: 'gray'
        }
      }, '(Project sources on GitHub)']

    ],

    [
      'div',
      ['h2', 'Education', util.icon('graduation-cap')],

      [
        'section',
        [
          'section-header',
          ['left', 'Code Fellows: Certificate of Full-Stack JavaScript'],
          ['right', 'Fall 2014']
        ]
      ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            'University of Washing: Bachelor of Science in Neurobiology ',
            ['num', '(3.7)']
          ],
          ['right', '2010 - 2014']
        ]
      ]
    ],

    [
      'qr-code',
      ['a', {
        href: 'http://cameron-yee.com/resume'
      }, 'cameron-yee.com/resume'],
      ['img', {src: './resume/qrcode.svg'}]
    ],

    [
      'yeezyhtml-tag',
      'built from scratch with ',
      ['a', {
        href: 'https://github.com/makakoa/yeezyhtml'
      }, 'yeezyhtml']
    ],

    [
      'actions',
      ['button', {
        class: 'action',
        onClick:'window.print()'
      }, 'Print'],
      ['a', {
        class: 'action',
        href: 'path_to_file',
        download: './resume/cameron-yee-resume.pdf'
      }, 'Download PDF']
      // ['a', {
      //   href: 'path_to_file',
      //   class: 'action',
      //   download: './resume.html'
      // }, 'Download HTML']
    ],

    ['keywords', keywords]

  ]
];