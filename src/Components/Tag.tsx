import type { HeroIcon } from '@/lib/heroicon'
import type { SimpleIcon } from 'simple-icons'
import SimpleIconComponent from './SimpleIconComponent'

export default function Tag(props: {
  title: string
  iconData?: SimpleIcon | undefined | null
  HeroIcon?: HeroIcon
  className?: string
  hex?: string
}) {
  const { title, iconData, className, HeroIcon, hex } = props
  return (
    <div
      className={`transition-all hover:-translate-y-0.5 rounded-xl shadow-md px-2 py-1 flex bg-white dark:bg-gray-500 bg-opacity-50 dark:bg-opacity-50 ${className}`}
    >
      {HeroIcon && <HeroIcon className='h-6 w-6 mr-2 flex-shrink-0' />}
      {iconData && (
        <div className='mr-2 h-full flex items-center'>
          <SimpleIconComponent size={16} iconData={iconData} hex={hex} />
        </div>
      )}
      {title}
    </div>
  )
}
