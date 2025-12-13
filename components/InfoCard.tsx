"use client";

import React from "react";

type InfoCardProps = {
  icon?: string | React.ReactNode;
  title: string;
  description?: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export default function InfoCard({
  icon,
  title,
  description,
  className = "",
  children,
}: InfoCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105 ${className}`}>
      <div className="p-5">
        {icon && (
          <div className="flex items-center gap-3 mb-4">
            {typeof icon === "string" ? (
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">{icon}</span>
              </div>
            ) : (
              icon
            )}
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          </div>
        )}
        {!icon && <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>}
        {description && (
          <p className="text-gray-700 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}


