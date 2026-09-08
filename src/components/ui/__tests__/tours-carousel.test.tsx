import { ToursCarousel } from '@/components/ui/tours-carousel'
import { fireEvent, render, screen } from '@testing-library/react'

vi.mock('@/lib/data', () => ({
  TOURS: [
    {
      description: 'Test description one',
      duration: '4 hours',
      href: '/tours/tour-one',
      image: 'https://example.com/img.jpg',
      place: 'Tour One',
      price: 100,
      rating: 5,
      title: 'Tour One Title',
    },
    {
      description: 'Test description two',
      duration: '6 hours',
      href: '/tours/tour-two',
      image: 'https://example.com/img2.jpg',
      place: 'Tour Two',
      price: 200,
      rating: 4,
      title: 'Tour Two Title',
    },
  ],
}))

describe('ToursCarousel', () => {
  it('renders the section heading', () => {
    render(<ToursCarousel />)
    expect(screen.getByText('All our tours')).toBeInTheDocument()
  })

  it('renders all tour cards', () => {
    render(<ToursCarousel />)
    expect(screen.getAllByText('Tour One Title')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Tour Two Title')[0]).toBeInTheDocument()
  })

  it('duplicates the track for a seamless loop and hides the copy from assistive tech', () => {
    render(<ToursCarousel />)
    const cards = screen.getAllByText('Tour One Title')
    expect(cards.length).toBe(2)

    const duplicateCard = cards[1].closest('[aria-hidden]')
    expect(duplicateCard).toHaveAttribute('aria-hidden', 'true')

    const originalCard = cards[0].closest('[aria-hidden]')
    expect(originalCard).toBeNull()
  })

  it('pauses the marquee while the pointer is over the tours', () => {
    const { container } = render(<ToursCarousel />)
    const track = container.querySelector('.animate-marquee')

    fireEvent.mouseEnter(track!)
    expect(track).toHaveStyle({ animationPlayState: 'paused' })

    fireEvent.mouseLeave(track!)
    expect(track).toHaveStyle({ animationPlayState: 'running' })
  })
})
