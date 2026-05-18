'use client'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/typography/typography'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto my-14 flex min-h-[calc(100vh-3.5rem)] w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 md:px-8">
      <Title>Oops!</Title>
      <p className="max-w-md text-center text-lg text-muted-foreground">
        Something went wrong. Please try again or go back home.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" onClick={reset}>
          Try again
        </Button>
        <Link href="/">
          <Button size="lg" variant="outline">
            Go home
          </Button>
        </Link>
      </div>
    </div>
  )
}
