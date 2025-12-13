"use client";

import React from "react";

type DateRange = {
  from: string;
  to: string;
};

type ImportantDatesCardProps = {
  sessionDates: DateRange;
  admissionDates: DateRange;
  title?: string;
};

export default function ImportantDatesCard({
  sessionDates,
  admissionDates,
  title = "Important Dates",
}: ImportantDatesCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Session Period
          </h4>
          <p className="text-gray-600">
            <span className="font-medium">From:</span> {formatDate(sessionDates.from)}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">To:</span> {formatDate(sessionDates.to)}
          </p>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Admission Dates
          </h4>
          <p className="text-gray-600">
            <span className="font-medium">From:</span> {formatDate(admissionDates.from)}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">To:</span> {formatDate(admissionDates.to)}
          </p>
        </div>
      </div>
    </div>
  );
}


