var tap = require('tap')
var run = require('../run')

function showsUsage(output) {
  return /Usage:\n/.test(output) }

function showsOptions(output) {
  return /Options:\n/.test(output) }

tap.assert(showsUsage(run([ '--help' ], __dirname).stdout.trim()))

tap.assert(showsOptions(run([ '--help' ], __dirname).stdout.trim()))

tap.assert(showsUsage(run([ '-h' ], __dirname).stdout.trim()))

tap.assert(showsOptions(run([ '-h' ], __dirname).stdout.trim()))
