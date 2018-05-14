import * as puppeteer from 'puppeteer'

(async() => {
  const browser = await puppeteer.launch()
  const pages: { [type: string]: puppeteer.Page } = {}

  const cases = [
    { type: 'vue', url: '/packages/vue/demo' },
    { type: 'react', url: '/packages/react/demo' },
    { type: 'angular', url: '/packages/angular/demo/jit' },
    { type: 'aot', url: '/packages/angular/demo/aot' }
  ]

  for (const { type, url } of cases) {
    const page = await browser.newPage()
    pages[type] = page
    await page.emulate({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36' })
    await page.goto(`http://localhost:8000${url}`)
    await page.waitFor(100)
    await page.screenshot({ path: `screenshots/${type}-initial.png` })
  }

  await pages.vue.waitFor(60000)

  for (const { type } of cases) {
    await pages[type].screenshot({ path: `screenshots/${type}-60s.png` })
  }

  browser.close()
})()
