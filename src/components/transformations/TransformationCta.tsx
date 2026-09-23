import Link from 'next/link';
import { Calendar, Phone, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function TransformationCta() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5] dark:bg-[#0E1012] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#181A1C] via-[#121416] to-[#0A0C0E] border border-[#BA9D6A]/35 p-8 sm:p-12 lg:p-16 text-center text-white shadow-xl">
          {/* Ambient Gold Sheen */}
          <div className="pointer-events-none absolute -top-32 -left-32 size-80 rounded-full bg-[#BA9D6A]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full bg-[#BA9D6A]/15 blur-3xl" />

          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase font-sans">
              PRIVATE & CONFIDENTIAL CONSULTATION
            </span>
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight max-w-3xl mx-auto text-white mb-4">
            Ready to Start Your Own Transformation Journey?
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you are looking to restore full crown hair density with an undetectable micro-skin system, sculpt an executive beard, or detoxify tired skin — Master Firoz Khan and the Nikhar team provide private, 1-on-1 consultations in Kota.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] hover:brightness-105 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0E1012] transition-[filter,transform] cursor-pointer shadow-lg active:scale-95 border border-[#E8D4B0]/40"
            >
              <Calendar size={16} />
              <span>Book Transformation Slot</span>
            </Link>

            <a
              href="https://wa.me/919784711323?text=Hello%20Nikhar%20Salon,%20I%20saw%20your%20transformations%20and%20want%20a%20consultation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.08] hover:bg-white/[0.16] hover:border-[#BA9D6A] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-[border-color,background-color] backdrop-blur-md"
            >
              <WhatsAppIcon size={16} variant="authentic" />
              <span>WhatsApp Firoz Khan</span>
            </a>
          </div>

          {/* Trust Bottom Bar */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] text-white/70">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-[#BA9D6A]" /> Vigyan Nagar, Kota, Rajasthan
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-[#BA9D6A]" /> Mon - Sun: 9:00 AM – 10:00 PM
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-[#BA9D6A]" /> +91 97847 11323
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
