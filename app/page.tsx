"use client";

import React, { useState } from "react";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 🔹 Header Section */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Ayushman Educational Academy
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-yellow-300">
                  About
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-yellow-300">
                  Fees
                </a>
              </li>
              <li>
                <a href="#thought" className="hover:text-yellow-300">
                  Thought
                </a>
              </li>
              <li>
                {/* 🔘 Contact Button triggers Dialog */}
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-lg hover:bg-yellow-300 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 🔹 School Information */}
      <section id="about" className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Welcome to Ayushman Educational Academy
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our academy is dedicated to shaping young minds through excellence in
          education, discipline, and innovation. We provide a nurturing
          environment that encourages creativity, curiosity, and moral values.
        </p>
      </section>

      {/* 🔹 Fee Information */}
      <section id="fees" className="bg-blue-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Fee Structure
        </h2>
        <div className="max-w-2xl mx-auto text-gray-700">
          <p>
            <strong>Nursery to Class 5:</strong> ₹800 / month
          </p>
          <p>
            <strong>Class 6 to 8:</strong> ₹1000 / month
          </p>
          <p>
            <strong>Class 9 to 12:</strong> ₹1200 / month
          </p>
          <p className="mt-3 text-sm text-gray-600">
            *Concession available for meritorious students.*
          </p>
        </div>
      </section>

      {/* 🔹 Thought of the Day */}
      <section id="thought" className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Thought of the Day
        </h2>
        <blockquote className="text-xl italic text-gray-600">
          “Education is not the learning of facts, but the training of the mind
          to think.”
        </blockquote>
        <p className="mt-2 text-gray-500">— Albert Einstein</p>
      </section>

      {/* 🔹 Footer */}
      <footer
        id="contact"
        className="bg-blue-700 text-white py-4 text-center relative"
      >
        <p>
          &copy; {new Date().getFullYear()} Ayushman Educational Academy. All
          rights reserved.
        </p>
      </footer>

      {/* 🟣 Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative animate-fade-in">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Contact Us
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Ayushman Educational Academy
            </p>
            <p className="text-gray-600 text-sm">📞 +91 98765 43210</p>
            <p className="text-gray-600 text-sm">
              📧 contact@ayushmanacademy.com
            </p>
            <p className="text-gray-600 text-sm">📍 Dewas, Madhya Pradesh</p>

            <button
              onClick={() => setIsDialogOpen(false)}
              className="mt-4 bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
