'use client'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TitleCard } from '@/components/ui/typography/typography'
import { LANDING_LINKS } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Badge } from './badge'
import { Card, CardContent, CardHeader } from './card'

export function CarouselHome() {
  const router = useRouter()
  const [api, setApi] = React.useState<CarouselApi>()
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  )

  const handlePrevious = () => {
    api?.scrollPrev()
    autoplay.current?.reset()
  }

  const handleNext = () => {
    api?.scrollNext()
    autoplay.current?.reset()
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="mt-14 flex h-[calc(100vh-3.5rem)] w-screen flex-col items-center justify-center"
    >
      <CarouselContent className="mx-0 w-screen px-0">
        {LANDING_LINKS.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex h-[calc(100vh-3.5rem)] w-full items-center justify-center bg-cover bg-center bg-no-repeat pl-0"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <Card className="w-10/12 border bg-white/80 md:w-xl">
              <CardHeader className="flex flex-col items-center justify-center">
                <Badge className={`${item.chipColor} mx-auto text-black`}>
                  {item.chipIcon}
                  {item.chip}
                </Badge>
                <TitleCard>{item.title}</TitleCard>
                <p className="text-center text-xl font-bold">{item.subtitle}</p>
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2" onClick={handlePrevious} />
      <CarouselNext className="absolute right-6" onClick={handleNext} />
    </Carousel>
  )
}
