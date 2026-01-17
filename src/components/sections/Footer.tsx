"use client";

import Link from "next/link";
import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617]">
      <div className="section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <NextImage
                  src="/logo.jpg"
                  alt="Social Provider Logo"
                  width={300}
                  height={90}
                  className="h-24 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-4">Partner with Social Provider for excellence in digital solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <span className="text-sm">ig</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <span className="text-sm">yt</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">YouTube Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">YouTube Organic Subscribers</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">YouTube Watchtime</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Youtube Channel Growth</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Bahria Phase 7 Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Region: United Arab Emirates (Coming Soon)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+971 55 205 0169</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                <span>WhatsApp: +971 55 205 0169 <br /> & +92 327 571 028</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>contact@socialprovider.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Social Provider. All rights reserved.
            <Link href="/privacy-policy" className="mx-2 hover:text-white transition-colors">Privacy Policy</Link> |
            <Link href="/terms-of-service" className="mx-2 hover:text-white transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}