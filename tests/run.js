module.exports = run

var child = require('child_process')

function run(args, cwd) {
  var result = child.spawnSync('../../licensor', args, { cwd: cwd })
  result.stdout = result.stdout.toString().trim()
  result.stderr = result.stderr.toString().trim()
  return result }
