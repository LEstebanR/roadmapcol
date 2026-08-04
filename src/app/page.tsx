import { Testimonials } from '@/components/testimonials'
import { CarouselHome } from '@/components/ui/carousel-home'
import { Title } from '@/components/ui/typography/typography'
import { socialMetadata } from '@/lib/og'
import type { Metadata } from 'next'

const homeDescription =
  'Discover unforgettable tours in Medellín, Antioquia and Colombia. Adventure, culture and nature experiences designed for you.'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  ...socialMetadata({
    description: homeDescription,
    title: 'Road Map Col — Tours in Colombia',
    url: 'https://roadmapcol.com',
  }),
}

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-0">
      <CarouselHome />
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-14 text-center md:px-8">
        <Title>Tours in Medellín &amp; Colombia</Title>
        <p className="text-muted-foreground max-w-2xl">
          Road Map Col designs adventure, culture, nature and gastronomy tours
          across Medellín, Guatapé, Jardín, Cartagena and the rest of Antioquia
          and Colombia. Explore our curated experiences or ask for a private
          itinerary personalized just for you.
        </p>
      </section>
      <Testimonials />
    </div>
  )
}
