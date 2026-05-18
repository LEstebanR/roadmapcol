import { Star } from 'lucide-react'

export function StarRating({ rating }: { rating: number }) {
  return (
    <div
      aria-label={`${rating} out of 5 stars`}
      className="flex items-center gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? 'size-4 fill-amber-400 text-amber-400'
              : 'size-4 text-muted-foreground'
          }
        />
      ))}
    </div>
  )
}
