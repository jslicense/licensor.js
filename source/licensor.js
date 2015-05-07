var http = require('http');
var concat = require('concat-stream');
var normalize = require('normalize-package-data');
var spdx = require('spdx');

var urlPattern = (
  'http://git.spdx.org/' +
  '?p=license-list.git' +
  ';a=blob_plain' +
  ';f=%s.txt' +
  ';hb=HEAD'
);

module.exports = function(packageJSON, callback) {
  normalize(packageJSON);
  var license = packageJSON.license;
  if (!license || typeof license !== 'string' || !spdx.valid(license)) {
    throw new Error('Invalid license identifier');
  }
  var licenseURL = urlPattern.replace('%s', license);
  http.get(licenseURL, function(response) {
    response
      .pipe(concat(function(buffer) {
        var text = buffer.toString();
        callback(null, text);
      }));
  });
};
