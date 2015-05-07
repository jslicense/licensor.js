var wrap = require('word-wrap');

module.exports = function(text, width, newline) {
  if (width) {
    return wrap(
      text,
      {
        newline: newline,
        width: width
      }
    );
  } else {
    return text.replace(/\n/g, newline);
  }
};
