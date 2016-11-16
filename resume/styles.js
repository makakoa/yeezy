'use strict';

var color = {
  font: '#444444'
};

module.exports = ['style', {
  html: {
    'background-color': '#eeeeee',
    padding: '20px', // remove in print styles
    margin: '0 auto',
    overflow: 'auto',
    width: '827px',   // a4 dimensions
    height: '1169px', // a4 dimensions

    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',

    body: {
      'box-shadow': '0 0 20px 0px gray', // borders show in print
      overflow: 'hidden',
      'background-color': 'white',
      width: '100%',
      height: '100%',
      'margin': '0',

      'font-family': '"Raleway"',
      color: color.font,
      'box-sizing': 'border-box',
      padding: '40px',

      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between'
    }
  },

  'a:visited': {
    color: 'blue'
  },

  h1: {
    'font-weight': '300',
    'text-transform': 'uppercase'
  },

  header: {
    display: 'flex',
    'justify-content': 'space-between',
    a: {
      display: 'block'
    }

  }
}];
