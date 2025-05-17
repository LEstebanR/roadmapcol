import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const TOURS = [
  {
    place: "Guatapé",
    description: "Descripción del tour",
    image: "https://via.placeholder.com/150",
    price: 100000,
    duration: "1 hora",
    itinerary: "Itinerario del tour",
    includes: ["Guía", "Transporte", "Entrada"],
    link: "/tours/guatape",
  },
  {
    place: "Jardín",
    description: "Descripción del tour",
    image: "https://via.placeholder.com/150",
    price: 100000,
    duration: "1 hora",
    itinerary: "Itinerario del tour",
    includes: ["Guía", "Transporte", "Entrada"],
    link: "/tours/jardin",
  },
];

export default function Tours() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2>Tours</h2>
      <p>Texto llamativo para invitar a ver los tours</p>
      <div className="flex flex-col items-center justify-center gap-2">
        {TOURS.map((tour) => (
          <div key={tour.place}>
            <Card>
              <CardContent className="p-0">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-bold p-6">
                    {tour.place}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tour.description}</p>
                  <span className="flex gap-2">
                    <p>Pecio:</p>$<p>{tour.price}</p>
                  </span>
                  <span className="flex gap-2">
                    <p>Duración:</p>
                    <p>{tour.duration}</p>
                  </span>
                  <span className="flex gap-2">
                    <p>Itinerario:</p>
                    <p>{tour.itinerary}</p>
                  </span>
                  <span className="flex gap-2">
                    <p>Incluye:</p>
                    <p>{tour.includes.join(", ")}</p>
                  </span>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={tour.link}>Ver más</Link>
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
