import Tag from "@/Components/Tag";
import Image from "next/image";
import {
  siC,
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
  siTypescript,
  siVisualstudiocode,
  siWebassembly,
  siWebrtc,
} from "simple-icons";
import TimeLine from "./TimeLine";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="fixed md:flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
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
            A student developer
          </div>
        </div>
      </div>

      <div className="relative mt-96 md:mt-64 py-20 px-10 w-full bg-slate-100 dark:bg-black md:rounded-xl backdrop-blur-sm md:max-w-2xl transition-opacity bg-opacity-90 dark:bg-opacity-70">
        <h2 className="text-3xl font-bold">Profile</h2>
        <table className="text-lg mb-8">
          <tbody>
            {Object.entries({
              名前: "鈴木 颯太",
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
            }).map((v, k) => (
              <tr key={k}>
                <th className="pr-12 text-right">{v[0]}</th>
                <td>{v[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-3xl font-bold my-2">Skills</h2>
        <h3 className="text-2xl font-bold my-2 bg-gradient-to-r bg-clip-text text-transparent from-yellow-400 to-yellow-950">
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
            <Tag key={key} iconData={v} title={k} className="mr-2 mb-2" />
          ))}
        </div>
        <h3 className="text-2xl font-bold my-2">I have</h3>
        <div className="flex flex-wrap">
          {Object.entries({
            C: siC,
            Python: siPython,
            Ruby: siRuby,
            TypeScript: siTypescript,
          }).map(([k, v], key) => (
            <Tag key={key} iconData={v} title={k} className="mr-2 mb-2" />
          ))}
        </div>
        <h3 className="text-2xl font-bold my-2">Learning</h3>
        <div className="flex flex-wrap">
          {Object.entries({
            "Next.js": siNextdotjs,
            WebRTC: siWebrtc,
            Go: siGo,
            WebAssembly: siWebassembly,
          }).map(([k, v], key) => (
            <Tag key={key} iconData={v} title={k} className="mr-2 mb-2" />
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-4 mt-8">Timeline</h2>
        <TimeLine />
      </div>
      {/* Vertically middle */}
      <div className="px-10 w-full h-32 align-middle flex flex-col items-center justify-center text-center">
        <p>BonyChops / portfolio-v3</p>
        <p>Commit: 770ef26</p>
      </div>
    </div>
  );
}
