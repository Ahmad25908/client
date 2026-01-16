"use client";

import { projectCategories, projects } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section">
        <div className="section-header">
          <span className="section-label">Our Projects</span>
          <h2>Our <span className="gradient-text">Projects</span></h2>
          <p className="max-w-2xl mx-auto mt-4">Explore our successful projects that have helped businesses achieve their digital goals.</p>
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-16">
          {projectCategories.map((category, index) => (
            <div key={index} className="glass-card p-2 sm:p-3 md:p-4 lg:p-6 text-center group hover:border-blue-500/30 transition-all">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-1 group-hover:scale-110 transition-transform">{category.icon}</div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold gradient-text mb-1">{category.count}+</div>
              <h3 className="text-[0.5rem] sm:text-[0.6rem] md:text-xs lg:text-sm font-medium">{category.title}</h3>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden group cursor-pointer hover:border-blue-500/30 transition-all">
              <div className="aspect-video relative">
                <img
                  src={`/${["pro1", "mobile", "saas", "ai"][index]}.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="text-xs text-blue-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="mt-1 text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}