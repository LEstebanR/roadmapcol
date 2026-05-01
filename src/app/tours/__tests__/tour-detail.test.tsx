import TourPage from '@/app/tours/[name]/page'
import { fireEvent, render, screen } from '@testing-library/react'

const mockUseParams = vi.fn().mockReturnValue({ name: 'test-tour' })

vi.mock('@/components/ui/tour-media-carousel', () => ({
  TourMediaCarousel: () => <div data-testid="tour-media-carousel" />,
}))

vi.mock('next/navigation', () => ({
  useParams: () => mockUseParams(),
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('@/lib/data', () => ({
  TOURS: [
    {
      place: 'Test Place',
      title: 'Test Tour',
      description: 'Test description',
      image: 'https://res.cloudinary.com/test/image.jpg',
      images: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/test/img.jpg',
          alt: 'img',
        },
      ],
      duration: '8 hours',
      highlights: ['Highlight 1', 'Highlight 2'],
      href: '/tours/test-tour',
      price: 100,
      activities: [
        {
          title: 'Activity 1',
          description: 'Activity description',
          image: 'https://res.cloudinary.com/test/activity.jpg',
          duration: '2 hours',
          includes: ['Item 1', 'Item 2'],
          price: 50,
        },
        {
          title: 'Activity 2',
          description: 'No includes activity',
          image: 'https://res.cloudinary.com/test/activity2.jpg',
          price: 30,
        },
      ],
    },
    {
      place: 'No Activities Place',
      title: 'No Activities Tour',
      description: 'No activities',
      image: 'https://res.cloudinary.com/test/image2.jpg',
      duration: '4 hours',
      highlights: ['Highlight A'],
      href: '/tours/no-activities',
      price: 80,
      activities: [],
    },
  ],
  CONTACT: { phone: '1234567890', email: 'test@test.com' },
  HEADER_LINKS: [],
}))

describe('Tour detail page', () => {
  beforeEach(() => {
    mockUseParams.mockReturnValue({ name: 'test-tour' })
  })

  it('renders the tour title', () => {
    render(<TourPage />)
    expect(screen.getByText('Test Tour')).toBeInTheDocument()
  })

  it('all target="_blank" links have rel="noopener noreferrer"', () => {
    render(<TourPage />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders highlights', () => {
    render(<TourPage />)
    expect(screen.getByText('Highlight 1')).toBeInTheDocument()
  })

  it('renders activities and toggles selection', () => {
    render(<TourPage />)
    expect(screen.getByText('Activity 1')).toBeInTheDocument()
    const addBtns = screen.getAllByText('Add to my experience')
    fireEvent.click(addBtns[0])
    expect(screen.getByText('Remove from my experience')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Remove from my experience'))
    expect(screen.getAllByText('Add to my experience').length).toBeGreaterThan(
      0
    )
  })

  it('renders "tour not found" when tour does not exist', () => {
    mockUseParams.mockReturnValueOnce({ name: 'non-existent' })
    render(<TourPage />)
    expect(screen.getByText('Tour not found')).toBeInTheDocument()
  })

  it('shows selected activity summary and total price', () => {
    render(<TourPage />)
    const addBtns = screen.getAllByText('Add to my experience')
    fireEvent.click(addBtns[0])
    expect(screen.getByText('Selected activities:')).toBeInTheDocument()
    expect(screen.getByText('Total:')).toBeInTheDocument()
  })

  it('renders tour with no activities', () => {
    mockUseParams.mockReturnValue({ name: 'no-activities' })
    render(<TourPage />)
    expect(screen.getByText('No Activities Tour')).toBeInTheDocument()
    expect(screen.queryByText('Available activities:')).not.toBeInTheDocument()
  })
})
