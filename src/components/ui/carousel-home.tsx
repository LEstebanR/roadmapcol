"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselPagination } from "./carousel-pagination";
import Autoplay from "embla-carousel-autoplay";
import { TitleCard } from "@/components/ui/typography/typography";

const ITEMS = [
  {
    title: "About us",
    description:
      "Your local friend in Colombia 🇨🇴\n\nwe don’t just take travelers from place to place… we guide them toward unforgettable experiences",
    image: "/tourism.avif",
  },
  {
    title: "Promociones",
    description: "Promociones",
    image: "/landscape.png",
  },
  {
    title: "Recomendaciones",
    description: "Recomendaciones",
    image: "/landscape.png",
  },
];

export function CarouselHome() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mx-auto w-10/12 md:max-w-[1200px] px-4 ">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {ITEMS.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden h-[500px] md:h-[600px] w-full py-0 bg-[url('/tourism.avif')] bg-cover bg-center bg-no-repeat bg-fixed">
                <CardContent className="relative h-full p-0">
                  <div className="relative z-10 flex flex-col items-start justify-end text-white h-full p-6 ">
                    <TitleCard>{item.title}</TitleCard>
                    <p className="text-xl max-w-xl ">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
      <CarouselPagination currentSlide={current} totalSlides={count} />
    </div>
  );
}
