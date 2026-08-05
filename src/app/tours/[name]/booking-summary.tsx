'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { CONTACT } from '@/lib/data'
import { images } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { useTourBooking } from './tour-booking-context'

interface Activity {
  price?: number
  title: string
}

export function BookingSummary({
  activities,
  basePrice,
  tourTitle,
}: {
  activities: Activity[]
  basePrice: number
  tourTitle: string
}) {
  const { selectedActivities } = useTourBooking()

  const getSelectedActivityPrice = (activityTitle: string) => {
    const activity = activities.find(
      (activity) => activity.title === activityTitle
    )
    return Number(activity?.price ?? 0)
  }

  const totalPrice =
    basePrice +
    selectedActivities.reduce(
      (acc, title) => acc + getSelectedActivityPrice(title),
      0
    )

  const message = useMemo(
    () =>
      `Hello, I would like to get more information about the tour ${tourTitle}${selectedActivities.length > 0 ? `, with the activities: ${selectedActivities.join(', ')}` : ''}. With an approximate value of ${totalPrice}`,
    [tourTitle, selectedActivities, totalPrice]
  )

  return (
    <Card className="mx-auto w-11/12 px-4 md:w-full">
      <CardHeader>
        <h2 className="text-2xl font-bold">Summary of your experience</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Base price:</p>
            <p className="text-lg font-bold">
              ${Number(basePrice).toLocaleString()} / person
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
                      {Number(getSelectedActivityPrice(title)).toLocaleString()}
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
        className="flex w-full items-center gap-2 bg-green-500 text-white hover:bg-green-600"
        asChild
      >
        <Link
          href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={images.whatsapp} alt="whatsapp" width={20} height={20} />
          <p>Consult by Whatsapp</p>
        </Link>
      </Button>
    </Card>
  )
}
