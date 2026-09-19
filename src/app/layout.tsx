import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import FloatingActions from '@/components/FloatingActions';

export const metadata: Metadata = {
  title: "Nikhar Salon | Luxury Men's Grooming & Styling in Kota",
  description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury salon.",
  keywords: "Nikhar Salon Kota, Luxury Men Salon Kota, Best Haircut Kota, Beard Sculpting Kota, Grooming Salon Rajasthan",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0E1012] text-[#FAF8F5] min-h-screen flex flex-col antialiased selection:bg-[#BA9D6A] selection:text-[#0E1012] font-sans pb-16 lg:pb-0">
        {/* Top Navigation Bar (Clean on mobile: Logo + Direct Call) */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Fixed Right-Bottom Floating Actions (Book Appointment + WhatsApp) */}
        <FloatingActions />

        {/* Mobile Bottom Navigation Bar (Home, Services, Lookbook, About, Contact) */}
        <MobileBottomNav />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}