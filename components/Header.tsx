"use client";

import Link from "next/link";
import React, { useState } from "react";
import Branding from "./Branding";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { XIcon } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses/Classes",
    href: "/about",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Events",
    href: "/events",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* BRANDING */}
        <Branding />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8  font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:scale-105 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE OPEN CLOSE BUTTON */}
        <button
          className="md:hidden text-black/80 text-3xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:tex  t-blue-600 transition">
              About
            </Link>
            <Link href="/gallery" className="hover:text-blue-600 transition">
              Gallery
            </Link>
            <Link href="/events" className="hover:text-blue-600 transition">
              Events
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
