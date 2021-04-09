const execa = require('execa')
const _ = require('lodash')
const {lookpath} = require('lookpath')
const {cli} = require('cli-ux')
const path = require('path')

class JsonnetUtil {
  static async exec(args, options) {
    const executable = await lookpath('sjsonnet') ? await lookpath('sjsonnet') : await lookpath('jsonnet')

    // Add our jsonnet folder to the jsonnet search path.
    let additionalArgs = ['-J', path.join(__dirname, '/../../jsonnet')]

    // If a user adds an additional library search dir, add it to the jsonnet command.
    if (options.librarySearchDir !== undefined) {
      for (var  i = 0; i < options.librarySearchDir.length; i++) {
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

    try {
      const {stdout, stderr} = await execa(executable, [...additionalArgs, ...args])
      cli.log(stderr)
      return opts.successCallback(stdout)
    } catch (error) {
      return opts.errorCallback(error)
    }
  }
}

module.exports = JsonnetUtil
