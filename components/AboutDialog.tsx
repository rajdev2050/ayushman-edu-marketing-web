import React from "react";
import Image from "next/image";
import Link from "next/link";

type AboutDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function AboutDialog({ open, onClose }: AboutDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="about-dialog-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl md:max-w-3xl rounded-2xl bg-white shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2
            id="about-dialog-title"
            className="text-xl md:text-2xl font-bold text-gray-900"
          >
            About Ayushman Educational Academy
          </h2>
          <button
            onClick={onClose}
            aria-label="Close about dialog"
            className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-[0.95rem] leading-relaxed text-gray-700 md:text-base">
          {/* Hero image */}
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
            <div className="relative h-32 w-full md:h-40">
              <Image
                src="/carousel/image3.jpg"
                alt="School illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <section className="pb-6">
            <p className="text-lg md:text-xl font-semibold text-blue-700">
              Empowering students with strong foundations, confident expression,
              and values for life.
            </p>
          </section>

          {/* Who We Are */}
          <section className="border-t border-gray-200 pb-6 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Who We Are
            </h3>
            <p className="mt-2">
              Ayushman Educational Academy is a neighborhood-focused school
              committed to strong academics, personal attention, and a warm,
              supportive environment. We blend structured classroom teaching
              with activity-based learning so that every child understands,
              applies, and remembers what they learn.
            </p>
          </section>

          {/* Vision */}
          <section className="border-t border-gray-200 pb-6 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Vision
            </h3>
            <p className="mt-2">
              To be a trusted neighborhood school known for strong results,
              personal attention to every student, and a joyful learning
              experience that develops curious, confident and responsible
              citizens.
            </p>
          </section>

          {/* Core Values */}
          <section className="border-t border-gray-200 pb-6 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Core Values
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <span className="font-semibold text-gray-900">
                  Integrity &amp; Respect
                </span>{" "}
                – building honest, kind and empathetic individuals.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Excellence in Basics
                </span>{" "}
                – strong focus on core subjects and clear concepts.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Personal Attention
                </span>{" "}
                – smaller batches and regular feedback to parents.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Joyful Learning
                </span>{" "}
                – activity-based teaching that keeps children engaged.
              </li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 md:flex-row md:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 md:w-auto"
          >
            Close
          </button>
          <Link
            href="/admission"
            onClick={onClose}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:w-auto"
          >
            Learn About Admissions
          </Link>
        </div>
      </div>
    </div>
  );
}










