/**
 * Renders public/brochure.html → public/brochure.pdf
 * Run once: node scripts/generate-brochure.cjs
 */

const puppeteer = require('puppeteer')
const path = require('path')

;(async () => {
  const htmlPath = path.resolve(__dirname, '..', 'public', 'brochure.html')
  const pdfPath  = path.resolve(__dirname, '..', 'public', 'brochure.pdf')

  console.log('Launching headless browser…')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  })

  const page = await browser.newPage()

  // Load the local HTML file
  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  })

  // Wait for Google Fonts to load (they're remote; fall back after 5 s)
  await page.evaluate(() => document.fonts.ready)
  await new Promise(r => setTimeout(r, 2000))

  // Generate A4 PDF
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  })

  await browser.close()
  console.log(`✅  PDF saved → ${pdfPath}`)
})()
