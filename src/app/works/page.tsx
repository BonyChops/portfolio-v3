import { CustomLink } from "@/Components/CustomLink";
import * as heroIcons from "@heroicons/react/24/solid";
import fs from "fs";
import React from "react";
import { parse } from "yaml";

interface Work {
  title: string;
  description: string;
  img?: string;
  heroicon?: keyof typeof heroIcons;
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
    <div className="min-h-screen md:py-24 py-8 md:px-24 px-8">
      <h2 className="text-4xl font-bold mb-10 w-24">Works</h2>
      <div className="inline-flex flex-wrap justify-center mx-auto">
        {works.map((work, k) => (
          <div
            className="rounded-xl w-72  bg-white dark:bg-gray-900 mr-2 mb-2 flex flex-col"
            key={k}
          >
            <div
              className="w-full rounded-t-xl h-32  bg-cover bg-no-repeat"
              style={
                work.img
                  ? {
                      backgroundImage: `url(${work.img})`,
                    }
                  : {}
              }
            >
              {work.heroicon && (
                <div className="h-full flex flex-col justify-between">
                  {React.createElement(heroIcons[work.heroicon], {
                    className: "w-16 h-16 mx-auto my-auto",
                  })}
                </div>
              )}
            </div>

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
