---
name: Bug report
about: To report a part of JSONNUNIT not working as expected
title: ''
labels: 'unconfirmed-bug'
---

<!--
Have you read JSONNUNIT's Code of Conduct? By filing an Issue, you are expected to comply with it, including treating everyone with respect: https://github.com/scalecity/jsonnunit/blob/main/.github/CODE_OF_CONDUCT.md

Detail the steps necessary to reproduce the problem. To get the fastest support, create an MCVE and upload it to GitHub.
create an [MCVE](https://stackoverflow.com/help/mcve) and upload it to GitHub.
-->

### Prerequisites

<!--
Place an `x` between the square brackets on the lines below for every satisfied prerequisite.
-->

- [ ] Checked that your issue hasn't already been filed by cross-referencing [issues with the `faq` label](https://github.com/scalecity/jsonnunit/issues?utf8=%E2%9C%93&q=is%3Aissue%20label%3Afaq%20)
- [ ] Checked next-gen ES issues and syntax problems by using the same environment and/or transpiler configuration without JSONNUNIT to ensure it isn't just a feature that actually isn't supported in the environment in question or a bug in your code.
- [ ] 'Smoke tested' the code to be tested by running it outside the real test suite to get a better sense of whether the problem is in the code under test, your usage of JSONNUNIT, or JSONNUNIT itself
- [ ] Ensured that there is no discrepancy between the locally and globally installed versions of JSONNUNUT. You can find them with: `node node_modules/.bin/jsonnunit --version`(Local) and `jsonnunit --version`(Global). 

### Description

<!--
[Description of the issue]
-->

### Steps to Reproduce

<!--
Please add a series of steps to reproduce the problem. See https://stackoverflow.com/help/mcve for in depth information
on how to create a minimal, complete, and verifiable example.
-->

**Expected behavior:** [What you expect to happen]

**Actual behavior:** [What actually happens]
<!--
Please include any output, especially error messages (including stacktrace). Remember, we can't see your screen.
Scrub if needed so as not to reveal passwords, etc.
-->

**Reproduces how often:** [What percentage of the time does it reproduce?]

### Versions

<!-- If applicable, please specify: -->

- The output of `jsonnunit --version` and `node node_modules/.bin/jsonnunit --version`:
- The output of `node --version`:
- The output of `jsonnet --version`:
- The output of `sjsonnet` (if applicable):
- Your operating system
  - name and version:
  - architecture (32 or 64-bit):
- Your shell (e.g., bash, zsh, PowerShell, cmd):
- Any code transpiler (e.g., TypeScript, CoffeeScript, Babel) being used (and its version):

### Additional Information

<!--
Any additional information, configuration or data that might be necessary to reproduce the issue.
-->
