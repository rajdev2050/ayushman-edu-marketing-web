"use client";

import React from "react";
import Section from "./Section";

type WelcomeSectionProps = {
  title: string;
  description: string;
  className?: string;
};

export default function WelcomeSection({
  title,
  description,
  className = "",
}: WelcomeSectionProps) {
  return (
    <Section id="about" className={`text-center ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </Section>
  );
}


