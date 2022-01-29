import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('step-1-one-file (unit)', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(`
      <h1>Counter</h1>
      <div id="counter">
        <button class="decrease-counter">-</button>
        <span class="counter-value">0</span>
        <button class="increase-counter">+</button>
      </div>
    `)
    globalThis.window = window
    globalThis.document = window.document

    await import(`../../src/step-1-one-file.js?${Math.random()}`)
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
