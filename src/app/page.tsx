"use client";
import { CarouselHome } from "@/components/ui/carousel-home";
import { Title } from "@/components/ui/typography/typography";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full ">
      <Title>Road Map Col</Title>
      <div className="flex flex-col items-center justify-center  w-full">
        <h2 className="text-center text-3xl w-8/12">Not just a tour, but a </h2>
        <TypeAnimation
          sequence={[
            "story worth telling",
            2000,
            "a journey worth living",
            2000,
            "friends for life",
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1.5em",
            display: "inline-block",
            color: "#ff3314",
          }}
        />
      </div>
      <CarouselHome />
    </div>
  );
}
