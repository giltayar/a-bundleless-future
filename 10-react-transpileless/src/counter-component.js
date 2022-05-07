import {html} from 'htm/react'
import {useState} from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return html`
    <button
      className="decrease-counter"
      key="1"
      onClick=${() => setCount((c) => Math.max(c - 1, 0))}
    >
      -
    </button>
    <span className="counter-value" key="2">${count}</span>
    <button className="increase-counter" key="3" onClick=${() => setCount((c) => c + 1)}>+</button>
  `
}
