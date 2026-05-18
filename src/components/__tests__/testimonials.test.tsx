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
    expect(screen.getByText(/Great tour experience!/)).toBeInTheDocument()
    expect(screen.getByText(/Amazing adventure!/)).toBeInTheDocument()
  })

  it('renders author names and locations', () => {
    render(<Testimonials />)
    expect(screen.getByText('Test Author')).toBeInTheDocument()
    expect(screen.getByText('Test City')).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
  })
})
