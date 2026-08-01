import { JsonLd } from '@/components/json-ld'
import { TOURS } from '@/lib/data'
import { breadcrumbSchema, touristTripSchema } from '@/lib/structured-data'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import TourClient, { type Tour } from './tour-client'

interface PageProps {
  params: Promise<{ name: string }>
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
    openGraph: { images: [{ alt: tour.title, url: tour.image }] },
    title: tour.title,
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
