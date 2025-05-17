import { Button } from "@/components/ui/button";

export default function PersonalizaExperiencia() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-colombia-blue p-8">
              <h2 className="text-2xl font-bold mb-4">Diseña tu Viaje</h2>
              <p className="mb-6">
                Completa el formulario y nuestro equipo de expertos diseñará una
                experiencia única según tus preferencias.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <span>Comparte tus ideas</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <span>Recibe una propuesta</span>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <span>¡Vive tu experiencia!</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nombre completo*
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Correo electrónico*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="travelDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Fecha estimada de viaje
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="groupSize"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Número de personas
                    </label>
                    <input
                      type="number"
                      id="groupSize"
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Presupuesto aproximado (COP)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Cuéntanos sobre la experiencia que deseas*
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    required
                    placeholder="Describe los lugares que deseas visitar, actividades, preferencias, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-colombia-blue focus:border-colombia-blue"
                  ></textarea>
                </div>

                <Button className="w-full">Enviar Solicitud</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
