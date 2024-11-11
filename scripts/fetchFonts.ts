import fs from 'fs'
import path from 'path'
import { loadGoogleFont } from '../src/lib/font'

async function fetchFonts() {
  const fontDirPath = path.join(process.cwd(), 'fonts')
  if (!fs.existsSync(fontDirPath)) {
    fs.mkdirSync(fontDirPath, { recursive: true })
  }
  const fontPath = path.join(fontDirPath, 'font.ttf')

  if (!fs.existsSync(fontPath)) {
    // 使用例
    const fontBuffer = await loadGoogleFont({
      family: 'Noto Sans JP',
      weight: 700,
    })

    fs.writeFileSync(
      path.join(fontDirPath, 'font.ttf'),
      Buffer.from(fontBuffer),
    )
  }
}

fetchFonts().catch(console.error)
