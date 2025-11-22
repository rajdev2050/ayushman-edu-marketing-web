"use client";

import { GraduationCapIcon } from "lucide-react";

export default function Branding() {
  return (
    <div className=" font-bold flex items-center gap-2 text-black">
      <GraduationCapIcon strokeWidth={2} className="w-6 h-6" />
      <h1 className="text-lg">Ayushman Educational Academy</h1>
    </div>
  );
}
