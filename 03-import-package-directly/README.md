# 03-import-package-directly

Vanilla JS app showing two counter components, where the code for the counter component is
in a package in NPM.

## Installation

CD to this directory, and run

```sh
$ npm ci
...
```

## Basic use

To see the web app, just run `npm start` and navigate with your browser to
 <http://localhost:3000>.

## Explanation

The HTML is in [`./src/index.html`](./src/index.html) and, like all modern web apps,
is a simple HTML that mostly `<script src>`-s the JavaScript code in
[`./src/03-import-package-directly.js`](./src/03-import-package-directly.js).

The JavaScript is a Vanilla JS app that displays two Counter Components. The code for the counter
component is in an NPM package named `a-bundleless-future-counter-component`, who's source
code can be found in the directory [`counter-component` in this repository](../counter-component/).

Importing the package is done by importing the entry point JS file
[directly from `node_modules`](./node_modules/a-bundleless-future-counter-component/src/index.js).

```js
import {makeCounterComponent} from '../node_modules/a-bundleless-future-counter-component/src/index.js'
```

This app run in the browser without any bundling whatsoever, using the power of native browser ESM.

## Running the tests

To run the tests, run...

```sh
$ npm test
...
```

## License

MIT
