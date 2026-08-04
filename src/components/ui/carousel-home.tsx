'use client'

import { Button } from '@/components/ui/button'
import { TitleCard } from '@/components/ui/typography/typography'
import { imgUrl } from '@/lib/cloudinary'
import { LANDING_LINKS } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Badge } from './badge'
import { Card, CardContent, CardHeader } from './card'

export function CarouselHome() {
  const router = useRouter()
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false }),
    []
  )
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true },
    [autoplay]
  )

  const handlePrevious = () => {
    emblaApi?.scrollPrev()
    autoplay.reset()
  }

  const handleNext = () => {
    emblaApi?.scrollNext()
    autoplay.reset()
  }

  return (
    <section className="relative mt-14 h-[calc(100dvh-3.5rem)] w-full">
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {LANDING_LINKS.map((item, index) => (
            <div
              key={index}
              className="relative h-full min-w-0 shrink-0 grow-0 basis-full"
            >
              <Image
                src={imgUrl(item.image)}
                alt={item.title}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Card className="w-10/12 bg-white/90 shadow-lg backdrop-blur-sm md:w-xl">
                  <CardHeader className="flex flex-col items-center justify-center">
                    <Badge className={`${item.chipColor} mx-auto text-black`}>
                      {item.chipIcon}
                      {item.chip}
                    </Badge>
                    <TitleCard>{item.title}</TitleCard>
                    <p className="text-center text-xl font-bold">
                      {item.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-4">
                    <p className="text-center">{item.description}</p>
                    <Button
                      className="mx-auto w-full"
                      onClick={() => {
                        router.push(item.href)
                      }}
                    >
                      {item.button}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 z-20 size-8 -translate-y-1/2 rounded-full"
      >
        <ChevronLeft />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleNext}
        className="absolute top-1/2 right-6 z-20 size-8 -translate-y-1/2 rounded-full"
      >
        <ChevronRight />
        <span className="sr-only">Next slide</span>
      </Button>
    </section>
  )
}
