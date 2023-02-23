'use strict';

var util = require('./util'),
    fs = require('fs'),
    _ = require('lodash');

var resumePath = 'http://cameron-yee.com/resume/cameron-yee-resume.pdf';

var keywords = fs.readFileSync('./resume/keywords.txt')
      .toString()
      .split('\n')
      .join(' ');

var skills = {
  'General': ['JavaScript', 'Python',
              'PHP / Hack', 'Git', 'Mercurial', 'ML'],
  'Front-end': ['React', 'Flux / Redux', 'Relay', 'GraphQL', 'HTML', 'CSS'],
  'Back-end': ['Node', 'Express / REST', 'PostgreSQL', 'Auth', 'Sockets', 'RPC']
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

var brokenLink = {
  style: {
    color: 'gray',
    opacity: '50%',
    'pointer-events': 'none',
  }
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

    util.inlineScript(function() {
      console.log('Hey! Looking for this?');
      console.log('https://github.com/makakoa/yeezyhtml/tree/master/resume');
    }),

    util.inlineScript(function() {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                               m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-58308025-1', 'auto');
      ga('send', 'pageview');
    }),


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
      href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600',
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
          'h1': {
            'font-size': '36px'
          },
          'header-title': {
            'letter-spacing': '1px',
            'font-size': '14px'
          },
          'text-align': 'center',
          'flex-direction': 'column',
          '.header-info-item': {
            'margin-top': '8px',
            padding: '4px'
          },
          'a.header-info-item': {
            'border-radius': '4px',
            'border': '1px solid #ddd'
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
        'h2': {
          'margin-top': '8px'
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
            // 'border-bottom': '1px solid rgba(66,121,255,0.5)' // better on pdf
            'border-bottom': 'none'
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

      ['h2', 'Programming', util.icon('code')],

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
            ['position', 'Software Engineer at '],
            ['section-name', 'Meta'],
            ['section-description', ' Instagram and Facebook Web']
          ],
          [
            'right',
            ['a', {
              href: 'https://www.instagram.com'
            }, util.icon('link'), ' instagram.com'],
            // ['a', {
            //   href: 'https://www.facebook.com'
            // }, util.icon('link'), ' facebook.com'],
            ' July 2017 - Feb 2023'
          ]
        ],
        [
          'section-content',
          util.list([
            'Lead dozens of engineers on consolidation of Instagram Web and Facebook Web Infrastructure',
            'Drove facebook web ad rendering and testing efforts increasing web revenue by 10%+ ($100Ms)',
            'Ran completion of web comment interface rewrite as precursor to the facebook.com React rewrite',
            'Developed insights and analyses and coordinated across dozens of stakeholders and teams',
            'Pioneered engineering culture on Instagram Web and steered company DEI club Mixed@'
          ])
        ]
      ],

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
              ...brokenLink,
              href: 'https://alpha.flybox.online/about'
            }, util.icon('link'), ' flybox.online'],
            ' July 2016 - July 2017'
          ]
        ],
        [
          'section-content',
          util.list([
            // 'Features: Rich Messaging, Email, Profiles, Search & Filter, Composition, Contacts, Animations, Tagging, Invites, Attachments, Embedding',
            'Designed and built responsive SPA in React for desktop web, mobile web, iOS, and Android',
            'Constructed Node API with PubNub for push notifications and real-time updates between clients',
            'Architected data model and synchronization logistics for an email compatible message platform',
            // 'Programmed mock third party APIs for realistic End-to-End testing with Nightwatch.js',
            'Leveraged AWS S3 to replace email attachments with secure file hosting feature'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Freelance Engineer'],
            ['section-description', ' Unbubble Project and Placed App']
          ],
          [
            'right',
            ['a', {
              ...brokenLink,
              href: 'https://unbubble.io'
            }, util.icon('link'), ' unbubble.io'],
            ['a', {
              ...brokenLink,
              href: 'https://placedapp.com'
            }, util.icon('link'), ' placedapp.com'],
            ' Jan 2017 - July 2017'
          ]
        ],
        [
          'section-content',
          util.list([
            'Created powerful React sugar library to accelerate and simplify development of a hybrid SPA',
            'Built lightweight JS to CSS transpiler with PostCSS integration and flexible media query handles',
            'Extended web app created with a home rolled reactive framework for dual mode resume browsing',
            'Maintained Python machine learning algorithm for classifying attachments as resumes'
          ])
        ]
      ],

      // [
      //   'section',
      //   [
      //     'section-header',
      //     [
      //       'left',
      //       ['position', 'Freelance Engineer for'],
      //       ['section-name', ' Placed App'],
      //       ['section-description', ' Recruiter Tool'],
      //     ],
      //     [
      //       'right',
      //       ['a', {
      //         href: 'https://placedapp.com'
      //       }, util.icon('link'), ' placedapp.com'],
      //       ' Jan 2017 - July 2017'
      //     ]
      //   ],
      //   [
      //     'section-content',
      //     util.list([
      //       'Extended web app created with a home rolled reactive framework to have dual mode resume browsing',
      //       'Maintained Python machine learning algorithm for classifying attachments as resumes'
      //     ])
      //   ]
      // ],

      [
        'section',
        [
          'section-header',
          [
            'left',
            ['position', 'Software Engineer at '],
            ['section-name', 'Nomic'],
            ['section-description', ' Recruiting Platform Startup']
          ],
          [
            'right',
            ['a', {
              ...brokenLink,
              href: 'https://nomic.com'
            }, util.icon('link'), ' nomic.com'],
            ' April 2015 - July 2016'
          ]
        ],
        [
          'section-content',
          util.list([
            'Owned internal tool development and worked on multiple web apps built with reactive framework',
            'Made contributions to UI and feature design for handling recruiting candidate pipelines',
            'Interviewed and lead new hires through onboarding, pair programming, and code review'
          ])
        ]
      ],

      [
        'section',
        [
          'section-header',
          ['left',
           ['position', 'Research Assistant in'],
           ['section-name', ' Garmire Lab'],
           ['section-description', ' Bioinformatics Lab']
          ],
          ['right', 
          ['a', {
            href: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003851'
          }, util.icon('link'), 'plos.org'],
          'May 2013 - August 2013']
        ],
        [
          'section-content',
          util.list([
            'Co-authored pilot study to find correlations between breast cancer subtypes and genes of interest',
            'Programmed algorithms in R and Perl to run statistical tests to find correlations in genomic data'
          ])
        ]
    ]

      // [
      //   'section',
      //   [
      //     'section-header',
      //     ['left',
      //      ['position', 'Calculus Tutor'],
      //      ['section-description',
      //       ' University of Washington Instructional Center']
      //      ],
      //     ['right', '2011-2013']
      //   ]
      // ]

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
            ['section-name', 'Vyz'],
            ['section-description', ' MacOS Music Visualizer']
          ],
          [
            'right',
            ['a', {
              href: 'https://github.com/makakoa/vyz'
            }, 'github.com/makakoa/vyz']
          ]
        ]
      ],    

      [
        'section',
        [
          'section-header',
          {style: {'margin-bottom': 0}},
          [
            'left',
            ['section-name', 'Enviz'],
            ['section-description', ' Machine Learning Powered Image Feed']
          ],
          [
            'right',
            ['a', {
              href: 'http://lbby.us/enviz'
            }, 'enviz.herokuapp.com']
          ]
        // ],
        // [
        //   'section-content',
        //   util.list([
        //     'SPA built with React + Flux on a Node + Express API, uses Imgur OAuth',
        //     'Uses a deep convolutional neural network to model and predict image preferences'
        //   ])
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
            ['section-description', ' Software Driven Visual Encryption']
          ],
          [
            'right',
            ['a', {
              href: 'http://makakoa.github.io/braincryption/app/'
            }, 'makakoa.github.io/braincryption/app']
          ]
        // ],
        // [
        //   'section-content',
        //   util.list([
        //     'Web App built with Vanilla JavaScript, HTML, and CSS '
        //     + 'with custom built fonts',
        //     'Created Chrome Extension to extend the app'
        //   ])
        ]
      ],

      // [
      //   'section',
      //   [
      //     'section-header',
      //     {style: {'margin-bottom': 0}},
      //     [
      //       'left',
      //       ['section-name', 'Ekko'],
      //       ['section-description', ' Synesthesia Simulator (VR Audio Visualizer)']
      //     ],
      //     [
      //       'right',
      //       ['a', {
      //         href: 'http://lbby.us/ekko-chamber'
      //       }, 'ekko-chamber.herokuapp.com']
      //     ]
      //   // ],
      //   // [
      //   //   'section-content',
      //   //   util.list([
      //   //     '3D / VR Audio Visualizer with SoundCloud API using ' +
      //   //     'Aframe, Threejs, WebGL, Web Audio API'
      //   //   ])
      //   ]
      // ],

      // [
      //   'section',
      //   [
      //     'section-header',
      //     {style: {'margin-bottom': 0}},
      //     [
      //       'left',
      //       ['section-name', 'Banger Management'],
      //       ['section-description', ' Real-time Top-down Web Game']
      //     ],
      //     [
      //       'right',
      //       ['a', {
      //         href: 'http://lbby.us/banger-mgmt'
      //       }, 'banger-mgmt.herokuapp.com']
      //     ]
      //   ]
      // ],      

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
