'use client'

import { MediaCarousel } from '@/components/ui/carousel'

interface TourGalleryProps {
  images: {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
    alt: string
  }[]
}

export function TourGallery({ images }: TourGalleryProps) {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <MediaCarousel
        items={images}
        className="overflow-hidden rounded-lg shadow-lg"
      />
    </div>
  )
}
