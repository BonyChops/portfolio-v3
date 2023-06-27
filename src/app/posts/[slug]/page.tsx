import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
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
  const result = await remark().use(html).process(data);
  console.log(result);

  return (
    <div className="min-h-screen py-24 px-24">
      <div dangerouslySetInnerHTML={{ __html: result.toString() }} />
    </div>
  );
}
