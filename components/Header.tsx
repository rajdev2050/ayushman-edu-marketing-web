"use client";

import Link from "next/link";
import React, { useState } from "react";
import Branding from "./Branding";
import { MenuIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

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
    href: "/classes",
  },
  {
    label: "Events",
    href: "/event",
  },
  {
    label: "Staff",
    href: "/staff",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* BRANDING */}
        <Branding />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8 font-medium">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium hover:scale-105 transition relative ${
                    active ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></span>
                  )}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => router.push("/get-enrolled")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 hover:scale-105 transition shadow-sm"
          >
            Get Enrolled
          </button>
        </div>

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
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-3 font-medium">
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`hover:text-blue-600 transition relative py-2.5 px-2 rounded-lg ${
                    active
                      ? "text-blue-600 font-semibold bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {active && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r"></span>
                  )}
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                router.push("/get-enrolled");
                setOpen(false);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-sm mt-2 w-full text-center"
            >
              Get Enrolled
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
