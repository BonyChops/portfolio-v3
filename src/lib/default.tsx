import fs from 'node:fs'
import path from 'node:path'
import satori from 'satori'
import sharp from 'sharp'

export async function whiteOgpImageIfNotExists() {
  const ogPath = path.join(
    process.cwd(),
    'public/assets/images/og',
    'default',
    'ogp.png',
  )
  if (!fs.existsSync(ogPath)) {
    const fontMedium = fs.readFileSync(
      path.join(process.cwd(), 'fonts/font.ttf'),
    )

    await writeOgpImage(fontMedium)
  }
}

export async function writeOgpImage(font: ArrayBuffer) {
  const ogPath = path.join(process.cwd(), 'public/assets/images/og', 'default')
  if (!fs.existsSync(ogPath)) fs.mkdirSync(ogPath, { recursive: true })

  const image = await generateOgpImage(font)
  if (!image) {
    throw new Error('Failed to generate ogp image')
  }

  fs.writeFileSync(`${ogPath}/ogp.png`, image)
}

async function generateOgpImage(font: ArrayBuffer) {
  const svg = await satori(
    <div
      style={{
        fontSize: 72,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        style={{
          borderRadius: 60,
          marginRight: 30,
        }}
        src='https://github.com/BonyChops.png'
        alt='BonyChops'
        width={96}
        height={96}
      />
      <p>BonyChops</p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'NotoSansJP',
          data: font,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )

  return await sharp(Buffer.from(svg)).png().toBuffer()
}
