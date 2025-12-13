"use client";

import React from "react";
import Button from "./Button";

type FeesDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FeesDialog({ isOpen, onClose }: FeesDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto animate-scaleIn">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          📘 Complete Fee Details
        </h3>

        <div className="space-y-4 text-gray-700">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg font-semibold">Nursery to Class 5</p>
            <p className="text-gray-600">₹800 / month</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg font-semibold">Class 6 to 8</p>
            <p className="text-gray-600">₹1000 / month</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg font-semibold">Class 9 to 12</p>
            <p className="text-gray-600">₹1200 / month</p>
          </div>

          <h4 className="text-xl font-semibold mt-6">📜 Admission Rules</h4>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Monthly fees must be paid before the 10th.</li>
            <li>Late fee of ₹50 after due date.</li>
            <li>Students must maintain 75% attendance.</li>
            <li>Uniform & books are mandatory.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6">📂 Documents Required</h4>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Birth Certificate</li>
            <li>Aadhar Card of Student</li>
            <li>Last Year Marksheet</li>
            <li>2 Passport Size Photos</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6">⏰ School Timing</h4>
          <p className="text-gray-600 ml-1">
            Monday – Saturday: <strong>9:00 AM to 3:00 PM</strong>
          </p>

          <h4 className="text-xl font-semibold mt-6">💳 Payment Options</h4>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Cash</li>
            <li>UPI (PhonePe / GPay / Paytm)</li>
            <li>Bank Transfer</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6">
            🏅 Scholarship / Discount
          </h4>
          <p className="text-gray-600">
            90% & above: <strong>50% Fee Discount</strong>
            <br />
            80% – 89%: <strong>25% Discount</strong>
          </p>
        </div>

        <Button
          type="primary"
          size="medium"
          onClick={onClose}
          className="mt-6 w-full"
        >
          Close
        </Button>
      </div>
    </div>
  );
}


