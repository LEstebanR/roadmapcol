import { Button } from "@/components/ui/button";
import { Heart, Share } from "lucide-react";

const TOUR = {
  description: "Descripción del tour",
  tags: ["Paisaje", "Deportes acuaticos", "Gastronomía"],
  highlights: ["Paisajes", "Gastronomía", "Pueblos"],
  itinerary: [
    {
      day: 1,
      description: "Visita a finca cafetera",
    },
    {
      day: 2,
      description: "Visita a la cueva del explendor",
    },
    {
      day: 3,
      description: "Regreso a Medellín",
    },
  ],
  included: ["Guía", "Transporte", "Entrada"],
  notIncluded: ["Alimentos", "Bebidas"],
};

const tour = TOUR;

export default function Guatape() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Jardín</h2>
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Heart className="h-5 w-5 text-colombia-red" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Share className="h-5 w-5 text-colombia-blue" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Conoce uno de los pueblos más bonitos de Colombia, cerca a
                Medellín.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tour.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-colombia-blue/10 text-colombia-blue px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Destacados</h3>
                <ul className="space-y-2">
                  {tour.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="h-2 w-2 rounded-full bg-colombia-yellow mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-xl font-bold mb-4">Itinerario</h3>
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border-l-4 border-colombia-blue pl-4 py-2"
                    >
                      <div className="text-lg font-medium mb-1">
                        Día {day.day}
                      </div>
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Incluido</h3>
              <ul className="space-y-2 mb-8">
                {tour.included.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">No Incluido</h3>
              <ul className="space-y-2 mb-8">
                {tour.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-red-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="w-full">Reservar Ahora</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
