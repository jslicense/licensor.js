require('tap').equal(
  require('../run')([ ], __dirname).stderr,
  'Unsupported license')
