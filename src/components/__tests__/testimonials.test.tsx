import { Testimonials } from '@/components/testimonials'
import { render, screen } from '@testing-library/react'

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
})
