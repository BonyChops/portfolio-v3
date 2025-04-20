import ExportedImage from 'next-image-export-optimizer'

export default function SimpleIconComponent(props: {
  size: number
  className?: string
  alt?: string
  iconData: {
    slug: string
    hex: string
  }
  slug?: string
  hex?: string
}) {
  const { size, slug, hex, className, alt, iconData } = props
  return (
    <ExportedImage
      width={size}
      height={size}
      src={`https://cdn.simpleicons.org/${slug ?? iconData.slug}/${
        hex ?? iconData.hex
      }`}
      alt={alt ?? `${slug} icon`}
      className={className}
      unoptimized
      placeholder={undefined}
    />
  )
}
