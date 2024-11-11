const imageUrl = '/assets/images/og/default/ogp.png'

export function generateOGMetadata(title?: string) {
  return {
    twitter: {
      card: 'summary_large_image',
      images: [imageUrl],
    },
    openGraph: {
      title: title ? `${title} - BonyChops` : 'BonyChops',
      siteName: 'BonyChops',
      images: {
        url: imageUrl,
        width: 1200,
        height: 600,
      },
    },
  }
}
