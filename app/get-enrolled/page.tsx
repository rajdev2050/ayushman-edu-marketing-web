"use client";

import React, { useState, useMemo } from "react";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import Input from "@/components/Input";
import Select from "@/components/Select";
import RadioGroup from "@/components/RadioGroup";
import StatusMessage from "@/components/StatusMessage";

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

  // Real-time validation check
  const isFormValid = useMemo(() => {
    const nameValid = formData.name.trim().length > 0;
    const dobValid =
      formData.dob.trim().length > 0 && new Date(formData.dob) <= new Date();
    const genderValid = formData.gender.length > 0;
    const classValid = formData.class.length > 0;
    const contactValid =
      formData.contactNumber.trim().length > 0 &&
      /^[0-9]{10}$/.test(formData.contactNumber.replace(/\D/g, ""));

    return nameValid && dobValid && genderValid && classValid && contactValid;
  }, [formData]);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <HeroSection
          title="Get Enrolled"
          description="Fill out the enrollment form below to begin your journey with Ayushman Educational Academy."
          className="mb-10"
        />

        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <Input
              id="name"
              name="name"
              type="text"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            {/* Date of Birth */}
            <Input
              id="dob"
              name="dob"
              type="date"
              label="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              error={errors.dob}
              required
            />

            {/* Gender */}
            <RadioGroup
              name="gender"
              label="Gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
              ]}
              value={formData.gender}
              onChange={
                handleChange as (e: React.ChangeEvent<HTMLInputElement>) => void
              }
              error={errors.gender}
            />

            {/* Class */}
            <Select
              id="class"
              name="class"
              label="Class"
              value={formData.class}
              onChange={
                handleChange as (
                  e: React.ChangeEvent<HTMLSelectElement>
                ) => void
              }
              options={classes.map((className) => ({
                label: className,
                value: className,
              }))}
              error={errors.class}
              placeholder="Select a class"
              required
            />

            {/* Contact Number */}
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              label="Contact Number"
              placeholder="10-digit phone number"
              value={formData.contactNumber}
              onChange={handleChange}
              error={errors.contactNumber}
              required
            />

            {/* Status */}
            {status === "success" && (
              <StatusMessage
                type="success"
                message="Thank you! Your enrollment form has been submitted successfully. We'll contact you soon."
              />
            )}
            {status === "error" && (
              <StatusMessage
                type="error"
                message="Something went wrong. Please try again later."
              />
            )}

            <Button
              type="primary"
              size="medium"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
