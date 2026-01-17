import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Carousel from "@/components/ui/Carousel";

export default function TermsOfServicePage() {
  return (
    <>
      {/* Top Bar - Similar to deveonex.com */}
      <div className="bg-[#020617] py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="text-gray-400">Mon-Sat: 10:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      <Navigation />
      <main>
        <div className="section py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4"><strong>Last updated:</strong> January 16, 2026</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
              <p className="mb-4">
                Welcome to Social Provider. These terms and conditions outline the rules and regulations
                for the use of Social Provider's Website, located at socialprovider.com.
              </p>
              <p className="mb-4">
                By accessing this website we assume you accept these terms and conditions. Do not
                continue to use Social Provider if you do not agree to take all of the terms and conditions
                stated on this page.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
              <p className="mb-4">
                Unless otherwise stated, Social Provider and/or its licensors own the intellectual property
                rights for all material on Social Provider. All intellectual property rights are reserved.
                You may access this from Social Provider for your own personal use subjected to restrictions
                set in these terms and conditions.
              </p>
              <p className="mb-4">
                You must not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Republish material from Social Provider</li>
                <li>Sell, rent or sub-license material from Social Provider</li>
                <li>Reproduce, duplicate or copy material from Social Provider</li>
                <li>Redistribute content from Social Provider</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">User Responsibilities</h2>
              <p className="mb-4">
                In these terms and conditions, "Your Content" shall mean any audio, video text,
                images or other material you choose to display on this Website. By displaying
                Your Content, you grant Social Provider a non-exclusive, worldwide irrevocable,
                sub-licensable license to reproduce, adapt, publish, translate and distribute
                it in any and all media.
              </p>
              <p className="mb-4">
                Your Content must be your own and must not be invading any third-party's rights.
                Social Provider reserves the right to remove any of Your Content from this Website at any time.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Limitations of Liability</h2>
              <p className="mb-4">
                In no event shall Social Provider, nor any of its officers, directors and employees,
                be held liable for anything arising out of or in any way connected with your use
                of this Website whether such liability is under contract.  Social Provider, including
                its officers, directors and employees shall not be held liable for any indirect,
                consequential or special liability arising out of or in any way related to your
                use of this Website.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Governing Law</h2>
              <p className="mb-4">
                These terms and conditions are governed by and construed in accordance with the
                laws of the United States, and you irrevocably submit to the exclusive jurisdiction
                of the courts in that State or location.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. You are advised to review
                these terms periodically for any changes. Changes to these terms are effective when
                they are posted on this page.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>By email: info@socialprovider.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}