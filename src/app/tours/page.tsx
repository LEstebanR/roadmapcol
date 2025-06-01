import { Title } from "@/components/ui/typography/typography";
import { TOURS } from "@/lib/data";
import { TourCard } from "@/components/tour-card";

export default function Tours() {
  return (
    <div className="flex flex-col items-center justify-start gap-2 my-14 md:w-6/12 mx-auto min-h-[calc(100vh-3.5rem)]">
      <Title>Nuestras experiencias</Title>
      <p className="text-center text-lg">
        Descubre los destinos más fascinantes de Colombia con nuestros tours
        diseñados para brindarte experiencias auténticas y memorables.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TOURS.map((tour) => (
          <TourCard key={tour.place} tour={tour} />
        ))}
      </div>
    </div>
  );
}
