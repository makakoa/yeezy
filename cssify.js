var _ = require('lodash');

function cssify(obj, prefix) {
  if (!prefix) prefix = '';
  var nested = '';
  var current = _.map(obj, function(val, key) {
    if (_.isObject(val)) {
      if (key.startsWith('@media')) {
        nested+= [key,'{',cssify(val,''),'}'].join('');
      } else {
        nested += cssify(val, key.startsWith('&')
                         ? prefix + key.slice(1)
                         : prefix + ' ' + key);
      }
      return '';
    }
    return [key,':',val,';'].join('');
  }).join('');
  if (!current) return nested;
  return [prefix, '{', current, '}', nested].join('');
}

module.exports = cssify;
