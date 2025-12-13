"use client";
import { useState } from "react";
import EventGallery from "@/components/EventGallery";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import EmptyState from "@/components/EmptyState";

const events = [
  {
    id: 1,
    title: "Annual Day",
    img: "/events/sample.png",
    date: "March 15, 2024",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 2,
    title: "Sports Meet",
    img: "/events/sample.png",
    date: "February 20, 2024",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 3,
    title: "Science Fair",
    img: "/events/sample.png",
    date: "January 25, 2024",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 4,
    title: "Cultural Fest",
    img: "/events/sample.png",
    date: "December 10, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 5,
    title: "Annual Function",
    img: "/events/sample.png",
    date: "November 5, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 6,
    title: "Independence Day",
    img: "/events/sample.png",
    date: "August 15, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 7,
    title: "Republic Day",
    img: "/events/sample.png",
    date: "January 26, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 8,
    title: "Teachers Day",
    img: "/events/sample.png",
    date: "September 5, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 9,
    title: "Children's Day",
    img: "/events/sample.png",
    date: "November 14, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 10,
    title: "Science Exhibition",
    img: "/events/sample.png",
    date: "October 20, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
  {
    id: 11,
    title: "Art & Craft Show",
    img: "/events/sample.png",
    date: "September 28, 2023",
    images: [
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
      "/events/sample.png",
    ],
  },
];

export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
    setSelectedEvent(null);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <HeroSection
          title="Our Events"
          description="Explore the exciting events and celebrations at Ayushman Educational Academy. From annual functions to cultural festivals, we celebrate every moment with enthusiasm and joy."
        />

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>

        {/* Empty State Message (if no events) */}
        {events.length === 0 && (
          <EmptyState message="No events available at the moment. Check back soon!" />
        )}
      </div>

      {/* Event Gallery Popup */}
      {selectedEvent && (
        <EventGallery
          open={isGalleryOpen}
          onClose={handleCloseGallery}
          event={{
            id: selectedEvent.id,
            title: selectedEvent.title,
            date: selectedEvent.date,
            images: selectedEvent.images,
          }}
        />
      )}
    </div>
  );
}
