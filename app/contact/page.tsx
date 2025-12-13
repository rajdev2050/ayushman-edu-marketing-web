"use client";

import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ContactInfoItem from "@/components/ContactInfoItem";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <HeroSection
          title="Contact Us"
          description="Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
          className="mb-10"
        />

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <ContactForm />
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-3">
            <ContactInfoItem
              icon="📞"
              label="Phone"
              value="+91 90982 93521"
              href="tel:+919098293521"
              type="phone"
            />
            <ContactInfoItem
              icon="📧"
              label="Email"
              value="contact@ayushmanacademy.com"
              href="mailto:contact@ayushmanacademy.com"
              type="email"
            />
            <ContactInfoItem
              icon="📍"
              label="Address"
              value="Semli Bari, Madhya Pradesh"
              type="address"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
