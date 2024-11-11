import fs from 'node:fs'
import path from 'node:path'
const { argv } = process

const main = () => {
  const name = argv[2]

  if (!name) {
    console.error('No path provided')
    process.exit(1)
  }

  //generate random emoji with no package
  const randomEmoji = (() => {
    const emojis = [
      '🐶',
      '🐱',
      '🐭',
      '🐹',
      '🐰',
      '🦊',
      '🐻',
      '🐼',
      '🐻',
      '🐨',
      '🐯',
      '🦁',
      '🐮',
      '🐷',
      '🐽',
      '🐸',
      '🐵',
      '🙈',
      '🙉',
      '🙊',
    ]
    return emojis[Math.floor(Math.random() * emojis.length)]
  })()

  const content = `export const meta = {
  title: "${name}",
  symbol: "${randomEmoji}",
  date: "${new Date().toISOString()}",
  //   image: "/assets/images/posts/${name}.png",
  //   tags: [],
};
`

  fs.writeFileSync(
    path.resolve(__dirname, `../src/app/mdposts/${name}.mdx`),
    content,
    'utf-8',
  )
  console.log(`Created src/app/mdposts/${name}.mdx`)
}

main()
