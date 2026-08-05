import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { StarRating } from '@/components/ui/star-rating'
import { TourMediaCarousel } from '@/components/ui/tour-media-carousel'
import { IMG_WIDTH_CARD, IMG_WIDTH_DETAIL, imgUrl } from '@/lib/cloudinary'
import { ArrowLeft, Check, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ActivityToggleButton } from './activity-toggle-button'
import { BookingSummary } from './booking-summary'
import { TourBookingProvider } from './tour-booking-context'

interface Activity {
  description: string
  duration?: string
  image: string
  includes?: string[]
  price?: number
  title: string
}

export interface Tour {
  activities: Activity[]
  description: string
  duration: string
  highlights: string[]
  href: string
  image: string
  images?: Array<{
    alt: string
    type: 'image' | 'video'
    url: string
  }>
  place: string
  price: number
  rating?: number
  title: string
}

export default function TourClient({ tour }: { tour: Tour }) {
  return (
    <TourBookingProvider>
      <div className="mx-auto my-14 flex flex-col items-center justify-center gap-12 md:w-6/12">
        <Link
          href="/tours"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 self-start text-sm transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to tours
        </Link>
        <Card className="mx-auto flex w-11/12 flex-col pt-0 md:w-full">
          <CardHeader className="px-0 pt-0">
            {tour.images ? (
              <TourMediaCarousel items={tour.images} />
            ) : (
              <Image
                src={imgUrl(tour.image, IMG_WIDTH_DETAIL)}
                alt={tour.place}
                width={500}
                height={500}
                className="aspect-[4/3] w-full rounded-t-[14px] object-cover"
              />
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-muted-foreground flex items-center gap-1">
                <MapPin />
                <p>{tour.place}</p>
              </div>
              <div className="text-muted-foreground flex items-center gap-1">
                <Clock />
                <p>{tour.duration}</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold">{tour.title}</h2>
            {tour.rating !== undefined && <StarRating rating={tour.rating} />}
            <p className="text-muted-foreground">{tour.description}</p>
            <h3 className="text-xl font-bold">Highlights:</h3>
            <ul className="grid list-inside list-disc gap-2 md:grid-cols-2">
              {tour.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {tour.activities.length > 0 && (
          <h2 className="ml-4 self-start text-2xl font-bold">
            Available activities:
          </h2>
        )}
        <div className="flex flex-col gap-4">
          {tour.activities.length > 0
            ? tour.activities.map((activity) => (
                <Card
                  key={activity.title}
                  className="mx-auto flex w-11/12 flex-col py-0 md:w-full md:flex-row"
                >
                  <Image
                    src={imgUrl(activity.image, IMG_WIDTH_CARD)}
                    alt={activity.title}
                    width={200}
                    height={200}
                    className="w-full rounded-t-[14px] object-cover md:w-4/12 md:rounded-l-[14px] md:rounded-r-none"
                  />
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex w-full items-center justify-between gap-4">
                      <h3 className="text-xl font-bold">{activity.title}</h3>
                      <p className="text-muted-foreground">
                        {activity.duration}
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      {activity.description}
                    </p>
                    {activity.includes && (
                      <div>
                        <p className="font-bold">Includes:</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {activity.includes.map((include: string) => (
                            <li
                              key={include}
                              className="flex items-center gap-2"
                            >
                              <Check className="text-primary h-4 w-4" />
                              {include}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="text-secondary text-xl font-bold">
                        ${Number(activity.price).toLocaleString()}
                      </p>
                      <ActivityToggleButton activityTitle={activity.title} />
                    </div>
                  </div>
                </Card>
              ))
            : null}
        </div>
        <BookingSummary
          activities={tour.activities}
          basePrice={tour.price}
          tourTitle={tour.title}
        />
        <div className="flex justify-center"></div>
      </div>
    </TourBookingProvider>
  )
}
