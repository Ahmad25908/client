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
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <NextImage
            src="/logo.jpg"
            alt="Deveonex Logo"
            width={200}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`px-3 py-2 rounded-md font-medium transition-colors text-base lg:text-lg
                ${isActive(item.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-blue-900 hover:text-blue-600 hover:bg-blue-50"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
          >
            GET A QUOTE
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700"
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
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 flex flex-col gap-2">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className={`py-2 px-4 rounded-md font-medium transition-colors
                  ${isActive(item.path) ? "bg-blue-50 text-blue-600" : "text-blue-900 hover:bg-blue-50 hover:text-blue-600"}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-medium transition-colors"
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
