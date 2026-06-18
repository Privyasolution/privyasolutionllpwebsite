/**
 * Renders public/logo-dark.svg → backend/assets/logo-email.png
 * Run once: node scripts/generate-logo-email.cjs
 */
const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

;(async () => {
  const svgPath = path.resolve(__dirname, '..', 'public', 'logo-dark.svg')
  const outDir  = path.resolve(__dirname, '..', 'backend', 'assets')
  const outPath = path.join(outDir, 'logo-email.png')

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const svgContent = fs.readFileSync(svgPath, 'utf8')

  // Original viewBox: 3655 × 1436 → render at 300 × 118 (2× deviceScaleFactor = 600 × 236 output)
  const W = 300
  const H = Math.round(W * (1436 / 3655))

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 })

  await page.setContent(`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>* { margin:0; padding:0; box-sizing:border-box; }
body { background:#ffffff; width:${W}px; height:${H}px; display:flex; align-items:center; }
svg { width:${W}px; height:auto; display:block; }
</style></head><body>${svgContent}</body></html>`, { waitUntil: 'networkidle0' })

  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: W, height: H } })
  await browser.close()

  const size = (fs.statSync(outPath).size / 1024).toFixed(1)
  console.log(`✅  Logo PNG saved → ${outPath}  (${size} KB)`)
})()
