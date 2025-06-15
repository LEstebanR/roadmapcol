import { cn } from '@/lib/utils'

interface CarouselPaginationProps {
  currentSlide: number
  totalSlides: number
  className?: string
}

export function CarouselPagination({
  currentSlide,
  totalSlides,
  className,
}: CarouselPaginationProps) {
  return (
    <div className={cn('mt-4 flex justify-center gap-2', className)}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            'h-2 w-2 rounded-full transition-all duration-300',
            currentSlide === index
              ? 'bg-primary w-4'
              : 'bg-primary/50 hover:bg-primary/70'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
