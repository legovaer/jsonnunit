const execa = require('execa')
const _ = require('lodash')
const {lookpath} = require('lookpath')
const {cli} = require('cli-ux')

class JsonnetUtil {
  static async exec(args, options) {
    const executable = await lookpath('sjsonnet') ? await lookpath('sjsonnet') : await lookpath('jsonnet')

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
      const {stdout} = await execa(executable, args)
      return opts.successCallback(stdout)
    } catch (error) {
      return opts.errorCallback(error)
    }
  }
}

module.exports = JsonnetUtil
