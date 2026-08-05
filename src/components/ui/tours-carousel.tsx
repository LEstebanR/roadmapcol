import { TourCard } from '@/components/tour-card'
import { TOURS } from '@/lib/data'
import { marqueeDuration } from '@/lib/marquee'

const MARQUEE_ITEMS = [
  ...TOURS.map((tour) => ({
    tour,
    id: `${tour.place}-original`,
    hidden: false,
  })),
  ...TOURS.map((tour) => ({
    tour,
    id: `${tour.place}-duplicate`,
    hidden: true,
  })),
]

export function ToursCarousel() {
  return (
    <section className="mx-auto w-full max-w-7xl min-w-0 px-4 py-16 md:px-8">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase">
          Explore
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">All our tours</h2>
      </div>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="animate-marquee flex w-max gap-6"
          style={{ animationDuration: `${marqueeDuration(TOURS.length)}s` }}
        >
          {MARQUEE_ITEMS.map(({ tour, id, hidden }) => (
            <div
              key={id}
              aria-hidden={hidden || undefined}
              inert={hidden || undefined}
              className="w-80 shrink-0"
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
