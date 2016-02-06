var tap = require('tap')
var fs = require('fs')
var path = require('path')

tap.equal(require('../run')([ ], __dirname).status, 0)

tap.equal(
  fs.readFileSync(path.join(__dirname, 'LICENSE')).toString(),
  fs.readFileSync(path.join(__dirname, '..', '..', 'LICENSE')).toString())
