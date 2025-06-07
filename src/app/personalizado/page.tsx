"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/ui/typography/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mountain,
  Landmark,
  Trees,
  Utensils,
  Waves,
  History,
  Camera,
  Leaf,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONTACT } from "@/lib/data";

const ACCOMMODATIONS = [
  {
    name: "Hotel",
    value: "hotel",
  },
  {
    name: "Hostal",
    value: "hostal",
  },
  {
    name: "Apartamento",
    value: "apartamento",
  },
  {
    name: "Casa",
    value: "casa",
  },
  {
    name: "Ecolodge",
    value: "ecolodge",
  },
];

const activities = [
  { id: "aventura", label: "Aventura", icon: Mountain },
  { id: "cultura", label: "Cultura", icon: Landmark },
  { id: "naturaleza", label: "Naturaleza", icon: Trees },
  { id: "gastronomia", label: "Gastronomía", icon: Utensils },
  { id: "playa", label: "Playa", icon: Waves },
  { id: "historia", label: "Historia", icon: History },
  { id: "fotografia", label: "Fotografía", icon: Camera },
  { id: "fauna", label: "Fauna y Flora", icon: Leaf },
  { id: "relajacion", label: "Relajación", icon: Sparkles },
];

export default function PersonalizaExperiencia() {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [data, setData] = useState<{
    name: string;
    email: string;
    phone: string;
    destination: string;
    startDate: string;
    people: number;
    endDate: string;
    budget: number;
    comments: string;
    accommodation: string;
  }>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    people: 0,
    endDate: "",
    budget: 0,
    comments: "",
    accommodation: "",
  });

  const toggleActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  useEffect(() => {
    setMessage(`Hola, quiero más información sobre un tour personalizado, estos son mis datos:
      Nombre: ${data?.name}
      Email: ${data?.email}
      Teléfono: ${data?.phone}
      Destino: ${data?.destination}
      Número de personas: ${data?.people}
      Fecha de inicio: ${data?.startDate}
      Fecha de regreso: ${data?.endDate}
      Presupuesto: ${data?.budget}
      Tipo de alojamiento: ${data?.accommodation}
      Comentarios: ${data?.comments}
      Actividades: ${selectedActivities.join(", ")}
      `);
  }, [data, selectedActivities]);

  return (
    <section className="my-14 flex flex-col gap-4 items-center justify-center md:w-6/12 w-11/12 mx-auto">
      <Title>Tour personalizado</Title>
      <p className="text-muted-foreground">
        ¿No encuentras lo que buscas? Cuéntanos qué tipo de experiencia deseas y
        diseñaremos un itinerario a tu medida.{" "}
      </p>
      <Card className="p-4 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Información personal</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Nombre</Label>
              <Input placeholder="Ingresa tu nombre" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input placeholder="tu@email.com" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
          </div>
          <Label>Teléfono</Label>
          <Input placeholder="Ingresa tu teléfono" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
          <hr className="my-4" />
          <h2 className="text-lg font-bold">Detalles del viaje</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Destino principal</Label>
              <Input placeholder="Ciudad o lugar" value={data.destination} onChange={(e) => setData({ ...data, destination: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Número de personas</Label>
              <Input 
                type="number" 
                value={data.people} 
                onChange={(e) => setData({ ...data, people: Number(e.target.value) })} 
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Fecha de inicio</Label>
              <Input type="date" value={data.startDate} onChange={(e) => setData({ ...data, startDate: e.target.value })} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Fecha de regreso</Label>
              <Input type="date" value={data.endDate} onChange={(e) => setData({ ...data, endDate: e.target.value })} />
            </div>
          </div>
          <Label>Presupuesto aproximado</Label>
          <Input 
            type="number" 
            value={data.budget} 
            onChange={(e) => setData({ ...data, budget: Number(e.target.value) })} 
          />
          <Label>¿Qué tipo de alojamiento preferido?</Label>
          <Select 
            value={data.accommodation} 
            onValueChange={(value) => setData({ ...data, accommodation: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {ACCOMMODATIONS.map((accommodation) => (
                <SelectItem
                  key={accommodation.value}
                  value={accommodation.value}
                >
                  {accommodation.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Label>Intereses</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mt-2">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <button
                  key={activity.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleActivity(activity.id);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer",
                    selectedActivities.includes(activity.id)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{activity.label}</span>
                </button>
              );
            })}
          </div>
          <Label>Comentarios adicionales</Label>
          <Textarea placeholder="Ingresa tus comentarios adicionales" value={data.comments} onChange={(e) => setData({ ...data, comments: e.target.value })} />
          
          <Link href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`} target="_blank">
            <Button className="w-full">
              Enviar solicitud
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  );
}
