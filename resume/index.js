'use strict';

var util = require('./util'),
    fs = require('fs'),
    _ = require('lodash');

var resumePath = 'http://cameron-yee.com/resume/cameron-yee-resume-redacted.pdf';

var keywords = fs.readFileSync('./resume/keywords.txt')
      .toString()
      .split('\n')
      .join(' ');

var skills = {
  'General': ['JavaScript', 'Git', 'Java', 'Algorithms', 'Data Models',
              'Code Review'],
  'Front-end': ['React', 'Flux / Redux', 'Angular', 'HTML', 'CSS', 'LESS'],
  'Back-end': ['Node', 'Express', 'REST', 'PostgreSQL', 'MongoDB', 'Auth']
};

var expanded = {
  'Third Party': ['Heroku', 'AWS', 'GoogleAPIs', 'OAuth', 'PubNub'],
  'DevOps': ['Webpack', 'Make', 'Grunt', 'Gulp', 'Livereload'],
  'Testing': ['Mocha', 'Chai', 'End-to-End', 'Selenium', 'Nightwatch'],
  'Utility': ['Machine Learning', 'Full-text Search', 'Form Validation',
              'Rich Text Editing', 'Push Notifications'],
  'Media': ['Web Audio API', 'WebGL', 'Threejs', 'Aframe', 'AnalyserNode'],
  'Platform': ['Web', 'Mobile Web', 'iOS', 'Android', 'Cloud'],
  'Env': ['UNIX', 'Emacs', 'Bash', 'Linux', 'Xcode']
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
      // mobile styles
      '@media screen and (max-width: 640px)': {
        html: {
          display: 'block',
          overflow: 'auto',
          padding: 0,
          height: '100vh',
          width: '100vw',
          '-webkit-overflow-scrolling': 'touch',
          body: {
            // overflow: 'auto',
            height: 'initial',
            padding: '20px'
          }
        },

        'side-area': {
          display: 'block',
          position: 'initial',
          profile: {
            img: {
              display: 'block',
              margin: '20px auto 0'
            },
            div: {
              margin: '10px'
            }
          },
          'actions': {
            'margin-top': '0',
            'box-shadow': 'none',

            '.action': {
              padding: '20px'
            }
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

        '.segment': {
          'margin-top': '20px'
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

      '@media (min-width: 1150px)': {
        'html': {
          'padding-right': '240px'
        },
        'side-area': {
          display: 'block'
        }
      },

      '@media print': {
        'html': {
          height: '100%',
          width: '100%',
          'padding': 0,
          border: 'none',
          'body': {
            border: 'none',
            height: '100%',
            width: '100%'
          }
        },
        '#expandskills': {
          display: 'none'
        },
        'qr-code': {
          // display: 'block'
        },
        '#online-tag': {
          color: 'black',
          'text-decoration': 'none',
          opacity: '0.5',
          'text-align': 'right',
          display: 'block'
        },
        'yeezyhtml-tag': {
          display: 'none'
        },
        'side-area': {
          display: 'none'
        },

        'section-header': {
          'a': {
            'text-decoration': 'none',
            'border-bottom': '1px solid rgba(66,121,255,0.5)' // better on pdf
          }
        }
      }
    }]

  ],
  [
    'body',

    require('./header'),

    [
      'div',
      {
        class: 'skills segment',
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

    [
      'div',
      {class: 'segment'},
      ['h2', 'Work', util.icon('calendar-check-o')],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Creator of '],
            ['section-name', 'Flybox'],
            ['section-description', ' Email & Messaging Hybrid Platform']
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
            // 'Features: Rich Messaging, Email, Profiles, Search & Filter, Composition, Contacts, Animations, Tagging, Invites, Attachments, Embedding',
            'Designed and built SPA from scratch using React with Flux architecture',
            'Constructed REST API with Node and Express backed by a PostgreSQL DB',
            'Integrated with AWS, GDC, Heroku, PubNub, Gmail, Cloudinary',
            'Implemented responsive design and ported app to iOS and Android through Cordova',
            'Tested End-to-End with Nightwatch, managed DevOps, project management'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Engineer for'],
            ['section-name', ' Unbubble Project'],
            ['section-description', ' - Freelance']
          ],
          [
            'right',
            ['a', {
              href: 'https://unbubble.io'
            }, 'unbubble.io'],
            ' Feb 2017 - Present'
          ]
        ],
        [
          'section-content',
          util.list([
            'Collaborated on React + Redux hybrid app with JSON RPC API',
            'Created build tools such as a JavaScript to CSS transpiler with webpack interface',
            'Implemented End-to-end testing with Nightwatch'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Engineer for'],
            ['section-name', ' Placed'],
            ['section-description', ' - Freelance'],
          ],
          [
            'right',
            ['a', {
              href: 'https://placedapp.com'
            }, 'placedapp.com'],
            ' Jan 2017 - Present'
          ]
        ],
        [
          'section-content',
          util.list([
            'Collaborated on and maintained resume database recruitment tool',
            'Reworked and extended o3.js + zoetic web app with resume grid view'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Engineer at '],
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
            'Collaborated on multiple web and mobile apps built with o2.js and a Node and Express API',
            'Interviewed engineering candidates and onboarded new team members',
            'Contributed to UI design, app architecture, tests, and project management',
            'Frequently pair programmed and code reviewed'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          ['left',
           ['position', 'Bioinformatics Intern'],
           ['section-description', ' Garmire Lab, UH Cancer Center']
          ],
          ['right', 'Summer 2013']
        ]
      ],

      [
        'section',
        [
          'section-header',
          ['left',
           ['position', 'Calculus Tutor'],
           ['section-description',
            ' University of Washington Instructional Center']
           ],
          ['right', '2011-2013']
        ]
      ]

    ],

    [
      'div',
      {class: 'segment'},
      {style: {position: 'relative'}},
      ['h2', 'Creations', util.icon('code-fork')],

      [
        'section',
        [
          'section-header',
          {style: {'margin-bottom': 0}},
          [
            'left',
            ['section-name', 'Enviz'],
            ['section-description', ' Intelligent Image Feed']
          ],
          [
            'right',
            ['a', {
              href: 'http://lbby.us/enviz'
            }, 'enviz.herokuapp.com']
          ]
        ],
        [
          'section-content',
          util.list([
            'SPA built with React + Flux on a Node + Express API, uses Imgur OAuth',
            'Uses a deep convolutional neural network to model and predict image preferences'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          {style: {'margin-bottom': 0}},
          [
            'left',
            ['section-name', 'Braincryption'],
            ['section-description', ' Visual Encryption']
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
            'Web App built with Vanilla JavaScript, HTML, and CSS '
            + 'with custom built fonts',
            'Created Chrome Extension to extend the app'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          {style: {'margin-bottom': 0}},
          [
            'left',
            ['section-name', 'Ekko'],
            ['section-description', ' Synesthesia Simulator']
          ],
          [
            'right',
            ['a', {
              href: 'http://lbby.us/ekko-chamber'
            }, 'ekko-chamber.herokuapp.com']
          ]
        ],
        [
          'section-content',
          util.list([
            '3D / VR Audio Visualizer with SoundCloud API using ' +
            'Aframe, Threejs, WebGL, Web Audio API'
          ])
        ]
      ],

      // ['input', {
      //   id: 'projectsexpanded',
      //   type: 'checkbox'
      // }],
      // [
      //   'div',
      //   {id: 'expandedprojects'},

      //   [
      //     'section',
      //     [
      //       'section-header',
      //       {style: {'margin-bottom': 0}},
      //       [
      //         'left',
      //         ['section-name', 'The Council'],
      //         ['section-description', ' Crowd-Sourced Coin Flipping']
      //       ],
      //       [
      //         'right',
      //         ['a', {
      //           href: 'http://thecouncil.herokuapp.com'
      //         }, 'thecouncil.herokuapp.com'],
      //         ' & ',
      //         ' on iOS'
      //       ]
      //     ],
      //     [
      //       'section-content',
      //       util.list([
      //         'SPA built with React + Flux on Node + Express + Socket.io API',
      //         'Ported app to iOS with Cordova and published on App Store'
      //       ])
      //     ]
      //   ],

      //   [
      //     'section',
      //     [
      //       'section-header',
      //       {style: {'margin-bottom': 0}},
      //       [
      //         'left',
      //         ['section-name', 'YeezyHTML'],
      //         ['section-description', ' HTML that thinks it\'s JS']
      //       ],
      //       [
      //         'right',
      //         ['a', {
      //           href: 'https://makakoa.github.io/yeezyhtml/'
      //         }, 'makakoa.github.io/yeezyhtml'],
      //       ]
      //     ],
      //     [
      //       'section-content',
      //       util.list([
      //         'JS to static HTML + CSS compiler '
      //           + 'used to build this resume (source in project page)'
      //       ])
      //     ]
      //   ],
        
      //   ['label', {
      //     id: 'expandprojects',
      //     for: 'projectsexpanded'
      //   }, 'Collapse']

      // ],

      // ['label', {
      //   id: 'expandprojects',
      //   for: 'projectsexpanded'
      // }, 'More'],

      ['span', {
        style: {
          width: '100%',
          'text-align': 'right',
          display: 'inline-block',
          position: 'absolute',
          margin: '0 0 8px',
          color: 'gray'
        }
      }, '(More Projects and Sources ',
       ['a', {style: {
         'text-decoration': 'none',
         color: 'inherit'
       }, href: 'https://github.com/makakoa'}, 'on GitHub)']
      ]

    ],

    [
      'div',
      {class: 'segment'},
      ['h2', 'Education', util.icon('graduation-cap')],

      [
        'section',
        [
          'section-header',
          ['left', 'Code Fellows: Full-Stack JavaScript'],
          ['right', 'Fall 2014']
        ]
      ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            'University of Washington: Bachelor of Science in Neurobiology ',
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
      }, 'cameron-yee.com/resume']
      // ['img', {src: './resume/qrcode.svg'}]
    ],

    [
      'yeezyhtml-tag',
      'built from scratch with ',
      ['a', {
        href: 'https://github.com/makakoa/yeezyhtml'
      }, 'yeezyhtml']
    ],

    [
      'side-area',
      [
        'profile',
        ['img', {
          src: 'https://res.cloudinary.com/flybox-local/image/upload/1-4d50d0d'
          + '96102b3bc8f6dd2f1556b0daaf355c24acfee4a26f0f1921f53149cd2.png'
        }],
        [
          'div',
          ['name', 'Cameron Yee'],
          ['label', 'Full-Stack Developer']
        ]
      ],

      ['iframe', {
        style: {
          display: 'none'
        },
        name: 'pdf',
        id: 'pdf',
        src: resumePath
      }],

      [
        'actions',

        ['a', {
          class: 'action',
          target: '_blank',
          href: resumePath
        }, 'Open PDF'],

        ['a', {
          class: 'action',
          href: resumePath,
          download: null
        }, 'Download']

        // ['button', {
        //   class: 'action',
        //   onClick: 'var r=window.frames.pdf;r.focus();r.print()'
        //   // onClick:'window.print()'
        // }, 'Print']

        // ['a', {
        //   href: 'path_to_file',
        //   class: 'action',
        //   download: './resume.html'
        // }, 'Download HTML']
      ]
    ],

    [
      'keywords',
      'Hey there! Looks like you found my keywords :) ',
      'Here\'s all the stuff I couldn\'t fit on the page. ',
      'Feel free to ask me about any of it! ',
      keywords
    ],

    [
      'a',
      {
        id: 'online-tag',
        href: 'http://cameron-yee.com/resume'
      },
      'cameron-yee.com/resume'
    ]
  ]
];
