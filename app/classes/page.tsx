"use client";

import React from "react";
import { useRouter } from "next/navigation";

const classes = [
  { name: "Nursery", displayName: "Nursery" },
  { name: "1st", displayName: "1st Standard" },
  { name: "2nd", displayName: "2nd Standard" },
  { name: "3rd", displayName: "3rd Standard" },
  { name: "4th", displayName: "4th Standard" },
  { name: "5th", displayName: "5th Standard" },
  { name: "6th", displayName: "6th Standard" },
  { name: "7th", displayName: "7th Standard" },
  { name: "8th", displayName: "8th Standard" },
  { name: "9th", displayName: "9th Standard" },
  { name: "10th", displayName: "10th Standard" },
];

export default function ClassesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Classes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a class to view detailed information, fees, facilities, and
            admission details
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {classes.map((classItem) => (
            <button
              key={classItem.name}
              onClick={() => router.push(`/class/${classItem.name.toLowerCase()}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:scale-105 hover:bg-blue-50 border-2 border-transparent hover:border-blue-500 group"
            >
              <div className="text-4xl font-bold text-gray-800 group-hover:text-blue-600 mb-2">
                {classItem.name}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-blue-700">
                {classItem.displayName}
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 text-sm font-semibold">
                  View Details →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

