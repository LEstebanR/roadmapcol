import { TourGallery } from '@/components/tour-gallery'
import { render, screen } from '@testing-library/react'

vi.mock('@/components/ui/carousel', () => ({
  MediaCarousel: ({ items }: { items: { alt: string }[] }) => (
    <div data-testid="media-carousel">
      {items.map((item) => (
        <span key={item.alt}>{item.alt}</span>
      ))}
    </div>
  ),
}))

describe('TourGallery', () => {
  const images = [
    {
      alt: 'Image 1',
      type: 'image' as const,
      url: 'https://example.com/1.jpg',
    },
    {
      alt: 'Video 1',
      type: 'video' as const,
      url: 'https://example.com/1.mp4',
    },
  ]

  it('renders MediaCarousel with all items', () => {
    render(<TourGallery images={images} />)
    expect(screen.getByTestId('media-carousel')).toBeInTheDocument()
    expect(screen.getByText('Image 1')).toBeInTheDocument()
    expect(screen.getByText('Video 1')).toBeInTheDocument()
  })
})
