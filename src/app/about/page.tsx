import AboutHero from '@/components/about/AboutHero';
import OwnerProfileSection from '@/components/about/OwnerProfileSection';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCta from '@/components/about/AboutCta';

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

        {/* 4. Four Pillars of Nikhar Salon */}
        <AboutPillars />

        {/* 5. Bottom Reservation Card */}
        <AboutCta />
      </div>
    </div>
  );
}