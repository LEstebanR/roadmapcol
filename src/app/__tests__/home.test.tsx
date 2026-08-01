import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

vi.mock('@/components/ui/carousel-home', () => ({
  CarouselHome: () => <div data-testid="carousel-home" />,
}))

vi.mock('@/components/testimonials', () => ({
  Testimonials: () => <section data-testid="testimonials" />,
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

  it('renders an H1 with SEO copy', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Tours in Medellín/ })
    ).toBeInTheDocument()
  })
})
