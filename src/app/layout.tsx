import './globals.css'
import 'nprogress/nprogress.css'
import Header from '@/Components/Header'
import ProgressHandler from '@/Components/ProgressHandler'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { generateOGMetadata } from '@/lib/opengraph'
import { GoogleAnalytics } from '@next/third-parties/google'
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
    <html suppressHydrationWarning lang='ja'>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <head>
        {/*
          TypeScript Playground: https://www.typescriptlang.org/play/?target=2#code/BQMwrgdgxgLglgewgAmASmQbwFDOVJAZxmQAcAnAUxEvMOQF5kB3OCAEwWYDoBbAQxhQAFgFlK7OP2AAiYBWq1CAWgIAbBOWWERlXpQBcydv3IBrNDLR9BuwrjzIA-MhknzMh3iMy1cAObCMDIA3A4EEMTIIOQIvADKMJr8-pSMyBpQ-GqJyancqTAAkjB6sgBGAOyE7JQAbqoIGlq8CLVWYXgRUeqaom2Grn6BwcgAPq7uZjKMXqgxcbnkKWkMa66EAJ7EejNjEwsJScupjEwQYGpqGC4KNHTIRodLK2dMvgFBMy4fIzM+U1CDlYHC43E4UDA+ggMHBCEh0JgAFE1HpKDDwYJ+IRKLDeuR+rV0vjCZQwgBfNDoEJAA
          Terser REPL: https://try.terser.org/
          Blog: https://blog.stin.ink/articles/how-to-implement-a-perfect-dark-mode
       */}
        <script
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: ダークテーマ切り替え用 */
          dangerouslySetInnerHTML={{
            __html: `!function(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",o=localStorage.getItem("theme"),t="system"===o||null==o?e:"light"===o?"light":"dark";window.document.documentElement.dataset.theme=t}();`,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Header />
        <ProgressHandler />
      </body>
    </html>
  )
}
