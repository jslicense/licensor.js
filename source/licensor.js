var normalize = require('normalize-package-data');
var spdx = require('spdx');

var format = require('./format');
var fieldFromPackage = require('./fieldFromPackage');
var transform = require('./transform');

var required = [
  'BSD-2-Clause',
  'ISC',
  'MIT'
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
    throw new Error('Invalid license identifier');
  } else {
    if (required.hasOwnProperty(license)) {
      callback(
        noError,
        format(
          'SPDX:' + license + '\n' +
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
            .join('\n'),
          false,
          '\n\n'
        )
      );
    } else {
      callback('No such license');
    }
  }
};
