var wrap = require('word-wrap');

module.exports = function(text, width) {
  if (width) {
    return wrap(text, {indent: '', newline: '\n', width: width - 1})
      .replace(/\n{2,}/g, '\n\n');
  } else {
    return text;
  }
};
