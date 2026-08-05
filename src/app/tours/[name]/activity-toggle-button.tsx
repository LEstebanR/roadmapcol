'use client'

import { Button } from '@/components/ui/button'

import { useTourBooking } from './tour-booking-context'

export function ActivityToggleButton({
  activityTitle,
}: {
  activityTitle: string
}) {
  const { isSelected, toggleActivity } = useTourBooking()
  const selected = isSelected(activityTitle)

  return (
    <Button
      variant={selected ? 'outline' : 'default'}
      onClick={() => toggleActivity(activityTitle)}
    >
      {selected ? 'Remove from my experience' : 'Add to my experience'}
    </Button>
  )
}
