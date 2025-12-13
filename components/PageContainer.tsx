"use client";

import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl";
  className?: string;
};

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function PageContainer({
  children,
  maxWidth = "7xl",
  className = "",
}: PageContainerProps) {
  const maxWidthClass = maxWidthClasses[maxWidth];

  return (
    <div className={`${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${className}`}>
      {children}
    </div>
  );
}

