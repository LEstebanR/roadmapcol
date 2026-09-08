'use client'

import { useEffect, useState } from 'react'
import { StarRating } from '@/components/ui/star-rating'
import { TESTIMONIALS } from '@/lib/data'
import { GOOGLE_MAPS_URL } from '@/lib/google-maps'
import type { GoogleReviewsResponse } from '@/lib/google-reviews'
import { marqueeDuration } from '@/lib/marquee'

const HAPPY_TRAVELERS = 500

function ReviewAvatar({ author, avatarUrl }: { author: string; avatarUrl?: string }) {
  const [imageFailed, setImageFailed] = useState(false)
  const initials = author
    .split(/\s+/)
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (!avatarUrl || imageFailed) {
    return (
      <span
        aria-hidden="true"
        className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
      >
        {initials}
      </span>
    )
  }

  return (
    // Google review photos are external attribution assets.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      className="size-10 shrink-0 rounded-full object-cover"
      onError={() => setImageFailed(true)}
      referrerPolicy="no-referrer"
      src={avatarUrl}
    />
  )
}

export function Testimonials() {
  const [googleData, setGoogleData] = useState<GoogleReviewsResponse | null>(null)
  const [expandedReview, setExpandedReview] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let active = true

    fetch('/api/google-reviews')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GoogleReviewsResponse | null) => {
        if (active && data?.reviews?.length) setGoogleData(data)
      })
      .catch(() => undefined)

    return () => {
      active = false
    }
  }, [])

  const googleTestimonials = googleData?.reviews.filter(
    (review) => review.rating === 4 || review.rating === 5
  )
  const testimonials = googleTestimonials?.length
    ? googleTestimonials
    : TESTIMONIALS.filter(
        (review) => review.rating === 4 || review.rating === 5
      )
  const travelerCount = googleData?.userRatingCount ?? HAPPY_TRAVELERS
  const marqueeItems = [
    ...testimonials.map((t) => ({ ...t, id: `${t.author}-original`, hidden: false })),
    ...testimonials.map((t) => ({ ...t, id: `${t.author}-duplicate`, hidden: true })),
  ]

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
          {travelerCount}+ happy travelers and counting
        </p>
      </div>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="animate-marquee flex w-max gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            animationDuration: `${marqueeDuration(testimonials.length)}s`,
            animationPlayState:
              isHovered || expandedReview ? 'paused' : 'running',
          }}
        >
          {marqueeItems.map((t) => (
            <div
              key={t.id}
              aria-hidden={t.hidden || undefined}
              className="bg-card flex min-h-[18rem] w-[22rem] shrink-0 flex-col gap-4 rounded-2xl border p-6 shadow-sm md:w-96"
            >
              <div className="flex items-center justify-between gap-4">
                <StarRating rating={t.rating} />
                <ReviewAvatar author={t.author} avatarUrl={t.avatarUrl} />
              </div>
              <p
                className={`text-foreground text-sm leading-relaxed ${
                  expandedReview === t.id
                    ? ''
                    : 'line-clamp-6 min-h-36 overflow-hidden'
                }`}
                title={t.quote}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              {t.quote.length > 180 && (
                <button
                  aria-expanded={expandedReview === t.id}
                  className="text-primary w-fit text-left text-xs font-semibold underline underline-offset-4"
                  onClick={() =>
                    setExpandedReview((current) =>
                      current === t.id ? null : t.id
                    )
                  }
                  type="button"
                >
                  {expandedReview === t.id
                    ? 'Show less'
                    : 'Read full review'}
                </button>
              )}
              <div>
                <p className="font-semibold">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground mt-5 flex flex-wrap items-center justify-center gap-2 px-4 text-xs">
        <span>Verified reviews from</span>
        <a
          className="font-medium underline underline-offset-4"
          href={googleData?.googleMapsUri ?? GOOGLE_MAPS_URL}
          rel="noreferrer"
          target="_blank"
        >
          Google Maps
        </a>
      </div>
    </section>
  )
}
