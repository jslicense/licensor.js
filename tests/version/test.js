var tap = require('tap')
var run = require('../run')
var version = require('../../package.json').version

tap.equal(
  run([ '--version' ], __dirname).stdout.trim(),
  version)

tap.equal(
  run([ '-v' ], __dirname).stdout.trim(),
  version)
