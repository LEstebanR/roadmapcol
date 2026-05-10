import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  MediaCarousel,
} from '@/components/ui/carousel'
import { fireEvent, render, screen } from '@testing-library/react'
import useEmblaCarousel from 'embla-carousel-react'

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(),
}))

const buildMockApi = (canScrollPrev = false, canScrollNext = true) => ({
  canScrollNext: vi.fn(() => canScrollNext),
  canScrollPrev: vi.fn(() => canScrollPrev),
  off: vi.fn(),
  on: vi
    .fn()
    .mockImplementation((event: string, cb: (api: unknown) => void) => {
      if (event === 'reInit') cb(undefined)
    }),
  scrollNext: vi.fn(),
  scrollPrev: vi.fn(),
  scrollSnapList: vi.fn(() => [0, 1, 2]),
  scrollTo: vi.fn(),
  selectedScrollSnap: vi.fn(() => 1),
})

beforeEach(() => {
  vi.mocked(useEmblaCarousel).mockReturnValue([
    vi.fn() as any,
    buildMockApi() as any,
  ])
})

describe('Carousel', () => {
  it('renders children', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
  })

  it('handles ArrowLeft key to scroll prev', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    const carouselEl = document.querySelector('[data-slot="carousel"]')!
    fireEvent.keyDown(carouselEl, { key: 'ArrowLeft' })
    expect(mockApi.scrollPrev).toHaveBeenCalled()
  })

  it('handles ArrowRight key to scroll next', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    const carouselEl = document.querySelector('[data-slot="carousel"]')!
    fireEvent.keyDown(carouselEl, { key: 'ArrowRight' })
    expect(mockApi.scrollNext).toHaveBeenCalled()
  })

  it('ignores unrelated key presses', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    const carouselEl = document.querySelector('[data-slot="carousel"]')!
    fireEvent.keyDown(carouselEl, { key: 'Enter' })
    expect(mockApi.scrollPrev).not.toHaveBeenCalled()
    expect(mockApi.scrollNext).not.toHaveBeenCalled()
  })

  it('calls setApi when provided', () => {
    const setApi = vi.fn()
    render(
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    expect(setApi).toHaveBeenCalled()
  })

  it('does not crash when embla api is undefined', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      undefined as any,
    ])
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    expect(screen.getByText('Slide')).toBeInTheDocument()
  })

  it('renders vertical orientation', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    expect(screen.getByText('Slide')).toBeInTheDocument()
  })

  it('cleans up event listener on unmount', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    const { unmount } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    unmount()
    expect(mockApi.off).toHaveBeenCalledWith('select', expect.any(Function))
  })
})

describe('CarouselPrevious and CarouselNext', () => {
  it('renders previous and next buttons', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
    expect(screen.getByText('Previous slide')).toBeInTheDocument()
    expect(screen.getByText('Next slide')).toBeInTheDocument()
  })

  it('previous button is disabled when canScrollPrev is false', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      buildMockApi(false, true) as any,
    ])
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
    const prevBtn = screen
      .getByText('Previous slide')
      .closest('button') as HTMLButtonElement
    expect(prevBtn.disabled).toBe(true)
  })

  it('next button is enabled when canScrollNext is true', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      buildMockApi(false, true) as any,
    ])
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
    const nextBtn = screen
      .getByText('Next slide')
      .closest('button') as HTMLButtonElement
    expect(nextBtn.disabled).toBe(false)
  })

  it('renders vertical CarouselPrevious and CarouselNext', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
    expect(screen.getByText('Previous slide')).toBeInTheDocument()
    expect(screen.getByText('Next slide')).toBeInTheDocument()
  })

  it('throws when CarouselContent is used outside Carousel', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<CarouselContent />)).toThrow(
      'useCarousel must be used within a <Carousel />'
    )
    consoleSpy.mockRestore()
  })
})

describe('MediaCarousel', () => {
  it('renders image items', () => {
    render(
      <MediaCarousel
        items={[
          { alt: 'Img', type: 'image', url: 'https://example.com/a.jpg' },
        ]}
      />
    )
    expect(screen.getByAltText('Img')).toBeInTheDocument()
  })

  it('renders video items with and without thumbnail', () => {
    render(
      <MediaCarousel
        items={[
          {
            alt: 'Vid no thumb',
            type: 'video',
            url: 'https://example.com/v.mp4',
          },
          {
            alt: 'Vid thumb',
            thumbnail: 'https://example.com/t.jpg',
            type: 'video',
            url: 'https://example.com/v2.mp4',
          },
        ]}
      />
    )
    const videos = document.querySelectorAll('video')
    expect(videos).toHaveLength(2)
    expect(videos[1]).toHaveAttribute('poster', 'https://example.com/t.jpg')
  })

  it('clicking prev/next scrolls media carousel', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(
      <MediaCarousel
        items={[
          { alt: 'A', type: 'image', url: 'https://example.com/a.jpg' },
          { alt: 'B', type: 'image', url: 'https://example.com/b.jpg' },
        ]}
      />
    )
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    expect(mockApi.scrollPrev).toHaveBeenCalled()
    expect(mockApi.scrollNext).toHaveBeenCalled()
  })

  it('clicking a dot scrolls to that index', () => {
    const mockApi = buildMockApi()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      mockApi as any,
    ])
    render(
      <MediaCarousel
        items={[{ alt: 'A', type: 'image', url: 'https://example.com/a.jpg' }]}
      />
    )
    const buttons = screen.getAllByRole('button')
    const lastBtn = buttons[buttons.length - 1]
    fireEvent.click(lastBtn)
    expect(mockApi.scrollTo).toHaveBeenCalled()
  })

  it('renders without error when embla api is undefined', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn() as any,
      undefined as any,
    ])
    render(
      <MediaCarousel
        items={[{ alt: 'A', type: 'image', url: 'https://example.com/a.jpg' }]}
      />
    )
    expect(screen.getByAltText('A')).toBeInTheDocument()
  })
})
