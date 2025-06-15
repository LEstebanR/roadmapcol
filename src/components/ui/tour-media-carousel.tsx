'use client'

import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

interface TourMediaCarouselProps {
  items: {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
    alt: string
  }[]
  className?: string
}

export function TourMediaCarousel({
  items,
  className,
}: TourMediaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    // Pause all videos when changing slides
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => {
      video.pause()
    })
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className={cn('relative w-full', className)}>
      <div className="overflow-hidden rounded-t-lg" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              {item.type === 'image' ? (
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="h-[400px] w-full object-cover"
                />
              ) : (
                <video
                  src={item.url}
                  poster={item.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="h-[400px] w-full object-cover"
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
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  )
}
