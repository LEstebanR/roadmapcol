"use client";

import { useParams } from "next/navigation";
import { CONTACT, TOURS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import { TourMediaCarousel } from '@/components/ui/tour-media-carousel'

interface Activity {
  title: string;
  description: string;
  image: string;
  duration: string;
  includes: string[];
  price: number;
}

interface Tour {
  place: string;
  title: string;
  description: string;
  image: string;
  images?: Array<{
    type: 'image' | 'video';
    url: string;
    alt: string;
  }>;
  duration: string;
  highlights: string[];
  href: string;
  price: number;
  activities: Activity[];
}

export default function TourPage() {
  const { name } = useParams();
  const tour = TOURS.find((tour) => tour.href === `/tours/${name}`) as Tour | undefined;
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const getSelectedActivityPrice = (activityTitle: string) => {
    const activity = tour?.activities?.find(
      (activity) => activity.title === activityTitle
    );
    return activity?.price ?? 0;
  }

  const totalPrice =
    (tour?.price || 0) +
    selectedActivities.reduce(
      (acc, title) => acc + getSelectedActivityPrice(title),
      0
    );

  useEffect(() => {
    if (tour) {
      setMessage(`Hello, I would like to get more information about the tour ${tour.title}${selectedActivities.length > 0 ? `, with the activities: ${selectedActivities.join(", ")}` : ""}. With an approximate value of ${totalPrice}`);
    }
  }, [tour, selectedActivities, totalPrice]);

  if (!tour) {
    return (
      <div className="my-14 flex flex-col items-center justify-center gap-12 md:w-6/12 mx-auto">
        <h1 className="text-2xl font-bold">Tour not found</h1>
        <Link href="/tours" className="flex items-center gap-2 text-sky-500">
          <ArrowLeft className="w-4 h-4" />
          Back to tours
        </Link>
      </div>
    );
  }

  const handleActivityToggle = (activityTitle: string) => {
    setSelectedActivities((prev) => {
      if (prev.includes(activityTitle)) {
        return prev.filter((title) => title !== activityTitle);
      }
      return [...prev, activityTitle];
    });
  };

  return (
    <div className="my-14 flex flex-col items-center justify-center gap-12 md:w-6/12 mx-auto">
      <Link
        href="/tours"
        className="flex items-center gap-2 self-start text-sky-500"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to tours
      </Link>
      <Card className="md:w-full w-11/12 pt-0 rounded-lg flex flex-col mx-auto border border-black">
        <CardHeader className="px-0 pt-0">
          {tour.images ? (
            <TourMediaCarousel items={tour.images} />
          ) : (
            <Image
              src={tour.image}
              alt={tour.place}
              width={500}
              height={500}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex gap-1 items-center text-muted-foreground">
              <MapPin />
              <p>{tour.place}</p>
            </div>
            <div className="flex gap-1 items-center text-muted-foreground">
              <Clock />
              <p>{tour.duration}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">{tour.title}</h2>
          <p className="text-muted-foreground">{tour.description}</p>
          <h3 className="text-xl font-bold">Destacados:</h3>
          <ul className="list-disc list-inside grid md:grid-cols-2 gap-2">
            {tour.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {tour.activities.length > 0 && (
        <h2 className="text-2xl font-bold self-start ml-4">
          Activities available:
        </h2>
      )}
      <div className="flex flex-col gap-4">
        {tour.activities.length > 0 ? (
          tour.activities.map((activity) => (
          <Card
            key={activity.title}
            className="flex md:flex-row flex-col py-0 border border-black md:w-full w-11/12 mx-auto"
          >
            <Image
              src={activity.image}
              alt={activity.title}
              width={500}
              height={500}
              className="object-cover md:rounded-l-lg  md:rounded-r-none rounded-t-lg md:w-4/12 w-full"
            />
            <div className="flex flex-col gap-2 p-4">
              <div className="flex w-full justify-between items-center gap-4">
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <p className="text-muted-foreground">{activity.duration}</p>
              </div>
              <p className="text-muted-foreground">{activity.description}</p>
              <p className="font-bold">Incluye:</p>
              <ul className="grid grid-cols-2 gap-2">
                {activity.includes.map((include: string) => (
                  <li key={include} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    {include}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">
                  Price: ${Number(activity.price).toLocaleString()}
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedActivities.includes(activity.title)}
                    onCheckedChange={() => handleActivityToggle(activity.title)}
                  />
                  <Label>Add to my experience</Label>
                </div>
              </div>
            </div>
          </Card>
        ))
        ) : null}
      </div>
      <Card className="border border-black px-4 md:w-full w-11/12 mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold">Summary of your experience</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">Precio base:</p>
              <p className="text-lg font-bold">
                ${Number(tour.price).toLocaleString()} / persona
              </p>
            </div>
            {selectedActivities.length > 0 && (
              <>
                <div className="border-t pt-4">
                  <p className="font-bold mb-2">Selected activities:</p>
                  {selectedActivities.map((title) => (
                    <div
                      key={title}
                      className="flex justify-between items-center"
                    >
                      <p className="text-muted-foreground">{title}</p>
                      <p className="font-bold">
                        $
                        {Number(
                          getSelectedActivityPrice(title)
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">Total:</p>
                    <p className="text-lg font-bold">
                      ${Number(totalPrice).toLocaleString()}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardHeader>
        <Button
          className="w-full px-4 flex items-center gap-2 bg-green-300 text-black"
          asChild
        >
          <Link href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`} target="_blank">
            <Image
              src={images.whatsapp}
              alt="whatsapp"
              width={20}
              height={20}
            />
            <p>Consult by Whatsapp</p>
          </Link>
        </Button>
      </Card>
      <div className="flex justify-center"></div>
    </div>
  );
}
