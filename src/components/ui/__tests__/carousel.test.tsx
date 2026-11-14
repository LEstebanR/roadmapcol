import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { fireEvent, render, screen } from '@testing-library/react'
import type { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel, {
  type EmblaViewportRefType,
} from 'embla-carousel-react'

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

const mockRef = vi.fn() as unknown as EmblaViewportRefType

beforeEach(() => {
  vi.mocked(useEmblaCarousel).mockReturnValue([
    mockRef,
    buildMockApi() as unknown as EmblaCarouselType,
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
      mockRef,
      mockApi as unknown as EmblaCarouselType,
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
      mockRef,
      mockApi as unknown as EmblaCarouselType,
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
      mockRef,
      mockApi as unknown as EmblaCarouselType,
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
    vi.mocked(useEmblaCarousel).mockReturnValue([mockRef, undefined])
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
      mockRef,
      mockApi as unknown as EmblaCarouselType,
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
      mockRef,
      buildMockApi(false, true) as unknown as EmblaCarouselType,
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
      mockRef,
      buildMockApi(false, true) as unknown as EmblaCarouselType,
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
