import { TourCard } from '@/components/tour-card'
import { Title } from '@/components/ui/typography/typography'
import { TOURS } from '@/lib/data'

export default function Tours() {
  return (
    <div className="mx-auto my-14 flex min-h-[calc(100vh-3.5rem)] w-full max-w-7xl flex-col items-center justify-start gap-6 px-4 md:px-8">
      <Title>Our experiences</Title>
      <p className="max-w-xl text-center text-muted-foreground">
        Discover the most fascinating destinations in Colombia with our tours
        designed to give you authentic and memorable experiences.
      </p>
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOURS.map((tour) => (
          <TourCard key={tour.place} tour={tour} />
        ))}
      </div>
    </div>
  )
}
