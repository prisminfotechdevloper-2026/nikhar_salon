import Link from 'next/link';
import { Sparkles, MessageCircle } from 'lucide-react';
import ServicesFilterGrid from '@/components/services/ServicesFilterGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16 font-sans">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
            THE GROOMING MENU
          </span>
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
        </div>
        <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
          Our Complete Services
        </h1>
        <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
          From signature fade haircuts and hot razor sculpting to revitalizing charcoal facials and keratin hair spa therapies, explore all bespoke offerings at Kota&apos;s premier salon.
        </p>
      </div>

      {/* Interactive Category Filter & Services Grid */}
      <ServicesFilterGrid />

      {/* Bottom Booking Touchpoint */}
      <div className="border border-[#BA9D6A]/30 bg-[#141619] rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2">
          <Sparkles size={16} className="text-[#BA9D6A]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
            BESPOKE APPOINTMENTS
          </span>
        </div>
        <h2 className="font-serif-title text-3xl sm:text-4xl text-white">
          Need a Custom Combination or Groom Package?
        </h2>
        <p className="text-xs sm:text-sm text-[#A6A29A] max-w-lg mx-auto">
          Connect directly with our salon manager on WhatsApp for personalized packages, wedding groom combos, or special requests.
        </p>
        <div className="pt-3 flex flex-wrap justify-center gap-4">
          <Link
            href="/book-appointment"
            className="gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-lg hover:scale-105 transition"
          >
            Reserve Your Slot Now
          </Link>
          <a
            href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20would%20like%20to%20know%20about%20groom%20packages."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-[#BA9D6A] px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition"
          >
            <MessageCircle size={15} className="text-[#BA9D6A]" /> Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}