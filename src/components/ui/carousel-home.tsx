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

const ITEMS = ["Descripción empresa", "Promociones", "Recomendaciones"];

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
              <Card className="overflow-hidden h-[500px] md:h-[600px] w-full py-0">
                <CardContent className="relative h-full p-0">
                  <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center  h-full w-full"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1512617835784-a92626c0a554?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      objectFit: "contain",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 flex flex-col items-center justify-center text-white h-full p-6">
                    <span className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                      {item}
                    </span>
                    <p className="text-center md:text-xl">Tu mensaje aquí</p>
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
