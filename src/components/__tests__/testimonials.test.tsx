import { Testimonials } from '@/components/testimonials'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

vi.mock('@/lib/data', () => ({
  TESTIMONIALS: [
    {
      author: 'Test Author',
      location: 'Test City',
      quote: 'Great tour experience!',
      rating: 5,
    },
    {
      author: 'Another Author',
      location: 'Another City',
      quote: 'Amazing adventure!',
      rating: 4,
    },
  ],
}))

describe('Testimonials', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What our travelers say')).toBeInTheDocument()
  })

  it('renders the happy travelers counter', () => {
    render(<Testimonials />)
    expect(screen.getByText(/happy travelers/i)).toBeInTheDocument()
  })

  it('renders all testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/Great tour experience!/)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Amazing adventure!/)[0]).toBeInTheDocument()
  })

  it('renders author names and locations', () => {
    render(<Testimonials />)
    expect(screen.getAllByText('Test Author')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Test City')[0]).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)
    expect(screen.getAllByLabelText('5 out of 5 stars')[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText('4 out of 5 stars')[0]).toBeInTheDocument()
  })

  it('duplicates the track for a seamless loop and hides the copy from assistive tech', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/Great tour experience!/)
    expect(quotes.length).toBe(2)

    const duplicateCard = quotes[1].closest('[aria-hidden]')
    expect(duplicateCard).toHaveAttribute('aria-hidden', 'true')

    const originalCard = quotes[0].closest('div[class*="bg-card"]')
    expect(originalCard).not.toHaveAttribute('aria-hidden')
  })

  it('loads Google reviews, expands long text, pauses, and falls back from a broken avatar', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          googleMapsUri: 'https://maps.google.com/place',
          reviews: [
            {
              author: 'Long Traveler',
              avatarUrl: 'https://example.com/avatar.jpg',
              location: 'a month ago',
              quote: 'A '.repeat(120),
              rating: 5,
            },
          ],
          userRatingCount: 12,
        }),
      })
    )

    render(<Testimonials />)

    const readMore = await screen.findByRole('button', {
      name: 'Read full review',
    })
    const track = document.querySelector('.animate-marquee')
    expect(track).toBeInTheDocument()

    fireEvent.mouseEnter(track!)
    expect(track).toHaveStyle({ animationPlayState: 'paused' })
    fireEvent.click(readMore)
    expect(readMore).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Show less' })).toBeInTheDocument()

    fireEvent.error(document.querySelector('img')!)
    expect(screen.getAllByText('LT')[0]).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Show less' }))
    fireEvent.mouseLeave(track!)
    await waitFor(() =>
      expect(track).toHaveStyle({ animationPlayState: 'running' })
    )
  })

  it('keeps the fallback reviews when the Google request fails', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false })
    vi.stubGlobal('fetch', fetchMock)

    render(<Testimonials />)

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith('/api/google-reviews')
    )
    expect(screen.getByText('What our travelers say')).toBeInTheDocument()
  })

  it('ignores a rejected Google request', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('network failure'))
    vi.stubGlobal('fetch', fetchMock)

    render(<Testimonials />)

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith('/api/google-reviews')
    )
    expect(screen.getByText('What our travelers say')).toBeInTheDocument()
  })
})
