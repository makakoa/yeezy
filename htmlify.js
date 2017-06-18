var _ = require('lodash'),
    util = require('./util'),
    cssify = require('./cssify');

function isYeezyEl(arr) {
  var tag = _.first(arr);
  return Array.isArray(arr) && tag && _.isString(tag) && tag.startsWith(':');
}

// Yeezy array to html
function htmlify(arr) {
  if(!isYeezyEl(arr)) throw new Error('Illegal Format: ' + JSON.stringify(arr));
  if (!arr.length) return '';
  
  // Special els
  if (tag === ':style') return elementify('style', null, cssify(arr[0]));
  if (tag === ':script') {
    if (arr.length > 1) throw new Error('Scripts can only have one argument');
    return elementify('script', null, util.inlineScript(arr[0]));
  }

  // Initiate element data
  var tag = arr.shift(), attributes = {}, children = [];

  // Sort children
  while (arr.length) {
    var item = arr.shift();
    if (Array.isArray(item)) {
      if (isYeezyEl(item)) {
        children.push(htmlify(item));
      } else {
        arr = item.concat(arr); // expand collection of children
      }
    } else if (_.isObject(item)) {
      _.extend(attributes, item);
    } else {
      children.push(item); // text or number child
    }
  }

  return elementify(tag.slice(1), attributeify(attributes), children.join(''));
};

var unpaired = {
  meta: true,
  img: true,
  br: true,
  link: true,
  input: true
};
// Tag syntax
function elementify(tag, atts, content) {
  if (unpaired[tag]) return ['<',tag,atts,'/>'].join('');
  return ['<',tag,atts,'>',content,'</',tag,'>'].join('');
}

// Attribute strings from objects
function attributeify(atts) {
  return _.reduce(atts, function(s, v, k) {
    if (k === 'style') v = util.inlineStyleify(v);
    return s += [' ', k, '="', v, '"'].join('');
  }, '') || '';
}

module.exports = htmlify;
