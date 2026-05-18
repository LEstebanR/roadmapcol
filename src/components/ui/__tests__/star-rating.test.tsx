import { StarRating } from '@/components/ui/star-rating'
import { render, screen } from '@testing-library/react'

describe('StarRating', () => {
  it('renders 5 stars', () => {
    const { container } = render(<StarRating rating={5} />)
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
  })

  it('has accessible label with rating value', () => {
    render(<StarRating rating={4} />)
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
  })

  it('applies filled class to stars up to the rating', () => {
    const { container } = render(<StarRating rating={3} />)
    const stars = container.querySelectorAll('svg')
    const filled = Array.from(stars).filter((s) =>
      s.getAttribute('class')?.includes('fill-amber-400')
    )
    const empty = Array.from(stars).filter((s) =>
      s.getAttribute('class')?.includes('text-muted-foreground')
    )
    expect(filled).toHaveLength(3)
    expect(empty).toHaveLength(2)
  })
})
