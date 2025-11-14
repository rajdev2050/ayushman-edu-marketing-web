"use client";

import React, { useEffect, useRef, useState } from "react";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogId = "contact-dialog";
  const dialogTitleId = "contact-dialog-title";
  const dialogDescriptionId = "contact-dialog-description";

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDialogOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDialogOpen]);

  useEffect(() => {
    if (isDialogOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isDialogOpen]);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* 🔹 Header Section */}
      <header
        className="bg-primary text-primary-foreground shadow-md"
        aria-hidden={isDialogOpen || undefined}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Ayushman Educational Academy
          </h1>
            <nav aria-label="Primary navigation">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-accent">
                  Fees
                </a>
              </li>
              <li>
                <a href="#thought" className="hover:text-accent">
                  Thought
                </a>
              </li>
              <li>
                {/* 🔘 Contact Button triggers Dialog */}
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isDialogOpen}
                    aria-controls={dialogId}
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-accent text-accent-foreground px-3 py-1 rounded-lg hover:bg-accent/90 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        aria-hidden={isDialogOpen || undefined}
      >
        {/* 🔹 School Information */}
        <section id="about" className="py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold text-heading mb-4">
            Welcome to Ayushman Educational Academy
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Our academy is dedicated to shaping young minds through excellence
            in education, discipline, and innovation. We provide a nurturing
            environment that encourages creativity, curiosity, and moral values.
          </p>
        </section>

        {/* 🔹 Fee Information */}
        <section id="fees" className="bg-primary/10 py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold text-heading mb-4">
            Fee Structure
          </h2>
          <div className="max-w-2xl mx-auto text-body">
            <p>
              <strong>Nursery to Class 5:</strong> ₹800 / month
            </p>
            <p>
              <strong>Class 6 to 8:</strong> ₹1000 / month
            </p>
            <p>
              <strong>Class 9 to 12:</strong> ₹1200 / month
            </p>
            <p className="mt-3 text-sm text-muted">
              *Concession available for meritorious students.*
            </p>
          </div>
        </section>

        {/* 🔹 Thought of the Day */}
        <section id="thought" className="py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold text-heading mb-4">
            Thought of the Day
          </h2>
          <blockquote
            className="text-xl italic text-muted"
            cite="https://www.goodreads.com/quotes/4790-education-is-not-the-learning-of-facts-but-the-training"
          >
            “Education is not the learning of facts, but the training of the mind
            to think.”
          </blockquote>
          <p className="mt-2 text-muted">— Albert Einstein</p>
        </section>
      </main>

      {/* 🔹 Footer */}
      <footer
        id="contact"
        className="bg-primary text-primary-foreground py-4 text-center relative"
        aria-hidden={isDialogOpen || undefined}
      >
        <p>
          &copy; {new Date().getFullYear()} Ayushman Educational Academy. All
          rights reserved.
        </p>
      </footer>

      {/* 🟣 Contact Dialog */}
        {isDialogOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4"
            role="presentation"
          >
            <div
              className="bg-white rounded-xl shadow-lg p-6 w-80 relative animate-fade-in"
              role="dialog"
              aria-modal="true"
              aria-labelledby={dialogTitleId}
              aria-describedby={dialogDescriptionId}
              id={dialogId}
            >
              <h3
                className="text-xl font-semibold text-heading mb-3"
                id={dialogTitleId}
              >
                Contact Us
              </h3>
              <div id={dialogDescriptionId}>
                <p className="text-body text-sm mb-2">
                  Ayushman Educational Academy
                </p>
                <p className="text-muted text-sm">📞 +91 98765 43210</p>
                <p className="text-muted text-sm">
                  📧 contact@ayushmanacademy.com
                </p>
                <p className="text-muted text-sm">📍 Dewas, Madhya Pradesh</p>
              </div>

              <button
                type="button"
                ref={closeButtonRef}
                onClick={() => setIsDialogOpen(false)}
                className="mt-4 bg-primary text-primary-foreground px-4 py-1 rounded-lg hover:bg-primary/90 transition w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Close dialog
              </button>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
