import AboutHero from '@/components/about/AboutHero';
import OwnerProfileSection from '@/components/about/OwnerProfileSection';
import AboutPillars from '@/components/about/AboutPillars';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCta from '@/components/about/AboutCta';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-20 sm:space-y-28 font-sans transition-colors duration-300">
      {/* 1. Header & Story Hero */}
      <AboutHero />

      {/* 2. Founder & Owner Profile Section (Firoz Khan) */}
      <OwnerProfileSection />

      {/* 3. Four Pillars of Nikhar Salon */}
      <AboutPillars />

      {/* 4. Meet the Master Barbers & Stylists */}
      <AboutTeam />

      {/* 5. Bottom Reservation Card */}
      <AboutCta />
    </div>
  );
}