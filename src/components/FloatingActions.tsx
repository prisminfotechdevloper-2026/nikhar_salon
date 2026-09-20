'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function FloatingActions() {
  const pathname = usePathname();
  const phone = "918239239249";
  const defaultMsg = encodeURIComponent("Hello Nikhar Salon! I would like to book a luxury grooming appointment.");

  const isBookingPage = pathname === '/book-appointment';

  return (
    <aside 
      aria-label="Quick Actions"
      className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3 select-none pointer-events-auto"
    >
      {/* 1. Circular WhatsApp Floating Action with Left Tooltip */}
      <a
        href={`https://wa.me/${phone}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#0E1012]/95 border border-[#E5E0D8] dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.15)] dark:shadow-[0_6px_22px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#BA9D6A] hover:shadow-[0_8px_25px_rgba(186,157,106,0.35)]"
      >
        <div className="flex items-center justify-center w-full h-full rounded-full">
          <WhatsAppIcon size={26} variant="authentic" />
        </div>

        {/* Left Floating Tooltip */}
        <span className="pointer-events-none absolute right-full mr-2.5 hidden sm:group-hover:flex items-center px-2.5 py-1 rounded-lg bg-[#181A1C] dark:bg-[#0E1012] border border-[#BA9D6A]/40 text-[10.5px] font-semibold text-[#BA9D6A] whitespace-nowrap shadow-lg tracking-wider uppercase opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp Us
        </span>
      </a>

      {/* 2. Circular Luxury Gold "Book Appointment" Action (Custom Emblem Badge) */}
      {!isBookingPage && (
        <Link
          href="/book-appointment"
          aria-label="Book Appointment"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#0E1012]/95 border border-[#BA9D6A]/60 shadow-[0_4px_16px_rgba(186,157,106,0.25)] dark:shadow-[0_6px_22px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#BA9D6A] hover:shadow-[0_8px_30px_rgba(186,157,106,0.5)] active:scale-95"
        >
          {/* Pulsing Gold Aura Ring */}
          <span className="absolute inset-0 rounded-full bg-[#BA9D6A] opacity-25 animate-ping pointer-events-none" />

          {/* Luxury Metallic Gold Crest with Scissors & Calendar */}
          <div className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-tr from-[#C2A774] via-[#BA9D6A] to-[#B3935B] text-[#0E1012] shadow-md">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              {/* Calendar outline */}
              <rect x="7" y="10" width="26" height="23" rx="4" fill="#0E1012" stroke="#0E1012" strokeWidth="1.5" />
              {/* Calendar top accent bar */}
              <path d="M7 16 H33" stroke="#BA9D6A" strokeWidth="2" />
              {/* Calendar binder hooks */}
              <line x1="13" y1="7" x2="13" y2="11" stroke="#BA9D6A" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="27" y1="7" x2="27" y2="11" stroke="#BA9D6A" strokeWidth="2.5" strokeLinecap="round" />
              {/* Center Mini Gold 'N' / Scissors Crest */}
              <path d="M15 30 V20 L19 20 V30 H15 Z M22 30 V20 L26 20 V30 H22 Z M18 20 C21 24, 23 27, 26 30 Z" fill="#BA9D6A" />
            </svg>
          </div>

          {/* Left Floating Tooltip */}
          <span className="pointer-events-none absolute right-full mr-2.5 hidden sm:group-hover:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181A1C] dark:bg-[#0E1012] border border-[#BA9D6A]/50 text-[10.5px] font-semibold text-[#BA9D6A] whitespace-nowrap shadow-lg tracking-wider uppercase opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            Book Appointment
          </span>
        </Link>
      )}
    </aside>
  );
}
