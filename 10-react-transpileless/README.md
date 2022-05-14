# 10-react-transpileless

React JS app showing two counter components, where the code for the counter component is
in a separate file.

The React code does _not_ use JSX, but rather uses template literals via the `htm` package to enable
code that does not need transpiling to work.

## Installation

CD to this directory, and run

```sh
$ npm ci
$ npm run build
...
```

The build phase updates the importmap with the correct versions of the `react`,
`react-dom`, and `htm` packages.

## Basic use

To see the web app, just run `npm start` and navigate with your browser to
 <http://localhost:3000>.

## Explanation

The HTML is in [`./src/index.html`](./src/index.html) and, like all modern web apps,
is a simple HTML that mostly `<script src>`-s the JavaScript code in
[`./src/10-react-transpileless.js`](./src/10-react-transpileless.js).

The JavaScript is a React JS app that displays two Counter Components. The code for the counter
component is in [`./src/counter-component.js`](./src/counter-component.js),
which is imported from the main file using

```js
import {makeCounterComponent} from './counter-component.js'
```

This app run in the browser without any bundling whatsoever, using the power of native browser ESM.

The React code does not use JSX, and so does not need transpiling. How? Through the magic of
the [`htm` package](https://www.npmjs.com/package/htm). So instead of this code:

```jsx
    <button
      className="decrease-counter"
      key="1"
      onClick={() => setCount((c) => Math.max(c - 1, 0))}
    >
    -
    </button>
```

We can use _this_ code:

```js

html`
    <button
      className="decrease-counter"
      key="1"
      onClick=${() => setCount((c) => Math.max(c - 1, 0))}
    >
    -
    </button>
    `
```

## Running the tests

To run the tests, run...

```sh
$ npm test
...
```

## License

MIT
