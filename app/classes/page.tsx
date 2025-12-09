"use client";

import React from "react";

import classesData from "@/data/classes.json";
import ClassItem from "@/components/ClassItem";
import HeroSection from "@/components/HeroSection";

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <HeroSection
          title="Our Classes"
          description="Choose a class to view detailed information, fees, facilities, and admission details"
        />

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
