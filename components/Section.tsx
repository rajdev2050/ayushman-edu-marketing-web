"use client";

import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}


