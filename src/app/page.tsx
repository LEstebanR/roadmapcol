import { CarouselHome } from "@/components/ui/carousel-home";
import { Title } from "@/components/ui/typography/typography";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <Title>Road Map Col</Title>
      <h2 className="text-center text-3xl w-8/12">
        Not just a tour, but a{" "}
        <span className="text-primary font-bold">story worth telling</span>{" "}
      </h2>
      <CarouselHome />
    </div>
  );
}
