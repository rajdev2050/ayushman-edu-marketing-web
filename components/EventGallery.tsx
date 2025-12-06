"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type EventGalleryProps = {
  open: boolean;
  onClose: () => void;
  event: {
    id: number;
    title: string;
    date: string;
    images: string[];
  };
};

export default function EventGallery({
  open,
  onClose,
  event,
}: EventGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first image when event changes
  useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open, event.id]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, currentIndex, event.images.length]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h2
              id="gallery-title"
              className="text-xl md:text-2xl font-bold text-gray-900"
            >
              {event.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <span>📅</span>
              <span>{event.date}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div
          className="relative flex-1 bg-gray-900 min-h-[400px] md:min-h-[500px] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {event.images.length > 0 ? (
            <>
              {/* Carousel Slides */}
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {event.images.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full flex items-center justify-center relative"
                  >
                    <Image
                      src={img}
                      alt={`${event.title} - Image ${index + 1}`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                      priority={index === currentIndex}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {event.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-gray-900" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {event.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm z-10">
                  {currentIndex + 1} / {event.images.length}
                </div>
              )}

              {/* Indicator Dots */}
              {event.images.length > 1 && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {event.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-white w-8"
                          : "bg-white/50 w-2 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">No images available</p>
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {event.images.length > 1 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {event.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentIndex === index
                      ? "border-blue-600 ring-2 ring-blue-200 scale-105"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
