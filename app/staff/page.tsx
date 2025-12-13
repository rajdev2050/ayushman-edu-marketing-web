"use client";

import staffData from "@/data/staff.json";
import type { StaffType } from "@/type/StaffType";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import StaffCard from "@/components/StaffCard";

export default function StaffPage() {
  const staff: StaffType[] = staffData;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <HeroSection
          title="Our Staff"
          description="Meet our dedicated team of educators and administrators who are committed to providing excellence in education and nurturing the potential of every student."
        />

        {/* Staff Grid Section */}
        <div className="mb-12">
          <SectionHeader title="Faculty & Administration" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member) => (
              <StaffCard
                key={member.id}
                name={member.name}
                role={member.role}
                persona={member.persona}
                qualifications={member.qualifications}
                experience={member.experience}
                email={member.email}
                phone={member.phone}
                image={
                  member.image ? `/images/staff/${member.image}` : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
