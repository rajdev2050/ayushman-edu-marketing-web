"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

type BackButtonProps = {
  onClick?: () => void;
  href?: string;
  label?: string;
  className?: string;
};

export default function BackButton({
  onClick,
  href,
  label = "Back",
  className = "",
}: BackButtonProps) {
  const buttonContent = (
    <>
      <ArrowLeftIcon className="w-4 h-4" />
      {label}
    </>
  );

  const buttonClassName = `inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {buttonContent}
    </button>
  );
}


