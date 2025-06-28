import { TourCard } from '@/components/tour-card'
import { render, screen } from '@testing-library/react'

const mockTour = {
  place: 'Test Place',
  title: 'Test Tour',
  description: 'This is a test tour description',
  image: '/test-image.jpg',
  duration: '8 hours',
  highlights: ['Highlight 1', 'Highlight 2'],
  href: '/tours/test-tour',
  price: 100,
  activities: [],
}

describe('TourCard Component', () => {
  it('renders tour information correctly', () => {
    render(<TourCard tour={mockTour} />)

    expect(screen.getByText('Test Place')).toBeInTheDocument()
    expect(screen.getByText('Test Tour')).toBeInTheDocument()
    expect(
      screen.getByText('This is a test tour description')
    ).toBeInTheDocument()
    expect(screen.getByText('8 hours')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
  })

  it('renders see details button', () => {
    render(<TourCard tour={mockTour} />)

    expect(screen.getByText('See details')).toBeInTheDocument()
  })

  it('renders link with correct href', () => {
    render(<TourCard tour={mockTour} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/tours/test-tour')
  })
})
