import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('counter-component unit', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(`<div id="counter"></div>`)

    globalThis.window = window
    globalThis.document = window.document

    const {makeCounterComponent} = await import(
      `../../src/a-bundleless-future-counter-component.js`
    )

    makeCounterComponent(document.querySelector('#counter'))
  })

  it('should increment', async () => {
    const counterElement = document.querySelector('#counter')

    counterElement.querySelector('.increase-counter').click()

    expect(counterElement.querySelector('.counter-value').textContent).to.equal('1')
  })

  it('should decrement', async () => {
    const counterElement = document.querySelector('#counter')

    counterElement.querySelector('.increase-counter').click()
    counterElement.querySelector('.increase-counter').click()
    counterElement.querySelector('.increase-counter').click()
    counterElement.querySelector('.decrease-counter').click()

    expect(counterElement.querySelector('.counter-value').textContent).to.equal('2')
  })

  it('should not decrement under 0', async () => {
    const counterElement = document.querySelector('#counter')

    counterElement.querySelector('.increase-counter').click()
    counterElement.querySelector('.decrease-counter').click()
    counterElement.querySelector('.decrease-counter').click()

    expect(counterElement.querySelector('.counter-value').textContent).to.equal('0')
  })
})
