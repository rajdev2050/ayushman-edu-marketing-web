"use client";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import EventDetailCard from "@/components/EventDetailCard";

const eventData: Record<
  number,
  {
    title: string;
    img: string;
    description: string;
    date: string;
    location?: string;
  }
> = {
  1: {
    title: "Annual Day",
    img: "/events/sample.png",
    description:
      "Our Annual Day celebration is a grand event that showcases the talents and achievements of our students. The event features cultural performances, award ceremonies, and special presentations by students from all classes. It's a day filled with joy, creativity, and celebration of our academic year.",
    date: "March 15, 2024",
    location: "School Auditorium",
  },
  2: {
    title: "Sports Meet",
    img: "/events/sample.png",
    description:
      "The Annual Sports Meet brings together students, teachers, and parents for a day of athletic excellence. Students participate in various track and field events, team sports, and fun activities. This event promotes physical fitness, teamwork, and healthy competition among students.",
    date: "February 20, 2024",
    location: "School Ground",
  },
  3: {
    title: "Science Fair",
    img: "/events/sample.png",
    description:
      "Our Science Fair provides a platform for students to showcase their scientific knowledge and innovative projects. Students present experiments, models, and research projects, demonstrating their understanding of scientific concepts and their ability to apply them creatively.",
    date: "January 25, 2024",
    location: "Science Laboratory",
  },
  4: {
    title: "Cultural Fest",
    img: "/events/sample.png",
    description:
      "The Cultural Fest is a vibrant celebration of our diverse cultural heritage. Students perform traditional dances, music, drama, and other cultural activities. This event helps students appreciate different cultures and develop their artistic talents while fostering unity and respect.",
    date: "December 10, 2023",
    location: "School Auditorium",
  },
  5: {
    title: "Annual Function",
    img: "/events/sample.png",
    description:
      "The Annual Function is one of the most anticipated events of the year, featuring spectacular performances, speeches, and recognition of outstanding achievements. It brings together the entire school community to celebrate another successful academic year.",
    date: "November 5, 2023",
    location: "School Auditorium",
  },
  6: {
    title: "Independence Day",
    img: "/events/sample.png",
    description:
      "We celebrate Independence Day with great patriotic fervor. The event includes flag hoisting, patriotic songs, speeches, and cultural programs that instill a sense of national pride and responsibility in our students.",
    date: "August 15, 2023",
    location: "School Ground",
  },
  7: {
    title: "Republic Day",
    img: "/events/sample.png",
    description:
      "Republic Day is celebrated with enthusiasm, featuring a parade, cultural performances, and educational activities that help students understand the significance of our constitution and democratic values.",
    date: "January 26, 2023",
    location: "School Ground",
  },
  8: {
    title: "Teachers Day",
    img: "/events/sample.png",
    description:
      "Teachers Day is a special occasion where students express their gratitude to teachers through performances, cards, and speeches. It's a day to honor and appreciate the dedication and hard work of our teaching staff.",
    date: "September 5, 2023",
    location: "School Auditorium",
  },
  9: {
    title: "Children's Day",
    img: "/events/sample.png",
    description:
      "Children's Day is celebrated with fun activities, games, and special programs organized for students. Teachers put on performances, and students enjoy a day filled with entertainment and joy, celebrating the spirit of childhood.",
    date: "November 14, 2023",
    location: "School Campus",
  },
  10: {
    title: "Science Exhibition",
    img: "/events/sample.png",
    description:
      "The Science Exhibition showcases innovative projects and experiments created by students. It encourages scientific thinking, creativity, and hands-on learning, providing students with an opportunity to explore and present their scientific ideas.",
    date: "October 20, 2023",
    location: "Science Laboratory",
  },
  11: {
    title: "Art & Craft Show",
    img: "/events/sample.png",
    description:
      "The Art & Craft Show displays the artistic talents of our students through paintings, sculptures, crafts, and other creative works. This event celebrates creativity and provides a platform for students to express themselves through art.",
    date: "September 28, 2023",
    location: "Art Room",
  },
};

export default function EventDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const event = eventData[id];

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Event Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The event you're looking for doesn't exist.
            </p>
            <BackButton href="/event" label="Back to Events" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <BackButton href="/event" label="Back to Events" />

        {/* Event Content */}
        <EventDetailCard event={event} />
      </div>
    </div>
  );
}
