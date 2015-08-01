## JavaScript
**Windows and OS X users:** Install [Node.js](https://nodejs.org/) [via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

**Linux users:** Joyent maintains a document that details how to get Node.js installed for a wide range of distributions and package managers.

Install jasmine-node:

```bash
$ npm install jasmine-node -g
```
Depending on your setup, you may need super user privileges to install an NPM module globally. This is the case if you've used the official installer linked to above. If NPM gives you an error saying you don't have access, add sudo to the command above:

```bash
$ sudo npm install jasmine-node -g
```

If you've used the official installer, your `PATH` should have been automatically configured, but if your shell has trouble locating your globally installed modules—or if you build Node.js from source—update your `PATH` to include the npm binaries by adding the following to either `~/.bash_profile` or `~/.zshrc`:

```bash
$ export PATH=/usr/local/share/npm/bin:$PATH
```

### Running Tests

Execute the tests with:

```bash
$ jasmine-node bob_test.spec.js
```
