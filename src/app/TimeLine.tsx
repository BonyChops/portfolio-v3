"use client";

import SimpleIconComponent from "@/Components/SimpleIconComponent";
import Tag from "@/Components/Tag";
import TimeTreeEvent from "@/Components/TimeTreeEvent";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CakeIcon,
  CommandLineIcon,
  MusicalNoteIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  siFastify,
  siFirebase,
  siGithub,
  siGo,
  siGooglecloud,
  siJavascript,
  siLinux,
  siNodedotjs,
  siPhp,
  siPython,
  siReact,
  siScratch,
  siSocketdotio,
  siUbuntu,
} from "simple-icons";
import Image from "next/image";
import { CustomLink } from "@/Components/CustomLink";

export default function TimeLine() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center opacity-0 transform animate-slideup-delay">
        <button
          className="flex p-2"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          <div
            className={`transition-colors relative rounded-full h-8 w-16 mr-2 shadow-xl dark:bg-opacity-70 ${
              showAll
                ? "bg-green-400 dark:bg-green-400"
                : "bg-gray-200 dark:bg-slate-700"
            }`}
          >
            <div
              className={`absolute left-0 top-0 h-8 w-8 rounded-full bg-white shadow-xl transition-transform ${
                showAll && "translate-x-full"
              }`}
            ></div>
          </div>
          <p className="text-xl font-bold">Show All</p>
        </button>
      </div>
      <p className="text-center my-4 opacity-0 transform animate-slideup-delay">
        See also:{" "}
        <CustomLink
          href="https://wantedly.com/id/Bony_Chops"
          className="text-blue-600"
        >
          Wantedly
        </CustomLink>
      </p>

      <div className="flex flex-col items-center">
        <TimeTreeEvent
          noAbove
          className="opacity-0 transform animate-slideup-delay"
        >
          <p className="text-sm opacity-60">2002.07.30・0 y.o.</p>
          <p className="text-lg flex font-bold">
            <CakeIcon className="h-6 w-6 mr-2" />
            誕生
          </p>
        </TimeTreeEvent>
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2012・10 y.o.</p>
            <p className="text-lg flex font-bold">
              <SimpleIconComponent
                size={24}
                iconData={siScratch}
                className="mr-2 "
              />
              Scratch を使う
            </p>
          </TimeTreeEvent>
        )}
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2013・11 y.o.</p>
            <p className="text-lg flex font-bold">
              <CommandLineIcon className="h-6 w-6 mr-2 flex-shrink-0" />
              HSP を使い始める
            </p>
            <p className="text-sm">
              人生で初めてコードベースの言語を学びました。
            </p>
          </TimeTreeEvent>
        )}
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2017・15 y.o.</p>
            <p className="text-lg flex font-bold">
              <MusicalNoteIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
              文化祭劇のSE再生ソフトを開発
            </p>
            <div className="flex">
              <Tag title="HSP" className="mr-2 my-2" />
            </div>
          </TimeTreeEvent>
        )}
        <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
          <p className="text-sm opacity-60">2018.04・16 y.o.</p>
          <p className="text-lg flex font-bold">
            <AcademicCapIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            長野工業高等専門学校 入学
          </p>
          <p>{showAll ? "電子制御工学科" : "電子情報工学科"}</p>
        </TimeTreeEvent>

        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2019.04・17 y.o.</p>
            <p className="text-lg flex font-bold">
              <AcademicCapIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
              電子情報工学科 転科
            </p>
            <p>長野工業高等専門学校</p>
          </TimeTreeEvent>
        )}
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2019・19 y.o.</p>
            <p className="text-lg flex font-bold">
              <SimpleIconComponent
                size={24}
                iconData={siPhp}
                className="mr-2"
              />
              PHP を使い始める
            </p>
          </TimeTreeEvent>
        )}
        <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
          <p className="text-sm opacity-60">2022.10 - 2023.07・20 y.o.</p>
          <p className="text-lg flex font-bold">
            <BuildingOffice2Icon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            株式会社ケイアイエスエス
          </p>
          <p>アルバイト</p>
        </TimeTreeEvent>
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2020.04・19 y.o.</p>
            <p className="text-lg flex font-bold">
              <SimpleIconComponent
                size={24}
                iconData={siJavascript}
                className="mr-2"
              />
              JavaScript を使い始める
            </p>
            <div className="flex flex-wrap">
              <Tag
                title="Node.js"
                iconData={siNodedotjs}
                className="mr-2 my-2"
              />
            </div>
          </TimeTreeEvent>
        )}
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2020.05・20 y.o.</p>
            <p className="text-lg flex font-bold">
              <SimpleIconComponent
                size={24}
                iconData={siUbuntu}
                className="mr-2"
              />
              Ubuntu をメインで使い始める
            </p>
            <div className="flex flex-wrap">
              <Tag
                title="Linux"
                iconData={{ ...siLinux, hex: "#FFFFFF" }}
                className="mr-2 my-2"
              />
            </div>
          </TimeTreeEvent>
        )}
        <TimeTreeEvent
          className="opacity-0 transform animate-slideup-delay"
          boxClassName="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-600 dark:to-yellow-900"
        >
          <p className="text-sm opacity-60">2020 10.7 - 10.28・18 y.o.</p>
          <p className="text-lg flex font-bold">
            <TrophyIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            Web×IoT メイカーズチャレンジ 2020-21 in 信州 特別賞受賞
          </p>
          <div className="flex flex-wrap">
            <Tag
              title="JavaScript"
              iconData={siJavascript}
              className="mr-2 mb-2"
            />
            <Tag title="MaterializeCSS" className="mr-2 mb-2" />
            <Tag
              title="GitHub Pages"
              iconData={siGithub}
              className="mr-2 mb-2"
            />
          </div>
          <p>
            <CustomLink href="/posts/covidiffuser" className="text-blue-600">
              詳細
            </CustomLink>
          </p>
        </TimeTreeEvent>
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2021.04・18 y.o.</p>
            <p className="text-lg flex font-bold">
              <Image
                src="/logo.svg"
                width={24}
                height={24}
                className="mr-2"
                alt="Bony_Chops"
              />
              現在のアイコンに
            </p>
          </TimeTreeEvent>
        )}
        <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
          <p className="text-sm opacity-60">2022.10 - 2023.07・20 y.o.</p>
          <p className="text-lg flex font-bold">
            <BuildingOffice2Icon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            株式会社ケイアイエスエス
          </p>
          <p>アルバイト</p>
        </TimeTreeEvent>
        <TimeTreeEvent
          className="opacity-0 transform animate-slideup-delay"
          boxClassName="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-600 dark:to-yellow-900"
        >
          <p className="text-sm opacity-60">2022 11.28 - 12.17・20 y.o.</p>
          <p className="text-lg flex font-bold">
            <TrophyIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            Hack U KOSEN 2022 最優秀賞
          </p>
          <div className="flex flex-wrap">
            <Tag title="Firebase" iconData={siFirebase} className="mr-2 mb-2" />
            <Tag
              title="Cloud Run"
              iconData={siGooglecloud}
              className="mr-2 mb-2"
            />
            <Tag title="NodeJS" iconData={siNodedotjs} className="mr-2 mb-2" />
            <Tag title="Python" iconData={siPython} className="mr-2 mb-2" />
            <Tag title="React" iconData={siReact} className="mr-2 mb-2" />
            <Tag title="Fastify" iconData={siFastify} className="mr-2 mb-2" />
            <Tag title="ejs" className="mr-2 mb-2" />
            <Tag
              title="WebSocket"
              iconData={siSocketdotio}
              className="mr-2 mb-2"
            />
          </div>
          <p>
            <CustomLink href="/posts/tenten" className="text-blue-600">
              詳細
            </CustomLink>
          </p>
        </TimeTreeEvent>
        <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
          <p className="text-sm opacity-60">2023.03・20 y.o.</p>
          <p className="text-lg flex font-bold">
            <AcademicCapIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            長野工業高等専門学校 卒業
          </p>
        </TimeTreeEvent>
        <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
          <p className="text-sm opacity-60">2023.04・20 y.o.</p>
          <p className="text-lg flex font-bold">
            <AcademicCapIcon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            筑波大学 3年次編入学
          </p>
          <p>知識情報・図書館学類</p>
        </TimeTreeEvent>
        {showAll && (
          <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
            <p className="text-sm opacity-60">2023.06・20 y.o.</p>
            <p className="text-lg flex font-bold">
              <SimpleIconComponent size={24} iconData={siGo} className="mr-2" />
              Go を使い始める
            </p>
          </TimeTreeEvent>
        )}
        <TimeTreeEvent className="opacity-0 transform animate-slideup-delay">
          <p className="text-sm opacity-60">2023.07 - 2023.09・20 y.o.</p>
          <p className="text-lg flex font-bold">
            <BuildingOffice2Icon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            ピクシブ株式会社
          </p>
          <p>インターン</p>
        </TimeTreeEvent>
        <TimeTreeEvent
          className="opacity-0 transform animate-slideup-delay"
          noBottom={!showAll}
        >
          <p className="text-sm opacity-60">2023・21 y.o.</p>
          <p className="text-lg flex font-bold">
            <BuildingOffice2Icon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
            株式会社ナレッジワーク
          </p>
          <p>Enablement Internship for Practical Development（インターン）</p>
        </TimeTreeEvent>
        {showAll && (
          <TimeTreeEvent
            className="opacity-0 transform animate-slideup-delay"
            noBottom
          >
            <p className="text-sm opacity-60">2023・21 y.o.</p>
            <p className="text-lg flex font-bold">
              <BuildingOffice2Icon className="h-6 w-6 mr-2 flex-shrink-0 my-auto" />
              ？？？
            </p>
          </TimeTreeEvent>
        )}
      </div>
    </div>
  );
}
