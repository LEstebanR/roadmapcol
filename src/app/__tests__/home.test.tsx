import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

vi.mock('@/components/ui/carousel-home', () => ({
  CarouselHome: () => <div data-testid="carousel-home" />,
}))

describe('Home page', () => {
  it('renders CarouselHome', () => {
    render(<Home />)
    expect(screen.getByTestId('carousel-home')).toBeInTheDocument()
  })
})
