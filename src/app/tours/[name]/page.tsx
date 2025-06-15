'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TourMediaCarousel } from '@/components/ui/tour-media-carousel'
import { CONTACT, TOURS } from '@/lib/data'
import { images } from '@/lib/images'
import { ArrowLeft, Check, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Activity {
  title: string
  description: string
  image: string
  duration?: string
  includes?: string[]
  price?: number
}

interface Tour {
  place: string
  title: string
  description: string
  image: string
  images?: Array<{
    type: 'image' | 'video'
    url: string
    alt: string
  }>
  duration: string
  highlights: string[]
  href: string
  price: number
  activities: Activity[]
}

export default function TourPage() {
  const { name } = useParams()
  const tour = TOURS.find((tour) => tour.href === `/tours/${name}`) as
    | Tour
    | undefined
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [message, setMessage] = useState<string>('')

  console.log('tour', tour, name)

  const getSelectedActivityPrice = (activityTitle: string) => {
    const activity = tour?.activities?.find(
      (activity) => activity.title === activityTitle
    )
    return activity?.price ?? 0
  }

  const totalPrice =
    (tour?.price || 0) +
    selectedActivities.reduce(
      (acc, title) => acc + getSelectedActivityPrice(title),
      0
    )

  useEffect(() => {
    if (tour) {
      setMessage(
        `Hello, I would like to get more information about the tour ${tour.title}${selectedActivities.length > 0 ? `, with the activities: ${selectedActivities.join(', ')}` : ''}. With an approximate value of ${totalPrice}`
      )
    }
  }, [tour, selectedActivities, totalPrice])

  if (!tour) {
    return (
      <div className="mx-auto my-14 flex flex-col items-center justify-center gap-12 md:w-6/12">
        <h1 className="text-2xl font-bold">Tour not found</h1>
        <Link href="/tours" className="flex items-center gap-2 text-sky-500">
          <ArrowLeft className="h-4 w-4" />
          Back to tours
        </Link>
      </div>
    )
  }

  const handleActivityToggle = (activityTitle: string) => {
    setSelectedActivities((prev) => {
      if (prev.includes(activityTitle)) {
        return prev.filter((title) => title !== activityTitle)
      }
      return [...prev, activityTitle]
    })
  }

  return (
    <div className="mx-auto my-14 flex flex-col items-center justify-center gap-12 md:w-6/12">
      <Link
        href="/tours"
        className="flex items-center gap-2 self-start text-sky-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to tours
      </Link>
      <Card className="mx-auto flex w-11/12 flex-col rounded-lg border border-black pt-0 md:w-full">
        <CardHeader className="px-0 pt-0">
          {tour.images ? (
            <TourMediaCarousel items={tour.images} />
          ) : (
            <Image
              src={tour.image}
              alt={tour.place}
              width={500}
              height={500}
              className="h-[200px] w-full rounded-t-lg object-cover"
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
          <p className="text-muted-foreground">{tour.description}</p>
          <h3 className="text-xl font-bold">Destacados:</h3>
          <ul className="grid list-inside list-disc gap-2 md:grid-cols-2">
            {tour.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {tour.activities.length > 0 && (
        <h2 className="ml-4 self-start text-2xl font-bold">
          Activities availables:
        </h2>
      )}
      <div className="flex flex-col gap-4">
        {tour.activities.length > 0
          ? tour.activities.map((activity) => (
              <Card
                key={activity.title}
                className="mx-auto flex w-11/12 flex-col border border-black py-0 md:w-full md:flex-row"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={200}
                  height={200}
                  className="w-full rounded-t-lg object-cover md:w-4/12 md:rounded-l-lg md:rounded-r-none"
                />
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex w-full items-center justify-between gap-4">
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.duration}</p>
                  </div>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                  {activity.includes && (
                    <div>
                      <p className="font-bold">Incluye:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {activity.includes.map((include: string) => (
                          <li key={include} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            {include}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-xl font-bold">
                      Price: ${Number(activity.price).toLocaleString()}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Checkbox
                        checked={selectedActivities.includes(activity.title)}
                        onCheckedChange={() =>
                          handleActivityToggle(activity.title)
                        }
                      />
                      <Label className="text-xl">Add to my experience</Label>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          : null}
      </div>
      <Card className="mx-auto w-11/12 border border-black px-4 md:w-full">
        <CardHeader>
          <h2 className="text-2xl font-bold">Summary of your experience</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Precio base:</p>
              <p className="text-lg font-bold">
                ${Number(tour.price).toLocaleString()} / persona
              </p>
            </div>
            {selectedActivities.length > 0 && (
              <>
                <div className="border-t pt-4">
                  <p className="mb-2 font-bold">Selected activities:</p>
                  {selectedActivities.map((title) => (
                    <div
                      key={title}
                      className="flex items-center justify-between"
                    >
                      <p className="text-muted-foreground">{title}</p>
                      <p className="font-bold">
                        $
                        {Number(
                          getSelectedActivityPrice(title)
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">Total:</p>
                    <p className="text-lg font-bold">
                      ${Number(totalPrice).toLocaleString()}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardHeader>
        <Button
          className="flex w-full items-center gap-2 bg-green-300 px-4 text-black"
          asChild
        >
          <Link
            href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
          >
            <Image
              src={images.whatsapp}
              alt="whatsapp"
              width={20}
              height={20}
            />
            <p>Consult by Whatsapp</p>
          </Link>
        </Button>
      </Card>
      <div className="flex justify-center"></div>
    </div>
  )
}
