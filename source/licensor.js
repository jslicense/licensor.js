var normalize = require('normalize-package-data');
var spdx = require('spdx');

var fieldFromPackage = require('./fieldFromPackage');
var transform = require('./transform');

var required = [
  '0BSD',
  'Apache-2.0',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'GPL-3.0',
  'ISC',
  'MIT',
  'WTFPL'
]
  .reduce(function(required, identifier) {
    var packageName = 'jslicense-' + identifier.toLowerCase();
    required[identifier] = require(packageName);
    return required;
  }, {});

var noError = null;

module.exports = function(packageJSON, callback) {
  normalize(packageJSON);
  var license = packageJSON.license;
  if (!license || typeof license !== 'string' || !spdx.valid(license)) {
    callback(new Error('Invalid license expression'));
  } else {
    if (required.hasOwnProperty(license)) {
      callback(
        noError,
        (
          'SPDX:' + license + '\n\n' +
          required[license]
            .map(function(lineArray) {
              return lineArray.reduce(function(line, lineItem) {
                if (typeof lineItem === 'string') {
                  return line + lineItem;
                } else {
                  return line + transform(
                    lineItem.transformation || false,
                    fieldFromPackage(
                      lineItem.field,
                      packageJSON,
                      lineItem.default
                    )
                  );
                }
              }, '');
            })
            .join('\n\n')
        )
      );
    } else {
      callback(
        new Error(
          'licensor does not know how to write the license ' +
          '"' + license + '".'
        )
      );
    }
  }
};
