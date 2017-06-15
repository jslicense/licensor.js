/*
Copyright 2016 Kyle E. Mitchell

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
var tap = require('tap')
var fs = require('fs')
var path = require('path')

tap.equal(require('../run')(['--wrap 30'], __dirname).status, 0)

tap.equal(
  fs.readFileSync(path.join(__dirname, 'LICENSE')).toString(),
  // LICENSE is just the same-old "official" plain text.
  // It is _not_ rewrapped to 30 columns.
  fs.readFileSync(
    path.join(__dirname, '..', '..', 'LICENSE')
  ).toString()
)

tap.equal(
  fs.readFileSync(path.join(__dirname, 'NOTICE')).toString(),
  'the-package\n' +
  'https://github.com/john/the-package#readme\n' +
  'Copyright (c) ' + new Date().getFullYear() + ' John Doe\n'
)
