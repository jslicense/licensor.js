licensor.js
===========

[![npm version](https://img.shields.io/npm/v/licensor.svg)](https://www.npmjs.com/package/licensor)
[![license](https://img.shields.io/badge/license-Apache--2.0-303284.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![build status](https://img.shields.io/travis/jslicense/licensor.js.svg)](http://travis-ci.org/jslicense/licensor.js)

Generate a LICENSE file from `package.json`.

At the command line:

```bash
npm --global install licensor
licensor < package.json > LICENSE
```

With Node.js:

```js
var licensor = require('licensor');
licensor(require('./package.json'));
```
