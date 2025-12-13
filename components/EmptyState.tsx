"use client";

import React from "react";

type EmptyStateProps = {
  message: string;
  icon?: string | React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export default function EmptyState({
  message,
  icon,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      {icon && (
        <div className="mb-4">
          {typeof icon === "string" ? (
            <span className="text-6xl">{icon}</span>
          ) : (
            icon
          )}
        </div>
      )}
      <p className="text-gray-600 text-lg">{message}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}


