require('tap').test('ISC License test', function(test) {
  test.plan(1);
  var packageJSON = {
    author: 'John Doe <john@doe.com>',
    license: 'ISC'
  };
  require('..')(packageJSON, 72, function(error, text) {
    test.ok(
      text
        .split('\n')
        .every(function(line) {
          return (
            line.length <= 72 &&
            line === line.trim()
          );
        })
    );
  });
});
