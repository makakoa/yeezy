'use strict';

var _ = require('lodash'),
    fs = require('fs');

// Compiling
var entry = process.argv[2];
if (!entry) throw 'No entry point';

var output = process.argv[3] || 'htmlified.html';
function write(file) {
  fs.writeFile(__dirname + '/' + output, file, function(err) {
    if (err) throw err;
  });
}

try {
  var content = require('./' + process.argv[2]);
  write(htmlify(content));
} catch(e) {
  console.error('Could not write: ', output, e);
  write(errorPage(e));
}

// Main
function htmlify(arr) {
  var tag = arr.shift(), attributes = {}, children = [];
  if (tag === 'style') return elementify('style', null, toCSS('', arr[0]));
  while (arr.length) {
    var item = arr.shift();
    if (Array.isArray(item)) {
      children.push(htmlify(item));
    } else if (_.isObject(item)) {
      _.extend(attributes, item);
    } else {
      children.push(item);
    }
  }
  if (_.isString(tag)) {
    return elementify(tag, attributeify(attributes), children.join(''));
  } else { // List
    assert(_.isEmpty(attributes), 'Ignored Attrs:'+JSON.stringify(attributes));
    return htmlify(tag) + children.join('');
  }
}

function elementify(tag, atts, content) {
  return ['<',tag,atts,'>',content,'</',tag,'>'].join('');
}

function attributeify(atts) {
  return _.reduce(atts, function(s, v, k) {
    if (k === 'style') v = cssify(v);
    return s += [' ', k, '="', v, '"'].join('');
  }, '') || '';
}

function cssify(obj) {
  return _.reduce(obj, function(s, v, k) {
    return s += [k, ':', v, ';'].join('');
  }, '');
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


// Util
function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function errorPage(error) {
  return htmlify([
    'html',
    [
      'head',

      ['link', {
        href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,600',
        rel: 'stylesheet'
      }],

      ['style', {
        html: {
          height: '100vh',
          width: '100vw',
          'font-family': '"Raleway"',

          body: {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
          }
        },
        'report': {
          display: 'flex',
          'flex-direction': 'column',

          h1: {
            margin: '15px 0',
            color: '#e91e63',
            'font-weight': '300'
          },
          message: {
            'margin-bottom': '15px',
            color: '#777777'
          },
          stack: {
            color: '#444444',
            'white-space': 'pre-wrap'
          }
        }
      }]
    ],

    [
      'body',
      ['report',
       ['h1', 'Error'],
       error.message ? ['message', '"', error.message, '"'] : null,
       ['stack', error.stack]
      ]
    ]
  ]);
}
