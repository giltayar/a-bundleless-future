# 08-importmaps-generation

Vanilla JS app showing two counter components, where the code for the counter component is
in a package in NPM, and importing the package is done via importnmaps, and where the importmap
is generated programatically.

## Installation

CD to this directory, and run

```sh
$ npm ci
$ npm run build
...
```

The `build` is to generate the importmap and inject it into the HTML.

## Basic use

To see the web app, just run `npm start` and navigate with your browser to
 <http://localhost:3000>. This will use an importmap that takes all the packaged code
 from the `node_modules` directory.

 To view the "production" code, run `npm run start:dist`, which will show you the HTML
 that uses an importmap that takes all the packaged code from our "CDN" (Netlify).

## Explanation

The HTML is in [`./src/index.html`](./src/index.html) and, like all modern web apps,
is a simple HTML that mostly `<script src>`-s the JavaScript code in
[`./src/06-importmaps-prod-jspm.js`](./src/08-importmaps-generation.js)

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
    ...
  }
  </script>
```

This importmap is injected dynamically into the HTML by the `build` process.

The `build` will generate the importmap programatically twice: once for dev (in the `src` directory)
and one for production (in the `dist` directory).
They both use [`./dev/generate-importmap.js`](./dev/generate-importmap.js) to generate the
importmap and inject it into the HTML. The code in `generate-importmap` uses the `@jspm/generator`
package to generate the code.

## Running the tests

To run the tests, run...

```sh
$ npm test
...
```

## License

MIT
