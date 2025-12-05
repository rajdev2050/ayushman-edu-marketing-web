"use client";

import React, { useEffect, useRef } from "react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  ariaLabel?: string;
  size?: "small" | "medium" | "large";
};

const sizeClasses: Record<NonNullable<DialogProps["size"]>, string> = {
  small: "w-80",
  medium: "w-[95%] max-w-md",
  large: "w-[95%] max-w-2xl",
};

export default function Dialog({
  open,
  onClose,
  title,
  children,
  ariaLabel,
  size = "medium",
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Focus management
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const timer = setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);

    return () => {
      clearTimeout(timer);
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [open]);

  // Prevent body scroll
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-label={ariaLabel}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto animate-scaleIn ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            id="dialog-title"
            className="text-xl md:text-2xl font-bold text-gray-900"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}







