'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

interface TourBookingContextValue {
  isSelected: (activityTitle: string) => boolean
  selectedActivities: string[]
  toggleActivity: (activityTitle: string) => void
}

const TourBookingContext = createContext<TourBookingContextValue | null>(null)

export function TourBookingProvider({ children }: { children: ReactNode }) {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])

  const toggleActivity = (activityTitle: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityTitle)
        ? prev.filter((title) => title !== activityTitle)
        : [...prev, activityTitle]
    )
  }

  const value = useMemo(
    () => ({
      isSelected: (activityTitle: string) =>
        selectedActivities.includes(activityTitle),
      selectedActivities,
      toggleActivity,
    }),
    [selectedActivities]
  )

  return (
    <TourBookingContext.Provider value={value}>
      {children}
    </TourBookingContext.Provider>
  )
}

export function useTourBooking() {
  const context = useContext(TourBookingContext)
  if (!context) {
    throw new Error('useTourBooking must be used within TourBookingProvider')
  }
  return context
}
