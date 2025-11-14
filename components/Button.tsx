"use client";

import React from "react";

type ButtonVariants = "primary" | "secondary";
type ButtonSizes = "small" | "medium";

type ButtonProps = {
  variant: ButtonVariants;
  size?: ButtonSizes;
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  variant,
  size = "medium",
  buttonType = "button",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const sizeClasses: Record<ButtonSizes, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
  };

  const baseButtonClasses =
    "text-white rounded-xl font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantClasses: Record<ButtonVariants, string> = {
    primary:
      "bg-blue-600 hover:bg-blue-800 focus-visible:outline-blue-600 disabled:bg-blue-300",
    secondary:
      "bg-gray-600 hover:bg-gray-800 focus-visible:outline-gray-600 disabled:bg-gray-300",
  };

  return (
    <button
      type={buttonType}
      className={`${baseButtonClasses} ${sizeClasses[size]} ${variantClasses[variant]} disabled:cursor-not-allowed disabled:opacity-70`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
