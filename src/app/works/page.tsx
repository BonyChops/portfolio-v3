import { CustomLink } from "@/Components/CustomLink";
import fs from "fs";
import { parse } from "yaml";

interface Work {
  title: string;
  description: string;
  img?: string;
  links?: {
    title: string;
    url: string;
    icon?: string;
  }[];
}

interface Works extends Array<Work> {}

export default function Works() {
  const works: Works = parse(
    fs.readFileSync("src/app/works/works.yml", "utf-8")
  );

  return (
    <div className="min-h-screen py-24 px-24">
      <h2 className="text-4xl font-bold mb-10">Works</h2>
      <div className="flex flex-wrap">
        {works.map((work, k) => (
          <div
            className="rounded-xl w-72  bg-white dark:bg-gray-900 mr-2 mb-2 flex flex-col"
            key={k}
          >
            <div
              className="w-full rounded-t-xl h-32 bg-gray-500 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  work.img ??
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MtFuji_FujiCity.jpg/220px-MtFuji_FujiCity.jpg"
                })`,
              }}
            ></div>

            <div className="px-2 py-2 flex flex-col justify-between flex-grow">
              <div className="mb-4">
                <p className="text-2xl font-bold mb-2">{work.title}</p>
                <p>{work.description}</p>
              </div>
              <div className="flex flex-wrap">
                {work?.links?.map((link, k) => (
                  <CustomLink
                    href={link.url}
                    key={`customlink_${k}`}
                    className="text-blue-600 mr-2 mb-2"
                  >
                    {link.title}
                  </CustomLink>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
