import { CarouselPagination } from '@/components/ui/carousel-pagination'
import { render, screen } from '@testing-library/react'

describe('CarouselPagination', () => {
  it('renders the correct number of dot buttons', () => {
    render(<CarouselPagination currentSlide={0} totalSlides={3} />)
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('gives each button the correct aria-label', () => {
    render(<CarouselPagination currentSlide={1} totalSlides={3} />)
    expect(
      screen.getByRole('button', { name: 'Go to slide 2' })
    ).toBeInTheDocument()
  })

  it('accepts an optional className', () => {
    render(
      <CarouselPagination
        currentSlide={0}
        totalSlides={2}
        className="custom-class"
      />
    )
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
