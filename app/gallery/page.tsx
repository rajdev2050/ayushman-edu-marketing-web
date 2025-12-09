"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";

const galleryImages = [
  { id: 1, src: "/events/sample.png", alt: "School event" },
  { id: 2, src: "/events/sample.png", alt: "Sports day" },
  { id: 3, src: "/events/sample.png", alt: "Science fair" },
  { id: 4, src: "/events/sample.png", alt: "Cultural programme" },
  { id: 5, src: "/events/sample.png", alt: "Annual function" },
  { id: 6, src: "/events/sample.png", alt: "Classroom activity" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <HeroSection
          title="Gallery"
          description="Explore highlights and memories from Ayushman Educational Academy."
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}












