local JSONNUNIT = import "~/jsonnet/jsonnunit.libsonnet";

JSONNUNIT
  .describe('Test "be" functionality',
    JSONNUNIT
      .it('tests JSONNUNIT.to.be.empty', [
        JSONNUNIT.expect([]).to.be.empty,
        JSONNUNIT.expect({}).to.be.empty
      ])
      .it('tests JSONNUNIT.to.be["null"]',
        JSONNUNIT.expect(null).to.be['null'],
      )
      .it('tests JSONNUNIT.to.be.true',
        JSONNUNIT.expect(true).to.be['true'],
      )
      .it('tests JSONNUNIT.to.be["false"]',
        JSONNUNIT.expect(false).to.be['false'],
      )
      .it('tests JSONNUNIT.to.be.an.array',
        JSONNUNIT.expect(['an', 'array']).to.be.an.array,
      )
      .it('tests JSONNUNIT.to.be.a.string',
        JSONNUNIT.expect('string').to.be.a.string,
      )
      .it('tests JSONNUNIT.to.be.a.boolean', [
        JSONNUNIT.expect(true).to.be.a.boolean,
        JSONNUNIT.expect(false).to.be.a.boolean,
      ])
      .it('tests JSONNUNIT.to.be.a["function"]', [
        JSONNUNIT.expect(function(x) { value: x }).to.be.a['function'],
      ])
      .it('tests JSONNUNIT.to.be.a.number',
        JSONNUNIT.expect(123).to.be.a.number,
      )
      .it('tests JSONNUNIT.to.be.oneOf(options)',
        JSONNUNIT.expect('foo').to.be.oneOf(['foo', 'bar']),
      )
  )
  .describe('Test "contain" functionality"',
    JSONNUNIT
      .it('tests JSONNUNIT.to.contain.oneOf(options)',
        JSONNUNIT.expect(['foo', 'bar']).to.contain.oneOf(['bar'])
      )
  )
  .describe('Test "equal" functionality',
    JSONNUNIT
      .it('tests JSONNUNIT.to.equal(value)', [
        JSONNUNIT.expect(1).to.equal(1),
        JSONNUNIT.expect(true).to.equal(true),
        JSONNUNIT.expect('foo').to.equal('foo'),
        JSONNUNIT.expect({ some: "object" }).to.equal({ some: "object" }),
        JSONNUNIT.expect(['bar']).to.equal(['bar']),
      ]),
  )
  .describe('Test "have" functionality',
    JSONNUNIT
      .it('tests JSONNUNIT.to.have.all.keys(keys)',
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.all.keys(['foo', 'bar'])
      )
      .it('tests JSONNUNIT.to.have.any.keys(keys)',
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.any.keys(['foo'])
      )
      .it('tests JSONNUNIT.to.have.key(key)',
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.key('foo')
      )
      .it('tests JSONNUNIT.to.have.lengthOf(amount)', [ 
        JSONNUNIT.expect('foo').to.have.lengthOf(3),
        JSONNUNIT.expect(['foo', 'bar'],).to.have.lengthOf(2),
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.lengthOf(2),
        JSONNUNIT.expect(function(x, y) { value: x, valueb: y }).to.have.lengthOf(2),
      ])
      .it('tests JSONNUNIT.to.have.lengthAbove(amount)', [
        JSONNUNIT.expect('foo').to.have.lengthAbove(2),
        JSONNUNIT.expect(['foo', 'bar'],).to.have.lengthAbove(1),
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.lengthAbove(1),
        JSONNUNIT.expect(function(x, y) { value: x, valueb: y }).to.have.lengthAbove(1),
      ])
      .it('tests JSONNUNIT.to.have.lengthBelow(amount)', [
        JSONNUNIT.expect('foo').to.have.lengthBelow(5),
        JSONNUNIT.expect(['foo', 'bar'],).to.have.lengthBelow(5),
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.lengthBelow(5),
        JSONNUNIT.expect(function(x, y) { value: x, valueb: y }).to.have.lengthBelow(5),
      ])
      .it('tests JSONNUNIT.to.have.length.of(amount)',
        JSONNUNIT.expect('foo').to.have.length.of(3),
      )
      .it('tests JSONNUNIT.to.have.length.above(amount)',
        JSONNUNIT.expect('foo').to.have.length.above(2),
      )
      .it('tests JSONNUNIT.to.have.length.below(amount)',
        JSONNUNIT.expect('foo').to.have.length.below(4),
      )
      .it('tests JSONNUNIT.to.have.length.at.least(amount)',
        JSONNUNIT.expect('foo').to.have.length.at.least(3),
      )
      .it('tests JSONNUNIT.to.have.length.at.most(amount)',
        JSONNUNIT.expect('foo').to.have.length.at.most(3),
      )
      .it('tests JSONNUNIT.to.have.length.within(amount1, amount2)',
        JSONNUNIT.expect('foo').to.have.length.within(3,4),
      )
      .it('tests JSONNUNIT.to.have.property(property)',
        JSONNUNIT.expect({foo: 'bar', bar: 'foo'}).to.have.property('bar'),
      )
      .it('tests JSONNUNIT.to.have.string(string)',
        JSONNUNIT.expect('foobarfoo').to.have.string('bar'),
      )
  )
  