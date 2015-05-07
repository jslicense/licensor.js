var concat = require('concat-stream');
var http = require('http');
var normalize = require('normalize-package-data');
var spdx = require('spdx');
var split = require('split');
var through = require('through2');
var wrap = require('word-wrap');

var urlPattern = (
  'http://git.spdx.org/' +
  '?p=license-list.git' +
  ';a=blob_plain' +
  ';f=%s.txt' +
  ';hb=HEAD'
);

var required = [
  'MIT'
];

var noError = null;

module.exports = function(packageJSON, callback) {
  normalize(packageJSON);
  var license = packageJSON.license;
  var data = {
    author: packageJSON.author.name,
    year: new Date().getFullYear()
  };
  data.copyright = data.year + ' ' + data.author;
  if (!license || typeof license !== 'string' || !spdx.valid(license)) {
    throw new Error('Invalid license identifier');
  } else {
    var licenseURL = urlPattern.replace('%s', license);
    http.get(licenseURL, function(response) {
      response
        .pipe(split())
        .pipe(through.obj(function(line, encoding, callback) {
          callback(
            noError,
            dynamicReplacements.reduce(function(line, replacement) {
              return line.replace(
                replacement[1], // regular expression
                data[replacement[0]] // data from package.json
              );
            }, staticReplacements.reduce(function(line, replacement) {
              return line.replace(replacement[0], replacement[1]);
            }, line)) + '\n'
          );
        }))
        .pipe(concat(function(buffer) {
          callback(null, buffer.toString());
        }));
    });
  }
};
