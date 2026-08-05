import { StarRating } from '@/components/ui/star-rating'
import { TESTIMONIALS } from '@/lib/data'
import { marqueeDuration } from '@/lib/marquee'

const HAPPY_TRAVELERS = 500

const MARQUEE_ITEMS = [
  ...TESTIMONIALS.map((t) => ({
    ...t,
    id: `${t.author}-original`,
    hidden: false,
  })),
  ...TESTIMONIALS.map((t) => ({
    ...t,
    id: `${t.author}-duplicate`,
    hidden: true,
  })),
]

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl min-w-0 py-16">
      <div className="mb-10 flex flex-col items-center gap-3 px-4 text-center md:px-8">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase">
          Social proof
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          What our travelers say
        </h2>
        <p className="text-muted-foreground text-lg">
          {HAPPY_TRAVELERS}+ happy travelers and counting
        </p>
      </div>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="animate-marquee flex w-max gap-6"
          style={{
            animationDuration: `${marqueeDuration(TESTIMONIALS.length)}s`,
          }}
        >
          {MARQUEE_ITEMS.map((t) => (
            <div
              key={t.id}
              aria-hidden={t.hidden || undefined}
              inert={t.hidden || undefined}
              className="bg-card flex w-80 shrink-0 flex-col gap-4 rounded-2xl border p-6 shadow-sm"
            >
              <StarRating rating={t.rating} />
              <p className="text-foreground flex-1 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
