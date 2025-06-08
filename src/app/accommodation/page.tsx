import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Title } from "@/components/ui/typography/typography";
import { ACCOMMODATIONS, CONTACT } from "@/lib/data";
import { MapPin, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LeasePage() {
  return (
    <div className="my-14 flex flex-col justify-center items-center mx-auto md:w-6/12 w-11/12">
      <Title>Accommodation </Title>
      <p className="text-muted-foreground text-center">
        Discover our selection of unique accommodations in the most beautiful destinations in Colombia, from colonial houses to ecolodges in the jungle.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        {ACCOMMODATIONS.map((accommodation, index) => (
          <Card
            key={`${accommodation.title}-${index}`}
            className={
              "border border-black rounded-lg pt-0 hover:scale-102 transition-all duration-300"
            }
          >
            <CardHeader className="p-0">
              <Image
                src={accommodation.image}
                alt={accommodation.title}
                width={100}
                height={100}
                className="w-full object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2 ">
              <CardTitle>{accommodation.title}</CardTitle>
              <div className="flex gap-2 items-center text-muted-foreground">
                <MapPin />
                <p>{accommodation.place}</p>
              </div>
              <CardDescription className="flex flex-col gap-2 text-black">
                <p>{accommodation.description}</p>
                  <p className="font-bold text-lg">Highlights:</p>
                <ul>
                  {accommodation.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-lg font-bold">From ${accommodation.price}</p>
              <Link href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(`Hello, I would like to get more information about the accommodation ${accommodation.title} in ${accommodation.place}`)}`} target="_blank">
                <Button>Reserve</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
