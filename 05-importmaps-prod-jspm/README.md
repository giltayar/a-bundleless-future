# 05-importmaps-prod-jspm

Vanilla JS app showing two counter components, where the code for the counter component is
in a package in NPM, and importing the package is done via importnmaps, and where the importmap
points to the module in JSPM.

> Note: this code works only in Chromium browsers and Firefox. We will see in the next steps how
> to make it work in Safari too.

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
[`./src/05-importmaps-prod-jspm.js`](./src/05-importmaps-prod-jspm.js).

The JavaScript is a Vanilla JS app that displays two Counter Components. The code for the counter
component is in an NPM package named `a-bundleless-future-counter-component`, who's source
code can be found in the directory [`counter-component` in this repository](../counter-component/).

Importing the package is done by the regular import syntax:

```js
import {makeCounterComponent} from 'a-bundleless-future-counter-component'
```

While the browser supports native browser ESM, it does not support "bare specifiers" to packages,
but through the magic of the importmap we added to the HTML, we explain to the browser
where to find the entry point to the package:

```html
  <script type="importmap">
  {
    "imports": {
      "a-bundleless-future-counter-component":
        "https://jspm.dev/npm:a-bundleless-future-counter-component@1.0.1"
    }
  }
  </script>
```

The import map points to [JSPM](https://jspm.org/),
which is a CDN which incorporates _all_ NPM packages in the public NPM registry,
and ensures that they work as ESM by automatically converting the code from CJS to ESM.

## Running the tests

To run the tests, run...

```sh
$ npm test
...
```

## License

MIT
