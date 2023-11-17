import Tag from "@/Components/Tag";
import Image from "next/image";
import {
  siAmazonaws,
  siC,
  siDocker,
  siFirebase,
  siGit,
  siGithub,
  siGo,
  siGooglecloud,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siRuby,
  siSwift,
  siTerraform,
  siTypescript,
  siVisualstudiocode,
  siWebassembly,
  siWebrtc,
} from "simple-icons";
import TimeLine from "./TimeLine";
import { whiteOgpImageIfNotExists, writeOgpImage } from "@/lib/default";
import { loadGoogleFont } from "@/lib/font";

export default async function Home() {
  await whiteOgpImageIfNotExists();

  return (
    <div className="min-h-screen pt-24">
      <div className="flex flex-col items-center justify-between ">
        <div className="fixed xl:block md:flex place-items-center xl:pr-[500px] animate-slideup">
          <div className="">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert bg-white rounded-full mr-20"
              src="/logo_dark.svg"
              alt="Next.js Logo"
              width={180}
              height={180}
              priority
            />
          </div>
          <div className="z-50">
            <div className="text-5xl font-extrabold font-sans z-50">
              Bony_Chops
            </div>
            <div className="text-2xl font-bold font-sans mt-2">
              Student Developer
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:ml-[500px]">
          <div className="relative mt-96 xl:mt-0 md:mt-64 py-20 md:px-10 px-5 w-full bg-slate-100 dark:bg-black md:rounded-xl backdrop-blur-sm md:max-w-2xl transition-opacity bg-opacity-90 dark:bg-opacity-70">
            <h2 className="text-3xl font-bold opacity-0 transform animate-slideup-delay">
              Profile
            </h2>
            <table className="text-lg mb-8">
              <tbody>
                {Object.entries({
                  所属: "筑波大学 情報学群 知識情報・図書館学類",
                  年齢: `${Math.floor(
                    (new Date().getTime() - new Date(2002, 6, 30).getTime()) /
                      1000 /
                      60 /
                      60 /
                      24 /
                      365.25
                  )} 歳`,
                  PGPキー: "457B F5D6 9ECE 0883",
                  資格: [
                    "基本情報技術者試験",
                    "TOEIC L&R 860点",
                    "英検 2級",
                    "普通自動車第一種運転免許",
                  ],
                }).map((v, k) => (
                  <tr key={k} className="align-top ">
                    <th className="pr-12 text-right opacity-0 transform animate-slideup-delay">
                      {v[0]}
                    </th>
                    <td>
                      {Array.isArray(v[1]) ? (
                        <ul className="list-none">
                          {v[1].map((v, k) => (
                            <li
                              key={k}
                              className="opacity-0 transform animate-slideup-delay"
                            >
                              {v}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="opacity-0 transform animate-slideup-delay">
                          {v[1]}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="text-3xl font-bold my-2 opacity-0 transform animate-slideup-delay">
              Skills
            </h2>
            <h3 className="text-2xl font-bold my-2 bg-gradient-to-r bg-clip-text text-transparent from-yellow-400 to-yellow-950 opacity-0 transform animate-slideup-delay">
              Main
            </h3>
            <div className="flex flex-wrap">
              {Object.entries({
                NodeJS: siNodedotjs,
                VSCode: siVisualstudiocode,
                Git: siGit,
                GitHub: siGithub,
                "Google Cloud": siGooglecloud,
                Firebase: siFirebase,
                React: siReact,
                OAuth: null,
              }).map(([k, v], key) => (
                <Tag
                  key={key}
                  iconData={v}
                  title={k}
                  className="mr-2 mb-2 opacity-0 transform animate-slideup-delay"
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold my-2 opacity-0 transform animate-slideup-delay">
              I have
            </h3>
            <div className="flex flex-wrap">
              {Object.entries({
                C: siC,
                Python: siPython,
                Ruby: siRuby,
                TypeScript: siTypescript,
                "Next.js": siNextdotjs,
                Go: siGo,
                Docker: siDocker,
                AWS: siAmazonaws,
                Terraform: siTerraform,
              }).map(([k, v], key) => (
                <Tag
                  key={key}
                  iconData={v}
                  title={k}
                  className="mr-2 mb-2 opacity-0 transform animate-slideup-delay"
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold my-2 opacity-0 transform animate-slideup-delay">
              Learning
            </h3>
            <div className="flex flex-wrap">
              {Object.entries({
                WebRTC: siWebrtc,
                WebAssembly: siWebassembly,
                Swift: siSwift,
              }).map(([k, v], key) => (
                <Tag
                  key={key}
                  iconData={v}
                  title={k}
                  className="mr-2 mb-2 opacity-0 transform animate-slideup-delay"
                />
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-8 opacity-0 transform animate-slideup-delay">
              Timeline
            </h2>
            <TimeLine />
          </div>
          {/* Vertically middle */}
          <div className="px-10 w-full h-32 align-middle flex flex-col items-center justify-center text-center">
            <p>BonyChops / portfolio-v3</p>
            {/* <p>Commit: 770ef26</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
