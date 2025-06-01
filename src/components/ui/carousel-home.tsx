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
import { LANDING_LINKS } from "@/lib/data";
import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "./badge";
import { TitleCard } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";

export function CarouselHome() {
  const router = useRouter();
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  const handlePrevious = () => {
    api?.scrollPrev();
    autoplay.current?.reset();
  };

  const handleNext = () => {
    api?.scrollNext();
    autoplay.current?.reset();
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-screen flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] mt-14"
    >
      <CarouselContent className="w-screen">
        {LANDING_LINKS.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full h-[calc(100vh-3.5rem)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <Card className="border bg-white/80 w-10/12 md:w-xl">
              <CardHeader className="flex flex-col items-center justify-center">
                <Badge className={`${item.chipColor} mx-auto text-black`}>
                  {item.chipIcon}
                  {item.chip}
                </Badge>
                <TitleCard>{item.title}</TitleCard>
                <p className="font-bold text-xl text-center">{item.subtitle}</p>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <p className="text-center">{item.description}</p>
                <Button
                  className="mx-auto w-full"
                  onClick={() => {
                    router.push(item.href);
                  }}
                >
                  {item.button}
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2" onClick={handlePrevious} />
      <CarouselNext className="absolute right-2" onClick={handleNext} />
    </Carousel>
  );
}
