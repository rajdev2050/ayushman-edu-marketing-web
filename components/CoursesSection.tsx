"use client";

import React from "react";
import Section from "./Section";
import Button from "./Button";
import { ArrowRightIcon } from "lucide-react";

type CoursesSectionProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaAction: () => void;
  className?: string;
};

export default function CoursesSection({
  title,
  description,
  ctaText,
  ctaAction,
  className = "",
}: CoursesSectionProps) {
  return (
    <Section id="courses" className={`text-center ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
          {description}
        </p>
        <Button
          type="primary"
          size="medium"
          className="flex items-center justify-center gap-2 mx-auto"
          onClick={ctaAction}
        >
          {ctaText} <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
}


