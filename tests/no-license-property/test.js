require('tap').equal(
  require('../run')([ ], __dirname).stderr,
  'No license property')
