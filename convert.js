'use strict';

var fs = require('fs'),
    htmlify = require('./htmlify');

var entry = './' + process.argv[2];
if (!entry) throw 'No entry point';

var output = process.argv[3] || 'htmlified.html';
function writeHTML(file) {
  fs.writeFile(__dirname+'/'+output, '<!DOCTYPE html>'+file, function(err) {
    if (err) throw err;
  });
}
if (!output.endsWith('.html')) throw new Error('Output must end with .html');

try {
  var content = require(entry);
  writeHTML(htmlify(content));
} catch(e) {
  console.error('Could not write: ', output, e);
  writeHTML(errorPage(e));
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
