"use client";

import React from "react";
import Image from "next/image";

type GalleryImageCardProps = {
  image: {
    id: number;
    src: string;
    alt: string;
  };
  onClick?: () => void;
};

export default function GalleryImageCard({
  image,
  onClick,
}: GalleryImageCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}


