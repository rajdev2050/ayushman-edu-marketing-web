"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import Button from "@/components/Button";

const classes = [
  "Nursery",
  "1st Standard",
  "2nd Standard",
  "3rd Standard",
  "4th Standard",
  "5th Standard",
  "6th Standard",
  "7th Standard",
  "8th Standard",
  "9th Standard",
  "10th Standard",
];

export default function GetEnrolledPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    class: "",
    contactNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.dob.trim()) {
      newErrors.dob = "Date of Birth is required";
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      if (dobDate > today) {
        newErrors.dob = "Date of Birth cannot be in the future";
      }
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.class) {
      newErrors.class = "Class is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber.replace(/\D/g, ""))) {
      newErrors.contactNumber = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      // eslint-disable-next-line no-console
      console.log("Enrollment form submitted:", formData);
      setStatus("success");
      setFormData({
        name: "",
        dob: "",
        gender: "",
        class: "",
        contactNumber: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Enrolled
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the enrollment form below to begin your journey with
            Ayushman Educational Academy.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.dob ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.dob}
                aria-describedby={errors.dob ? "dob-error" : undefined}
              />
              {errors.dob && (
                <p
                  id="dob-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.dob}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Other</span>
                </label>
              </div>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.gender}
                </p>
              )}
            </div>

            {/* Class */}
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Class <span className="text-red-500">*</span>
              </label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.class ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.class}
                aria-describedby={errors.class ? "class-error" : undefined}
              >
                <option value="">Select a class</option>
                {classes.map((className) => (
                  <option key={className} value={className}>
                    {className}
                  </option>
                ))}
              </select>
              {errors.class && (
                <p
                  id="class-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.class}
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="10-digit phone number"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.contactNumber ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={!!errors.contactNumber}
                aria-describedby={
                  errors.contactNumber ? "contactNumber-error" : undefined
                }
              />
              {errors.contactNumber && (
                <p
                  id="contactNumber-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.contactNumber}
                </p>
              )}
            </div>

            {/* Status */}
            {status === "success" && (
              <div
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm"
                role="alert"
              >
                Thank you! Your enrollment form has been submitted successfully.
                We&apos;ll contact you soon.
              </div>
            )}
            {status === "error" && (
              <div
                className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"
                role="alert"
              >
                Something went wrong. Please try again later.
              </div>
            )}

            <Button type="primary" size="medium" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
