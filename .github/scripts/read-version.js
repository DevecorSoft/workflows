const { readFileSync } = require('fs')
const argv = require('minimist')(process.argv.slice(2))

function read_version_from_pure_text (path) {
  return readFileSync(path, 'utf8')
}

function read_version_from_package_json (path) {
  return JSON.parse(readFileSync(path, 'utf8')).version
}

function read_version () {
  if (argv?.platform === 'pure-txt') {
    return read_version_from_pure_text(argv?.path)
  } else if (argv?.platform === 'nodejs') {
    return read_version_from_package_json(argv?.path)
  } else {
    throw Error(`platform: ${argv?.platform} is unknown`)
  }
}

console.log(read_version())
