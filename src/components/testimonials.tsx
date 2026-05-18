import { StarRating } from '@/components/ui/star-rating'
import { TESTIMONIALS } from '@/lib/data'

const HAPPY_TRAVELERS = 500

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest">
          Social proof
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          What our travelers say
        </h2>
        <p className="text-muted-foreground text-lg">
          {HAPPY_TRAVELERS}+ happy travelers and counting
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="bg-card flex flex-col gap-4 rounded-2xl border p-6 shadow-sm"
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
    </section>
  )
}
