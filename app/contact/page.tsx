"use client";

import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions? We&apos;d love to hear from you. Fill out the form
            below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <ContactForm />
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <p className="flex items-center gap-2">
              <span aria-hidden="true">📞</span>
              <a
                href="tel:+919098293521"
                className="hover:text-blue-600 underline"
                aria-label="Call us at +91 90982 93521"
              >
                +91 90982 93521
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden="true">📧</span>
              <a
                href="mailto:contact@ayushmanacademy.com"
                className="hover:text-blue-600 underline"
                aria-label="Email us at contact@ayushmanacademy.com"
              >
                contact@ayushmanacademy.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden="true">📍</span>
              <span>Semli Bari, Madhya Pradesh</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
