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
  siK3s,
  siKubernetes,
  siNextdotjs,
  siNodedotjs,
  siPhp,
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
import { CustomLink } from "@/Components/CustomLink";
import CommitDate from "@/Components/CommitDate";
import {
  BuildingOffice2Icon,
  UserIcon,
  KeyIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

export default async function Home() {
  await whiteOgpImageIfNotExists();
  const commitSha = process.env.NEXT_PUBLIC_GIT_COMMIT_SHA;
  const shortSha = commitSha?.slice(0, 7);
  const commitDate = process.env.NEXT_PUBLIC_GIT_COMMIT_DATE;
  const repoName = process.env.NEXT_PUBLIC_GITHUB_REPO_NAME;

  return (
    <div className="min-h-screen pt-24">
      <div className="flex flex-col items-center justify-between ">
        <div className="fixed xl:block md:flex place-items-center xl:pr-[500px] animate-slideup select-none">
          <div className="">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert bg-white rounded-full mr-20"
              src="/logo_dark.svg"
              alt="Next.js Logo"
              width={180}
              height={180}
              priority
              style={{
                pointerEvents: "none",
              }}
            />
          </div>
          <div className="z-50">
            <div className="text-5xl font-extrabold font-sans z-50">
              BonyChops
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
                  所属: {
                    v: "筑波大学 情報学群 知識情報・図書館学類",
                    icon: BuildingOffice2Icon,
                  },
                  年齢: {
                    v: `${Math.floor(
                      (new Date().getTime() - new Date(2002, 6, 30).getTime()) /
                        1000 /
                        60 /
                        60 /
                        24 /
                        365.25
                    )} 歳`,
                    icon: UserIcon,
                  },
                  PGPキー: { v: "457B F5D6 9ECE 0883", icon: KeyIcon },
                  資格: {
                    v: ["基本情報技術者試験", "TOEIC L&R 860点"],
                    icon: DocumentCheckIcon,
                  },
                }).map((v, k) => {
                  const Icon = v[1].icon;
                  return (
                    <tr key={k} className="align-top ">
                      <th className="pr-12 text-left opacity-0 transform animate-slideup-delay flex items-center">
                        <Icon className="w-4 mr-2" />
                        {v[0]}
                      </th>
                      <td>
                        {Array.isArray(v[1].v) ? (
                          <ul className="list-none">
                            {v[1].v.map((v, k) => (
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
                            {v[1].v}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
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
                React: siReact,
                TypeScript: siTypescript,
                "Next.js": siNextdotjs,
                Go: siGo,
                Git: siGit,
                GitHub: siGithub,
                "Google Cloud": siGooglecloud,
                Firebase: siFirebase,
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
                PHP: siPhp,
                Ruby: siRuby,
                OAuth: null,
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
              Learn Next
            </h3>
            <div className="flex flex-wrap">
              {Object.entries({
                WebRTC: siWebrtc,
                WebAssembly: siWebassembly,
                Kubernetes: siKubernetes,
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
            {repoName && (
              <p>
                <CustomLink
                  href={`https://github.com/${repoName}`}
                  className="text-blue-600"
                >
                  {repoName.split("/").join(" / ")}
                </CustomLink>
              </p>
            )}
            {commitSha && commitDate && (
              <p>
                <CustomLink
                  href={`https://github.com/${repoName}/commit/${commitSha}`}
                  className="text-blue-600"
                >
                  {shortSha}
                </CustomLink>{" "}
                <CommitDate commitDate={commitDate} />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
