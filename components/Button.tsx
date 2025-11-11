"use client";

import React from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  size: "small" | "medium";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
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
    <button className={getButtonStyle()} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
