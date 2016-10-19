'use strict';

// Content

var colors = {
  darkGray: '#555555',
  gray: '#bbbbbb'
};

var styles = {
  'site': {
    'font-family': '"Open Sans"',
    display: 'block',
    'box-sizing': 'border-box',
    padding: '40px'
  },

  'top-nav': {
    'font-family': '"Raleway"',
    display: 'flex',
    'justify-content': 'space-between',
    margin: '0 0 30px',
    name: {
      'font-weight': '300',
      'text-transform': 'uppercase',
      'letter-spacing': '1px',
      'font-size': '32px'
    },
    subname: {
      'margin-left': '4px',
      color: colors.gray,
      'font-size': '20px'
    }
  },

  '#menu': {
    cursor: 'pointer',
    position: 'relative',

    '&.open': {
      'menu-items': {
        'max-height': '300px',
        opacity: 1
      }
    },

    'menu-items': {
      'max-height': 0,
      opacity: 0,
      border: '1px solid ' + colors.darkGray,
      'border-radius': '4px',
      transition: '300ms',
      'background-color': 'white',
      position: 'absolute',
      right: 0,
      'box-sizing': 'border-box',
      overflow: 'hidden',
      display: 'flex',
      'flex-direction': 'column',
      'menu-item': {
        display: 'block',
        'white-space': 'nowrap',
        'padding': '10px 20px',
        'border-bottom': '1px solid ' + colors.gray,
        transition: '150ms',
        '&:hover': {
          color: 'white',
          'background-color': colors.darkGray
        },
        '&:last-child': {
          'border-bottom': 'none',
          'margin-bottom': '0'
        }
      }
    }
  },

  '#main-content': {
  }
};

var pages = [{
  name: 'About',
  content: [
    'div',
    'the about page'
  ]
}, {
  name: 'Web',
  content: [
    'div',
    'web stuff'
  ]
}, {
  name: 'Audio',
  content: [
    'div',
    'Soundnstuff'
  ]
}, {
  name: 'Extra',
  content: [
    'div',
    'etc'
  ]
}, {
  name: 'Blog',
  content: [
    'div',
    'entry 1'
  ]
}];

var structure = [
  'site',
  ['top-nav',
   ['div',
    ['name', 'yeezymak'],
    ['subname', {style: {
      color: randomColor()
    }}, 'creative works']],
   ['div',
    {id: 'menu'},
    ['div', {id: 'menu-toggle'}, iconify('bars')],
    ['menu-items', _.map(pages, function(i) {
      return ['menu-item', {}, i.name];
    })]
   ]],
  ['div', {id: 'main-content'}]
];

// Mounting

var app = document.getElementById('app-hook');
app.innerHTML = [
  '<style>' + toCSS('', styles) + '</style>',
  htmlify(structure)
].join('');


// Helpers

function htmlify(arr) {
  var tag = arr.shift(), attributes = {}, children = [];
  while(arr.length) {
    var item = arr.shift();
    if (Array.isArray(item)) {
      children.push(htmlify(item));
    } else if (_.isObject(item)) {
      _.extend(attributes, item);
    } else {
      children.push(item);
    }
  }
  return _.isString(tag)
    ? elementify(tag, attributeify(attributes), children.join(''))
    : htmlify(tag) + children.join('');
}

function attributeify(atts) {
  return _.reduce(atts, function(s, v, k) {
    if (k === 'style') v = cssify(v);
    return s += [' ', k, '="', v, '"'].join('');
  }, '');
}

function cssify(obj) {
  return _.reduce(obj, function(s, v, k) {
    return s += [k, ':', v, ';'].join('');
  }, '');
}

function elementify(tag, atts, content) {
  return ['<',tag,atts || '','>', content, '</',tag,'>'].join('');
}

function toCSS(prefix, obj) {
  var nested = '';
  var current = _.map(obj, function(val, key) {
    if (_.isObject(val)) {
      nested += toCSS(key.startsWith('&')
                      ? prefix + key.slice(1)
                      : prefix + ' ' + key, val);
      return '';
    }
    return [key,':',val,';'].join('');
  }).join('');
  return [prefix, '{', current, '}', nested ].join('');
}

var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');
menuToggle.addEventListener('click', function() {
  menu.classList.toggle('open');
});

var mainContent = document.getElementById('main-content');
function renderPage(content) {
  mainContent.innerHTML = htmlify(content);
}

function iconify(str) {
  return ['i', {class: 'fa fa-' + str}];
}

function randomColor() {
  return [
    'rgb(' + Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255) + ')'
  ].join(',');
}
