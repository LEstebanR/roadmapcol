import { TourMediaCarousel } from '@/components/ui/tour-media-carousel'
import { fireEvent, render, screen } from '@testing-library/react'
import type { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel, {
  type EmblaViewportRefType,
} from 'embla-carousel-react'

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(),
}))

vi.mock('next/image', () => ({
  default: ({
    alt,
    priority,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} data-priority={priority ? 'true' : 'false'} {...props} />
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

const mockRef = vi.fn() as unknown as EmblaViewportRefType

beforeEach(() => {
  vi.mocked(useEmblaCarousel).mockReturnValue([
    mockRef,
    buildMockApi() as unknown as EmblaCarouselType,
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

  it('marks the first image as priority and sets sizes on all images', () => {
    render(<TourMediaCarousel items={imageItems} />)
    const first = screen.getByAltText('Image 1')
    const second = screen.getByAltText('Image 2')
    expect(first).toHaveAttribute('data-priority', 'true')
    expect(second).toHaveAttribute('data-priority', 'false')
    expect(first).toHaveAttribute('sizes', '(max-width: 768px) 100vw, 640px')
    expect(second).toHaveAttribute('sizes', '(max-width: 768px) 100vw, 640px')
  })

  it('uses object-contain so vertical media is fully visible', () => {
    render(<TourMediaCarousel items={imageItems} />)
    expect(screen.getByAltText('Image 1').className).toContain('object-contain')
    render(<TourMediaCarousel items={videoItems} />)
    const video = document.querySelector('video')
    expect(video?.className).toContain('object-contain')
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
      mockRef,
      mockApi as unknown as EmblaCarouselType,
    ])
    render(<TourMediaCarousel items={imageItems} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[buttons.length - 1])
    expect(mockApi.scrollTo).toHaveBeenCalled()
  })

  it('clicking previous/next scrolls the carousel', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      mockRef,
      mockApi as unknown as EmblaCarouselType,
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

  it('reorders items so an image always leads, even if the data has a video first', () => {
    render(
      <TourMediaCarousel
        items={[
          {
            alt: 'Leading video',
            type: 'video' as const,
            url: 'https://example.com/video.mp4',
          },
          {
            alt: 'Trailing image',
            type: 'image' as const,
            url: 'https://res.cloudinary.com/demo/image/upload/a.jpg',
          },
        ]}
      />
    )

    const image = screen.getByAltText('Trailing image')
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(
      image.compareDocumentPosition(video!) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it('renders without error when embla api is undefined', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([mockRef, undefined])
    render(<TourMediaCarousel items={imageItems} />)
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })
})
