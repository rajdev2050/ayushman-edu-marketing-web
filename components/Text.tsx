"use client";

import React from "react";

type TextProps = {
  variant: "heading" | "subheading" | "body" | "muted" | "error" | "underline";
  children: React.ReactNode;
};

export default function Text(props: TextProps) {
  const base = "transition-all duration-300";

  const getTextStyle = () => {
    if (props.variant === "heading") {
      return `${base} text-3xl font-bold`;
    } else if (props.variant === "subheading") {
      return `${base} text-xl font-semibold`;
    } else if (props.variant === "body") {
      return `${base} text-base`;
    } else if (props.variant === "muted") {
      return `${base} text-gray-500`;
    } else if (props.variant === "error") {
      return `${base} text-red-500 font-semibold`;
    } else if (props.variant === "underline") {
      return `${base} underline`;
    }
  };

  return <p className={getTextStyle()}>{props.children}</p>;
}
