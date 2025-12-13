"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MailIcon, PhoneIcon, AwardIcon, BriefcaseIcon } from "lucide-react";

type StaffCardProps = {
  name: string;
  role: string;
  persona?: string;
  qualifications?: string;
  experience?: string;
  email?: string;
  phone?: string;
  image?: string;
};

export default function StaffCard({
  name,
  role,
  persona,
  qualifications,
  experience,
  email,
  phone,
  image,
}: StaffCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-4">
          {image && !imageError ? (
            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-full border-2 border-blue-100 bg-gray-100">
              <Image
                src={image}
                alt={name}
                fill
                sizes="80px"
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                unoptimized
                onError={() => setImageError(true)}
                priority={false}
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200 shrink-0">
              <span className="text-2xl font-bold text-blue-600">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-blue-600 font-semibold text-sm">{role}</p>
          </div>
        </div>

        {/* Qualifications & Experience */}
        {(qualifications || experience) && (
          <div className="flex flex-wrap gap-3 mb-4">
            {qualifications && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <AwardIcon className="w-4 h-4 text-blue-600" />
                <span>{qualifications}</span>
              </div>
            )}
            {experience && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BriefcaseIcon className="w-4 h-4 text-blue-600" />
                <span>{experience}</span>
              </div>
            )}
          </div>
        )}

        {/* Persona Section */}
        {persona && (
          <div className="mb-4">
            <div
              className={`transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[1000px]" : "max-h-[4.5rem]"
              }`}
            >
              <p
                className={`text-gray-700 text-sm leading-relaxed ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {persona}
              </p>
            </div>
            {persona.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold transition-all duration-300 hover:underline transform hover:scale-105 active:scale-95 inline-flex items-center gap-1"
              >
                <span>{isExpanded ? "View Less" : "View More"}</span>
                <span
                  className={`inline-block transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ↓
                </span>
              </button>
            )}
          </div>
        )}

        {/* Contact Information */}
        {(email || phone) && (
          <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                <span className="truncate">{email}</span>
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>{phone}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
