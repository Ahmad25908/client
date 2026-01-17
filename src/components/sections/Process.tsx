"use client";

import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-[#0f172a]/50">
      <div className="section">
        <div className="section-header">
          <span className="section-label">Our Process</span>
          <h2>Our <span className="gradient-text">Process</span></h2>
          <p className="max-w-2xl mx-auto mt-4">A streamlined approach that ensures quality, transparency, and results at every stage.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <div key={index} className="glass-card p-6 text-center relative group">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <div className="text-2xl font-bold text-blue-400">{item.step}</div>
                </div>
              </div>
              <h3 className="mt-2 mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-purple-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}