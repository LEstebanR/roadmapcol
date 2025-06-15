import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Title } from '@/components/ui/typography/typography'
import { ACCOMMODATIONS, CONTACT } from '@/lib/data'
import { Check, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LeasePage() {
  return (
    <div className="mx-auto my-14 flex w-11/12 flex-col items-center justify-center md:w-6/12">
      <Title>Accommodation </Title>
      <p className="text-muted-foreground text-center">
        Discover our selection of unique accommodations in the most beautiful
        destinations in Colombia, from colonial houses to ecolodges in the
        jungle.{' '}
      </p>
      <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {ACCOMMODATIONS.map((accommodation, index) => (
          <Card
            key={`${accommodation.title}-${index}`}
            className={
              'rounded-lg border border-black pt-0 transition-all duration-300 hover:scale-102'
            }
          >
            <CardHeader className="p-0">
              <Image
                src={accommodation.image}
                alt={accommodation.title}
                width={100}
                height={100}
                className="w-full rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardTitle>{accommodation.title}</CardTitle>
              <div className="text-muted-foreground flex items-center gap-2">
                <MapPin />
                <p>{accommodation.place}</p>
              </div>
              <CardDescription className="flex flex-col gap-2 text-black">
                <p>{accommodation.description}</p>
                <p className="text-lg font-bold">Highlights:</p>
                <ul>
                  {accommodation.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-lg font-bold">From ${accommodation.price}</p>
              <Link
                href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(`Hello, I would like to get more information about the accommodation ${accommodation.title} in ${accommodation.place}`)}`}
                target="_blank"
              >
                <Button>Reserve</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
