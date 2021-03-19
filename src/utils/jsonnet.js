const execa = require('execa')
const _ = require('lodash')
const {lookpath} = require('lookpath')
const {cli} = require('cli-ux')
const path = require('path')

class JsonnetUtil {
  static async exec(args, options) {
    const executable = await lookpath('sjsonnet') ? await lookpath('sjsonnet') : await lookpath('jsonnet')

    // Add our jsonnet folder to the jsonnet search path.
    const additionalArgs = ['-J', path.join(__dirname, '/../../jsonnet')]

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
      const {stdout} = await execa(executable, [...additionalArgs, ...args])
      return opts.successCallback(stdout)
    } catch (error) {
      return opts.errorCallback(error)
    }
  }
}

module.exports = JsonnetUtil
