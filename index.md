---
layout: page
excerpt: a BDD assertion style unit testing framework for JSONNET through an 'expect' interface
title: JSONNUNIT
permalink: /index.html
key: page-index
article_header:
  type: cover
  theme: dark
  image:
    src: /assets/images/banner-jsonnunit-xlarge.png
---

<!--more-->

## Testing your JSONNET in human readable code

JSONNUNIT is a BDD assertion style unit testing framework for [JSONNET](https://jsonnet.org) through an 'expect' interface. Basically you chain together natural language assertions which makes testing much easier by giving you lots of assertions you can run against your code. This framework is based on [Mocha](https://mochajs.org/): a simple, flexible, fun javascript test framework for node.js & the browser. The development of the framework is funded by ScaleCity.io.


[Getting Started](/docs/en/getting-started/introduction){:.button.button--outline-primary.button--pill.button--l}
[GitHub](https://github.com/scalecity/jsonnunit){:.button.button--outline-primary.button--pill.button--l}

<br>
<br>

## Example

```javascript
local JSONNUNIT = import "../jsonnet/jsonnunit.libsonnet";

JSONNUNIT
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
```

<br>
<br>


## Sjsonnet Support

Due to pervasive caching, sjsonnet is much faster than google/jsonnet. See this
blog post for more details:
[Writing a Faster Jsonnet Compiler](https://databricks.com/blog/2018/10/12/writing-a-faster-jsonnet-compiler.html)

If you have sjsonnunit installed on your local environment, JSONNUNIT will automatically use Sjsonnet instead of JSONNET.
<br>
<br>

## Based on MochaJS

We didn't re-invent the wheel but reflected one of the best tools currently available for unit testing NodeJS apps. This framework is based on [Mocha](https://mochajs.org/): a simple, flexible, fun javascript test framework for node.js & the browser.
<br>
<br>

## Based on Chai

We also took a lot of functionality from the [Chai Assertion Library](https://www.chaijs.com/). Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. Implementing this functionality allows you to write human-readable unit tests for your jsonnet structures.
