"use client";
import React from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="border rounded-xl p-6 w-full  shadow-sm bg-white">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      {description && (
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      )}

      {/* Extra Content */}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
