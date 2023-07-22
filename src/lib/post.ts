import { HeroIcon } from "./heroicon";
import path from "path";
import fs from "fs";

interface Meta {
    title: string;
    tags: string[];
    image?: string;
    symbol?: string;
    Heroicon?: HeroIcon;
  }

export async function getPostData(slug: string): Promise<Meta | null>{
    const targetPath = path.join(process.cwd(), `src/app/mdposts/${slug}.mdx`);
    if (!fs.existsSync(targetPath)) {
      return null;
    }
  
    const { meta } = (await import(`@/app/mdposts/${slug}.mdx`)) as {
      meta: Meta;
    };

    return meta;
}