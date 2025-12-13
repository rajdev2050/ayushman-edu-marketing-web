"use client";

import React from "react";

type ContactInfoItemProps = {
  icon: string | React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  href?: string;
  type?: "phone" | "email" | "address" | "other";
  className?: string;
};

export default function ContactInfoItem({
  icon,
  label,
  value,
  href,
  type,
  className = "",
}: ContactInfoItemProps) {
  const renderIcon = () => {
    if (typeof icon === "string") {
      return <span className="text-2xl" aria-hidden="true">{icon}</span>;
    }
    return icon;
  };

  const renderValue = () => {
    if (href) {
      return (
        <a
          href={href}
          className={`text-blue-600 hover:text-blue-800 underline text-sm ${
            type === "email" ? "break-all" : ""
          }`}
        >
          {value}
        </a>
      );
    }
    return <span className="text-gray-700 text-sm">{value}</span>;
  };

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {renderIcon()}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{label}</h3>
        {renderValue()}
      </div>
    </div>
  );
}


