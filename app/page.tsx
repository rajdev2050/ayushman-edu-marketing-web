"use client";

import React, { useState } from "react";
import Carousel, { CarouselSlide } from "@/components/Carousel";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { ArrowRightIcon } from "lucide-react";

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
      ctaAction: () => router.push("/about"),
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
      ctaAction: () => router.push("/admission"),
    },
    {
      id: 5,
      image: "/carousel/image5.jpg",
      primaryText: "Excellence in Every Step",
      secondaryText: "Nurturing talent and potential in every child",
      ctaText: "Contact Us",
      ctaAction: () => setIsDialogOpen(true),
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
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">
          Welcome to Ayushman Educational Academy
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Our academy is dedicated to shaping young minds through excellence in
          education, discipline, and innovation.
        </p>
      </section>

      <hr className="text-black/10" />

      {/* 🔹 Courses/Classes */}
      <section
        id="courses"
        className="py-16 px-6 text-center items-center justify-center flex flex-col"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Explore Classes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We offer a classes from 1st to 10th standard with a focus on academic
          and extracurricular development.
        </p>
        <Button
          type="primary"
          size="medium"
          className="mt-4 flex items-center justify-center gap-2"
          onClick={() => router.push("/classes")}
        >
          Find a Class <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </section>

      <hr className="text-black/10" />

      {/* 🔹 Thought */}
      <section id="thought" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Thought of the Day
        </h2>

        <blockquote className="text-2xl italic text-gray-700">
          “Education is the most powerful weapon which you can use to change the
          world.”
        </blockquote>
        <p className="mt-2 text-gray-500 text-lg">— Nelson Mandela</p>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-blue-700 text-white py-5 text-center">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Ayushman Educational Academy. All rights
          reserved.
        </p>
      </footer>

      {/* 🟣 Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl p-7 w-80 relative animate-scaleIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Us
            </h3>

            <p className="text-gray-700 text-sm mb-1">
              Ayushman Educational Academy
            </p>
            <p className="text-gray-600 text-sm">📞 +91 98765 43210</p>
            <p className="text-gray-600 text-sm">
              📧 contact@ayushmanacademy.com
            </p>
            <p className="text-gray-600 text-sm">📍 Dewas, Madhya Pradesh</p>

            <button
              onClick={() => setIsDialogOpen(false)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full transition shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🟦 FEES DIALOG (BIG + PROFESSIONAL) */}
      {isFeesDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto animate-scaleIn">
            {/* Heading */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              📘 Complete Fee Details
            </h3>

            {/* Fee Table */}
            <div className="space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold">Nursery to Class 5</p>
                <p className="text-gray-600">₹800 / month</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold">Class 6 to 8</p>
                <p className="text-gray-600">₹1000 / month</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-semibold">Class 9 to 12</p>
                <p className="text-gray-600">₹1200 / month</p>
              </div>

              {/* Admission Rules */}
              <h4 className="text-xl font-semibold mt-6">📜 Admission Rules</h4>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Monthly fees must be paid before the 10th.</li>
                <li>Late fee of ₹50 after due date.</li>
                <li>Students must maintain 75% attendance.</li>
                <li>Uniform & books are mandatory.</li>
              </ul>

              {/* Documents Required */}
              <h4 className="text-xl font-semibold mt-6">
                📂 Documents Required
              </h4>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Birth Certificate</li>
                <li>Aadhar Card of Student</li>
                <li>Last Year Marksheet</li>
                <li>2 Passport Size Photos</li>
              </ul>

              {/* Timings */}
              <h4 className="text-xl font-semibold mt-6">⏰ School Timing</h4>
              <p className="text-gray-600 ml-1">
                Monday – Saturday: <strong>9:00 AM to 3:00 PM</strong>
              </p>

              {/* Payment Options */}
              <h4 className="text-xl font-semibold mt-6">💳 Payment Options</h4>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                <li>Cash</li>
                <li>UPI (PhonePe / GPay / Paytm)</li>
                <li>Bank Transfer</li>
              </ul>

              {/* Scholarship */}
              <h4 className="text-xl font-semibold mt-6">
                🏅 Scholarship / Discount
              </h4>
              <p className="text-gray-600">
                90% & above: <strong>50% Fee Discount</strong>
                <br />
                80% – 89%: <strong>25% Discount</strong>
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsFeesDialogOpen(false)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full transition shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔹 Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; } 
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
