import {describe, it, before} from 'mocha'
import {expect} from 'chai'
import {spawn} from 'child_process'
import puppeteer from 'puppeteer'
import killPort from 'kill-port'

describe('e2e', function () {
  before(async () => {
    await killPort(3000)
    spawn('serve', ['.'])
  })

  it('should work in a browser', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')

    await (await page.$('#counter .increase-counter')).click()

    expect(await page.$eval('#counter .counter-value', (e) => e.textContent)).to.equal('1')
  })
})
