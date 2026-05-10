import TourClient, { type Tour } from '@/app/tours/[name]/tour-client'
import { fireEvent, render, screen } from '@testing-library/react'

vi.mock('@/components/ui/tour-media-carousel', () => ({
  TourMediaCarousel: () => <div data-testid="tour-media-carousel" />,
}))

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('@/lib/data', () => ({
  CONTACT: { email: 'test@test.com', phone: '1234567890' },
}))

const testTour: Tour = {
  activities: [
    {
      description: 'Activity description',
      duration: '2 hours',
      image: 'https://res.cloudinary.com/test/activity.jpg',
      includes: ['Item 1', 'Item 2'],
      price: 50,
      title: 'Activity 1',
    },
    {
      description: 'No includes activity',
      image: 'https://res.cloudinary.com/test/activity2.jpg',
      price: 30,
      title: 'Activity 2',
    },
  ],
  description: 'Test description',
  duration: '8 hours',
  highlights: ['Highlight 1', 'Highlight 2'],
  href: '/tours/test-tour',
  image: 'https://res.cloudinary.com/test/image.jpg',
  images: [
    {
      alt: 'img',
      type: 'image',
      url: 'https://res.cloudinary.com/test/img.jpg',
    },
  ],
  place: 'Test Place',
  price: 100,
  title: 'Test Tour',
}

const noActivitiesTour: Tour = {
  activities: [],
  description: 'No activities',
  duration: '4 hours',
  highlights: ['Highlight A'],
  href: '/tours/no-activities',
  image: 'https://res.cloudinary.com/test/image2.jpg',
  place: 'No Activities Place',
  price: 80,
  title: 'No Activities Tour',
}

describe('Tour detail page', () => {
  it('renders the tour title', () => {
    render(<TourClient tour={testTour} />)
    expect(screen.getByText('Test Tour')).toBeInTheDocument()
  })

  it('all target="_blank" links have rel="noopener noreferrer"', () => {
    render(<TourClient tour={testTour} />)
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders highlights', () => {
    render(<TourClient tour={testTour} />)
    expect(screen.getByText('Highlight 1')).toBeInTheDocument()
  })

  it('renders activities and toggles selection', () => {
    render(<TourClient tour={testTour} />)
    expect(screen.getByText('Activity 1')).toBeInTheDocument()
    const addBtns = screen.getAllByText('Add to my experience')
    fireEvent.click(addBtns[0])
    expect(screen.getByText('Remove from my experience')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Remove from my experience'))
    expect(screen.getAllByText('Add to my experience').length).toBeGreaterThan(
      0
    )
  })

  it('shows selected activity summary and total price', () => {
    render(<TourClient tour={testTour} />)
    const addBtns = screen.getAllByText('Add to my experience')
    fireEvent.click(addBtns[0])
    expect(screen.getByText('Selected activities:')).toBeInTheDocument()
    expect(screen.getByText('Total:')).toBeInTheDocument()
  })

  it('renders tour with no activities', () => {
    render(<TourClient tour={noActivitiesTour} />)
    expect(screen.getByText('No Activities Tour')).toBeInTheDocument()
    expect(screen.queryByText('Available activities:')).not.toBeInTheDocument()
  })

  it('treats activity with no price as $0', () => {
    const tourWithPricelessActivity: Tour = {
      ...testTour,
      activities: [
        {
          description: 'Free activity',
          image: 'https://res.cloudinary.com/test/free.jpg',
          title: 'Free Activity',
        },
      ],
    }
    render(<TourClient tour={tourWithPricelessActivity} />)
    const addBtn = screen.getByText('Add to my experience')
    fireEvent.click(addBtn)
    expect(screen.getByText('Selected activities:')).toBeInTheDocument()
  })
})
