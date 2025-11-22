"use client";

import React from "react";

type Option = { label: string; value: string };

type DropdownProps = {
  options: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Dropdown(props: DropdownProps) {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="border p-4 w-full rounded-xl bg-white outline-none transition-all duration-300 hover:border-blue-600"
    >
      {props.options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
