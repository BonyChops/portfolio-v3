"use client";

import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import HeaderLink from "./HeaderLink";
import Image from "next/image";

export default function Header() {
  const [showMenu, setShowMenuOrigin] = useState(false);
  const [showMenuAnimate, setShowMenuAnimate] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setShowMenu = (value: boolean) => {
    if (value) {
      setShowMenuOrigin(value);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setShowMenuAnimate(value);
      }, 30);
    } else {
      document.body.style.overflow = "auto";
      setShowMenuAnimate(value);
      setTimeout(() => {
        setShowMenuOrigin(value);
      }, 300);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.body.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {showMenu && (
        <div
          className={`transition-all fixed top-0 left-0 w-full h-full bg-white dark:bg-black backdrop-blur-md flex flex-col items-center align-middle justify-center gap-4 bg-opacity-70 dark:bg-opacity-70 ${
            showMenuAnimate ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert bg-white rounded-full mb-10"
            src="/logo_dark.svg"
            alt="Next.js Logo"
            width={180}
            height={180}
            priority
          />
          <HeaderLink
            onClick={() => {
              setShowMenu(false);
            }}
            href="/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            onClick={() => {
              setShowMenu(false);
            }}
            href="/works"
          >
            Works
          </HeaderLink>
          {/* <HeaderLink
            onClick={() => {
              setShowMenu(false);
            }}
            href="/contacts"
          >
            Contacts
          </HeaderLink> */}
          <HeaderLink
            onClick={() => {
              setShowMenu(false);
            }}
            href="/posts/2023-06-24"
          >
            Post Page [Sample]
          </HeaderLink>
          <HeaderLink
            onClick={() => {
              setShowMenu(false);
            }}
            href="https://v2.bonychops.com"
            className="mt-10"
          >
            Previous Version
          </HeaderLink>
        </div>
      )}
      <div className="fixed top-16 right-0 mr-24 flex">
        {/* <button
          onClick={() => {
            toggleDarkMode();
          }}
          className="relative rounded-xl w-12 h-12 bg-white shadow-md mr-4"
        >
          {isDarkMode ? (
            <MoonIcon className="w-6 h-6 mx-auto" />
          ) : (
            <SunIcon className="w-6 h-6 mx-auto" />
          )}
        </button> */}
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="relative rounded-xl w-12 h-12 bg-white dark:bg-gray-900 shadow-md"
        >
          {showMenuAnimate ? (
            <XMarkIcon className="w-6 h-6 mx-auto" />
          ) : (
            <Bars3Icon className="w-6 h-6 mx-auto" />
          )}
        </button>
      </div>
    </>
  );
}
