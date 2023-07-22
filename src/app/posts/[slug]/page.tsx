import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { compile } from "xdm";
import { parse } from "yaml";
import dynamic from "next/dynamic";

import Image from "next/image";
import Tag from "@/Components/Tag";
import { tags } from "@/utils/tags";
import { getPostData } from "@/lib/post";
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const meta = await getPostData(slug);

  if (!meta) {
    return {
      title: "404",
    };
  }

  return { title: meta.title };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const meta = await getPostData(slug);

  if (!meta) {
    // response as 404
    return <div>Post not found: {slug}</div>;
  }

  const DynamicComponent = dynamic(() => import(`../../mdposts/${slug}.mdx`));

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
      {meta.Heroicon && (
        <p className="font-bold text-6xl mb-12">
          {<meta.Heroicon className="w-16 h-16" />}
        </p>
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
