# 11-react-typescript

React JS app showing two counter components, where the code for the counter component is
in a separate file.

The code is written in TypeScript and JSX, and so needs transpiling before running.

## Installation

CD to this directory, and run

```sh
$ npm ci
$ npm run build
...
```

The build phase transpiles the TypeScript/JSX code and also updates the importmap
with the correct versions of the `react`, `react-dom`, and `htm` packages.

## Basic use

To see the web app, just run `npm start` and navigate with your browser to
 <http://localhost:3000>.

## Explanation

The HTML is in [`./src/index.html`](./src/index.html) and, like all modern web apps,
is a simple HTML that mostly `<script src>`-s the JavaScript code in
[`./src/11-react-typescript.tsx`](./src/11-react-typescript.tsx).

Since the browser does not understand TypeScript, we're transpiling it into JS, and putting
it (including the HTML) in the [`./lib`](./lib/) directory. This happens when we `build`.

The TyupeScript is a React JS app that displays two Counter Components. The code for the counter
component is in [`./src/counter-component.tsx`](./src/counter-component.tsx),
which is imported from the main file using

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

> Note: the test code transpiles the TSX code on the fly using the
[`babel-register-esm` loader](https://github.com/giltayar/babel-register-esm).

## License

MIT
