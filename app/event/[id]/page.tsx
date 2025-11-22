"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const eventData = {
  1: {
    title: "Annual Day",
    img: "/events/event1.jpg",
    description: "Annual Day Celebration",
  },
  2: {
    title: "Sports Meet",
    img: "/events/event2.jpg",
    description: "Sports Meet Event",
  },
  3: {
    title: "Science Fair",
    img: "/events/event3.jpg",
    description: "Science Fair Exhibition",
  },
  4: {
    title: "Cultural Fest",
    img: "/events/event4.jpg",
    description: "Cultural Fest Celebration",
  },
};

export default function EventDetailPage() {
  const { id } = useParams();
  const event = eventData[id as unknown as keyof typeof eventData];

  return (
    <section className="p-6">
      <Link href="/event" className="underline text-blue-600">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold mt-2">{event.title}</h1>

      <Image
        src={event.img}
        width={800}
        height={400}
        alt={event.title}
        className="rounded-lg my-4"
      />

      <p className="text-gray-700">{event.description}</p>
    </section>
  );
}
