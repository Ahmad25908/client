"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Team", path: "/team" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <NextImage
            src="/logo.jpg"
            alt="Social Provider Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-4">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`px-3 py-2 rounded-md font-medium transition-all duration-300 text-sm lg:text-base
                ${isActive(item.path)
                  ? "text-orange-500 bg-orange-50 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            GET A QUOTE
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className={`py-3 px-4 rounded-lg font-medium transition-colors text-left
                  ${isActive(item.path) ? "bg-orange-50 text-orange-500 border-l-4 border-orange-500" : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full font-medium transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
