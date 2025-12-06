"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { ClassItemType } from "@/type/ClassItemType";

type ClassItemProps = {
  classItem: ClassItemType;
};

export default function ClassItem({ classItem }: ClassItemProps) {
  const router = useRouter();

  return (
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
  );
}
