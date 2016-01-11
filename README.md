Generate a LICENSE file from `package.json`.

At the command line:

```bash
npm --global install licensor
licensor < package.json > LICENSE
```

With Node.js:

```js
var licensor = require('licensor');
licensor(require('./package.json'), function(error, text) {
  console.log(text);
});
```
