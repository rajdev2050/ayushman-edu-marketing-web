"use client";

import React from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  size: "small" | "medium";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const commonButtonStyle =
    "text-white px-4 py-2 rounded-xl transition font-semibold";

  const getButtonStyle = () => {
    if (props.type === "primary") {
      return `${commonButtonStyle} bg-blue-600 hover:bg-blue-800 hover:scale-105 transition-all duration-300`;
    } else if (props.type === "secondary") {
      return `${commonButtonStyle} bg-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300`;
    }
  };
  return (
    <button
      type="submit"
      className={`${getButtonStyle()} ${props.className} ${
        props.disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
