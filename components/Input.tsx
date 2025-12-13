"use client";

import React from "react";

type InputProps = {
  id?: string;
  name?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "date" | "url";
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  className?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
};

export default function Input({
  id,
  name,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  multiline = false,
  rows = 5,
  className = "",
  ariaLabel,
  ariaDescribedBy,
}: InputProps) {
  const baseInputStyle =
    "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";
  const errorStyle = error
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300";
  const disabledStyle = disabled ? "bg-gray-100 cursor-not-allowed" : "";

  const inputClassName = `${baseInputStyle} ${errorStyle} ${disabledStyle} ${className}`;

  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = ariaDescribedBy || errorId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={inputClassName}
          aria-label={ariaLabel}
          aria-invalid={!!error}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClassName}
          aria-label={ariaLabel}
          aria-invalid={!!error}
          aria-describedby={describedBy}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
