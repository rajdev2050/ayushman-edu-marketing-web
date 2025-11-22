"use client";
import Image from "next/image";
import Link from "next/link";

const events = [
  { id: 1, title: "Annual Day", img: "/events/sample.png" },
  { id: 2, title: "Sports Meet", img: "/events/sample.png" },
  { id: 3, title: "Science Fair", img: "/events/sample.png" },
  { id: 4, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 5, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 6, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 7, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 8, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 9, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 10, title: "Cultural Fest", img: "/events/sample.png" },
  { id: 11, title: "Cultural Fest", img: "/events/sample.png" },
];

export default function EventPage() {
  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold mb-4">Events ({events.length})</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {events.map((event) => (
          <Link key={event.id} href={`/event/${event.id}`}>
            <div className="border rounded-lg shadow overflow-hidden">
              <Image
                src={event.img}
                width={900}
                height={600}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <p className="text-center p-2 font-medium">{event.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
