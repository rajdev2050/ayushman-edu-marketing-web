"use client";

import HeroSection from "@/components/HeroSection";
import GalleryImageCard from "@/components/GalleryImageCard";

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
            <GalleryImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}












