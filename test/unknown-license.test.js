require('tap').test('invalid license', function(test) {
  test.plan(1);
  var packageJSON = {
    author: 'John Doe <john@doe.com>',
    license: 'Glide'
  };
  require('..')(packageJSON, function(error) {
    test.equal(
      error.message,
      'licensor does not know how to write the license "Glide".'
    );
  });
});
