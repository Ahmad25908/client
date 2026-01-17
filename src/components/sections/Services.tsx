"use client";

import Link from "next/link";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-[#0f172a]/50">
      <div className="section">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>We Provide <span className="gradient-text">Top Services</span></h2>
          <p className="max-w-2xl mx-auto mt-4">From concept to deployment, we offer end-to-end digital solutions tailored to your business needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 group cursor-pointer hover:border-blue-500/30 transition-all">
              <div className="flex justify-center mb-4">
                {service.logo ? (
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      // Fallback to text icon if the logo doesn't load
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'text-4xl';
                        fallbackDiv.textContent = service.icon;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
                ) : (
                  <div className="text-4xl">{service.icon}</div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}