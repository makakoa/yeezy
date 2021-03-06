'use strict';

var paddingMinor = '6px';

var color = {
  accent: '#4279ff',
  border: '#bbbbbb',
  gray: '#777777',
  blue: '#4279ff',
  font: '#444444'
};

module.exports = ['style', {
  html: {
    'background-color': '#eeeeee',
    padding: '20px 20px 50px', // remove in print styles
    margin: '0 auto',
    overflow: 'auto',
    width: '850px',   // page dimensions, alt: a4 = 827
    height: '1100px', // page dimensions, alt: a4 = 1169

    display: 'flex',
    // 'justify-content': 'center',
    'align-items': 'center',

    body: {
      position: 'relative',
      'box-shadow': '0 0 20px 0px gray', // borders show in print
      'background-color': 'white',
      width: '100%',
      height: '100%',
      'margin': '0',

      'font-family': '"Nunito"',
      color: color.font,
      'box-sizing': 'border-box',
      padding: '8%',        // 1" / 8.5" = ~11.76% standard resume margin
      'font-size': '14px',  // standard font-size is 12 - 14px

      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between'
    }
  },

  num: {
    'font-family': 'Arial, sans-serif' // raleway numbers are jank
  },

  'keywords': {
    'margin-top': '-20px', // so page spacing is less impacted
    'font-size': '2px',
    opacity: 0.01
  },

  '.contact': {
    color: color.font
  },

  '.redacted': {
    'text-decoration': 'line-through',
    color: 'gray'
  },

  'h1,h2,h3,padding': {
    margin: 0,
    padding: 0
  },
  ul: {
    margin: 0,
    li: {
      'line-height': '18px'
    }
  },

  button: {
    '&:focus': {
      'outline-width': '0',
      outline: 'none'
    }
  },

  'a:visited': {
    color: color.blue
  },

  h1: {
    'white-space': 'nowrap',
    'font-size': '48px',
    'font-weight': '400'
  },

  'header-title': {
    color: '#888888',
    'text-transform': 'uppercase',
    'letter-spacing': '2px'
  },

  header: {
    '#last-name': {
      color: color.accent
    },
    'flex-shrink': '0',
    display: 'flex',
    'justify-content': 'space-between',
    'a': {
      'text-decoration': 'none',
      'color': color.blue,
      '&:hover': {
        'text-decoration': 'underline'
      }
    },
    '.header-info-item': {
      '.fa': {
        'margin-right': '4px',
        width: '20px',
        'text-align': 'center'
      },

      'font-family': 'sans-serif', // raleway nums are jank
      'font-weight': '300',
      'line-height': '20px',
      'font-size': '14px',
      display: 'block'
    }

  },

  h2: { // section headers
    display: 'flex',
    'align-items': 'center',
    'margin-bottom': paddingMinor,
    '.fa': {
      'font-size': '18px',
      opacity: '0.5',
      'margin-left': '12px'
    }
  },

  table: {
    width: '100%',
    th: {
      width: '80px',
      'text-align': 'left'
    }
  },

  '#expandskills': {
    // 'font-size': '12px',
    display: 'inline-block',
    'box-sizing': 'border-box',
    margin: '4px 0 0',
    padding: '4px 8px',
    'border-radius': '4px',
    'color': color.blue,
    cursor: 'pointer',
    '&:hover': {
      'text-decoration': 'underline'
    }
  },
  '#expandcheck': {
    display: 'none'
  },
  '#expandedlist': {
    width: '100%',
    padding: '10px 8px',
    'margin-left': '-8px',
    'background-color': 'white',
    'border': '1px solid #ccc',
    'border-top': 'none',
    'border-bottom-left-radius': '4px',
    'border-bottom-right-radius': '4px',
    'box-shadow': '0 10px 30px -10px gray',
    'z-index': '2',
    position: 'absolute',
    'z-index': '-1',
    opacity: 0,
    transition: '500ms',
    // display: 'none',
    '#expandskills': {
      color: '#e33'
    }
  },
  '#expandcheck:checked + #expandedlist': {
    'z-index': '1',
    opacity: 1,
    display: 'block'
  },

  '#expandprojects': {
    // 'font-size': '12px',
    display: 'inline-block',
    'box-sizing': 'border-box',
    margin: '4px 0 0',
    padding: '4px 8px',
    'border-radius': '4px',
    'color': color.blue,
    cursor: 'pointer',
    '&:hover': {
      'text-decoration': 'underline'
    }
  },
  '#projectsexpanded': {
    display: 'none'
  },
  '#expandedprojects': {
    width: '100%',
    padding: '10px 0',
    'background-color': 'white',
    'border-bottom': '2px solid gray',
    'z-index': '2',
    position: 'absolute',
    display: 'none'
  },
  '#projectsexpanded:checked + #expandedprojects': {
    display: 'block'
  },

  
  '#online-tag': {
    display: 'none'
  },

  'qr-code': {
    'text-transform': 'lowercase',
    display: 'none',
    // position: 'absolute',
    opacity: '0.5',
    'margin-left': 'auto',
    // right: '0',
    // top: '100%',
    'a': {
      'font-weight': '300',
      'font-size': '12px',
      'text-decoration': 'none',
      color: color.font
    },
    img: {
      'margin-left': '8px',
      height: '50px'
    }
  },

  'side-area': {
    display: 'none',
    position: 'fixed',
    left: 'calc(50% + 350px)',
    // position: 'absolute',
    // left: '105%',
    top: '60px',

    'profile': {
      img: {
        'box-shadow': '0 0 15px -3px gray',
        'border-radius': '50%',
        height: '200px'
      },

      div: {
        // 'box-shadow': '0 0 15px -3px gray',
        // border: '1px solid ' + color.border,
        'border-radius': '4px',
        margin: '20px 0',
        padding: '8px',
        // 'background-color': 'white',

        'text-align': 'center',
        'name': {
          display: 'block',
          'font-size': '28px'
        },
        'label': {
          'font-size': '16px',
          color: color.blue
        }
      }
    },

    'actions': {
      'box-shadow': '0 0 15px -3px gray',
      'border-radius': '4px',
      'border': '1px solid ' + color.border,
      'letter-spacing': '1px',
      overflow: 'hidden',
      display: 'flex',
      'flex-direction': 'column',
      'margin-top': '40px',

      '.action': {
        'text-align': 'center',
        color: color.font,
        'text-decoration': 'none',
        'white-space': 'nowrap',
        'font-size': '16px',
        display: 'block',
        cursor: 'pointer',
        border: 'none',
        'background-color': '#ffffff',
        padding: '10px 20px',
        transition: '300ms',
        'border-bottom': '1px solid ' + color.border,
        '&:last-child': {
          'border-bottom': 'none'
        },
        '&:hover': {
          'box-shadow': '0 0 15px -5px gray',
          'z-index': '1',
          'color': color.blue
        }
      }
    }
  },



  'yeezyhtml-tag': {
    'font-size': '14px',
    'font-weight': '300',
    display: 'inline-block',
    position: 'absolute',
    top: '100%',
    'margin-top': '8px',
    right: '8px',
    color: color.font,
    a: {
      'text-decoration': 'none'
    }
  },

  '.segment': {
    // 'margin-top': '20px'
  },

  'section': {
    'margin-bottom': '6px',
    'section-header': {
      'margin-bottom': '2px',
      display: 'flex',
      'justify-content': 'space-between',

      'position': {
        'font-size': '16px',
        color: color.accent
      },

      'section-name': {
        'font-size': '16px',
        color: color.accent
      },
      'section-description': {
        // 'font-size': '16px',
        color: color.gray
      },
      'right': {
        a: {
          'margin-right': '6px',
          display: 'inline-flex',
          'align-items': 'center',
          'text-decoration': 'none',
          'i.fa-link': {
            display: 'none',
            'margin-right': '4px',
            'font-size': '10px'
          },
          '&:hover': {
            'border-bottom': '1px solid'
          }
        }
      }
    }
  }
}];
