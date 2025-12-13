"use client";

import React from "react";

type LocationCardProps = {
  title: string;
  mapSrc: string;
  height?: number;
  className?: string;
};

export default function LocationCard({
  title,
  mapSrc,
  height = 200,
  className = "",
}: LocationCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105 ${className}`}>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height={height}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


