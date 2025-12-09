"use client";

import React, { useState } from "react";

type FacilityCardProps = {
  title: string;
  description: string;
};

export default function FacilityCard({
  title,
  description,
}: FacilityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-200">
          {title}
        </h3>
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[1000px]" : "max-h-[3.6rem]"
            }`}
          >
            <p
              className={`text-gray-600 text-sm leading-relaxed ${
                isExpanded ? "" : "line-clamp-2"
              }`}
            >
              {description}
            </p>
          </div>
          {description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold transition-all duration-300 hover:underline transform hover:scale-105 active:scale-95 inline-flex items-center gap-1"
            >
              <span>{isExpanded ? "View Less" : "View More"}</span>
              <span
                className={`inline-block transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

