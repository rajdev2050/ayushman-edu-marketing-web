"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import FeeDisplayCard from "@/components/FeeDisplayCard";
import StatsCard from "@/components/StatsCard";
import ImportantDatesCard from "@/components/ImportantDatesCard";
import FacilityListItem from "@/components/FacilityListItem";
import SectionHeader from "@/components/SectionHeader";

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
        <BackButton onClick={() => router.back()} label="Back to Classes" />

        {/* Class Name Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          {classItem.displayName}
        </h1>

        {/* Fee Details Section */}
        <FeeDisplayCard
          monthlyFee={monthlyFee}
          annualFee={annualFee}
          discountPercentage={annualFeeDiscountPercentage}
          feeMode={feeMode}
          onModeChange={setFeeMode}
          totalMonths={totalMonths}
        />

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <StatsCard stats={stats} />
          <ImportantDatesCard
            sessionDates={sessionDates}
            admissionDates={admissionDates}
          />
        </div>

        {/* Facilities Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <SectionHeader title="Facilities" />
          <div className="grid md:grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <FacilityListItem key={index} title={facility.title} />
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
