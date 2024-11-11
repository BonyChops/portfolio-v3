import { LockClosedIcon } from '@heroicons/react/24/solid'
import * as simpleIcons from 'simple-icons'
import { CustomLink } from './CustomLink'
import SimpleIconComponent from './SimpleIconComponent'

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
        {icon && <img src={icon} className='w-12 h-12 my-auto' alt={''} />}
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
