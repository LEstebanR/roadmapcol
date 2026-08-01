import { JsonLd } from '@/components/json-ld'
import { Button } from '@/components/ui/button'
import { PostTitle } from '@/components/ui/typography/typography'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { renderMarkdown } from '@/lib/markdown'
import { blogBreadcrumbSchema, blogPostingSchema } from '@/lib/structured-data'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    alternates: { canonical: `/blog/${post.slug}` },
    description: post.description,
    openGraph: { images: [{ alt: post.title, url: post.coverImage }] },
    title: post.title,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const html = await renderMarkdown(post.content)

  return (
    <article className="mx-auto my-14 flex w-full max-w-3xl flex-col gap-6 px-4 md:px-8">
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd data={blogBreadcrumbSchema(post.title, post.slug)} />
      <div className="relative h-64 w-full overflow-hidden rounded-md md:h-96">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <PostTitle>{post.title}</PostTitle>
      <p className="text-muted-foreground text-center text-sm">
        {new Date(post.date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}{' '}
        · {post.readingTime}
      </p>
      <div
        className="blog-content mx-auto w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="bg-muted flex flex-col items-center gap-4 rounded-md p-6 text-center">
        <p className="font-semibold">
          Ready to experience it for yourself in Colombia?
        </p>
        <Link href={post.relatedTourHref ?? '/tours'}>
          <Button>See our tours</Button>
        </Link>
      </div>
    </article>
  )
}
