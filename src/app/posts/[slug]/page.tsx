import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { compile } from "xdm";
import { parse } from "yaml";
import dynamic from "next/dynamic";

import Image from "next/image";
import Tag from "@/Components/Tag";
import { tags } from "@/utils/tags";
// import Posts from "@/Components/Posts";

type HeroIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

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
  Heroicon?: HeroIcon;
}

export const metadata = {
  title: "Works",
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const targetPath = path.join(process.cwd(), `src/app/mdposts/${slug}.mdx`);
  if (!fs.existsSync(targetPath)) {
    // response as 404
    return <div>Post not found {targetPath}</div>;
  }
  const data = fs.readFileSync(targetPath, "utf-8");

  const DynamicComponent = dynamic(() => import(`../../mdposts/${slug}.mdx`));

  const { meta } = (await import(`../../mdposts/${slug}.mdx`)) as {
    meta: Meta;
  };

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
