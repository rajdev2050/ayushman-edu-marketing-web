"use client";

import React from "react";

type ChipProps = {
  label: string;
  onRemove?: () => void;
};

export default function Chip(props: ChipProps) {
  return (
    <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
      {props.label}

      {props.onRemove && (
        <button
          onClick={props.onRemove}
          className="font-bold hover:text-red-600 transition"
        >
          ×
        </button>
      )}
    </div>
  );
}
