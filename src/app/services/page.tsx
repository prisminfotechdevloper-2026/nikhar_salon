import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import ServicesFilterGrid from '@/components/services/ServicesFilterGrid';
import ServiceHero from '@/components/services/ServiceHero';

export const metadata: Metadata = {
  title: "Grooming & Hair Patch Services Menu & Pricing | Nikhar Mens Parlour Kota",
  description:
    "Browse complete men's grooming services and transparent prices at Nikhar Mens Parlour Kota. Executive haircuts, royal beard sculpting, non-surgical hair systems, and detox facials.",
  alternates: {
    canonical: 'https://nikharsaloon.vercel.app/services',
  },
  openGraph: {
    title: "Grooming & Hair Patch Services Menu & Pricing | Nikhar Mens Parlour Kota",
    description:
      "Browse complete men's grooming services and transparent prices at Nikhar Mens Parlour Kota. Executive haircuts, royal beard sculpting, non-surgical hair systems, and detox facials.",
    url: 'https://nikharsaloon.vercel.app/services',
    siteName: 'Nikhar Mens Parlour Kota',
    images: [
      {
        url: 'https://nikharsaloon.vercel.app/images/service-hair-patch.jpg',
        width: 1200,
        height: 630,
        alt: "Nikhar Mens Parlour Services Menu Kota",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      {/* 1. Luxury Service Hero Section with 9-Card Responsive Carousel */}
      <ServiceHero />

      {/* 2. Full Menu Interactive Category Filter & Services Grid */}
      <div id="services-menu" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 space-y-16">
        {/* Interactive Filter Grid with Luxury Editorial 2-Column Split Header */}
        <ServicesFilterGrid />

        {/* Bottom Booking Touchpoint */}
        <div className="border border-[#BA9D6A]/30 bg-white dark:bg-[#141619] rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-lg dark:shadow-xl transition-colors">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
              BESPOKE APPOINTMENTS
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-[#181A1C] dark:text-white">
            Need a Custom Combination or Groom Package?
          </h2>
          <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] max-w-lg mx-auto">
            Connect directly with our parlour manager on WhatsApp for personalized packages, wedding groom combos, or special requests.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className="gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-md hover:scale-105 transition"
            >
              Reserve Your Slot Now
            </Link>
            <a
              href="https://wa.me/919784711323?text=Hello%20Nikhar%20Mens%20Parlour!%20I%20would%20like%20to%20know%20about%20groom%20packages."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#D9D4CB] dark:border-white/20 hover:border-[#BA9D6A] text-[#181A1C] dark:text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition shadow-2xs hover:scale-105"
            >
              <WhatsAppIcon size={18} variant="authentic" /> <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}