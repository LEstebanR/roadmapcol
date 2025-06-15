import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export function TourCard({
  tour,
}: {
  tour: {
    place: string
    description: string
    image: string
    title: string
    duration: string
    price: number
    href: string
  }
}) {
  return (
    <Card className="mx-auto flex w-11/12 flex-col rounded-lg border border-black pt-0 md:w-full">
      <CardHeader className="px-0 pt-0">
        <Image
          src={tour.image}
          alt={tour.place}
          width={500}
          height={500}
          className="h-[200px] w-full rounded-t-lg object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="text-muted-foreground flex items-center gap-2">
          <MapPin />
          <p>{tour.place}</p>
        </div>
        <h2 className="text-2xl font-bold">{tour.title}</h2>
        <div className="text-muted-foreground flex items-center gap-2">
          <Clock />
          <p>{tour.duration}</p>
        </div>
        <p className="flex-1">{tour.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-secondary flex items-center gap-2 font-bold">
            <p>${Number(tour.price).toLocaleString()}</p>
          </div>
          <Button className="bg-secondary text-black" asChild>
            <Link href={tour.href}>
              See details
              <ArrowRight className="h-4 w-4 transition-all duration-300 hover:rotate-45" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
