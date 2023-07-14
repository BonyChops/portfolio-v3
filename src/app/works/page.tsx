import fs from "fs";
import { parse } from "yaml";

interface Work {
  title: string;
  description: string;
}

interface Works extends Array<Work> {}

export default function Works() {
  const works: Works = parse(
    fs.readFileSync("src/app/works/works.yml", "utf-8")
  );

  return (
    <div className="min-h-screen py-24 px-24">
      <h2 className="text-4xl font-bold mb-10">Works</h2>
      <div>
        {works.map((work, k) => (
          <div
            className="rounded-xl w-72 h-52 bg-white dark:bg-gray-900"
            key={k}
          >
            <div
              className="w-full rounded-t-xl h-32 bg-gray-500 bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MtFuji_FujiCity.jpg/220px-MtFuji_FujiCity.jpg)",
              }}
            ></div>
            <div className="px-2 py-2">
              <p className="text-2xl font-bold">{work.title}</p>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
