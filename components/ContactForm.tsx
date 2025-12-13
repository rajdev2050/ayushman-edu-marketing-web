"use client";

import React, { useState, useMemo } from "react";
import Button from "./Button";
import Input from "./Input";

type ContactFormProps = {
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
};

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Real-time validation check
  const isFormValid = useMemo(() => {
    const nameValid = formData.name.trim().length > 0;
    const emailValid =
      formData.email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const phoneValid =
      formData.phone.trim().length > 0 &&
      /^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""));
    const messageValid = formData.message.trim().length > 0;

    return nameValid && emailValid && phoneValid && messageValid;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Simulate API
        await new Promise((resolve) => setTimeout(resolve, 800));
        // eslint-disable-next-line no-console
        console.log("Contact form submitted:", formData);
      }
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
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

      {/* Email */}
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      {/* Phone */}
      <Input
        id="phone"
        name="phone"
        type="tel"
        label="Phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
      />

      {/* Message */}
      <Input
        id="message"
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        multiline
        rows={5}
        required
      />

      {/* Status */}
      {status === "success" && (
        <div
          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm"
          role="alert"
        >
          Thank you! Your message has been sent. We&apos;ll get back to you
          soon.
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

      <Button
        type="primary"
        size="medium"
        disabled={isSubmitting || !isFormValid}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}











