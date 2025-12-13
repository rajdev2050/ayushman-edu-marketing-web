"use client";

import React from "react";

type ToggleOption = {
  label: string;
  value: string;
};

type ToggleButtonProps = {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function ToggleButton({
  options,
  value,
  onChange,
  className = "",
}: ToggleButtonProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            value === option.value
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}


