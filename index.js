var assign = require('lodash.assign');

function isChildren(React, x) {
  return typeof x === 'string' || typeof x === 'number' || Array.isArray(x) || React.isValidElement(x);
}

function h(React, selector, props, children) {
  if (isChildren(React, props)) {
    children = props;
    props = {};
  }
  props = assign({}, props || {});
  console.assert(!props.id && !props.className);
  var parts = selector.split('.');
  var x = parts[0].split('#'), tagName = x[0], id = x[1];
  var className = parts.slice(1).join(' ');
  console.assert(tagName);
  if (id) {
    props.id = id;
  }
  if (className) {
    props.className = className;
  }
  return React.createElement(tagName, props, children);
}

module.exports = function(React) {
  return function(selector, props, children) {
    return h(React, selector, props, children);
  };
};
