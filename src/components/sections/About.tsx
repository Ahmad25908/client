"use client";

import { features } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-[#0f172a]/50">
      <div className="section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">About Us</span>
            <h2 className="mt-4 mb-6">We Are <span className="gradient-text">Social Provider</span></h2>
            <p className="mb-8">Social Provider combines technical expertise with strategic thinking to deliver solutions that not only meet your current needs but position you for future growth.</p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="mb-1">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-2 sm:p-3 md:p-4 lg:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 text-center">
            <div className="p-2 sm:p-3 md:p-4">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">120+</div>
              <div className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-gray-500 mt-1">Web Development</div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">45+</div>
              <div className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-gray-500 mt-1">App Development</div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">80+</div>
              <div className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-gray-500 mt-1">Graphic Designing</div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">60+</div>
              <div className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-gray-500 mt-1">UI/UX Designing</div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">30+</div>
              <div className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-gray-500 mt-1">Video Editing</div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">50+</div>
              <div className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-gray-500 mt-1">Software Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}