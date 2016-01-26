require('tap').equal(
  require('../run')([ ], __dirname).stderr,
  'Cannot read package.json')
