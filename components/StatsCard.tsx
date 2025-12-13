"use client";

import React from "react";
import ProgressBar from "./ProgressBar";

type StatsCardProps = {
  stats: {
    enrolled: number;
    available: number;
    total: number;
  };
  title?: string;
};

export default function StatsCard({ stats, title = "Enrollment Stats" }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Enrolled:</span>
          <span className="text-2xl font-bold text-blue-600">{stats.enrolled}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Available Seats:</span>
          <span className="text-2xl font-bold text-green-600">{stats.available}</span>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-gray-700 font-semibold">Total Capacity:</span>
          <span className="text-2xl font-bold text-gray-900">{stats.total}</span>
        </div>

        <ProgressBar
          value={stats.enrolled}
          max={stats.total}
          showPercentage
        />
      </div>
    </div>
  );
}


