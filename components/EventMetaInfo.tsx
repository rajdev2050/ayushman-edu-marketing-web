"use client";

import React from "react";

type EventMetaInfoProps = {
  date: string;
  location?: string;
  className?: string;
};

export default function EventMetaInfo({
  date,
  location,
  className = "",
}: EventMetaInfoProps) {
  return (
    <div className={`flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-200 ${className}`}>
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-xl">📅</span>
        <span className="font-medium">{date}</span>
      </div>
      {location && (
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-xl">📍</span>
          <span className="font-medium">{location}</span>
        </div>
      )}
    </div>
  );
}


