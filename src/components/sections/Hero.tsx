"use client";

import Link from "next/link";
import { heroValues } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="section w-full">
        <div className="text-center mb-16">
          <span className="section-label">Leading Digital Innovation</span>
          <h1 className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl">
            We Build <span className="gradient-text">Digital Solutions</span> That Drive Growth
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Transform your business with cutting-edge technology solutions. From web and mobile development to AI integration, we deliver excellence.
          </p>
        </div>

        {/* Multiple Value Propositions - Match deveonex.com style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {heroValues.map((value, index) => (
            <div key={index} className="glass-card p-8 text-center group hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400 mb-4">{value.desc}</p>
              <div className="flex justify-center gap-4">
                <Link href="#contact" className="btn-primary text-sm">Let's Start</Link>
                <Link href="#services" className="btn-secondary text-sm">Get Solutions</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative glass-card p-8 animate-pulse-glow">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center text-4xl">
                    {["💻", "📊", "🔧", "⚡"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}