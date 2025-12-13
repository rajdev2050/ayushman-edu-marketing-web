"use client";

import React from "react";

type InfoListItem = {
  text: string;
  icon?: string;
};

type InfoListProps = {
  items: InfoListItem[];
  icon?: string;
  className?: string;
};

export default function InfoList({
  items,
  icon,
  className = "",
}: InfoListProps) {
  const defaultIcon = icon || "📌";

  return (
    <ul className={`space-y-3 text-gray-700 ${className}`}>
      {items.map((item, index) => (
        <li key={index}>
          {item.icon || defaultIcon} {item.text}
        </li>
      ))}
    </ul>
  );
}


