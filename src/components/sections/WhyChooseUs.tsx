"use client";

import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0f172a]/50">
      <div className="section">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2>Why Choose <span className="gradient-text">Deveonex</span></h2>
          <p className="max-w-2xl mx-auto mt-4">Discover what sets us apart from the competition and makes us the ideal partner for your digital transformation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="glass-card p-6 group hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}