import {describe, it, beforeEach} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'
import React from 'react'
import {createRoot} from 'react-dom/client'
import {act} from 'react-dom/test-utils'
import {Counter} from '../../src/counter-component.js'

describe('counter-component unit', function () {
  beforeEach(async () => {
    const {window} = new JSDOM(`<div id="root"></div>`)
    //@ts-expect-error
    globalThis.window = window
    globalThis.document = window.document
    //@ts-expect-error
    globalThis.IS_REACT_ACT_ENVIRONMENT = true
  })

  it('should increment', async () => {
    act(() => createRoot(document.getElementById('root')!).render(<Counter />))

    act(() => (document.querySelector('.increase-counter') as HTMLElement).click())

    expect(document.querySelector('.counter-value')?.textContent).to.equal('1')
  })

  it('should decrement', async () => {
    act(() => createRoot(document.getElementById('root')!).render(<Counter />))

    act(() => {
      (document.querySelector('.increase-counter') as HTMLElement).click();
      (document.querySelector('.increase-counter') as HTMLElement).click();
      (document.querySelector('.increase-counter') as HTMLElement).click();
      (document.querySelector('.decrease-counter') as HTMLElement).click();
    })

    expect(document.querySelector('.counter-value')!.textContent).to.equal('2')
  })

  it('should not decrement under 0', async () => {
    act(() => createRoot(document.getElementById('root')!).render(<Counter />))

    act(() => {
      (document.querySelector('.increase-counter') as HTMLElement).click();
      (document.querySelector('.decrease-counter') as HTMLElement).click();
      (document.querySelector('.decrease-counter') as HTMLElement).click();
    });;
;
    expect(document.querySelector('.counter-value')!.textContent).to.equal('0')
  })
})
