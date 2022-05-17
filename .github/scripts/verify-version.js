const { execSync } = require('child_process')

const argv = require('minimist')(process.argv.slice(2))

const dst = get_target_version()
verify(argv?.current, dst)

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
