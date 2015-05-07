var wrap = require('word-wrap');

module.exports = function(text, width) {
  if (width) {
    return wrap(text, {indent: '', newline: '\n', width: width})
      .replace(/\n{2,}/g, '\n\n');
  } else {
    return text;
  }
};
