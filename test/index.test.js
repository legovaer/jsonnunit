const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('jsonnunit', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs all tests defined in tests folder', ctx => {
    expect(ctx.stdout).to.contain('0 ✗ failing')
    expect(ctx.stdout).to.contain('26 ✔ passing')
  })
})
