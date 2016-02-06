var tap = require('tap')
var fs = require('fs')
var path = require('path')

tap.equal(require('../run')([ ], __dirname).status, 0)

tap.equal(
  fs.readFileSync(path.join(__dirname, 'LICENSE')).toString(),
  fs.readFileSync(path.join(__dirname, '..', '..', 'LICENSE')).toString())

tap.equal(
  fs.readFileSync(path.join(__dirname, 'NOTICE')).toString(),
  ( 'the-package\n' +
    'Copyright (c) ' + new Date().getFullYear() + ' John Doe' ))
