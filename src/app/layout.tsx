import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deveonex | Premium IT Solutions & Software Development",
  description: "Selecting the finest IT service provider. We deliver exceptional web, app, and software development with cutting-edge AI and digital marketing solutions.",
  keywords: "IT services, software development, web development, app development, AI, machine learning, digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
