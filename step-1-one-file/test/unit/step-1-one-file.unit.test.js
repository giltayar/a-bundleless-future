import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('step-1-one-file (unit)', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(`
      <h1>Counter</h1>
      <button id="decrease-counter">-</button>
      <span id="counter">0</span>
      <button id="increase-counter">+</button>
    `)
    globalThis.window = window
    globalThis.document = window.document

    await import(`../../src/step-1-one-file.js?${Math.random()}`)
  })

  it('should increment', async () => {
    document.querySelector('#increase-counter').click()

    expect(document.querySelector('#counter').textContent).to.equal('1')
  })

  it('should decrement', async () => {
    document.querySelector('#increase-counter').click()
    document.querySelector('#increase-counter').click()
    document.querySelector('#increase-counter').click()
    document.querySelector('#decrease-counter').click()

    expect(document.querySelector('#counter').textContent).to.equal('2')
  })

  it('should not decrement under 0', async () => {
    document.querySelector('#increase-counter').click()
    document.querySelector('#decrease-counter').click()
    document.querySelector('#decrease-counter').click()

    expect(document.querySelector('#counter').textContent).to.equal('0')
  })
})
