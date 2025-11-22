"use client";

import React from "react";

type InputProps = {
  type?: "text" | "email" | "password" | "number";
  size?: "small" | "medium";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function Input(props: InputProps) {
  const commonInputStyle =
    "border rounded-xl px-4 py-2 focus:outline-none transition-all duration-300 shadow-sm";

  const getInputStyle = () => {
    let sizeStyle = "";
    if (props.size === "small") {
      sizeStyle = "text-sm py-1";
    } else {
      sizeStyle = "text-base py-2";
    }

    return `${commonInputStyle} ${sizeStyle} border-gray-300 focus:ring-2 focus:ring-blue-600`;
  };

  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder || ""}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      disabled={props.disabled}
      className={getInputStyle()}
    />
  );
}
