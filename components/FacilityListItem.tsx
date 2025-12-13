"use client";

import React from "react";

type FacilityListItemProps = {
  title: string;
  checked?: boolean;
  className?: string;
};

export default function FacilityListItem({
  title,
  checked = true,
  className = "",
}: FacilityListItemProps) {
  return (
    <div
      className={`flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors ${className}`}
    >
      <span className="text-blue-600 font-bold text-lg">
        {checked ? "✓" : "○"}
      </span>
      <span className="text-gray-700">{title}</span>
    </div>
  );
}


