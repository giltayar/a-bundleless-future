# 02-two-files

Vanilla JS app showing two counter components, where the code for the counter component is
in a separate file.

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
[`./src/02-two-files.js`](./src/02-two-files.js).

The JavaScript is a Vanilla JS app that displays two Counter Components. The code for the counter
component is in [`./src/counter-component.js`](./src/counter-component.js), which is imported from the main file using

```js
import {makeCounterComponent} from './counter-component.js'
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
