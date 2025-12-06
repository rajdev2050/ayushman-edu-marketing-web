"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import EventGallery from "@/components/EventGallery";

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
  const router = useRouter();
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
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </button>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the exciting events and celebrations at Ayushman Educational
            Academy. From annual functions to cultural festivals, we celebrate
            every moment with enthusiasm and joy.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => handleEventClick(event)}
              className="group text-left w-full"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.img}
                    width={900}
                    height={600}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <span>📅</span>
                    <span>{event.date}</span>
                  </p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-600 text-sm font-semibold">
                      View Gallery →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State Message (if no events) */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No events available at the moment. Check back soon!
            </p>
          </div>
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
