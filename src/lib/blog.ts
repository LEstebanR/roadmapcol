import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export interface BlogPostMeta {
  coverImage: string
  date: string
  description: string
  readingTime: string
  relatedTourHref?: string
  slug: string
  tags: string[]
  title: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

function readPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(raw)

  return {
    content,
    coverImage: data.coverImage,
    date: data.date,
    description: data.description,
    readingTime: readingTime(content).text,
    relatedTourHref: data.relatedTourHref,
    slug,
    tags: data.tags,
    title: data.title,
  }
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!getAllPostSlugs().includes(slug)) return null
  return readPost(slug)
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPost(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
