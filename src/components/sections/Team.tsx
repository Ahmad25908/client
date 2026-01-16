"use client";

import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="bg-[#0f172a]/50">
      <div className="section">
        <div className="section-header">
          <span className="section-label">Our Team</span>
          <h2>Meet Our <span className="gradient-text">Experts</span></h2>
          <p className="max-w-2xl mx-auto mt-4">Our talented professionals bring expertise and passion to every project, ensuring exceptional results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card group hover:border-blue-500/30 transition-all overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={`/team${index + 1}.jpg`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-blue-400 mb-2">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <span className="text-sm">in</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <span className="text-sm">t</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}