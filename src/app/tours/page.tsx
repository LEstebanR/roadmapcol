import { JsonLd } from '@/components/json-ld'
import { TourCard } from '@/components/tour-card'
import { Title } from '@/components/ui/typography/typography'
import { TOURS } from '@/lib/data'
import { socialMetadata } from '@/lib/og'
import { itemListSchema } from '@/lib/structured-data'
import type { Metadata } from 'next'

const toursDescription =
  'Browse our full catalogue of tours across Medellín, Guatapé, Jardín, Cartagena and the rest of Antioquia and Colombia — adventure, culture, nature and gastronomy experiences for every traveler.'

export const metadata: Metadata = {
  alternates: { canonical: '/tours' },
  description: toursDescription,
  title: 'Tours in Colombia',
  ...socialMetadata({
    description: toursDescription,
    title: 'Tours in Colombia',
    url: 'https://roadmapcol.com/tours',
  }),
}

export default function Tours() {
  return (
    <div className="mx-auto my-14 flex min-h-[calc(100vh-3.5rem)] w-full max-w-7xl flex-col items-center justify-start gap-6 px-4 md:px-8">
      <JsonLd data={itemListSchema(TOURS)} />
      <Title>Our experiences</Title>
      <p className="text-muted-foreground max-w-xl text-center">
        Discover the most fascinating destinations in Colombia with our tours
        designed to give you authentic and memorable experiences.
      </p>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOURS.map((tour) => (
          <TourCard key={tour.place} tour={tour} />
        ))}
      </div>
    </div>
  )
}
