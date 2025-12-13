"use client";

import React from "react";

type SocialLinkProps = {
  platform: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

export default function SocialLink({
  platform,
  url,
  icon,
  ariaLabel,
}: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 hover:scale-105"
      aria-label={ariaLabel}
    >
      <div className="p-5 flex items-center gap-3">
        {icon}
        <span className="font-semibold text-gray-900">{platform}</span>
      </div>
    </a>
  );
}


