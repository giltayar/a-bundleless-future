import fs from 'fs/promises'
import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('integ', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(await fs.readFile('src/index.html', 'utf-8'))
    globalThis.window = window
    globalThis.document = window.document

    await import(`../../src/02-two-files.js?${Math.random()}`)
  })

  it('should increment and decrement independently', async () => {
    const counter1Element = document.querySelector('#counter-1')
    const counter2Element = document.querySelector('#counter-2')

    counter1Element.querySelector('.increase-counter').click()
    expect(counter1Element.querySelector('.counter-value').textContent).to.equal('1')
    expect(counter2Element.querySelector('.counter-value').textContent).to.equal('0')

    counter2Element.querySelector('.increase-counter').click()
    expect(counter1Element.querySelector('.counter-value').textContent).to.equal('1')
    expect(counter2Element.querySelector('.counter-value').textContent).to.equal('1')

    counter2Element.querySelector('.decrease-counter').click()
    expect(counter1Element.querySelector('.counter-value').textContent).to.equal('1')
    expect(counter2Element.querySelector('.counter-value').textContent).to.equal('0')
  })
})
