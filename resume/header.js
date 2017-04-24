'use strict';

// leave as null to redact
var email = process.env.PHONE || null;
var phone = process.env.EMAIL || null;

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
      id: 'phone-link',
      class: [
        'header-info-item',
        phone ? 'contact' : ''
      ].join(' '),
      href: 'tel:' + phone
    }, util.icon('phone'),
     ['span', {
       id: 'phone',
       class: phone ? '' : 'redacted'
     }, phone || '555-123-4567']],
    ['a', {
      id: 'email-link',
      class: [
        'header-info-item',
        email ? 'contact' : ''
      ].join(' '),
      href: 'mailto:' + email
    }, util.icon('envelope-o'),
     ['span', {
       id: 'email',
       class: email ? '' : 'redacted'
     }, email || 'email@example.com']],
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
  ],

  util.inlineScript(function() {
    // to get param string call encodeURIComponent(btoa(contactstring));
    try {
      var str = window.location.search;
      var result = {};
      var params = str.slice(str.indexOf('?') + 1).split('&');
      if (params[0].length !== str.length) {
        params.forEach(function(param) {
          var tuple = param.split('=');
          var vals = tuple[1].split(',');
          result[tuple[0]] = vals.length > 1 ? vals : tuple[1];
        });
      }
      if (result.p) {
        var phone = atob(decodeURIComponent(result.p));
        var phoneEl = document.getElementById('phone');
        phoneEl.innerText = phone;
        phoneEl.className = '';
        var phoneLink = document.getElementById('phone-link');
        phoneLink.href = 'tel:' + phone;
      }
      if (result.e) {
        var email = atob(decodeURIComponent(result.e));
        var emailEl = document.getElementById('email');
        emailEl.innerText = email;
        emailEl.className = '';
        var emailLink = document.getElementById('email-link');
        emailLink.href = 'mailto:' + email;
      }
    } catch (e) {
    }

  })

];
