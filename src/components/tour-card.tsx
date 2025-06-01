import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function TourCard({
  tour,
}: {
  tour: {
    place: string;
    description: string;
    image: string;
    title: string;
    duration: string;
    price: number;
    href: string;
  };
}) {
  return (
    <Card className="md:w-full w-11/12 pt-0 rounded-lg flex flex-col mx-auto border border-black">
      <CardHeader className="px-0 pt-0">
        <Image
          src={tour.image}
          alt={tour.place}
          width={500}
          height={500}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex gap-2 items-center text-muted-foreground">
          <MapPin />
          <p>{tour.place}</p>
        </div>
        <h2 className="text-2xl font-bold">{tour.title}</h2>
        <div className="flex gap-2 items-center text-muted-foreground">
          <Clock />
          <p>{tour.duration}</p>
        </div>
        <p className="flex-1">{tour.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex gap-2 items-center font-bold text-secondary">
            <p>${Number(tour.price).toLocaleString()}</p>
          </div>
          <Button className="bg-secondary text-black" asChild>
            <Link href={tour.href}>
              Ver detalles
              <ArrowRight className="w-4 h-4 hover:rotate-45 transition-all duration-300" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
