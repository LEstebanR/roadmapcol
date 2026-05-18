import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/typography/typography'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto my-14 flex min-h-[calc(100vh-3.5rem)] w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 md:px-8">
      <Title>404</Title>
      <p className="max-w-md text-center text-lg text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/tours">
        <Button size="lg">Explore our tours</Button>
      </Link>
    </div>
  )
}
