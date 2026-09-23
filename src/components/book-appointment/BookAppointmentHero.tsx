import Image from 'next/image';
import { ShieldCheck, UserCheck, Crown, Coffee } from 'lucide-react';

export default function BookAppointmentHero() {
  return (
    <section className="relative w-full bg-[#08090B] text-white pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-18 overflow-hidden border-b border-[#BA9D6A]/20 select-none">
      {/* Background Image with Cinematic Luxury Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/craft-experience.jpg"
          alt="Nikhar Salon Craftsmanship Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 filter brightness-[0.7] contrast-125"
        />
        {/* Obsidian Vignette Gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-[#08090B] via-[#08090B]/85 to-[#08090B]/90" />
        <div className="absolute inset-0 bg-linear-to-r from-[#08090B] via-transparent to-[#08090B]" />
      </div>

      {/* Luxury Background Ambient Glows & Circular Geometry */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[450px] rounded-full bg-[#BA9D6A]/[0.08] blur-[130px] z-1" />
      <div className="pointer-events-none absolute top-1/2 -right-20 size-[500px] rounded-full bg-[#BA9D6A]/[0.06] blur-[150px] z-1" />
      <div className="pointer-events-none absolute top-1/2 -left-32 -translate-y-1/2 size-[520px] rounded-full border border-[#BA9D6A]/10 opacity-70 z-1" />
      <div className="pointer-events-none absolute top-1/2 -right-32 -translate-y-1/2 size-[520px] rounded-full border border-[#BA9D6A]/10 opacity-70 z-1" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-5 z-10">
        {/* Header Tag with Gold Accent Lines */}
        <div className="inline-flex items-center gap-3">
          <div className="w-10 sm:w-14 h-[1.5px] bg-[#BA9D6A]/70" />
          <span className="text-[11px] sm:text-[12px] font-sans tracking-[0.25em] text-[#C2A774] uppercase font-semibold">
            VIP RESERVATION CONCIERGE
          </span>
          <div className="w-10 sm:w-14 h-[1.5px] bg-[#BA9D6A]/70" />
        </div>

        {/* Display Headings */}
        <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-[56px] font-normal text-white tracking-tight leading-[1.1]">
          Reserve Your <span className="italic gold-gradient-text">Royal Experience</span>
        </h1>

        <p className="text-[#A1A1A8] text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
          Select your signature grooming service, pick your preferred master stylist, and receive an instant digital reservation pass on WhatsApp.
        </p>

        {/* 4 Luxury Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-5xl mx-auto">
          {/* Zero Waiting */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#121417]/90 backdrop-blur-md border border-[#BA9D6A]/20 hover:border-[#BA9D6A]/60 flex items-center gap-3 text-left shadow-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 group">
            <div className="size-9 sm:size-10 rounded-full bg-white/[0.04] border border-[#BA9D6A]/40 flex items-center justify-center text-[#C2A774] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors duration-200 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-semibold text-white truncate">Zero Waiting</span>
              <span className="block text-[10.5px] text-neutral-400 truncate font-light">Confirmed chair slot</span>
            </div>
          </div>

          {/* Master Barbers */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#121417]/90 backdrop-blur-md border border-[#BA9D6A]/20 hover:border-[#BA9D6A]/60 flex items-center gap-3 text-left shadow-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 group">
            <div className="size-9 sm:size-10 rounded-full bg-white/[0.04] border border-[#BA9D6A]/40 flex items-center justify-center text-[#C2A774] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors duration-200 shrink-0">
              <UserCheck size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-semibold text-white truncate">Master Barbers</span>
              <span className="block text-[10.5px] text-neutral-400 truncate font-light">5 to 12+ yrs exp</span>
            </div>
          </div>

          {/* Private Suite */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#121417]/90 backdrop-blur-md border border-[#BA9D6A]/20 hover:border-[#BA9D6A]/60 flex items-center gap-3 text-left shadow-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 group">
            <div className="size-9 sm:size-10 rounded-full bg-white/[0.04] border border-[#BA9D6A]/40 flex items-center justify-center text-[#C2A774] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors duration-200 shrink-0">
              <Crown size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-semibold text-white truncate">Private Suite</span>
              <span className="block text-[10.5px] text-neutral-400 truncate font-light">Hair patch room</span>
            </div>
          </div>

          {/* VIP Lounge */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#121417]/90 backdrop-blur-md border border-[#BA9D6A]/20 hover:border-[#BA9D6A]/60 flex items-center gap-3 text-left shadow-lg transition-[border-color,transform] duration-300 hover:-translate-y-0.5 group">
            <div className="size-9 sm:size-10 rounded-full bg-white/[0.04] border border-[#BA9D6A]/40 flex items-center justify-center text-[#C2A774] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors duration-200 shrink-0">
              <Coffee size={18} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-semibold text-white truncate">VIP Lounge</span>
              <span className="block text-[10.5px] text-neutral-400 truncate font-light">Free espresso & tea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
