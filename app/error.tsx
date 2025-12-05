"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-600 mb-6">
          We&apos;re sorry for the inconvenience. Please try again or return to
          the homepage.
        </p>
        {process.env.NODE_ENV === "development" && (
          <details className="mb-6 text-left bg-red-50 p-4 rounded-lg text-xs text-red-700">
            <summary className="cursor-pointer font-semibold text-red-800">
              Error details
            </summary>
            <pre className="mt-2 whitespace-pre-wrap">{error.message}</pre>
          </details>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button type="primary" size="medium" onClick={reset}>
            Try Again
          </Button>
          <Link href="/">
            <Button type="secondary" size="medium">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}







