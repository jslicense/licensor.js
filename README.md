Generate a LICENSE file from `package.json`.

At the command line:

```bash
npm --global install licensor
licensor < package.json > LICENSE
```

If you would like to wrap long lines, try either of:

```bash
licensor < package.json | fmt -w72 > LICENSE
licensor < package.json | par -w72 > LICENSE
```

With Node.js:

```js
var licensor = require('licensor');
licensor(require('./package.json'), function(error, text) {
  console.log(text);
});
```

Licensor assumes that the "author" in `package.json` is also the copyright owner and that the package was created in the current calendar year.
