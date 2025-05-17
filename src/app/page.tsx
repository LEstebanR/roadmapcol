import { CarouselHome } from "@/components/ui/carousel-home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-center">Road Map Col</h1>
      <h2 className="text-center">
        Not just a tour, but a story worth telling.
      </h2>
      <CarouselHome />
    </div>
  );
}
