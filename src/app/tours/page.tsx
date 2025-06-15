import { TourCard } from '@/components/tour-card'
import { Title } from '@/components/ui/typography/typography'
import { TOURS } from '@/lib/data'

export default function Tours() {
  return (
    <div className="mx-auto my-14 flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-start gap-2 md:w-6/12">
      <Title>Our experiences</Title>
      <p className="text-center text-lg">
        Discover the most fascinating destinations in Colombia with our tours
        designed to give you authentic and memorable experiences.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {TOURS.map((tour) => (
          <TourCard key={tour.place} tour={tour} />
        ))}
      </div>
    </div>
  )
}
