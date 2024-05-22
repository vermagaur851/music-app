"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The music courses transformed my understanding of harmony and composition. Highly recommended!",
    name: "Alexandra Johnson",
    title: "Composer",
  },
  {
    quote:
      "The guitar mastery program helped me unlock my potential. Now I play with confidence!",
    name: "Ethan Parker",
    title: "Guitarist",
  },
  {
    quote:
      "The vocal techniques course improved my singing range and control. Thank you!",
    name: "Sophia Lee",
    title: "Singer",
  },
  {
    quote:
      "Aspiring producers, don't miss the electronic music production classes. Game changer!",
    name: "Maxwell Davis",
    title: "Music Producer",
  },
  {
    quote:
      "The piano lessons were engaging and comprehensive. Dr. Ivory Keys is a fantastic instructor.",
    name: "Olivia Adams",
    title: "Pianist",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[50rem] p-12 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
