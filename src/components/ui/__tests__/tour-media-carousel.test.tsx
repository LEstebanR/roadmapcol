import { TourMediaCarousel } from '@/components/ui/tour-media-carousel'
import { fireEvent, render, screen } from '@testing-library/react'
import useEmblaCarousel from 'embla-carousel-react'

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(),
}))

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: { alt: string; [k: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...(props as any)} />
  ),
}))

const buildMockApi = () => ({
  off: vi.fn(),
  on: vi.fn(),
  scrollNext: vi.fn(),
  scrollPrev: vi.fn(),
  scrollSnapList: vi.fn(() => [0, 1]),
  scrollTo: vi.fn(),
  selectedScrollSnap: vi.fn(() => 0),
})

beforeEach(() => {
  vi.mocked(useEmblaCarousel).mockReturnValue([
    vi.fn() as any,
    buildMockApi() as any,
  ])
})

const imageItems = [
  {
    alt: 'Image 1',
    type: 'image' as const,
    url: 'https://res.cloudinary.com/demo/image/upload/a.jpg',
  },
  {
    alt: 'Image 2',
    type: 'image' as const,
    url: 'https://res.cloudinary.com/demo/image/upload/b.jpg',
  },
]

const videoItems = [
  {
    alt: 'Video without thumbnail',
    type: 'video' as const,
    url: 'https://example.com/video.mp4',
  },
  {
    alt: 'Video with thumbnail',
    thumbnail: 'https://example.com/thumb.jpg',
    type: 'video' as const,
    url: 'https://example.com/video2.mp4',
  },
]

describe('TourMediaCarousel', () => {
  it('renders image items', () => {
    render(<TourMediaCarousel items={imageItems} />)
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    expect(screen.getByAltText('Image 2')).toBeInTheDocument()
  })

  it('renders video items — uses thumbnail when provided', () => {
    render(<TourMediaCarousel items={videoItems} />)
    const videos = document.querySelectorAll('video')
    expect(videos).toHaveLength(2)
    expect(videos[1]).toHaveAttribute('poster', 'https://example.com/thumb.jpg')
  })

  it('renders video items — falls back to videoPoster when no thumbnail', () => {
    render(<TourMediaCarousel items={videoItems} />)
    const videos = document.querySelectorAll('video')
    expect(videos[0]).not.toHaveAttribute(
      'poster',
      'https://example.com/thumb.jpg'
    )
  })

  it('renders navigation buttons', () => {
    render(<TourMediaCarousel items={imageItems} />)
    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(2)
  })

  it('renders dot indicators from scrollSnapList', () => {
    render(<TourMediaCarousel items={imageItems} />)
    expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(2)
  })

  it('clicking a dot calls scrollTo', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(<TourMediaCarousel items={imageItems} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[buttons.length - 1])
    expect(mockApi.scrollTo).toHaveBeenCalled()
  })

  it('clicking previous/next scrolls the carousel', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(<TourMediaCarousel items={imageItems} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    expect(mockApi.scrollPrev).toHaveBeenCalled()
    expect(mockApi.scrollNext).toHaveBeenCalled()
  })

  it('pauses videos when slide changes', () => {
    render(<TourMediaCarousel items={videoItems} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalled()
  })

  it('renders without error when embla api is undefined', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      undefined as any,
    ])
    render(<TourMediaCarousel items={imageItems} />)
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })
})
