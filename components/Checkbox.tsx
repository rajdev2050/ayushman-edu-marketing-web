"use client";

import React from "react";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: () => void;
};

export default function Checkbox(props: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />
      <span>{props.label}</span>
    </label>
  );
}
