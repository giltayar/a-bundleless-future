import React from 'react'
//@ts-expect-error
import {createRoot} from 'react-dom'
import {Counter} from './counter-component.js'

createRoot(document.getElementById('root')).render(
  <>
    <h1 key="1">Counter #1</h1>
    <div id="counter-1" key="2">
      <Counter />
    </div>

    <h1 key="3">Counter #2</h1>
    <div id="counter-2" key="4">
      <Counter />
    </div>
  </>,
)
