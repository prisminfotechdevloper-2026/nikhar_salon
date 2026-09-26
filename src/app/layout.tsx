import type { Metadata } from 'next';
import { Manrope, DM_Serif_Display, Playfair_Display, Caveat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import FloatingActions from '@/components/FloatingActions';
import SmoothScroll from '@/components/SmoothScroll';
import { ThemeProvider } from '@/context/ThemeContext';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: ['400'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nikharsaloon.vercel.app'),
  title: {
    default: "Nikhar Mens Parlour | Luxury Men's Grooming & Styling in Kota",
    template: "%s | Nikhar Mens Parlour Kota"
  },
  description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury parlour.",
  keywords: ["Nikhar Mens Parlour Kota", "Luxury Men Salon Kota", "Best Haircut Kota", "Beard Sculpting Kota", "Grooming Salon Rajasthan", "Nikhar Mens Parlour"],
  authors: [{ name: "Nikhar Mens Parlour Kota" }],
  creator: "Nikhar Mens Parlour Kota",
  publisher: "Nikhar Mens Parlour Kota",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nikharsaloon.vercel.app',
    siteName: "Nikhar Mens Parlour Kota",
    title: "Nikhar Mens Parlour | Luxury Men's Grooming & Styling in Kota",
    description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury parlour.",
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: "Nikhar Mens Parlour Kota - Luxury Men's Grooming",
        type: 'image/jpeg',
      },
      {
        url: '/images/icon-square.jpg',
        width: 800,
        height: 800,
        alt: "Nikhar Mens Parlour Emblem",
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nikhar Mens Parlour | Luxury Men's Grooming & Styling in Kota",
    description: "Experience royal hair styling, precision beard sculpting, luxury facials, and grooming therapies at Kota's premier luxury parlour.",
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

const salonSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Nikhar Mens Parlour Kota',
  alternateName: "Nikhar Mens Parlour",
  image: 'https://nikharsaloon.vercel.app/images/og-cover.jpg',
  logo: 'https://nikharsaloon.vercel.app/icon.svg',
  telephone: '+919784711323',
  url: 'https://nikharsaloon.vercel.app',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 9, Old Police Station Ke Samne, Vigyan Nagar',
    addressLocality: 'Kota',
    addressRegion: 'Rajasthan',
    postalCode: '324005',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.1328965,
    longitude: 75.8366472,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '22:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/nikhar__mens_parlour',
    'https://youtube.com/@nikharunisexsaloonkota',
  ],
};

// Safely serialize JSON-LD to prevent HTML script breakout
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(salonSchema) }}
        />
      </head>
      <body className={`${manrope.variable} ${dmSerifDisplay.variable} ${playfairDisplay.variable} ${caveat.variable} bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] min-h-screen flex flex-col antialiased selection:bg-[#BA9D6A] selection:text-white dark:selection:text-[#0E1012] font-sans pb-16 lg:pb-0 transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScroll>
            {/* Top Navigation Bar (Clean on mobile: Logo + Theme Toggle + Direct Call) */}
            <Navbar />

            {/* Dynamic Page Content */}
            <main className="grow">
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