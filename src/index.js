const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const {performance} = require('perf_hooks')
const FileSystem = require('./utils/filesystem')
const JsonnetUtil = require('./utils/jsonnet')

class JsonnunitCommand extends Command {
  async run() {
    const {flags} = this.parse(JsonnunitCommand)

    this.debug('Got thses flags:')
    this.debug(flags)

    if (flags.version) {
      this.log(this.config.userAgent)
      this.exit(0)
    }

    const testFolder = `${process.cwd()}/tests`

    // check if a tests folder exists.
    if (!FileSystem.fileExists(testFolder)) {
      this.error(`No tests folder found in ${testFolder}`)
    }

    const testFiles = FileSystem.getFilesWithExtensionFromFolder(`${process.cwd()}/tests`, 'jsonnet')
    this.log('\n')
    let results = {
      passed: 0,
      failed: 0,
      timeStart: performance.now(),
      failures: {},
    }

    let testcaseName = path => {
      return path
    }

    for (var  i = 0; i < testFiles.length; i++) {
      const cleanPath = FileSystem.removeCWDFromPath(testFiles[i], process.cwd())
      this.log(`  ${testcaseName(cleanPath)}`)

      // eslint-disable-next-line no-await-in-loop
      let updatedCounters = await JsonnetUtil.exec([testFiles[i]], {
        librarySearchDir: flags.jpath,
        errorCallback: error => {
          this.error(`An error occured while testing ${testFiles[i]}: ${error}`)
        },
        successCallback: data => {
          let result =  this.processTestcaseResults(JSON.parse(data).testcases)
          return result
        },
      })

      results.passed += updatedCounters.passed
      results.failed += updatedCounters.failed

      results.failures[testcaseName(cleanPath)] = updatedCounters.failures

      this.log('\n')
    }
    this.printTestResults(results)
    this.log('\n\n')
  }

  addFailure(testcase, test, expectation) {
    return {
      restcase: testcase,
      test: test,
      expectation: expectation,
    }
  }

  processTestcaseResults(results) {
    let testResults = {
      passed: 0,
      failed: 0,
      failures: {},
    }

    for (var j = 0; j < results.length; j++) {
      const testName = results[j].name
      this.log(`    ${results[j].name}`)
      for (var i = 0; i < results[j].tests.tests.length; i++) {
        let passed = true
        if (results[j].tests.tests[i].result.isArray) {
          for (let k = 0; k < results[j].tests.tests[i].result.length; k++) {
            if (!results[j].tests.tests[i].result[k].includes('JSONNUNIT--passed')) {
              passed = false
            }
          }
        } else if (!results[j].tests.tests[i].result.includes('JSONNUNIT--passed')) {
          passed = false
        }
        const expectation = results[j].tests.tests[i].name
        if (passed) {
          testResults.passed++
          this.log(chalk`      {green ✔} {gray ${results[j].tests.tests[i].name}}`)
        } else {
          if (testResults.failures[testName] === undefined) {
            testResults.failures[testName] = []
          }

          testResults.failed++
          testResults.failures[testName].push(expectation)
          this.log(chalk`      {red ✗ ${results[j].tests.tests[i].name}}`)
        }
      }
    }

    return testResults
  }

  printTestResults(testResults) {
    for (var i = 0; i < testResults.failures.length; i++) {
      let failure = testResults.failures[i]
      this.log(`  ${failure.testcaseName}\n    ${failure.test}\n      ${failure.expectation}`)
    }
    let timeNow = (performance.now() - testResults.timeStart).toFixed(2)
    this.log(chalk`  {green ${testResults.passed} ✔ passing} {gray (${timeNow} ms)}`)
    this.log(chalk`  {red ${testResults.failed} ✗ failing}`)
    let failureCounter = 0
    this.log('')
    Object.keys(testResults.failures).forEach(testcase => {
      failureCounter++
      if (Object.keys(testResults.failures[testcase]).length > 0) {
        this.log(`  ${failureCounter}) ${testcase}`)
        Object.keys(testResults.failures[testcase]).forEach(test => {
          this.log(`       ${test}`)
          for (var i = 0; i < testResults.failures[testcase][test].length; i++) {
            this.log(`         ${testResults.failures[testcase][test][i]}`)
          }
        })
      }
    })
  }

  printLine(size = 80, prefix = '') {
    let line = prefix
    for (let i = 0; i < size; i++) {
      line += '_'
    }
    this.log(line)
  }
}

JsonnunitCommand.description = `Run jsonnet unit tests with JSONNUnit
JSONNunit is a BDD assertion style unit testing framework for JSONNET through an
'expect' interface. Basically you chain together natural language assertions
which makes testing much easier by giving you lots of assertions you can run
against your code.
`

JsonnunitCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  jpath: flags.string({multiple: true, char: 'J', description: 'Specify an additional library search dir (right-most wins)'}),
  verbose: flags.string({description: 'Outputs the entire tested object'}),
}

module.exports = JsonnunitCommand
