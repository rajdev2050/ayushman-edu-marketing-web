"use client";

import React from "react";
import Section from "./Section";

type ThoughtOfDayProps = {
  quote: string;
  author: string;
  className?: string;
};

export default function ThoughtOfDay({
  quote,
  author,
  className = "",
}: ThoughtOfDayProps) {
  return (
    <Section id="thought" className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Thought of the Day
      </h2>

      <div className="max-w-4xl mx-auto">
        <blockquote className="text-2xl sm:text-3xl italic text-gray-700 mb-4">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="text-gray-500 text-lg">— {author}</p>
      </div>
    </Section>
  );
}


