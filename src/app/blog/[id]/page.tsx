import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

// Data matching the Blog component to ensure consistency
const blogPosts = [
    {
        id: 1,
        title: "How Software Innovation Shapes the Future of Industries",
        category: "Technology",
        readTime: "8 min read",
        excerpt: "Innovation is no longer just a buzzword—it's the driving force behind industry transformation. Across sectors like healthcare, education, and e-commerce, businesses are leveraging software to enhance customer experiences and optimize operations.",
        date: "Sep 23, 2025",
        image: "/blog1.jpg",
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

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts.find((p) => p.id === parseInt(params.id));

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            <Navigation />

            <article className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-[120px] rounded-full -z-10" />

                <div className="max-w-4xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/#blog" className="hover:text-blue-400 transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-white truncate max-w-[200px]">{post.title}</span>
                    </nav>

                    {/* Header Content */}
                    <header className="text-center mb-12 animate-fade-in-up delay-100">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                            <span>{post.category}</span>
                            <span className="w-1 h-1 rounded-full bg-blue-400" />
                            <span>{post.readTime}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 border-y border-white/5 py-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px]">
                                    <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-xs text-white font-bold">
                                        HC
                                    </div>
                                </div>
                                <span className="text-white font-medium">Hassan CH</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-700" />
                            <time dateTime="2024-01-16">{post.date}</time>
                            <div className="w-1 h-1 rounded-full bg-gray-700" />
                            <span>No Comments</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/9] mb-16 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-fade-in-up delay-200 bg-white/5">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Article Content */}
                        <div className="lg:col-span-12 prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">

                            {/* Conditional content based on blog post ID */}
                            {post.id === 1 && (
                                <>
                                    <p className="lead text-xl text-slate-200 mb-8 font-light leading-relaxed">
                                        Innovation is no longer just a buzzword—it's the driving force behind industry transformation. Across sectors like healthcare, education, and e-commerce, businesses are leveraging software to enhance customer experiences and optimize operations.
                                    </p>

                                    <p>
                                        At Social Provider, we take pride in developing innovative solutions that not only meet today's demands but also prepare businesses for tomorrow. From AI-powered applications to cloud-based platforms, our solutions are built with scalability and adaptability in mind.
                                    </p>

                                    <h3>Key Drivers of Innovation</h3>
                                    <p>
                                        By combining creativity with technical expertise, we help industries unlock new opportunities and stay ahead of competitors. The future belongs to those who innovate, and at Social Provider, we make that future possible.
                                    </p>

                                    <p>
                                        Software innovation is not just about writing code; it's about solving real-world problems. Whether it's automating mundane tasks or creating entirely new business models, the impact of software is profound and far-reaching. Companies that embrace these changes are the ones that will thrive in the digital age.
                                    </p>

                                    <h3>Transforming Industries Through Technology</h3>
                                    <p>
                                        The transformation isn't limited to a single sector. Healthcare providers are using software to improve patient outcomes through predictive analytics and telemedicine. Educational institutions are leveraging technology to create immersive learning experiences. E-commerce platforms are using AI to personalize customer journeys and optimize supply chains.
                                    </p>

                                    <p>
                                        Each industry faces unique challenges, but the underlying principle remains the same: software innovation drives efficiency, reduces costs, and creates new revenue streams. The companies that recognize this trend early and invest in the right technologies will lead their respective markets.
                                    </p>

                                    <h3>Overcoming Implementation Challenges</h3>
                                    <p>
                                        Despite the clear benefits, many organizations struggle with software implementation. Common challenges include resistance to change, lack of technical expertise, and budget constraints. However, partnering with experienced technology consultants can mitigate these risks and accelerate the transformation process.
                                    </p>

                                    <p>
                                        A phased approach often yields the best results. Starting with pilot projects allows organizations to test concepts, gather feedback, and refine their strategies before scaling up. This approach minimizes risk while maximizing the chances of success.
                                    </p>

                                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300">
                                        "Innovation distinguishes between a leader and a follower." — Steve Jobs
                                    </blockquote>

                                    <h3>Building a Culture of Innovation</h3>
                                    <p>
                                        Creating an environment that fosters innovation requires more than just technology. Organizations must cultivate a culture that encourages experimentation, embraces failure as a learning opportunity, and rewards creative thinking. This cultural shift is often the most challenging aspect of digital transformation, but it's also the most critical.
                                    </p>

                                    <p>
                                        Training programs, cross-functional teams, and open communication channels are essential elements of an innovative culture. When employees feel empowered to contribute ideas and experiment with new approaches, the entire organization benefits.
                                    </p>

                                    <h3>Looking Ahead</h3>
                                    <p>
                                        As we look to the future, the integration of emerging technologies like machine learning, blockchain, and IoT will continue to reshape the landscape. It is imperative for businesses to stay agile and open to new ideas. The pace of change is accelerating, and organizations that can adapt quickly will have a significant competitive advantage.
                                    </p>

                                    <p>
                                        The journey toward digital transformation may seem daunting, but the rewards are substantial. Companies that invest in software innovation today will be well-positioned to lead in the markets of tomorrow. The question isn't whether to embrace change, but how quickly you can adapt to it.
                                    </p>
                                </>
                            )}

                            {post.id === 2 && (
                                <>
                                    <p className="lead text-xl text-slate-200 mb-8 font-light leading-relaxed">
                                        In today's rapidly evolving digital landscape, technology consultancy plays a pivotal role in guiding businesses through complex transformations. Expert consultants provide strategic insights that align technology initiatives with business objectives, ensuring sustainable growth and competitive advantage.
                                    </p>

                                    <p>
                                        At Social Provider, our technology consultancy services are designed to bridge the gap between business vision and technological implementation. We help organizations navigate the complexities of digital transformation while maximizing ROI and minimizing risks.
                                    </p>

                                    <h3>Strategic Technology Planning</h3>
                                    <p>
                                        Effective technology consultancy begins with a deep understanding of your business goals and challenges. Our experts conduct comprehensive assessments to identify opportunities for technology-driven improvements and develop roadmaps that align with your strategic objectives.
                                    </p>

                                    <p>
                                        We believe in a collaborative approach, working closely with your team to ensure that our recommendations are practical, implementable, and tailored to your specific needs. This partnership model ensures that our clients are equipped with the knowledge and tools necessary for long-term success.
                                    </p>

                                    <h3>Digital Transformation Guidance</h3>
                                    <p>
                                        Digital transformation is more than just adopting new technologies—it's about fundamentally changing how organizations operate and deliver value to customers. Our consultancy services encompass everything from cloud migration and cybersecurity to data analytics and automation.
                                    </p>

                                    <p>
                                        We guide our clients through each phase of their transformation journey, from initial strategy development to implementation and ongoing optimization. Our goal is to build resilient, agile systems that can adapt to future challenges and opportunities.
                                    </p>

                                    <h3>Emerging Technologies Integration</h3>
                                    <p>
                                        Staying ahead in today's market requires constant evaluation of emerging technologies and their potential impact on your business. Our consultants specialize in identifying and integrating cutting-edge solutions such as artificial intelligence, machine learning, and blockchain.
                                    </p>

                                    <p>
                                        We help organizations understand the practical applications of these technologies and develop implementation strategies that drive measurable results. Our focus is on solutions that provide tangible benefits and competitive advantages.
                                    </p>

                                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300">
                                        "The art of getting organizations to move in the right direction is the art of managing information." — Peter Drucker
                                    </blockquote>

                                    <h3>Change Management and Training</h3>
                                    <p>
                                        Successful technology implementation requires more than just technical expertise—it demands effective change management. Our consultancy services include comprehensive training programs and change management strategies to ensure smooth transitions and user adoption.
                                    </p>

                                    <p>
                                        We work with leadership teams to communicate the benefits of new technologies, address concerns, and build organizational readiness for change. This holistic approach significantly increases the likelihood of successful technology adoption.
                                    </p>

                                    <h3>Measuring Impact and ROI</h3>
                                    <p>
                                        Our commitment to our clients extends beyond implementation. We establish metrics and monitoring systems to track the impact of technology investments and continuously optimize performance. This data-driven approach ensures that our clients achieve measurable returns on their technology investments.
                                    </p>

                                    <p>
                                        Regular assessments and adjustments ensure that technology solutions continue to align with evolving business needs. Our ongoing support helps organizations maximize the value of their technology investments over the long term.
                                    </p>
                                </>
                            )}

                            {post.id === 3 && (
                                <>
                                    <p className="lead text-xl text-slate-200 mb-8 font-light leading-relaxed">
                                        Off-the-shelf solutions rarely address the unique challenges faced by growing businesses. Custom software development offers tailored solutions that perfectly align with specific operational needs and strategic goals, providing a competitive edge in today's market.
                                    </p>

                                    <p>
                                        At Social Provider, we specialize in creating custom software solutions that grow with your business. Our approach combines deep industry knowledge with cutting-edge technology to deliver applications that drive efficiency, productivity, and growth.
                                    </p>

                                    <h3>Advantages of Custom Software</h3>
                                    <p>
                                        Unlike generic solutions, custom software is built specifically for your business processes and requirements. This means better integration with existing systems, improved user experience, and enhanced functionality that directly contributes to your bottom line.
                                    </p>

                                    <p>
                                        Custom solutions offer greater flexibility and scalability, allowing businesses to adapt quickly to changing market conditions. With custom software, you have complete control over features, functionality, and future development directions.
                                    </p>

                                    <h3>Tailored Solutions for Business Needs</h3>
                                    <p>
                                        Our custom software development process begins with a thorough analysis of your business requirements and challenges. We work closely with stakeholders to understand workflows, pain points, and objectives, ensuring that the final solution addresses your specific needs.
                                    </p>

                                    <p>
                                        This collaborative approach results in software that seamlessly integrates with your operations and enhances productivity. Our solutions are designed to be intuitive for end-users while providing powerful capabilities that drive business growth.
                                    </p>

                                    <h3>Scalability and Future-Proofing</h3>
                                    <p>
                                        Custom software is inherently scalable, designed to accommodate business growth and evolving requirements. Our development approach ensures that applications can be easily extended and modified as your business grows and changes.
                                    </p>

                                    <p>
                                        We build solutions with future needs in mind, incorporating flexible architectures and modern technologies that can adapt to emerging trends and requirements. This forward-thinking approach protects your investment and ensures long-term value.
                                    </p>

                                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300">
                                        "The best way to predict the future is to invent it." — Alan Kay
                                    </blockquote>

                                    <h3>Integration and Efficiency</h3>
                                    <p>
                                        Custom software excels at integrating disparate systems and streamlining complex workflows. Our solutions connect different departments, eliminate data silos, and automate repetitive tasks, resulting in significant efficiency gains.
                                    </p>

                                    <p>
                                        By centralizing data and processes, custom applications provide valuable insights that enable better decision-making and strategic planning. This enhanced visibility into operations helps identify opportunities for further optimization and growth.
                                    </p>

                                    <h3>Security and Compliance</h3>
                                    <p>
                                        Security is paramount in custom software development. Our solutions incorporate robust security measures tailored to your specific requirements and industry regulations. This ensures protection of sensitive data and compliance with relevant standards.
                                    </p>

                                    <p>
                                        We implement security best practices throughout the development lifecycle, from initial design to deployment and maintenance. Regular updates and monitoring ensure that your custom software remains secure against evolving threats.
                                    </p>

                                    <h3>Ongoing Support and Maintenance</h3>
                                    <p>
                                        Our relationship with clients extends beyond initial deployment. We provide comprehensive support and maintenance services to ensure optimal performance and continued alignment with business objectives.
                                    </p>

                                    <p>
                                        Regular updates, performance monitoring, and feature enhancements keep your custom software relevant and effective. Our dedicated support team is always available to address issues and implement improvements as needed.
                                    </p>
                                </>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-12 mb-8 pt-8 border-t border-white/10">
                                <span className="text-gray-400 text-sm mr-2">Tags:</span>
                                {['Innovation', 'Technology', 'Future', 'Software', 'Digital Transformation'].map(tag => (
                                    <Link key={tag} href="#" className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors">
                                        #{tag}
                                    </Link>
                                ))}
                            </div>

                            {/* Previous/Next Navigation (Mockup) */}
                            <div className="flex justify-between items-center py-8 border-y border-white/10 my-12">
                                <Link href="#" className="group flex items-center gap-4 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">←</span>
                                    <span>Previous Post</span>
                                </Link>
                                <Link href="#" className="group flex items-center gap-4 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                    <span>Next Post</span>
                                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">→</span>
                                </Link>
                            </div>

                            {/* Comments Section Mockup */}
                            <div id="comments" className="mt-16">
                                <h3 className="text-2xl font-bold text-white mb-8">Leave a Comment</h3>
                                <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                                            <input type="text" id="name" className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                            <input type="email" id="email" className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="comment" className="block text-sm font-medium text-gray-400 mb-2">Comment *</label>
                                        <textarea id="comment" rows={5} className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Share your thoughts..." />
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <input type="checkbox" id="save-info" className="rounded border-white/10 bg-[#020617] text-blue-500 focus:ring-blue-500" />
                                        <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                    <button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                                        Post Comment
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
