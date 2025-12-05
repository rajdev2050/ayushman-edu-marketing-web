"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import Button from "./Button";
import Link from "next/link";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry for the inconvenience. Please try refreshing the
              page or return to the homepage.
            </p>
            {this.state.error && process.env.NODE_ENV === "development" && (
              <details className="mb-6 text-left bg-red-50 p-4 rounded-lg text-xs text-red-700">
                <summary className="cursor-pointer font-semibold text-red-800">
                  Error details
                </summary>
                <pre className="mt-2 whitespace-pre-wrap">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="primary"
                size="medium"
                onClick={() => window.location.reload()}
              >
                Refresh Page
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

    return this.props.children;
  }
}







