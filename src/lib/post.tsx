import { HeroIcon } from "./heroicon";
import path from "path";
import fs from "fs";
import satori from "satori";
import sharp from "sharp";

interface Meta {
  title: string;
  tags: string[];
  image?: string;
  symbol?: string;
  heroicon?: string;
}

export async function getPostData(slug: string): Promise<Meta | null> {
  const targetPath = path.join(process.cwd(), `src/app/mdposts/${slug}.mdx`);
  if (!fs.existsSync(targetPath)) {
    return null;
  }

  const { meta } = (await import(`@/app/mdposts/${slug}.mdx`)) as {
    meta: Meta;
  };

  return meta;
}

export async function writeOgpImage(slug: string, font: ArrayBuffer) {
  const ogPath = path.join(process.cwd(), "public/assets/images/og", slug);
  if (!fs.existsSync(ogPath)) fs.mkdirSync(ogPath, { recursive: true });

  const image = await generateOgpImage(slug, font);
  if (!image) {
    throw new Error("Failed to generate ogp image");
    return;
  }

  fs.writeFileSync(`${ogPath}/ogp.png`, image);
}

async function generateOgpImage(slug: string, font: ArrayBuffer) {
  const post = await getPostData(slug);
  if (!post) {
    return null;
  }

  const svg = await satori(
    <div
      style={{
        fontSize: 72,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        {/* <p
          style={{
            marginRight: 10,
          }}
        >
          {post.symbol}
        </p> */}
        {/* {post.Heroicon && (
            <post.Heroicon
              style={{
                width: 64,
                height: 64,
              }}
            />
          )} */}
        <p>{post.title}</p>
      </div>
      <p
        style={{
          display: "flex",
          position: "absolute",
          bottom: 10,
          fontSize: 46,
        }}
      >
        <img
          style={{
            borderRadius: 60,
            marginRight: 10,
          }}
          src="https://github.com/BonyChops.png"
          alt="BonyChops"
          width={64}
          height={64}
        />
        BonyChops
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "NotoSansJP",
          data: font,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );

  return await sharp(Buffer.from(svg)).png().toBuffer();
}
