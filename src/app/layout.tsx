import './globals.css'
import 'nprogress/nprogress.css'
import GoogleAnalytics from '@/Components/GoogleAnalytics'
import Header from '@/Components/Header'
import ProgressHandler from '@/Components/ProgressHandler'
import { generateOGMetadata } from '@/lib/opengraph'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })
const siteName = 'BonyChops'

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: 'BonyChopsのポートフォリオサイトです',
  metadataBase: new URL('https://bonychops.com'),
  ...generateOGMetadata(),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <Suspense fallback={<div />}>
        <GoogleAnalytics />
      </Suspense>
      <body className={inter.className}>
        {children}
        <Header />
        <ProgressHandler />
      </body>
    </html>
  )
}
