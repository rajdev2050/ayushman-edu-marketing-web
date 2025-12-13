"use client";

import React from "react";
import ToggleButton from "./ToggleButton";

type FeeDisplayCardProps = {
  monthlyFee: number;
  annualFee: number;
  discountPercentage: number;
  feeMode: "monthly" | "annual";
  onModeChange: (mode: "monthly" | "annual") => void;
  totalMonths?: number;
};

export default function FeeDisplayCard({
  monthlyFee,
  annualFee,
  discountPercentage,
  feeMode,
  onModeChange,
  totalMonths = 10,
}: FeeDisplayCardProps) {
  const discountedAnnualFee = annualFee - (annualFee * discountPercentage) / 100;
  const feeAmount = feeMode === "monthly" ? monthlyFee : discountedAnnualFee;

  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h2>

      <ToggleButton
        options={[
          { label: "Monthly", value: "monthly" },
          { label: "Annual", value: "annual" },
        ]}
        value={feeMode}
        onChange={(value) => onModeChange(value as "monthly" | "annual")}
        className="mb-6"
      />

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
            {discountPercentage}% discount on annual fee
          </p>
        </div>
      </div>
    </div>
  );
}


