import { Title } from '@/components/ui/typography/typography'
import { socialMetadata } from '@/lib/og'
import type { Metadata } from 'next'

import PersonalizeClient from './personalize-client'

const personalizeDescription =
  'Tell us your travel dates, budget and interests and we will design a private, personalized tour itinerary across Colombia just for you.'

export const metadata: Metadata = {
  alternates: { canonical: '/personalize' },
  description: personalizeDescription,
  title: 'Personalize your tour',
  ...socialMetadata({
    description: personalizeDescription,
    title: 'Personalize your tour',
    url: 'https://roadmapcol.com/personalize',
  }),
}

export default function PersonalizePage() {
  return (
    <section className="mx-auto my-14 flex w-11/12 flex-col items-center justify-center gap-4 md:w-6/12">
      <Title>Personalized tour</Title>
      <p className="text-muted-foreground">
        Don&apos;t find what you&apos;re looking for? Tell us what type of
        experience you want and we will design a itinerary to your measure.{' '}
      </p>
      <PersonalizeClient />
    </section>
  )
}
