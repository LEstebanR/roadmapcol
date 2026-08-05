import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

vi.mock('@/components/ui/carousel-home', () => ({
  CarouselHome: () => <div data-testid="carousel-home" />,
}))

vi.mock('@/components/testimonials', () => ({
  Testimonials: () => <section data-testid="testimonials" />,
}))

vi.mock('@/components/ui/tours-carousel', () => ({
  ToursCarousel: () => <section data-testid="tours-carousel" />,
}))

describe('Home page', () => {
  it('renders CarouselHome', () => {
    render(<Home />)
    expect(screen.getByTestId('carousel-home')).toBeInTheDocument()
  })

  it('renders Testimonials section', () => {
    render(<Home />)
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
  })

  it('renders ToursCarousel section', () => {
    render(<Home />)
    expect(screen.getByTestId('tours-carousel')).toBeInTheDocument()
  })

  it('renders an H1 with SEO copy', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Tours in Medellín/ })
    ).toBeInTheDocument()
  })
})
