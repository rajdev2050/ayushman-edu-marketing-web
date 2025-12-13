"use client";

import React from "react";

type FeeRow = {
  class: string;
  admissionFee: string;
  monthlyFee: string;
};

type FeesTableProps = {
  data: FeeRow[];
  className?: string;
};

export default function FeesTable({ data, className = "" }: FeesTableProps) {
  return (
    <table className={`w-full border-collapse ${className}`}>
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Class</th>
          <th className="border p-2">Admission Fee</th>
          <th className="border p-2">Monthly Fee</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border p-2">{row.class}</td>
            <td className="border p-2">{row.admissionFee}</td>
            <td className="border p-2">{row.monthlyFee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


