const fs = require("fs");
const path = require("path");
const { argv } = process;

const main = () => {
  const name = argv[2];

  if (!name) {
    console.error("No path provided");
    process.exit(1);
  }

  //generate random emoji with no package
  const randomEmoji = (() => {
    const emojis = [
      "🐶",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🦊",
      "🐻",
      "🐼",
      "🐻‍❄️",
      "🐨",
      "🐯",
      "🦁",
      "🐮",
      "🐷",
      "🐽",
      "🐸",
      "🐵",
      "🙈",
      "🙉",
      "🙊",
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  })();

  const content = `---
title: ${name}
date: ${new Date().toISOString()}
# symbol: ${randomEmoji}
# image: /assets/images/posts/${name}.png
# tags: []
---
`;

  fs.writeFileSync(
    path.resolve(__dirname, `../src/posts/${name}.md`),
    content,
    "utf-8"
  );
  console.log(`Created src/posts/${name}.md`);
};

main();
