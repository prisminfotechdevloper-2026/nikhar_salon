import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import MetricsSection from '@/components/home/MetricsSection';
import HairPatchSection from '@/components/home/HairPatchSection';
import HomeServicesSection from '@/components/home/HomeServicesSection';
import CraftsmanshipSection from '@/components/home/CraftsmanshipSection';
import VipMembershipsSection from '@/components/home/VipMembershipsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HomeCtaSection from '@/components/home/HomeCtaSection';

export const metadata: Metadata = {
  title: "Nikhar Mens Parlour | Luxury Men's Grooming & Hair Patch Studio in Kota",
  description:
    "Experience royal haircutting, non-surgical hair patch restoration, precision beard sculpting, and luxury skincare at Nikhar Mens Parlour Vigyan Nagar, Kota.",
  alternates: {
    canonical: 'https://nikharsaloon.vercel.app',
  },
  openGraph: {
    title: "Nikhar Mens Parlour | Luxury Men's Grooming & Hair Patch Studio in Kota",
    description:
      "Experience royal haircutting, non-surgical hair patch restoration, precision beard sculpting, and luxury skincare at Nikhar Mens Parlour Vigyan Nagar, Kota.",
    url: 'https://nikharsaloon.vercel.app',
    siteName: 'Nikhar Mens Parlour Kota',
    images: [
      {
        url: 'https://nikharsaloon.vercel.app/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: "Nikhar Mens Parlour Kota - Luxury Grooming",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden antialiased bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] font-sans selection:bg-[#BA9D6A] selection:text-white dark:selection:text-[#0E1012] transition-colors duration-300">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Salon Heritage & Trust Metrics */}
      <MetricsSection />

      {/* 3. Primary Flagship: Non-Surgical Hair Patch & Before/After Showcase */}
      <HairPatchSection />

      {/* 4. Complete Services Collection */}
      <HomeServicesSection />

      {/* 5. The Craftsmanship & Video Showcase */}
      <CraftsmanshipSection />

      {/* 6. VIP Membership & Grooming Passes */}
      <VipMembershipsSection />

      {/* 7. Client Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 8. Quick Reservation Banner */}
      <HomeCtaSection />
    </div>
  );
}