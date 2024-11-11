import fs from 'node:fs'
import SocialButton from '@/Components/SocialButton'
import { generateOGMetadata } from '@/lib/opengraph'
import { parse } from 'yaml'

type Socials = {
  [category: string]: Array<{
    title: string
    account?: string
    private?: boolean
    url: string
    hex?: string
    si?: string
    icon?: string
    colorReverse?: boolean
  }>
}

export const metadata = {
  title: 'Socials',
  ...generateOGMetadata('Socials'),
}

export default function Socials() {
  const socials: Socials = parse(
    fs.readFileSync('src/app/socials/socials.yml', 'utf-8'),
  )

  return (
    <div className='min-h-screen md:py-24 py-8 md:px-24 px-4'>
      <h2 className='text-4xl font-bold mb-10 animate-slideup'>Socials</h2>
      {Object.entries(socials).map(([category, socials]) => [
        <h3
          className='text-3xl font-bold my-5 opacity-0 animate-slideup-delay'
          key={`socials_title_${category}`}
        >
          {category}
        </h3>,
        <div className='flex flex-wrap flex-grow' key={`socials_${category}`}>
          {socials.map(social => (
            <SocialButton
              key={`social_button_${social.title}`}
              title={social.title}
              account={social.account}
              privateAccount={social.private}
              hex={social.hex}
              si={social.si}
              icon={social.icon}
              url={social.url}
              colorReverse={social.colorReverse}
              className='mr-2 mb-2 opacity-0 animate-slideup-delay'
            />
          ))}
        </div>,
      ])}
      <div className='flex flex-wrap' />
    </div>
  )
}
