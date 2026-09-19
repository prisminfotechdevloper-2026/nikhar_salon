import HeroSection from '@/components/home/HeroSection';
import MetricsSection from '@/components/home/MetricsSection';
import HomeServicesSection from '@/components/home/HomeServicesSection';
import CraftsmanshipSection from '@/components/home/CraftsmanshipSection';
import VipMembershipsSection from '@/components/home/VipMembershipsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HomeCtaSection from '@/components/home/HomeCtaSection';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden antialiased bg-[#0E1012] text-[#FAF8F5] font-sans selection:bg-[#BA9D6A] selection:text-[#0E1012]">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Salon Heritage & Trust Metrics */}
      <MetricsSection />

      {/* 3. Signature Services Collection */}
      <HomeServicesSection />

      {/* 4. The Craftsmanship & Video Showcase */}
      <CraftsmanshipSection />

      {/* 5. VIP Membership & Grooming Passes */}
      <VipMembershipsSection />

      {/* 6. Client Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 7. Quick Reservation Banner */}
      <HomeCtaSection />
    </div>
  );
}