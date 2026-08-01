import BlogIndex from '@/app/blog/page'
import { render, screen } from '@testing-library/react'

vi.mock('next/image', () => ({
  default: (props: { alt: string; src: string }) => (
    <img alt={props.alt} src={props.src} />
  ),
}))

vi.mock('@/lib/blog', () => ({
  getAllPosts: () => [
    {
      coverImage: 'https://example.com/a.jpg',
      date: '2026-01-01',
      description: 'Description A',
      readingTime: '3 min read',
      slug: 'post-a',
      tags: ['guide'],
      title: 'Post A',
    },
    {
      coverImage: 'https://example.com/b.jpg',
      date: '2026-01-02',
      description: 'Description B',
      readingTime: '5 min read',
      slug: 'post-b',
      tags: ['guide'],
      title: 'Post B',
    },
  ],
}))

describe('Blog index page', () => {
  it('renders the page title', () => {
    render(<BlogIndex />)
    expect(screen.getByText('Travel Blog')).toBeInTheDocument()
  })

  it('renders a card for every post with a link to its detail page', () => {
    render(<BlogIndex />)
    expect(screen.getByText('Post A')).toBeInTheDocument()
    expect(screen.getByText('Post B')).toBeInTheDocument()
    expect(screen.getByText('Post A').closest('a')).toHaveAttribute(
      'href',
      '/blog/post-a'
    )
  })

  it('renders each post description and reading time', () => {
    render(<BlogIndex />)
    expect(screen.getByText('Description A')).toBeInTheDocument()
    expect(screen.getByText('3 min read')).toBeInTheDocument()
  })
})
