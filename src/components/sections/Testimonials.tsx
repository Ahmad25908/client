"use client";

import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-[#0f172a]/50">
      <div className="section">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2>What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="max-w-2xl mx-auto mt-4">Hear directly from our clients about their experience working with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="glass-card p-6 group hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">"{item.quote}"</p>
              <div className="flex items-center">
                <div className="flex text-orange-500">
                  {'★'.repeat(item.rating)}
                </div>
                <div className="ml-2 text-sm text-gray-500">{item.rating}.0</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}