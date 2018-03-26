const minimist    = require('minimist')
const packageRoot = require('package.root')

if((typeof option !== "object") || option === null){
    option = {}
}

const myProcess = option.process || process
const argv      = myProcess.argv
const argv2     = argv.slice(2)
const result    = { argv, argv2, args:minimist(argv2) }

Object.keys(packageRoot).forEach(key=>result[key] = packageRoot[key])

module.exports = result