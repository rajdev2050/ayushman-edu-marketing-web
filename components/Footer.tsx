"use client";

import React from "react";

type FooterProps = {
  copyrightText?: string;
  className?: string;
};

export default function Footer({
  copyrightText,
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const text = copyrightText || `© ${currentYear} Ayushman Educational Academy. All rights reserved.`;

  return (
    <footer className={`bg-blue-700 text-white py-5 text-center ${className}`}>
      <p className="text-sm tracking-wide">{text}</p>
    </footer>
  );
}


