const { readFileSync } = require('fs')
const { execSync } = require('child_process')

const argv = require('minimist')(process.argv.slice(2))


try {
  const ver = read_version()
  const dst = get_target_version()
  verify(ver, dst)
} catch (e) {
  console.error(e)
  process.exit(1)
}

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

function get_target_version () {

  if (argv?.destination === 'git-tag') {
    return String.fromCharCode(...execSync('git tag -l')).trim().split('\n').at(-1)
  } else {
    throw Error(`destination: ${argv?.destination} is unknown`)
  }
}

function verify (src, dst) {
  if (src.length !== dst.length) {
    throw Error(`we can't compare ${src} with ${dst}`)
  }
  if (src <= dst) {
    throw Error('please don\'t forget to bump version.')
  } else {
    console.log(src)
  }
}
