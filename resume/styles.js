'use strict';

var paddingMinor = '6px';

var color = {
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

      'font-family': '"Raleway"',
      color: color.font,
      'box-sizing': 'border-box',
      padding: '8%',        // 1" / 8.5" = ~11.76% standard resume margin
      'font-size': '14px',  // standard font-size is 12 - 14px

      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between'
    }
  },

  'keywords': {
    'font-size': '0.1px',
    opacity: 0.001
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
    margin: 0
  },

  'a:visited': {
    color: color.blue
  },

  h1: {
    'font-size': '48px',
    'font-weight': '400'
  },

  'header-title': {
    color: '#888888',
    'text-transform': 'uppercase',
    'letter-spacing': '1px'
  },

  header: {
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

      'font-family': 'sans-serif',
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
    padding: '10px 0',
    'background-color': 'white',
    'border-bottom': '2px solid gray',
    'z-index': '2',
    position: 'absolute',
    display: 'none'
  },
  '#expandcheck:checked + #expandedlist': {
    display: 'block'
  },

  'qr-code': {
    'text-transform': 'lowercase',
    display: 'none',
    position: 'absolute',
    'font-weight': '300',
    'font-size': '12px',
    opacity: '0.5',
    right: '8px',
    bottom: '8px',
    img: {
      height: '50px'
    }
  },

  'options': {
    position: 'absolute',
    left: '105%',
    top: '0',
    'border-radius': '4px',
    'border': '1px solid ' + color.border,
    'letter-spacing': '1px',
    overflow: 'hidden',
    display: 'flex',
    'flex-direction': 'column',

    form: {
      display: 'block'
    },
    '.option': {
      'text-align': 'center',
      color: color.font,
      'text-decoration': 'none',
      'white-space': 'nowrap',
      'font-size': '16px',
      display: 'block',
      cursor: 'pointer',
      'background-color': '#ffffff',
      border: 'none',
      padding: '8px 16px',
      transition: '300ms',
      'border-bottom': '1px solid ' + color.border,
      '&:last-child': {
        'border-bottom': 'none'
      },
      '&:hover': {
        'color': color.blue
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

  'section': {
    'section-header': {
      'margin-bottom': paddingMinor,
      display: 'flex',
      'justify-content': 'space-between',

      'position': {
        color: color.blue
      },

      'section-name': {
        'font-size': '18px',
        color: color.blue
      },
      'section-description': {
        color: color.gray
      }
    }
  }
}];
