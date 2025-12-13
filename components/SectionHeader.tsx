"use client";

import React from "react";

type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}


