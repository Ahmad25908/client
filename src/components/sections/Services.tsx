"use client";

import {
  Globe,
  Smartphone,
  Code,
  Brain,
  Layers,
  Palette,
  Layout,
  Scissors,
  Megaphone,
  Search,
  Users,
  DollarSign
} from 'lucide-react';

export default function Services() {
  // Define services with appropriate icons
  const services = [
    { icon: Globe, title: "Web Development", description: "Custom, responsive websites built with modern technologies for optimal performance." },
    { icon: Smartphone, title: "App Development", description: "Native and cross-platform mobile applications that deliver exceptional user experiences." },
    { icon: Code, title: "Software Development", description: "Custom software solutions designed to streamline your business operations." },
    { icon: Brain, title: "Machine Learning", description: "AI-powered solutions that automate processes and unlock data insights." },
    { icon: Layers, title: "Deep Learning", description: "Advanced neural networks for complex problem-solving and predictive analytics." },
    { icon: Palette, title: "Graphic Designing", description: "Creative visual solutions that communicate your brand message effectively." },
    { icon: Layout, title: "UI / UX Designing", description: "User-centered design that combines aesthetics with intuitive functionality." },
    { icon: Scissors, title: "Video Editing", description: "Professional video production and editing services for marketing content." },
    { icon: Megaphone, title: "Digital Marketing", description: "Comprehensive digital marketing strategies to grow your online presence." },
    { icon: Search, title: "SEO", description: "Search engine optimization to increase your website's visibility." },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Instagram, Facebook, TikTok, YouTube - comprehensive social media management."
    },
    {
      icon: DollarSign,
      title: "Social Media Monetization",
      description: "YouTube, TikTok, Facebook monetization strategies for revenue growth."
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">Our <span className="text-blue-500">Services</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400">From concept to deployment, we offer end-to-end digital solutions tailored to your business needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 border border-white/10 backdrop-blur-sm group cursor-pointer"
              >
                {/* Icon container with centered alignment */}
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-500/10 p-4 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold mb-3 text-white text-center group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-gray-400 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}