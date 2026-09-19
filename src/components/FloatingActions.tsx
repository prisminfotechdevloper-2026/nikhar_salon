'use client';

import Link from 'next/link';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FloatingActions() {
  const pathname = usePathname();
  const phone = "918239239249";
  const defaultMsg = encodeURIComponent("Hello Nikhar Salon! I would like to book a luxury grooming appointment.");

  // If user is already on /book-appointment, we can show only WhatsApp or direct call
  const isBookingPage = pathname === '/book-appointment';

  return (
    <div className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 select-none pointer-events-auto">
      {/* 1. Quick WhatsApp Chat Trigger */}
      <a
        href={`https://wa.me/${phone}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nikhar Salon on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#141619]/95 border border-[#25D366]/40 p-2 sm:pr-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#25D366] hover:shadow-[0_4px_25px_rgba(37,211,102,0.3)]"
      >
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-md">
          <MessageCircle size={18} className="fill-current" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-[0.14em] font-bold text-[#25D366]">
            WhatsApp
          </span>
          <span className="text-[11px] font-semibold text-white">
            Concierge
          </span>
        </div>
      </a>

      {/* 2. Fixed Floating "Book Appointment" Action (Chatbot-style on right bottom) */}
      {!isBookingPage && (
        <Link
          href="/book-appointment"
          aria-label="Book Appointment at Nikhar Salon"
          className="group relative flex items-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] px-3.5 sm:px-4.5 py-2.5 sm:py-3 text-[#0E1012] shadow-[0_6px_25px_rgba(186,157,106,0.45)] hover:shadow-[0_8px_32px_rgba(186,157,106,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 border border-[#FFF4DE]/40"
        >
          {/* Subtle pulsating aura */}
          <span className="absolute inset-0 rounded-full bg-[#BA9D6A] opacity-30 animate-ping pointer-events-none" />

          <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#0E1012] text-[#BA9D6A] shadow-inner shrink-0">
            <Calendar size={15} />
          </div>

          <div className="flex flex-col text-left pr-0.5">
            <span className="text-[9px] uppercase tracking-[0.16em] font-bold text-[#0E1012] leading-none">
              Instant
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-[#0E1012] whitespace-nowrap tracking-wide leading-tight mt-0.5">
              Book Appointment
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
