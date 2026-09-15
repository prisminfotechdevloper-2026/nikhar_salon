import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: "Nikhar Salon | Premium Men's Salon Kota",
  description: "Style Beyond Just a Haircut. Experience luxury grooming, haircuts, and beard styling in Kota, Rajasthan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-white min-h-screen flex flex-col antialiased selection:bg-[#e4a863] selection:text-black">
        {/* Navigation Bar - Responsive hamburger included */}
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