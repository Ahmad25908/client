import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Carousel from "@/components/ui/Carousel";

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4"><strong>Last updated:</strong> January 16, 2026</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
              <p className="mb-4">
                Social Provider ("us", "we", or "our") operates the socialprovider.com website (the "Service").
                This page informs you of our policies regarding the collection, use, and disclosure
                of personal data when you use our Service and the choices you have associated with that data.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Information Collection and Use</h2>
              <p className="mb-4">
                We collect several different types of information for various purposes to provide
                and improve our Service to you.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Types of Data Collected</h3>
              <h4 className="text-md font-semibold mt-4 mb-2">Personal Data</h4>
              <p className="mb-4">
                While using our Service, we may ask you to provide us with certain personally
                identifiable information that can be used to contact or identify you ("Personal Data").
                Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h4 className="text-md font-semibold mt-4 mb-2">Usage Data</h4>
              <p className="mb-4">
                We may also collect information that your browser sends whenever you visit our Service
                or when you access the Service by or through a mobile device ("Usage Data"). This
                Usage Data may include information such as your computer's Internet Protocol address
                (e.g. IP address), browser type, browser version, the pages of our Service that you
                visit, the time and date of your visit, the time spent on those pages, unique device
                identifiers and other diagnostic data.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Use of Data</h2>
              <p className="mb-4">
                Social Provider uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">Security of Data</h2>
              <p className="mb-4">
                The security of your data is important to us but remember that no method of transmission
                over the Internet or method of electronic storage is 100% secure. While we strive to
                use commercially acceptable means to protect your Personal Data, we cannot guarantee
                its absolute security.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Service Providers</h2>
              <p className="mb-4">
                We may employ third party companies and individuals to facilitate our Service
                ("Service Providers"), provide the Service on our behalf, perform Service-related
                services or assist us in analyzing how our Service is used.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page. We will let you know via email and/or
                a prominent notice on our Service, prior to the change becoming effective and update
                the "effective date" at the top of this Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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