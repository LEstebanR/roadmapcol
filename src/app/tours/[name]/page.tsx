import { JsonLd } from '@/components/json-ld'
import { TOURS } from '@/lib/data'
import { socialMetadata } from '@/lib/og'
import { breadcrumbSchema, touristTripSchema } from '@/lib/structured-data'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import TourClient, { type Tour } from './tour-client'

interface PageProps {
  params: Promise<{ name: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return TOURS.map((tour) => ({
    name: tour.href.replace(/^\/tours\//, ''),
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { name } = await params
  const tour = TOURS.find((t) => t.href === `/tours/${name}`) as
    | Tour
    | undefined
  if (!tour) return {}
  return {
    alternates: { canonical: tour.href },
    description: tour.description,
    title: tour.title,
    ...socialMetadata({
      alt: tour.title,
      description: tour.description,
      imageUrl: tour.image,
      title: tour.title,
      url: `https://roadmapcol.com${tour.href}`,
    }),
  }
}

export default async function TourPage({ params }: PageProps) {
  const { name } = await params
  const tour = TOURS.find((t) => t.href === `/tours/${name}`) as
    | Tour
    | undefined
  if (!tour) notFound()
  return (
    <>
      <JsonLd data={touristTripSchema(tour)} />
      <JsonLd data={breadcrumbSchema(tour.title, tour.href)} />
      <TourClient tour={tour} />
    </>
  )
}
