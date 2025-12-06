import { redirect } from "next/navigation";

export const metadata = {
  title: "Courses",
  description:
    "Explore the courses and classes offered at Ayushman Educational Academy.",
};

export default function CoursesPage() {
  // Redirect to /classes since "Courses/Classes" refers to the same thing
  redirect("/classes");
}

