'use strict';

var _ = require('lodash');

function expose(fn) {
  exports[fn.name] = fn;
}

expose(list);
function list(items, atts) {
  return [
    'ul',
    atts || null,
    _.map(items, function(i) {
      return ['li', i];
    })
  ];
}

expose(icon);
function icon(name) {
  return ['i', {class: 'fa fa-' + name}];
}
