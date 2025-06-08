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
    <div className="w-full max-w-5xl mx-auto">
      <MediaCarousel items={images} className="rounded-lg overflow-hidden shadow-lg" />
    </div>
  )
} 