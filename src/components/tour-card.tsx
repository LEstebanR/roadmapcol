import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { StarRating } from '@/components/ui/star-rating'
import { IMG_WIDTH_CARD, blurDataUrl, imgUrl } from '@/lib/cloudinary'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

export function TourCard({
  tour,
}: {
  tour: {
    description: string
    duration: string
    href: string
    image: string
    place: string
    price: number
    rating?: number
    title: string
  }
}) {
  return (
    <Link href={tour.href} className="group mx-auto w-11/12 md:w-full">
      <Card className="flex h-full flex-col pt-0 transition-shadow duration-200 hover:shadow-md">
        <CardHeader className="overflow-hidden rounded-t-[14px] px-0 pt-0">
          <Image
            src={imgUrl(tour.image, IMG_WIDTH_CARD)}
            alt={tour.place}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <MapPin className="size-4" />
            <p>{tour.place}</p>
          </div>
          <h2 className="text-2xl font-bold">{tour.title}</h2>
          {tour.rating !== undefined && <StarRating rating={tour.rating} />}
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Clock className="size-4" />
            <p>{tour.duration}</p>
          </div>
          <p className="flex-1 text-sm">{tour.description}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-secondary text-xl font-bold">
                ${Number(tour.price).toLocaleString()}
              </p>
              <p className="text-muted-foreground text-xs">per person</p>
            </div>
            <Button variant="default" asChild>
              <span>
                See details
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
