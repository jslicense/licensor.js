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

var indexBefore = readFileSync('index.js')
var alreadyHasBefore = readFileSync('has-header.js')
var binScriptBefore = readFileSync('bin.js')

tap.equal(require('../run')(['--notice'], __dirname).status, 0)

tap.equal(
  readFileSync('LICENSE'),
  fs.readFileSync(
    path.join(__dirname, '..', '..', 'LICENSE')
  ).toString()
)

var year = new Date().getFullYear()

tap.equal(
  readFileSync('NOTICE'),
  (
    'the-package\n' +
    'https://github.com/john/the-package#readme\n' +
    'Copyright (c) ' + year + ' John Doe\n'
  )
)

var header = [
  '/*',
  'Copyright ' + year + ' John Doe',
  '',
  'Licensed under the Apache License, Version 2.0 (the "License");',
  'you may not use this file except in compliance with the License.',
  'You may obtain a copy of the License at',
  '',
  '    http://www.apache.org/licenses/LICENSE-2.0',
  '',
  'Unless required by applicable law or agreed to in writing, software',
  'distributed under the License is distributed on an "AS IS" BASIS,',
  'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
  'See the License for the specific language governing permissions and',
  'limitations under the License.',
  '*/'
]

var text = readFileSync('index.js')
tap.equal(text, header.join('\n') + '\n' + indexBefore)

var binScript = readFileSync('bin.js')
var split = binScriptBefore.split('\n')
tap.equal(
  binScript,
  []
    .concat(split[0])
    .concat(header)
    .concat(split.slice(1))
    .join('\n')
)

fs.writeFileSync(path.join(__dirname, 'index.js'), indexBefore)
fs.writeFileSync(path.join(__dirname, 'bin.js'), binScriptBefore)
fs.unlinkSync(path.join(__dirname, 'NOTICE'))
fs.unlinkSync(path.join(__dirname, 'LICENSE'))

tap.equal(
  readFileSync('has-header.js'),
  alreadyHasBefore
)

function readFileSync (fileName) {
  return fs.readFileSync(path.join(__dirname, fileName)).toString()
}
