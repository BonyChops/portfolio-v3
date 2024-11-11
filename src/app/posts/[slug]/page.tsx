import fs, { write } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
// import { compile } from "xdm";
import { parse } from 'yaml'

import Tag from '@/Components/Tag'
import { getPostData, writeOgpImage } from '@/lib/post'
import { tags } from '@/utils/tags'
import Image from 'next/image'

// import Posts from "@/Components/Posts";

import { loadGoogleFont } from '@/lib/font'
import * as heroIcon from '@heroicons/react/24/solid'

export async function generateStaticParams() {
  const posts = fs
    .readdirSync(path.join(process.cwd(), 'src/app/mdposts'))
    .map(post => ({
      slug: post.replace(/\.mdx?$/, ''),
    }))

  const fontMedium = fs.readFileSync(path.join(process.cwd(), 'fonts/font.ttf'))

  await Promise.all(
    posts.map(async post => {
      await writeOgpImage(post.slug, fontMedium)
    }),
  )

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const meta = await getPostData(slug)
  const imageUrl = `/assets/images/og/${slug}/ogp.png`

  if (!meta) {
    return {
      title: '404',
    }
  }

  return {
    title: meta.title,
    twitter: {
      card: 'summary_large_image',
      images: [imageUrl],
    },
    openGraph: {
      title: meta.title,
      siteName: 'BonyChops',
      images: {
        url: imageUrl,
        width: 1200,
        height: 600,
      },
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const meta = await getPostData(slug)

  if (!meta) {
    // response as 404
    return <div>Post not found: {slug}</div>
  }

  const DynamicComponent = dynamic(() => import(`../../mdposts/${slug}.mdx`))

  const Heroicon = heroIcon[meta.heroicon as keyof typeof heroIcon]

  return (
    <div className='min-h-screen py-24 md:px-24 px-8'>
      {meta.image && (
        <img
          src={meta.image}
          alt=''
          className=' h-36 mb-4 rounded-3xl object-cover'
        />
      )}
      {meta.symbol && !meta.image && (
        <p className='font-bold text-6xl mb-12'>{meta.symbol}</p>
      )}
      {Heroicon && (
        <p className='font-bold text-6xl mb-12'>
          {<Heroicon className='w-16 h-16' />}
        </p>
      )}
      <h1 className='font-bold text-6xl mb-4'>{meta.title}</h1>
      {meta.tags && meta.tags.length > 0 && (
        <div className='flex flex-wrap'>
          <div className='dummy text-yellow-500 dark:text-yellow-400' />
          {meta.tags.map((tag, k) => (
            <Tag
              key={`tag_${k}`}
              iconData={tags[tag]?.icon}
              HeroIcon={tags[tag]?.heroIcon}
              title={tags[tag]?.name}
              className={`mr-2 mb-2 ${tags[tag]?.className}`}
            />
          ))}
        </div>
      )}
      <div className='mb-8' />
      <DynamicComponent />
    </div>
  )
}
