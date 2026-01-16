"use client";

import { usePathname } from "next/navigation";

interface UniversalBannerProps {
  title?: string;
}

export default function UniversalBanner({ title }: UniversalBannerProps) {
  const pathname = usePathname();
  
  // Determine the title based on the current path if not provided
  const getPageTitle = () => {
    if (title) return title;
    
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About Us';
      case '/services':
        return 'Services';
      case '/portfolio':
        return 'Portfolio';
      case '/team':
        return 'Team';
      case '/blog':
        return 'Blog';
      case '/contact':
        return 'Contact';
      case '/privacy-policy':
        return 'Privacy Policy';
      case '/terms-of-service':
        return 'Terms of Service';
      default:
        return 'Page';
    }
  };

  // Determine the appropriate background image based on the page
  const getBackgroundImage = () => {
    switch (pathname) {
      case '/about':
        return 'url(/slider-1.jpg)';
      case '/services':
        return 'url(/slider-2.jpg)';
      case '/portfolio':
        return 'url(/slider-3.jpg)';
      case '/team':
        return 'url(/slider-1.jpg)';
      case '/blog':
        return 'url(/slider-2.jpg)';
      case '/contact':
        return 'url(/slider-3.jpg)';
      case '/privacy-policy':
        return 'url(/slider-1.jpg)';
      case '/terms-of-service':
        return 'url(/slider-2.jpg)';
      default:
        return 'url(/slider-1.jpg)'; // Default image for home and other pages
    }
  };

  return (
    <div 
      className="relative w-full h-[50vh] overflow-hidden"
      style={{ backgroundImage: getBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/70 via-[#0f172a]/60 to-[#1e1b4b]/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl ml-auto text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {getPageTitle()}
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto md:mx-none md:ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}