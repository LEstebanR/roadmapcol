import ToursPage from '@/app/tours/page'
import { render, screen } from '@testing-library/react'

// Mock the TOURS data
vi.mock('@/lib/data', () => ({
  TOURS: [
    {
      place: 'Test Place 1',
      title: 'Test Tour 1',
      description: 'Test description 1',
      image: '/test1.jpg',
      duration: '8 hours',
      highlights: ['Highlight 1'],
      href: '/tours/test-1',
      price: 100,
      activities: [],
    },
    {
      place: 'Test Place 2',
      title: 'Test Tour 2',
      description: 'Test description 2',
      image: '/test2.jpg',
      duration: '6 hours',
      highlights: ['Highlight 2'],
      href: '/tours/test-2',
      price: 150,
      activities: [],
    },
  ],
}))

describe('Tours Page', () => {
  it('renders page title', () => {
    render(<ToursPage />)
    expect(screen.getByText('Our experiences')).toBeInTheDocument()
  })

  it('renders tours list', () => {
    render(<ToursPage />)
    expect(screen.getByText('Test Tour 1')).toBeInTheDocument()
    expect(screen.getByText('Test Tour 2')).toBeInTheDocument()
  })

  it('renders tour descriptions', () => {
    render(<ToursPage />)
    expect(screen.getByText('Test description 1')).toBeInTheDocument()
    expect(screen.getByText('Test description 2')).toBeInTheDocument()
  })
})
