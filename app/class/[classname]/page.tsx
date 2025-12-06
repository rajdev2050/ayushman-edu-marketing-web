"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import Button from "@/components/Button";

import facilitiesData from "@/data/facilities.json";
import classesData from "@/data/classes.json";
import { FacilityType } from "@/type/FacilityType";

const totalMonths = 10;
const annualFeeDiscountPercentage = 10;

const facilities: FacilityType[] = facilitiesData;

// Mock session dates
const sessionDates = {
  from: "2024-04-01",
  to: "2025-03-31",
};

const admissionDates = {
  from: "2024-01-15",
  to: "2024-03-31",
};

export default function ClassDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [feeMode, setFeeMode] = useState<"monthly" | "annual">("monthly");

  const classname = params.classname as string;
  const normalizedClassname = classname.toLowerCase();
  const classItem = classesData.find(
    (classItem) => classItem.name.toLowerCase() === normalizedClassname
  );

  // Redirect if class not found
  useEffect(() => {
    if (!classItem) {
      router.push("/classes");
    }
  }, [classItem, router]);

  if (!classItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Class not found. Redirecting...</p>
        </div>
      </div>
    );
  }

  const stats = classItem.stats;

  const annualFee = classItem.fees;

  const monthlyFee = annualFee / totalMonths;
  const discountedAnnualFee =
    annualFee - (annualFee * annualFeeDiscountPercentage) / 100;

  const feeAmount = feeMode === "monthly" ? monthlyFee : discountedAnnualFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Classes
        </button>

        {/* Class Name Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          {classItem.displayName}
        </h1>

        {/* Fee Details Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Fee Structure
          </h2>

          {/* Toggle Button */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setFeeMode("monthly")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                feeMode === "monthly"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setFeeMode("annual")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                feeMode === "annual"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Annual
            </button>
          </div>

          {/* Fee Display */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Fee Amount</p>

              <p className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-2">
                {feeMode === "annual" && (
                  <span className="text-2xl font-bold text-gray-400 line-through">
                    ₹{annualFee}
                  </span>
                )}
                ₹{feeAmount}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {feeMode === "monthly"
                  ? "per month"
                  : `per year (${totalMonths} months)`}
              </p>
              <p className="text-sm mt-2 bg-amber-400 text-white font-bold rounded-md px-2 py-1">
                {annualFeeDiscountPercentage}% discount on annual fee
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Enrollment Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Enrolled:</span>
                <span className="text-2xl font-bold text-blue-600">
                  {stats.enrolled}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Available Seats:</span>
                <span className="text-2xl font-bold text-green-600">
                  {stats.available}
                </span>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-gray-700 font-semibold">
                  Total Capacity:
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${(stats.enrolled / stats.total) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {((stats.enrolled / stats.total) * 100).toFixed(0)}% Filled
                </p>
              </div>
            </div>
          </div>

          {/* Session/Admission Dates */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Important Dates
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Session Period
                </h4>
                <p className="text-gray-600">
                  <span className="font-medium">From:</span>{" "}
                  {new Date(sessionDates.from).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">To:</span>{" "}
                  {new Date(sessionDates.to).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Admission Dates
                </h4>
                <p className="text-gray-600">
                  <span className="font-medium">From:</span>{" "}
                  {new Date(admissionDates.from).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">To:</span>{" "}
                  {new Date(admissionDates.to).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Facilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span className="text-gray-700">{facility.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Button */}
        <div className="text-center">
          <Button
            type="primary"
            size="medium"
            onClick={() =>
              router.push("/get-enrolled?class=" + classItem.name.toLowerCase())
            }
            className="px-8 py-4 text-lg"
          >
            Get Enrolled
          </Button>
        </div>
      </div>
    </div>
  );
}
