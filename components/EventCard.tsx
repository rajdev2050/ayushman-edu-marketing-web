"use client";

import React from "react";
import Image from "next/image";

type EventCardProps = {
  event: {
    id: number;
    title: string;
    img: string;
    date: string;
  };
  onClick: () => void;
};

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full"
    >
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.img}
            width={900}
            height={600}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span>📅</span>
            <span>{event.date}</span>
          </p>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-blue-600 text-sm font-semibold">
              View Gallery →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}


