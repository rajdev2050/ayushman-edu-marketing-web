"use client";

import { useState, useMemo } from "react";
import Button from "@/components/Button";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔹 Header Section */}
      <div className="bg-blue-600 text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Admission 2025</h1>
        <p className="text-lg mt-2">
          Join our school for quality education & bright future.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* 🔹 Admission Process */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>

          <ul className="space-y-3 text-gray-700">
            <li>1️⃣ Fill the online admission form.</li>
            <li>2️⃣ Submit all required documents.</li>
            <li>3️⃣ School will schedule an interaction/interview.</li>
            <li>4️⃣ Selected students will receive confirmation.</li>
            <li>5️⃣ Pay the admission & first month fees.</li>
          </ul>
        </section>

        {/* 🔹 Required Documents */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>

          <ul className="space-y-3 text-gray-700">
            <li>📌 Birth Certificate</li>
            <li>📌 Aadhar Card of Student</li>
            <li>📌 Transfer Certificate (if applicable)</li>
            <li>📌 Marksheet of last class</li>
            <li>📌 Passport size photos – Student & Parents</li>
          </ul>
        </section>

        {/* 🔹 Fees Details */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Fees Structure</h2>

          <p className="text-gray-700 mb-4">
            Admission fee + Monthly tuition fee varies according to class.
          </p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Class</th>
                <th className="border p-2">Admission Fee</th>
                <th className="border p-2">Monthly Fee</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2">Nursery - KG2</td>
                <td className="border p-2">₹ 3,000</td>
                <td className="border p-2">₹ 1,000</td>
              </tr>
              <tr>
                <td className="border p-2">Class 1 - 5</td>
                <td className="border p-2">₹ 4,000</td>
                <td className="border p-2">₹ 1,200</td>
              </tr>
              <tr>
                <td className="border p-2">Class 6 - 8</td>
                <td className="border p-2">₹ 5,000</td>
                <td className="border p-2">₹ 1,400</td>
              </tr>
              <tr>
                <td className="border p-2">Class 9 - 12</td>
                <td className="border p-2">₹ 6,000</td>
                <td className="border p-2">₹ 1,800</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 🔹 Online Admission Form */}
        <section className="bg-white shadow-md p-6 rounded-xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Online Admission Form</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="classApplying"
              value={formData.classApplying}
              onChange={handleChange}
              placeholder="Class Applying For"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              placeholder="Father's Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="mothersName"
              value={formData.mothersName}
              onChange={handleChange}
              placeholder="Mother's Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 md:col-span-2"
              required
            ></textarea>

            <Button
              type="primary"
              size="medium"
              disabled={isSubmitting || !isFormValid}
              className="md:col-span-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
}
