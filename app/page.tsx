"use client";

import React, { useState } from "react";
import Carousel, { CarouselSlide } from "@/components/Carousel";
import { useRouter } from "next/navigation";
import WelcomeSection from "@/components/WelcomeSection";
import CoursesSection from "@/components/CoursesSection";
import ThoughtOfDay from "@/components/ThoughtOfDay";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import FeesDialog from "@/components/FeesDialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFeesDialogOpen, setIsFeesDialogOpen] = useState(false);
  const router = useRouter();

  const carouselSlides: CarouselSlide[] = [
    {
      id: 1,
      image: "/carousel/image1.jpg",
      primaryText: "Welcome to Ayushman Educational Academy",
      secondaryText: "Excellence in Education, Building Future Leaders",
      ctaText: "Learn More",
      ctaAction: () => router.push("/about"),
    },
    {
      id: 2,
      image: "/carousel/image2.jpg",
      primaryText: "Quality Education for All",
      secondaryText: "Shaping young minds through innovation and dedication",
      ctaText: "View Courses",
      ctaAction: () => router.push("/classes"),
    },
    {
      id: 3,
      image: "/carousel/image3.jpg",
      primaryText: "Empowering Students",
      secondaryText: "Creating opportunities for academic excellence",
      ctaText: "Admissions Open",
      ctaAction: () => router.push("/admission"),
    },
    {
      id: 4,
      image: "/carousel/image4.jpg",
      primaryText: "Our Happy Students",
      secondaryText: "Building a community of learners and achievers",
      ctaText: "Get Started",
      ctaAction: () => router.push("/get-enrolled"),
    },
    {
      id: 5,
      image: "/carousel/image5.jpg",
      primaryText: "Excellence in Every Step",
      secondaryText: "Nurturing talent and potential in every child",
      ctaText: "Contact Us",
      ctaAction: () => router.push("/contact"),
    },
    {
      id: 6,
      image: "/carousel/image6.jpg",
      primaryText: "Join Our Community",
      secondaryText: "Where education meets excellence",
      ctaText: "Learn More",
      ctaAction: () => router.push("/about"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 🔹 Carousel Section */}
      <section className="w-full">
        <Carousel
          slides={carouselSlides}
          autoPlay={true}
          autoPlayInterval={5000}
          showArrows={true}
          height="600px"
        />
      </section>

      {/* 🔹 About Section */}
      <WelcomeSection
        title="Welcome to Ayushman Educational Academy"
        description="Our academy is dedicated to shaping young minds through excellence in education, discipline, and innovation."
      />

      <hr className="text-black/10" />

      {/* 🔹 Courses/Classes */}
      <CoursesSection
        title="Explore Classes"
        description="We offer a classes from 1st to 10th standard with a focus on academic and extracurricular development."
        ctaText="Find a Class"
        ctaAction={() => router.push("/classes")}
      />

      <hr className="text-black/10" />

      {/* 🔹 Thought */}
      <ThoughtOfDay
        quote="Education is the most powerful weapon which you can use to change the world."
        author="Nelson Mandela"
      />

      {/* 🔹 Footer */}
      <Footer />

      {/* 🟣 Contact Dialog */}
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      {/* 🟦 FEES DIALOG */}
      <FeesDialog
        isOpen={isFeesDialogOpen}
        onClose={() => setIsFeesDialogOpen(false)}
      />
    </div>
  );
}

export default App;
