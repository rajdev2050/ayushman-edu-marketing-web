"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

type HeroSectionProps = {
  title: string;
  description: string;
  showBackButton?: boolean;
  className?: string;
};

export default function HeroSection({
  title,
  description,
  showBackButton = true,
  className = "",
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <>
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </button>
      )}

      {/* Header Section */}
      <div className={`text-center mb-12 ${className}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
    </>
  );
}
