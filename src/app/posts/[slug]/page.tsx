import fs from "fs";
import path from "path";
import { remark } from "remark";
import frontmatter from "remark-frontmatter";
import html from "remark-html";
import { parse } from "yaml";

import "../../../styles/posts.css";

export async function generateStaticParams() {
  const posts = fs
    .readdirSync(path.join(process.cwd(), "src/posts"))
    .map((post) => ({
      slug: post.replace(/\.md$/, ""),
    }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const targetPath = path.join(process.cwd(), `src/posts/${slug}.md`);
  if (!fs.existsSync(targetPath)) {
    // response as 404
    return <div>Post not found {targetPath}</div>;
  }
  console.log(targetPath);
  const data = fs.readFileSync(targetPath, "utf-8");
  const file = await remark()
    .use(frontmatter, ["yaml"])
    .use(html)
    .process(data);

  const doc = remark().use(frontmatter).parse(data);

  const yamlNode = doc.children.find((node) => node.type === "yaml") as {
    type: "yaml";
    value: string;
  };
  let frontMatter;
  if (yamlNode) {
    frontMatter = parse(yamlNode?.value ?? "");
  }

  return (
    <div className="min-h-screen py-24 px-24">
      {frontMatter.symbol && (
        <p className="font-bold text-6xl mb-12">{frontMatter.symbol}</p>
      )}
      <h1 className="font-bold text-6xl mb-12">{frontMatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: file.toString() }} />
    </div>
  );
}
