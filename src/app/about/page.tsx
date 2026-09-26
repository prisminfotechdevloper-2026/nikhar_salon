import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import OwnerProfileSection from '@/components/about/OwnerProfileSection';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCta from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'Our Story & Founder Firoz Khan | Nikhar Mens Parlour Kota',
  description:
    'Discover the legacy of Nikhar Mens Parlour in Kota. Meet Founder Firoz Khan with 12+ years mastery in non-surgical hair restoration and precision Italian razor fades.',
  alternates: {
    canonical: 'https://nikharsaloon.vercel.app/about',
  },
  openGraph: {
    title: 'Our Story & Founder Firoz Khan | Nikhar Mens Parlour Kota',
    description:
      'Discover the legacy of Nikhar Mens Parlour in Kota. Meet Founder Firoz Khan with 12+ years mastery in non-surgical hair restoration and precision Italian razor fades.',
    url: 'https://nikharsaloon.vercel.app/about',
    siteName: 'Nikhar Mens Parlour Kota',
    images: [
      {
        url: 'https://nikharsaloon.vercel.app/images/owner/firoz-khan-clean.png',
        width: 1200,
        height: 630,
        alt: 'Firoz Khan - Founder Nikhar Mens Parlour Kota',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      {/* 1. Header & Story Hero — edge-to-edge, handles its own padding + navbar clearance */}
      <AboutHero />

      {/* 2–5. Remaining sections — standard content container with proper padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20 sm:space-y-24 py-16 sm:py-20">
        {/* 2. Founder & Owner Profile Section (Firoz Khan) */}
        <OwnerProfileSection />

        {/* 3. Meet the Master Barbers & Stylists */}
        <AboutTeam />

        {/* 4. Four Pillars of Nikhar Mens Parlour */}
        <AboutPillars />

        {/* 5. Bottom Reservation Card */}
        <AboutCta />
      </div>
    </div>
  );
}