var assign = require('lodash.assign');
var isPlainObject = require('lodash.isplainobject');

function h(React, selector, props, children) {
  if (isPlainObject(props)) {
    console.assert(!props.id && !props.className);
  } else {
    children = props;
    props = {};
  }
  var parts = selector.split('.');
  var x = parts[0].split('#'), tagName = x[0], id = x[1];
  var className = parts.slice(1).join(' ');
  console.assert(tagName);
  props = assign({}, props, {
    id: id || undefined,
    className: className || undefined
  });
  return React.createElement(tagName, props, children);
}

module.exports = function(React) {
  return function(selector, props, children) {
    return h(React, selector, props, children);
  };
};
