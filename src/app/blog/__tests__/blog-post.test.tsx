import BlogPostPage, {
  generateMetadata,
  generateStaticParams,
} from '@/app/blog/[slug]/page'
import { render, screen } from '@testing-library/react'
import { notFound } from 'next/navigation'

vi.mock('next/image', () => ({
  default: (props: { alt: string; sizes?: string; src: string }) => (
    <img alt={props.alt} src={props.src} sizes={props.sizes} />
  ),
}))

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
}))

vi.mock('@/lib/markdown', () => ({
  renderMarkdown: async (content: string) => `<p>${content}</p>`,
}))

const posts = {
  'post-a': {
    content: 'Hello world content',
    coverImage: 'https://example.com/a.jpg',
    date: '2026-01-01',
    description: 'Description A',
    readingTime: '3 min read',
    relatedTourHref: '/tours/guatape',
    slug: 'post-a',
    tags: ['guide'],
    title: 'Post A',
  },
  'post-b': {
    content: 'More content',
    coverImage: 'https://example.com/b.jpg',
    date: '2026-01-02',
    description: 'Description B',
    readingTime: '5 min read',
    slug: 'post-b',
    tags: ['guide'],
    title: 'Post B',
  },
}

vi.mock('@/lib/blog', () => ({
  getAllPostSlugs: () => Object.keys(posts),
  getPostBySlug: (slug: string) => posts[slug as keyof typeof posts] ?? null,
}))

describe('generateStaticParams', () => {
  it('returns params for every slug', () => {
    expect(generateStaticParams()).toEqual([
      { slug: 'post-a' },
      { slug: 'post-b' },
    ])
  })
})

describe('generateMetadata', () => {
  it('returns metadata for a known post', async () => {
    const result = await generateMetadata({
      params: Promise.resolve({ slug: 'post-a' }),
    })
    expect(result.title).toBe('Post A')
    expect(result.description).toBe('Description A')
    expect(result.alternates?.canonical).toBe('/blog/post-a')
  })

  it('returns empty object for an unknown post', async () => {
    const result = await generateMetadata({
      params: Promise.resolve({ slug: 'unknown' }),
    })
    expect(result).toEqual({})
  })
})

describe('BlogPostPage', () => {
  it('renders the post title and rendered markdown content for a known slug', async () => {
    const element = await BlogPostPage({
      params: Promise.resolve({ slug: 'post-a' }),
    })
    const { container } = render(element)
    expect(screen.getByText('Post A')).toBeInTheDocument()
    expect(container.querySelector('.blog-content')).toHaveTextContent(
      'Hello world content'
    )
  })

  it('links the CTA to the related tour when present', async () => {
    const element = await BlogPostPage({
      params: Promise.resolve({ slug: 'post-a' }),
    })
    render(element)
    expect(screen.getByText('See our tours').closest('a')).toHaveAttribute(
      'href',
      '/tours/guatape'
    )
  })

  it('falls back to /tours when there is no related tour', async () => {
    const element = await BlogPostPage({
      params: Promise.resolve({ slug: 'post-b' }),
    })
    render(element)
    expect(screen.getByText('See our tours').closest('a')).toHaveAttribute(
      'href',
      '/tours'
    )
  })

  it('declares an accurate sizes attribute on the cover image', async () => {
    const element = await BlogPostPage({
      params: Promise.resolve({ slug: 'post-a' }),
    })
    render(element)
    expect(screen.getByAltText('Post A')).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 100vw, 768px'
    )
  })

  it('calls notFound for an unknown slug', async () => {
    await expect(
      BlogPostPage({ params: Promise.resolve({ slug: 'unknown' }) })
    ).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalled()
  })
})
