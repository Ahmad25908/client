"use client";

import Link from "next/link";
import NextImage from "next/image";

const posts = [
  {
    id: 1,
    title: "How Software Innovation Shapes the Future of Industries",
    category: "Technology",
    readTime: "8 min read",
    excerpt: "Innovation is no longer just a buzzword—it's the driving force behind industry transformation. Across sectors like healthcare, education, and e-commerce, businesses are leveraging software to enhance customer experiences and optimize operations.",
    date: "Sep 23, 2025",
    image: "/blog1.jpg"
  },
  {
    id: 2,
    title: "The Role of Technology Consultancy in Modern Business",
    category: "Business",
    readTime: "6 min read",
    excerpt: "In today's rapidly evolving digital landscape, technology consultancy plays a pivotal role in guiding businesses through complex transformations. Expert consultants provide strategic insights that align technology initiatives with business objectives.",
    date: "Sep 22, 2025",
    image: "/ai.jpg"
  },
  {
    id: 3,
    title: "Why Custom Software Is the Key to Business Growth",
    category: "Development",
    readTime: "7 min read",
    excerpt: "Off-the-shelf solutions rarely address the unique challenges faced by growing businesses. Custom software development offers tailored solutions that perfectly align with specific operational needs and strategic goals.",
    date: "Sep 21, 2025",
    image: "/pro1.jpg"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Latest News</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">Our <span className="text-blue-500">Latest News</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400">Stay updated with the latest trends, insights, and innovations in technology and business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 border border-white/10 flex flex-col backdrop-blur-sm">
              <div className="relative h-48 w-full">
                <NextImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 mb-6 text-sm flex-1">{post.excerpt}</p>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}