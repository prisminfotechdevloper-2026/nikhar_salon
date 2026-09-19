import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: "Nikhar Salon | Luxury Men's Grooming & Styling in Kota",
  description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury salon.",
  keywords: "Nikhar Salon Kota, Luxury Men Salon Kota, Best Haircut Kota, Beard Sculpting Kota, Grooming Salon Rajasthan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0E1012] text-[#FAF8F5] min-h-screen flex flex-col antialiased selection:bg-[#BA9D6A] selection:text-[#0E1012] font-sans">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Floating WhatsApp Quick Action Button */}
        <WhatsAppFloat />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}