const _ = require('lodash')
const {lookpath} = require('lookpath')
const {cli} = require('cli-ux')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

class JsonnetUtil {
  static async exec(args, options) {
    const executable = await lookpath('sjsonnet') ? await lookpath('sjsonnet') : await lookpath('jsonnet')

    // Add our jsonnet folder to the jsonnet search path.
    let additionalArgs = ['-J', path.join(__dirname, '/../../jsonnet')]

    // If a user adds an additional library search dir, add it to the jsonnet command.
    if (options.librarySearchDir !== undefined) {
      var i
      for (i = 0; i < options.librarySearchDir.length; i++) {
        additionalArgs.push('-J', options.librarySearchDir[i])
      }
    }

    var opts = _.defaults(options || {}, {
      cwd: process.cwd(),
      successCallback: data => {
        cli.log(data)
      },
      errorCallback: error => {
        cli.error(error)
      },
    })

    var command = `${executable} `
    var allArgs = [...additionalArgs, ...args]
    var j
    for (j = 0; j < allArgs.length; j++) {
      command += `${allArgs[j]} `
    }

    const {stdout, stderr} = await exec(command)
    if (stderr) {
      return opts.errorCallback(stderr)
    }
    return opts.successCallback(stdout)
  }
}

module.exports = JsonnetUtil
