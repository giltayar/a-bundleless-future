import {describe, it, before} from 'mocha'
import {expect} from 'chai'
import {execaCommand} from 'execa'
import puppeteer from 'puppeteer'

describe('e2e', function () {
  before(async () => {
    execaCommand('serve src')
  })

  it('should work in a browser', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')

    await (await page.$('#counter .increase-counter')).click()

    expect(await page.$eval('#counter .counter-value', (e) => e.textContent)).to.equal('1')
  })
})
