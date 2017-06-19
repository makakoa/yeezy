var _ = require('lodash');

function expose(fn) {
  exports[fn.name] = fn;
}

expose(inlineScript);
function inlineScript(fn) {
  if (!_.isFunction(fn)) throw new Error(fn + ' is not a function');
  return ['script', fn.toString().slice(13, -1)];
}

expose(inlineStyle);
function inlineStyle(obj) {
  return _.reduce(obj, function(s, v, k) {
    return s += [k, ':', v, ';'].join('');
  }, '');
}
