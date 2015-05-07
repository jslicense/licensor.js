var concat = require('concat-stream');
var licensor = require('..');

module.exports = function(stdin, stdout, stderr, env, args, callback) {
  stdin
    .pipe(concat(function(buffer) {
      licensor(JSON.parse(buffer), function(error, text) {
        console.log(text);
        callback(0);
      });
    }));
};
