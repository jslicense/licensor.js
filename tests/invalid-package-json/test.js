var run = require('../run')

require('tap').equal(
  run([ ], __dirname).stderr,
  'Invalid package.json')
