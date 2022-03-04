import fs from 'fs/promises'
import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('integ', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(await fs.readFile('src/index.html', 'utf-8'))
    globalThis.window = window
    globalThis.document = window.document

    await import(`../../src/01-one-file.js?${Math.random()}`)
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
