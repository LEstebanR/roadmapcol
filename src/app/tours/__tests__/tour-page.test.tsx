import TourPage, { generateMetadata } from '@/app/tours/[name]/page'
import { render, screen } from '@testing-library/react'
import { notFound } from 'next/navigation'

vi.mock('@/lib/data', () => ({
  TOURS: [
    {
      activities: [],
      description: 'Test description',
      duration: '8 hours',
      highlights: ['Highlight 1'],
      href: '/tours/test-tour',
      image: 'https://res.cloudinary.com/test/image.jpg',
      place: 'Test Place',
      price: 100,
      title: 'Test Tour',
    },
  ],
}))

vi.mock('@/app/tours/[name]/tour-client', () => ({
  default: ({ tour }: { tour: { title: string } }) => (
    <div data-testid="tour-client">{tour.title}</div>
  ),
}))

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
  useParams: () => ({}),
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))

describe('TourPage', () => {
  it('renders TourClient for a valid tour', async () => {
    const element = await TourPage({
      params: Promise.resolve({ name: 'test-tour' }),
    })
    render(element)
    expect(screen.getByTestId('tour-client')).toBeInTheDocument()
    expect(screen.getByText('Test Tour')).toBeInTheDocument()
  })

  it('calls notFound for an unknown tour slug', async () => {
    await expect(
      TourPage({ params: Promise.resolve({ name: 'unknown' }) })
    ).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalled()
  })
})

describe('generateMetadata', () => {
  it('returns metadata for a valid tour', async () => {
    const result = await generateMetadata({
      params: Promise.resolve({ name: 'test-tour' }),
    })
    expect(result.title).toBe('Test Tour')
    expect(result.description).toBe('Test description')
    expect(result.alternates?.canonical).toBe('/tours/test-tour')
  })

  it('returns empty object for an unknown tour', async () => {
    const result = await generateMetadata({
      params: Promise.resolve({ name: 'unknown' }),
    })
    expect(result).toEqual({})
  })
})
