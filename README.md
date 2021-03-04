<p align="center">
  <img src="https://github.com/ScaleCity/jsonnunit/blob/main/docs/banner-jsonnunit.png?raw=true" alt="The JSONNUNIT logo is a black circle with in the center the red plus logo of Jsonnet" width="60%">
</p>

<p align="center">a BDD assertion style unit testing framework for JSONNET through an 'expect' interface
</p>


[![Version](https://img.shields.io/npm/v/jsonnunit.svg)](https://npmjs.org/package/jsonnunit)
[![codecov](https://codecov.io/gh/ScaleCity/jsonnunit/branch/main/graph/badge.svg?token=AAT99CII39)](https://codecov.io/gh/ScaleCity/jsonnunit)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FScaleCity%2Fjsonnunit.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FScaleCity%2Fjsonnunit?ref=badge_shield)
[![CircleCI](https://img.shields.io/circleci/build/github/ScaleCity/jsonnunit?token=e0790970e8a7223a7e3631f47f361660c110cb8f)](https://circleci.com/gh/ScaleCity/jsonnunit)
![License](https://img.shields.io/npm/l/oclif.svg)](https://github.com/oclif/oclif/blob/master/package.json)



<!-- toc -->
* [🗒 Description](#-description)
* [🚀 Getting Started](#-getting-started)
* [✨ Features](#-features)
* [📌 Requirements](#-requirements)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# 🗒 Description
JSONNUNIT is a BDD assertion style unit testing framework for
[JSONNET](https://jsonnet.org/) through an 'expect' interface. Basically you
chain together natural language assertions which makes testing much easier by
giving you lots of assertions you can run against your code.  This framework is
based on [Mocha](https://mochajs.org/): a simple, flexible, fun javascript test
framework for node.js & the browser.

# 🚀 Getting Started
The Getting Started tutorial is a step-by-step guide to introduce you to JSONNUNIT.
If you haven't developed any unit tests before, this tutorial is a great place to get started.

# ✨ Features
* **Sjsonnet support** - [Sjsonnet](https://github.com/databricks/sjsonnet) is a JVM implementation of the Jsonnet configuration language which speeds up the process of rendering large jsonnet structures.
* **Based on MochaJS** - We didn't re-invent the wheel but reflected one of the best tools currently available for unit testing NodeJS apps. This framework is based on [Mocha](https://mochajs.org/): a simple, flexible, fun javascript test framework for node.js & the browser.
* **Based on Chai** - We also took a lot of functionality from the [Chai Assertion Library](https://www.chaijs.com/). Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. Implementing this functionality allows you to write human-readable unit tests for your jsonnet structures.

# 📌 Requirements
JSONNUNIT is written in [NodeJS](https://www.npmjs.com/package/node) and requires Node 8.5+. 

# Usage
<!-- usage -->
```sh-session
$ npm install -g jsonnunit
$ jsonnunit COMMAND
running command...
$ jsonnunit (-v|--version|version)
jsonnunit/1.0.0 darwin-x64 node-v12.12.0
$ jsonnunit --help [COMMAND]
USAGE
  $ jsonnunit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jsonnunit help [COMMAND]`](#jsonnunit-help-command)
* [`jsonnunit update [CHANNEL]`](#jsonnunit-update-channel)

## `jsonnunit help [COMMAND]`

display help for jsonnunit

```
USAGE
  $ jsonnunit help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `jsonnunit update [CHANNEL]`

update the jsonnunit CLI

```
USAGE
  $ jsonnunit update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->

## Contributing

Thank you very much considerting to contribute!

Please make sure you follow our Code Of Conduct and we also strongly recommend
reading our Contributing Guide.

## Contributors

Please see the full
[Contributors Graph](https://github.com/legovaer/jsonnunit/graphs/contributors)
for our list of contributors.

### Core Contributors

Feel free to reach out to any of the core contributors with your questions or
concerns. We will do our best to respond in a timely manner.

[![Levi Govaerts](https://avatars.githubusercontent.com/u/5813212?s=460&u=d193f8f2d70dbbdd6df2d17b4ee5a275459ede4b&v=4)](https://github.com/legovaer)

### License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FScaleCity%2Fjsonnunit.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FScaleCity%2Fjsonnunit?ref=badge_large)
