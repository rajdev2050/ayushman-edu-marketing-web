"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/Button";

const classNames: { [key: string]: string } = {
  nursery: "Nursery",
  "1st": "1st Standard",
  "2nd": "2nd Standard",
  "3rd": "3rd Standard",
  "4th": "4th Standard",
  "5th": "5th Standard",
  "6th": "6th Standard",
  "7th": "7th Standard",
  "8th": "8th Standard",
  "9th": "9th Standard",
  "10th": "10th Standard",
};

const facilities = [
  "Computer education",
  "English classes",
  "Sports activity",
  "Communication and personality development",
  "Best faculties",
  "Well behaved staff",
  "Student focus classes",
  "Problem solving extra classes",
  "In smaller class extra attention to kids (small kids)",
  "Celebrate rich Indian cultures and festivals",
];

// Fee structure based on class
const getFeeStructure = (classname: string) => {
  const normalized = classname.toLowerCase();
  
  if (normalized === "nursery" || ["1st", "2nd", "3rd", "4th", "5th"].includes(normalized)) {
    return {
      monthly: 8000,
      annual: 80000, // 10 months
    };
  } else if (["6th", "7th", "8th"].includes(normalized)) {
    return {
      monthly: 10000,
      annual: 100000, // 10 months
    };
  } else if (["9th", "10th"].includes(normalized)) {
    return {
      monthly: 12000,
      annual: 120000, // 10 months
    };
  }
  
  return {
    monthly: 8000,
    annual: 80000,
  };
};

// Mock stats - in real app, this would come from an API
const getClassStats = (classname: string) => {
  return {
    enrolled: 28,
    available: 12,
    total: 40,
  };
};

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
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const classname = params.classname as string;
  const normalizedClassname = classname.toLowerCase();
  const displayName = classNames[normalizedClassname];
  
  // Redirect if class not found
  useEffect(() => {
    if (!displayName) {
      router.push("/classes");
    }
  }, [displayName, router]);
  
  if (!displayName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Class not found. Redirecting...</p>
        </div>
      </div>
    );
  }
  
  const feeStructure = getFeeStructure(classname);
  const stats = getClassStats(classname);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the enquiry to your backend
    console.log("Enquiry submitted:", { ...enquiryForm, class: displayName });
    alert(
      `Thank you ${enquiryForm.name}! Your enquiry has been submitted. We will contact you soon.`
    );
    setIsEnquiryOpen(false);
    setEnquiryForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
        >
          ← Back to Classes
        </button>

        {/* Class Name Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          {displayName}
        </h1>

        {/* Fee Details Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h2>
          
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
              <p className="text-4xl font-bold text-blue-600">
                ₹{feeMode === "monthly" ? feeStructure.monthly.toLocaleString("en-IN") : feeStructure.annual.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {feeMode === "monthly" ? "per month" : "per year (10 months)"}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enrollment Stats</h3>
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
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(stats.enrolled / stats.total) * 100}%` }}
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Dates</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Session Period</h4>
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
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Admission Dates</h4>
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
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Button */}
        <div className="text-center">
          <Button
            type="primary"
            size="medium"
            onClick={() => setIsEnquiryOpen(true)}
            className="px-8 py-4 text-lg"
          >
            Send an Enquiry
          </Button>
        </div>

        {/* Enquiry Modal */}
        {isEnquiryOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-[95%] max-w-md animate-scaleIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Enquiry Form
              </h3>
              
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={enquiryForm.phone}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={enquiryForm.email}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={enquiryForm.message}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any additional questions or information..."
                  />
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsEnquiryOpen(false)}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Animations */}
        <style>{`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          .animate-scaleIn {
            animation: scaleIn 0.25s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; } 
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}

