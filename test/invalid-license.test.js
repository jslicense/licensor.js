require('tap').test('invalid license', function(test) {
  test.plan(1);
  var packageJSON = {
    author: 'John Doe <john@doe.com>',
    license: 'Nonsense'
  };
  require('..')(packageJSON, false, function(error) {
    test.equal(error.message, 'Invalid license expression');
  });
});
