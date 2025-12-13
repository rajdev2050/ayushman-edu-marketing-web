"use client";

import React from "react";
import Image from "next/image";
import BackButton from "./BackButton";
import EventMetaInfo from "./EventMetaInfo";

type Event = {
  title: string;
  img: string;
  description: string;
  date: string;
  location?: string;
};

type EventDetailCardProps = {
  event: Event;
  onBack?: () => void;
  backHref?: string;
};

export default function EventDetailCard({
  event,
  onBack,
  backHref,
}: EventDetailCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src={event.img}
          width={1200}
          height={600}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {event.title}
        </h1>

        <EventMetaInfo date={event.date} location={event.location} />

        <div className="prose max-w-none mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}


