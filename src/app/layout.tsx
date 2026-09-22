import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import FloatingActions from '@/components/FloatingActions';
import SmoothScroll from '@/components/SmoothScroll';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://nikharsaloon.vercel.app'),
  title: {
    default: "Nikhar Salon | Luxury Men's Grooming & Styling in Kota",
    template: "%s | Nikhar Salon Kota"
  },
  description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury salon.",
  keywords: ["Nikhar Salon Kota", "Luxury Men Salon Kota", "Best Haircut Kota", "Beard Sculpting Kota", "Grooming Salon Rajasthan", "Nikhar Saloon"],
  authors: [{ name: "Nikhar Salon Kota" }],
  creator: "Nikhar Salon Kota",
  publisher: "Nikhar Salon Kota",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nikharsaloon.vercel.app',
    siteName: "Nikhar Salon Kota",
    title: "Nikhar Salon | Luxury Men's Grooming & Styling in Kota",
    description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury salon.",
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: "Nikhar Salon Kota - Luxury Men's Grooming",
        type: 'image/jpeg',
      },
      {
        url: '/images/icon-square.jpg',
        width: 800,
        height: 800,
        alt: "Nikhar Salon Emblem",
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nikhar Salon | Luxury Men's Grooming & Styling in Kota",
    description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury salon.",
    images: ['/images/og-cover.jpg'],
    creator: '@nikharsalon',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/icon-square.jpg', type: 'image/jpeg' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/icon-square.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Anti-Flicker Theme Initialization Script (Defaults to Light) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('nikhar_theme');
                  var theme = (saved === 'dark' || saved === 'light') ? saved : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
        {/* OpenGraph & Social Preview Fallback Meta Tags */}
        <meta property="og:image" content="https://nikharsaloon.vercel.app/images/og-cover.jpg" />
        <meta property="og:image:secure_url" content="https://nikharsaloon.vercel.app/images/og-cover.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nikhar Salon Kota" />
        <meta name="twitter:image" content="https://nikharsaloon.vercel.app/images/og-cover.jpg" />
      </head>
      <body className="bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] min-h-screen flex flex-col antialiased selection:bg-[#BA9D6A] selection:text-white dark:selection:text-[#0E1012] font-sans pb-16 lg:pb-0 transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            {/* Top Navigation Bar (Clean on mobile: Logo + Theme Toggle + Direct Call) */}
            <Navbar />

            {/* Dynamic Page Content */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Fixed Right-Bottom Floating Actions (Book Appointment + WhatsApp) */}
            <FloatingActions />

            {/* Mobile Bottom Navigation Bar (Home, About, Services, Contact) */}
            <MobileBottomNav />

            {/* Footer */}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}