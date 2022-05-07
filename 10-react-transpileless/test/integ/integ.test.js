import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'
import {act} from 'react-dom/test-utils'
import {setTimeout} from 'timers/promises'

describe('integ', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(`<div id="root"></div>`)
    globalThis.window = window
    globalThis.document = window.document

    await import(`../../src/02-two-files.js`)
    await setTimeout(0)
    globalThis.IS_REACT_ACT_ENVIRONMENT = true
  })

  it('should increment and decrement independently', async () => {
    const counter1Element = document.querySelector('#counter-1')
    const counter2Element = document.querySelector('#counter-2')

    act(() => counter1Element.querySelector('.increase-counter').click())

    expect(counter1Element.querySelector('.counter-value').textContent).to.equal('1')
    expect(counter2Element.querySelector('.counter-value').textContent).to.equal('0')

    act(() => counter2Element.querySelector('.increase-counter').click())
    expect(counter1Element.querySelector('.counter-value').textContent).to.equal('1')
    expect(counter2Element.querySelector('.counter-value').textContent).to.equal('1')

    act(() => counter2Element.querySelector('.decrease-counter').click())
    expect(counter1Element.querySelector('.counter-value').textContent).to.equal('1')
    expect(counter2Element.querySelector('.counter-value').textContent).to.equal('0')
  })
})
