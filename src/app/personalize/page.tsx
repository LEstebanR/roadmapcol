import type { Metadata } from 'next'

import PersonalizeClient from './personalize-client'

export const metadata: Metadata = {
  alternates: { canonical: '/personalize' },
  description:
    'Tell us your travel dates, budget and interests and we will design a private, personalized tour itinerary across Colombia just for you.',
  title: 'Personalize your tour',
}

export default function PersonalizePage() {
  return <PersonalizeClient />
}
