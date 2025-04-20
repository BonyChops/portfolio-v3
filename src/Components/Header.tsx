'use client'

import {
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import ExportedImage from 'next-image-export-optimizer'
import { useEffect, useState } from 'react'
import HeaderLink from './HeaderLink'

type Theme = 'light' | 'dark' | 'system'

export default function Header() {
  const [showMenu, setShowMenuOrigin] = useState(false)
  const [showMenuAnimate, setShowMenuAnimate] = useState(false)
  const [actualTheme, setActualTheme] =
    useState<Exclude<Theme, 'system'>>('light')
  const [theme, setTheme] = useState<Theme | null>(null)

  const setShowMenu = (value: boolean) => {
    if (value) {
      setShowMenuOrigin(value)
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        setShowMenuAnimate(value)
      }, 30)
    } else {
      document.body.style.overflow = 'auto'
      setShowMenuAnimate(value)
      setTimeout(() => {
        setShowMenuOrigin(value)
      }, 300)
    }
  }

  const toggleDarkMode = () => {
    if (theme === 'system') {
      window.document.documentElement.dataset.theme = 'light'
      localStorage.theme = 'light'
      setTheme('light')
    } else if (theme === 'light') {
      window.document.documentElement.dataset.theme = 'dark'
      localStorage.theme = 'dark'
      setTheme('dark')
    } else {
      window.document.documentElement.dataset.theme = actualTheme
      localStorage.theme = ''
      setTheme('system')
    }
  }

  useEffect(() => {
    if (window) {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      setActualTheme(theme)

      const storedTheme = localStorage.getItem('theme')
      if (storedTheme === 'dark' || storedTheme === 'light') {
        setTheme(storedTheme)
        window.document.documentElement.dataset.theme = storedTheme
      } else {
        setTheme('system')
        window.document.documentElement.dataset.theme = theme
      }
    }
  }, [])

  return (
    <>
      {showMenu && (
        <div
          className={`transition-all fixed top-0 left-0 w-full h-full bg-white dark:bg-black backdrop-blur-md flex flex-col items-center align-middle justify-center gap-4 bg-opacity-70 dark:bg-opacity-70 ${
            showMenuAnimate ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ExportedImage
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert bg-white rounded-full mb-10'
            src='/logo_dark.svg'
            alt='Next.js Logo'
            width={180}
            height={180}
            priority
          />
          <HeaderLink
            onClick={() => {
              setShowMenu(false)
            }}
            href='/'
          >
            Home
          </HeaderLink>
          <HeaderLink
            onClick={() => {
              setShowMenu(false)
            }}
            href='/works'
          >
            Works
          </HeaderLink>
          <HeaderLink
            onClick={() => {
              setShowMenu(false)
            }}
            href='/socials'
          >
            Socials
          </HeaderLink>
          <HeaderLink
            onClick={() => {
              setShowMenu(false)
            }}
            href='https://blog.b7s.dev'
          >
            <ArrowTopRightOnSquareIcon className='h-10 w-auto' />
            Blog
          </HeaderLink>
          <HeaderLink
            onClick={() => {
              setShowMenu(false)
            }}
            href='https://v2.bonychops.com'
            className='mt-10'
          >
            <ArrowTopRightOnSquareIcon className='h-10 w-auto' />
            v2
          </HeaderLink>
        </div>
      )}
      <div className='fixed md:top-16 top-8 right-0 md:mr-24 mr-8 flex'>
        <button
          type='button'
          disabled={theme === null}
          onClick={() => {
            toggleDarkMode()
          }}
          className='relative rounded-xl w-12 h-12 bg-white dark:bg-gray-900  shadow-md mr-4'
        >
          {theme === null ? (
            <ArrowPathIcon className='w-6 h-6 mx-auto animate-spin' />
          ) : theme === 'dark' ? (
            <MoonIcon className='w-6 h-6 mx-auto' />
          ) : theme === 'light' ? (
            <SunIcon className='w-6 h-6 mx-auto' />
          ) : (
            <ComputerDesktopIcon className='w-6 h-6 mx-auto' />
          )}
        </button>
        <button
          type={'button'}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
          className='relative rounded-xl w-12 h-12 bg-white dark:bg-gray-900 shadow-md'
        >
          {showMenuAnimate ? (
            <XMarkIcon className='w-6 h-6 mx-auto' />
          ) : (
            <Bars3Icon className='w-6 h-6 mx-auto' />
          )}
        </button>
      </div>
    </>
  )
}
