import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { compile } from "xdm";
import { parse } from "yaml";
import dynamic from "next/dynamic";

import "../../../styles/posts.css";
import Image from "next/image";
import Tag from "@/Components/Tag";
import { tags } from "@/utils/tags";
// import Posts from "@/Components/Posts";

export async function generateStaticParams() {
  const posts = fs
    .readdirSync(path.join(process.cwd(), "src/app/mdposts"))
    .map((post) => ({
      slug: post.replace(/\.mdx?$/, ""),
    }));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Meta {
  title: string;
  tags: string[];
  image?: string;
  symbol?: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const targetPath = path.join(process.cwd(), `src/app/mdposts/${slug}.mdx`);
  if (!fs.existsSync(targetPath)) {
    // response as 404
    return <div>Post not found {targetPath}</div>;
  }
  const data = fs.readFileSync(targetPath, "utf-8");

  // gray-matter を使ってフロントマターをパース
  const { content, data: frontMatter } = matter(data);
  // const compiled = await parseMdx(content);
  const DynamicComponent = dynamic(() => import(`../../mdposts/${slug}.mdx`));
  // const meta = dynamic(() =>
  //   import(`../../mdposts/${slug}.mdx`).then((mod) => mod.meta)
  // );
  const { meta } = (await import(`../../mdposts/${slug}.mdx`)) as {
    meta: Meta;
  };
  // const yamlNode = doc.children.find((node) => node.type === "yaml") as {
  //   type: "yaml";
  //   value: string;
  // };
  // let frontMatter;
  // if (yamlNode) {
  //   frontMatter = parse(yamlNode?.value ?? "");
  // }
  // test();

  return (
    <div className="min-h-screen py-24 md:px-24 px-8">
      {meta.image && (
        <img
          src={meta.image}
          alt=""
          className=" h-36 mb-4 rounded-3xl object-cover"
        />
      )}
      {meta.symbol && !meta.image && (
        <p className="font-bold text-6xl mb-12">{meta.symbol}</p>
      )}
      <h1 className="font-bold text-6xl mb-4">{meta.title}</h1>
      {meta.tags && meta.tags.length > 0 && (
        <div className="flex flex-wrap">
          <div className="dummy text-yellow-500 dark:text-yellow-400" />
          {meta.tags.map((tag, k) => (
            <Tag
              key={`tag_${k}`}
              iconData={tags[tag]?.icon}
              HeroIcon={tags[tag]?.heroIcon}
              title={tags[tag]?.name}
              className={`mr-2 mb-2 ${tags[tag]?.className}`}
            />
          ))}
        </div>
      )}
      <div className="mb-8" />
      <DynamicComponent />
    </div>
  );
}
