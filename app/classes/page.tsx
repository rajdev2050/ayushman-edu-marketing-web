"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

import classesData from "@/data/classes.json";
import ClassItem from "@/components/ClassItem";

export default function ClassesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </button>

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
          {classesData.map((classItem) => (
            <ClassItem classItem={classItem} key={classItem.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
