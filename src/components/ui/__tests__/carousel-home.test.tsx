import { CarouselHome } from '@/components/ui/carousel-home'
import { fireEvent, render, screen } from '@testing-library/react'
import type { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel, {
  type EmblaViewportRefType,
} from 'embla-carousel-react'

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(),
}))

vi.mock('embla-carousel-autoplay', () => ({
  default: vi.fn(() => ({
    destroy: vi.fn(),
    init: vi.fn(),
    name: 'autoplay',
    options: {},
    play: vi.fn(),
    reset: vi.fn(),
    stop: vi.fn(),
  })),
}))

vi.mock('@/lib/data', () => ({
  LANDING_LINKS: [
    {
      button: 'Learn more',
      chip: 'About us',
      chipColor: 'bg-sky-200',
      chipIcon: null,
      description: 'Test description',
      href: '/tours',
      image: 'https://example.com/img.jpg',
      subtitle: 'Test subtitle',
      title: 'Road Map Col',
    },
    {
      button: 'Explore',
      chip: 'Tour',
      chipColor: 'bg-green-200',
      chipIcon: null,
      description: 'Another description',
      href: '/personalize',
      image: 'https://example.com/img2.jpg',
      subtitle: 'Another subtitle',
      title: 'Explore Colombia',
    },
  ],
}))

const buildMockApi = () => ({
  canScrollNext: vi.fn(() => true),
  canScrollPrev: vi.fn(() => true),
  off: vi.fn(),
  on: vi.fn(),
  scrollNext: vi.fn(),
  scrollPrev: vi.fn(),
  scrollSnapList: vi.fn(() => [0, 1]),
  scrollTo: vi.fn(),
  selectedScrollSnap: vi.fn(() => 0),
})

const mockRef = vi.fn() as unknown as EmblaViewportRefType

describe('CarouselHome', () => {
  beforeEach(() => {
    vi.mocked(useEmblaCarousel).mockReturnValue([
      mockRef,
      buildMockApi() as unknown as EmblaCarouselType,
    ])
  })

  it('renders all landing link cards', () => {
    render(<CarouselHome />)
    expect(screen.getByText('Road Map Col')).toBeInTheDocument()
    expect(screen.getByText('Explore Colombia')).toBeInTheDocument()
  })

  it('renders chip labels', () => {
    render(<CarouselHome />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Tour')).toBeInTheDocument()
  })

  it('clicking a card button does not crash', () => {
    render(<CarouselHome />)
    const learnMoreBtn = screen.getAllByText('Learn more')[0]
    fireEvent.click(learnMoreBtn)
  })

  it('clicking previous/next does not crash', () => {
    render(<CarouselHome />)
    fireEvent.click(screen.getByText('Previous slide').closest('button')!)
    fireEvent.click(screen.getByText('Next slide').closest('button')!)
  })

  it('renders previous and next controls', () => {
    render(<CarouselHome />)
    expect(screen.getByText('Previous slide')).toBeInTheDocument()
    expect(screen.getByText('Next slide')).toBeInTheDocument()
  })

  it('renders without error when embla api is undefined', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([mockRef, undefined])
    render(<CarouselHome />)
    expect(screen.getByText('Road Map Col')).toBeInTheDocument()
  })
})
