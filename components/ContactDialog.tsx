"use client";

import React from "react";
import Button from "./Button";

type ContactDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl p-7 w-80 relative animate-scaleIn">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>

        <p className="text-gray-700 text-sm mb-1">
          Ayushman Educational Academy
        </p>
        <p className="text-gray-600 text-sm">📞 +91 9098293521</p>
        <p className="text-gray-600 text-sm">
          📧 contact@ayushmanacademy.com
        </p>
        <p className="text-gray-600 text-sm">
          📍 Semli Bari, Madhya Pradesh
        </p>

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


