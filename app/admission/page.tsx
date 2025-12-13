"use client";

import { useState, useMemo } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import HeroSection from "@/components/HeroSection";
import FormSection from "@/components/FormSection";
import InfoList from "@/components/InfoList";
import FeesTable from "@/components/FeesTable";

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    classApplying: "",
    fathersName: "",
    mothersName: "",
    mobileNumber: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time validation check
  const isFormValid = useMemo(() => {
    const studentNameValid = formData.studentName.trim().length > 0;
    const ageValid =
      formData.age.trim().length > 0 &&
      parseInt(formData.age) > 0 &&
      parseInt(formData.age) < 100;
    const classValid = formData.classApplying.trim().length > 0;
    const fathersNameValid = formData.fathersName.trim().length > 0;
    const mothersNameValid = formData.mothersName.trim().length > 0;
    const mobileValid =
      formData.mobileNumber.trim().length > 0 &&
      /^[0-9]{10}$/.test(formData.mobileNumber.replace(/\D/g, ""));
    const addressValid = formData.address.trim().length > 0;

    return (
      studentNameValid &&
      ageValid &&
      classValid &&
      fathersNameValid &&
      mothersNameValid &&
      mobileValid &&
      addressValid
    );
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      // eslint-disable-next-line no-console
      console.log("Admission form submitted:", formData);
      setFormData({
        studentName: "",
        age: "",
        classApplying: "",
        fathersName: "",
        mothersName: "",
        mobileNumber: "",
        address: "",
      });
    } catch {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const feesData = [
    { class: "Nursery - KG2", admissionFee: "₹ 3,000", monthlyFee: "₹ 1,000" },
    { class: "Class 1 - 5", admissionFee: "₹ 4,000", monthlyFee: "₹ 1,200" },
    { class: "Class 6 - 8", admissionFee: "₹ 5,000", monthlyFee: "₹ 1,400" },
    { class: "Class 9 - 12", admissionFee: "₹ 6,000", monthlyFee: "₹ 1,800" },
  ];

  const admissionProcessItems = [
    { text: "Fill the online admission form.", icon: "1️⃣" },
    { text: "Submit all required documents.", icon: "2️⃣" },
    { text: "School will schedule an interaction/interview.", icon: "3️⃣" },
    { text: "Selected students will receive confirmation.", icon: "4️⃣" },
    { text: "Pay the admission & first month fees.", icon: "5️⃣" },
  ];

  const requiredDocumentsItems = [
    { text: "Birth Certificate" },
    { text: "Aadhar Card of Student" },
    { text: "Transfer Certificate (if applicable)" },
    { text: "Marksheet of last class" },
    { text: "Passport size photos – Student & Parents" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Header Section */}
      <HeroSection
        title="Admission 2025"
        description="Join our school for quality education & bright future."
        showBackButton={false}
        className="bg-blue-600 text-white py-14"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* 🔹 Admission Process */}
        <FormSection title="Admission Process">
          <InfoList items={admissionProcessItems} />
        </FormSection>

        {/* 🔹 Required Documents */}
        <FormSection title="Required Documents">
          <InfoList items={requiredDocumentsItems} />
        </FormSection>

        {/* 🔹 Fees Details */}
        <FormSection title="Fees Structure">
          <p className="text-gray-700 mb-4">
            Admission fee + Monthly tuition fee varies according to class.
          </p>
          <FeesTable data={feesData} />
        </FormSection>

        {/* 🔹 Online Admission Form */}
        <FormSection title="Online Admission Form">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Input
              type="text"
              name="studentName"
              label="Student Name"
              value={formData.studentName}
              onChange={handleChange}
              required
            />

            <Input
              type="number"
              name="age"
              label="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <Input
              type="text"
              name="classApplying"
              label="Class Applying For"
              value={formData.classApplying}
              onChange={handleChange}
              required
            />

            <Input
              type="text"
              name="fathersName"
              label="Father's Name"
              value={formData.fathersName}
              onChange={handleChange}
              required
            />

            <Input
              type="text"
              name="mothersName"
              label="Mother's Name"
              value={formData.mothersName}
              onChange={handleChange}
              required
            />

            <Input
              type="tel"
              name="mobileNumber"
              label="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />

            <Input
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={5}
              className="md:col-span-2"
              required
            />

            <Button
              type="primary"
              size="medium"
              disabled={isSubmitting || !isFormValid}
              className="md:col-span-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </FormSection>
      </div>
    </div>
  );
}
