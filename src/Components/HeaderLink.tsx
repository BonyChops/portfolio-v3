import type React from 'react'
import { CustomLink } from './CustomLink'

export default function HeaderLink(props: {
  children: React.ReactNode
  href: string
  onClick?: () => void
  className?: string
}) {
  const { children, href, onClick, className } = props
  return (
    <CustomLink
      href={href}
      className={
        'transition text-4xl font-bold  border-b-2 border-transparent hover:border-gray-700 flex gap-2 ' +
        (className ?? '')
      }
      onClick={onClick}
    >
      {children}
    </CustomLink>
  )
}
