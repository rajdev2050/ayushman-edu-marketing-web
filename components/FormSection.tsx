"use client";

import React from "react";

type FormSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function FormSection({
  title,
  children,
  className = "",
}: FormSectionProps) {
  return (
    <section className={`bg-white shadow-md p-6 rounded-xl mb-10 ${className}`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}


