"use client";

import React from "react";

type StatusMessageProps = {
  type: "success" | "error" | "info" | "warning";
  message: string;
  onClose?: () => void;
  className?: string;
};

export default function StatusMessage({
  type,
  message,
  onClose,
  className = "",
}: StatusMessageProps) {
  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  };

  return (
    <div
      className={`border px-4 py-3 rounded-lg text-sm ${typeStyles[type]} ${className}`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-current opacity-70 hover:opacity-100"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}


