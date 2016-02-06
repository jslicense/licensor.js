var tap = require('tap')
var fs = require('fs')
var path = require('path')

tap.equal(require('../run')([ '--wrap 30' ], __dirname).status, 0)

tap.equal(
  fs.readFileSync(path.join(__dirname, 'LICENSE')).toString(),
  // LICENSE is just the same-old "official" plain text.
  // It is _not_ rewrapped to 30 columns.
  fs.readFileSync(path.join(__dirname, '..', '..', 'LICENSE')).toString())

tap.equal(
  fs.readFileSync(path.join(__dirname, 'NOTICE')).toString(),
  ( 'the-package\n' +
    'https://github.com/john/the-package#readme\n' +
    'Copyright (c) ' + new Date().getFullYear() + ' John Doe' ))
