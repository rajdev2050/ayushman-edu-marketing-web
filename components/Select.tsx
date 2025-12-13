"use client";

import React from "react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
};

export default function Select({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
  required = false,
  placeholder,
  className = "",
  ariaLabel,
}: SelectProps) {
  const baseSelectStyle =
    "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";
  const errorStyle = error
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300";

  const selectClassName = `${baseSelectStyle} ${errorStyle} ${className}`;
  const errorId = error && id ? `${id}-error` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={selectClassName}
        aria-label={ariaLabel}
        aria-invalid={!!error}
        aria-describedby={errorId}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}


