'use strict';

// set to null to redact
var email = null;
var phone = null;

var util = require('./util');

module.exports = [
  'header',
  ['left',
   [
     'h1',
     'Cameron ',
     [
       'span',
       {style: {color: '#4279ff'}},
       'Yee'
     ]
   ],
   ['header-title', 'Full-Stack Developer']
  ],

  [
    'middle',
    ['a', {
      class: [
        'header-info-item',
        phone ? 'contact' : 'redacted'
      ].join(' '),
      href: 'tel:' + phone
    }, util.icon('phone'), phone || '555-123-4567'],
    ['a', {
      class: [
        'header-info-item',
        email ? 'contact' : 'redacted'
      ].join(' '),
      href: 'mailto:' + email
    }, util.icon('envelope-o'), email || 'email@example.com'],
    ['span', {
      class: 'header-info-item'
    }, util.icon('map-marker'), 'San Francisco, CA']
  ],

  [
    'right',
    ['a', {
      class: 'header-info-item',
      href: 'http://cameron-yee.com'
    }, util.icon('home'), 'cameron-yee.com'],
    ['a', {
      class: 'header-info-item',
      href: 'https://github.com/makakoa'
    }, util.icon('github'), 'github.com/makakoa'],
    ['a', {
      class: 'header-info-item',
      href: 'https://www.linkedin.com/in/makakoa'
    }, util.icon('linkedin'), 'linkedin.com/in/makakoa']
  ]

];
