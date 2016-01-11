require('tap').test('Zeor-Clause BSD License test', function(test) {
  test.plan(1);
  var packageJSON = {
    author: 'John Doe <john@doe.com>',
    license: '0BSD'
  };
  require('..')(packageJSON, false, function(error, text) {
    test.equal(
      text,
      [
        'SPDX:0BSD',

        'Copyright (c) ' + new Date().getFullYear() + ' John Doe',

        'Permission to use, copy, modify, and/or distribute this software for ' +
        'any purpose with or without fee is hereby granted.',

        'THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL ' +
        'WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES ' +
        'OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE ' +
        'FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY ' +
        'DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER ' +
        'IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING ' +
        'OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.'
      ].join('\n\n')
    );
  });
});
