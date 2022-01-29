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

    await (await page.$('#counter-1 .increase-counter')).click()
    await (await page.$('#counter-2 .increase-counter')).click()

    expect(await page.$eval('#counter-1 .counter-value', (e) => e.textContent)).to.equal('1')
    expect(await page.$eval('#counter-2 .counter-value', (e) => e.textContent)).to.equal('1')

    await (await page.$('#counter-2 .decrease-counter')).click()

    expect(await page.$eval('#counter-1 .counter-value', (e) => e.textContent)).to.equal('1')
    expect(await page.$eval('#counter-2 .counter-value', (e) => e.textContent)).to.equal('0')
  })
})
