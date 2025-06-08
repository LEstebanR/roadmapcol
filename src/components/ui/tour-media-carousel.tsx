'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface TourMediaCarouselProps {
  items: {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
    alt: string
  }[]
  className?: string
}

export function TourMediaCarousel({ items, className }: TourMediaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={cn('relative w-full', className)}>
      <div className="overflow-hidden rounded-t-lg" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              {item.type === 'image' ? (
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              ) : (
                <video
                  src={item.url}
                  poster={item.thumbnail}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-[400px] object-cover"
                >
                  <source src={item.url} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  )
} 