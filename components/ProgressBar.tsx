"use client";

import React from "react";

type ProgressBarProps = {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
};

export default function ProgressBar({
  value,
  max,
  label,
  showPercentage = false,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`mt-4 ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{label}</span>
          {showPercentage && (
            <span className="text-xs text-gray-500">
              {percentage.toFixed(0)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showPercentage && !label && (
        <p className="text-xs text-gray-500 mt-1">
          {percentage.toFixed(0)}% Filled
        </p>
      )}
    </div>
  );
}


