import { JsonLd } from '@/components/json-ld'
import { Title } from '@/components/ui/typography/typography'
import { getAllPosts } from '@/lib/blog'
import { itemListSchema } from '@/lib/structured-data'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: '/blog' },
  description:
    'Travel guides, tips and stories about Medellín, Antioquia and Colombia — safety, itineraries, food, and our favorite day trips.',
  title: 'Travel Blog',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto my-14 flex min-h-[calc(100vh-3.5rem)] w-full max-w-7xl flex-col items-center justify-start gap-6 px-4 md:px-8">
      <JsonLd
        data={itemListSchema(
          posts.map((post) => ({
            href: `/blog/${post.slug}`,
            title: post.title,
          }))
        )}
      />
      <Title>Travel Blog</Title>
      <p className="text-muted-foreground max-w-xl text-center">
        Guides, tips and stories to help you plan the perfect trip to Medellín,
        Antioquia and Colombia.
      </p>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-md border"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-muted-foreground line-clamp-3 text-sm">
                {post.description}
              </p>
              <span className="text-muted-foreground mt-auto text-xs">
                {post.readingTime}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
