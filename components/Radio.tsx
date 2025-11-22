"use client";

import React from "react";

type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: () => void;
};

export default function Radio(props: RadioProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />
      <span>{props.label}</span>
    </label>
  );
}
