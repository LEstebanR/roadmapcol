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
  return <PersonalizeClient />
}
