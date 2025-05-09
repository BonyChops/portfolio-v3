'use client'

import { LockClosedIcon } from '@heroicons/react/24/solid'
import Image, { type ImageLoaderProps } from 'next/image'
import {
  siBluesky,
  siDevdotto,
  siDiscord,
  siGithub,
  siGitlab,
  siGmail,
  siKeybase,
  siLeetcode,
  siLine,
  siLinkedin,
  siMedium,
  siMisskey,
  siNpm,
  siPaypal,
  siQiita,
  siWantedly,
  siX,
  siZenn,
} from 'simple-icons'
import { CustomLink } from './CustomLink'
import SimpleIconComponent from './SimpleIconComponent'

const simpleIcons = {
  siX,
  siGmail,
  siDiscord,
  siLine,
  siKeybase,
  siMisskey,
  siGithub,
  siQiita,
  siZenn,
  siBluesky,
  siGitlab,
  siMedium,
  siNpm,
  siWantedly,
  siLinkedin,
  siDevdotto,
  siLeetcode,
  siPaypal,
}

export default function SocialButton(props: {
  title: string
  account?: string
  className?: string
  url?: string
  icon?: string
  hex?: string
  si?: string
  privateAccount?: boolean
  colorReverse?: boolean
}) {
  const {
    title,
    url,
    icon,
    si,
    hex,
    colorReverse,
    account,
    className,
    privateAccount,
  } = props
  const siComponent = simpleIcons[si as keyof typeof simpleIcons]
  //   const siComponent = simpleIcons[si as keyof typeof simpleIcons];
  const Component = url ? CustomLink : 'div'
  const directLoader = ({ src }: ImageLoaderProps) => src

  return (
    <Component
      style={{ backgroundColor: `#${hex ?? siComponent?.hex ?? 'FFFFFF'}` }}
      className={`w-80 rounded-3xl flex py-2 px-4 ${className} select-none`}
      href={url}
    >
      <div className='flex flex-col h-full mr-4'>
        {siComponent && (
          <SimpleIconComponent
            iconData={siComponent}
            size={24}
            hex={colorReverse ? 'black' : 'white'}
            className='w-12 h-12 my-auto'
          />
        )}
        {icon && (
          <Image
            loader={directLoader}
            src={icon}
            width={48}
            height={48}
            className='my-auto'
            alt={''}
          />
        )}
      </div>
      <div className='flex flex-col h-full  py-2 '>
        <p
          className={`font-bold text-2xl ${
            colorReverse ? 'text-black' : 'text-white'
          }`}
        >
          {title}
        </p>
        {account && (
          <p
            className={`font-bold text-lg truncate  overflow-hidden w-52 ${
              colorReverse ? 'text-black' : 'text-white'
            }`}
          >
            {account}
          </p>
        )}
        {privateAccount && (
          <p
            className={`font-bold text-lg truncate  overflow-hidden w-52 flex ${
              colorReverse ? 'text-black' : 'text-gray-300'
            }`}
          >
            <LockClosedIcon className='h-6' /> Private
          </p>
        )}
      </div>
    </Component>
  )
}
