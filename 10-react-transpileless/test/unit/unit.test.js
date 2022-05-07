import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'
import {createRoot} from 'react-dom/client'
import {html} from 'htm/react'
import {act} from 'react-dom/test-utils'
import {Counter} from '../../src/counter-component.js'

describe('counter-component unit', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(`<div id="root"></div>`)
    globalThis.window = window
    globalThis.document = window.document
    globalThis.IS_REACT_ACT_ENVIRONMENT = true
  })

  it('should increment', async () => {
    act(() => createRoot(document.getElementById('root')).render(html`<${Counter} />`))

    act(() => document.querySelector('.increase-counter').click())

    expect(document.querySelector('.counter-value').textContent).to.equal('1')
  })

  it('should decrement', async () => {
    act(() => createRoot(document.getElementById('root')).render(html`<${Counter} />`))

    act(() => {
      document.querySelector('.increase-counter').click()
      document.querySelector('.increase-counter').click()
      document.querySelector('.increase-counter').click()
      document.querySelector('.decrease-counter').click()
    })

    expect(document.querySelector('.counter-value').textContent).to.equal('2')
  })

  it('should not decrement under 0', async () => {
    act(() => createRoot(document.getElementById('root')).render(html`<${Counter} />`))

    act(() => {
      document.querySelector('.increase-counter').click()
      document.querySelector('.decrease-counter').click()
      document.querySelector('.decrease-counter').click()
    })

    expect(document.querySelector('.counter-value').textContent).to.equal('0')
  })
})
