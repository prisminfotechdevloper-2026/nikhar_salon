'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function FloatingActions() {
  const pathname = usePathname();
  const phone = "919784711323";
  const defaultMsg = encodeURIComponent("Hello Nikhar Mens Parlour! I would like to book a luxury grooming slot.");

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
        className="group relative flex items-center justify-center size-11 sm:size-12 rounded-full bg-white dark:bg-[#0E1012]/95 border border-[#E5E0D8] dark:border-white/15 shadow-md dark:shadow-xl backdrop-blur-xl transition-[transform,border-color] duration-300 hover:scale-105 hover:border-[#BA9D6A]"
      >
        <div className="flex items-center justify-center size-full rounded-full">
          <WhatsAppIcon size={26} variant="authentic" />
        </div>

        {/* Tooltip Label - Only visible on hover */}
        <span className="pointer-events-none absolute right-full mr-2.5 hidden sm:flex items-center px-2.5 py-1 rounded-lg bg-[#181A1C]/95 dark:bg-[#0E1012]/95 border border-[#BA9D6A]/40 text-xs font-medium text-[#BA9D6A] whitespace-nowrap shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-200">
          WhatsApp Us
        </span>
      </a>

      {/* 2. Circular Luxury Gold "Book Slot" Action (Custom Emblem Badge) */}
      {!isBookingPage && (
        <Link
          href="/book-appointment"
          aria-label="Book Slot"
          className="group relative flex items-center justify-center size-11 sm:size-12 rounded-full bg-white dark:bg-[#0E1012]/95 border border-[#BA9D6A]/60 shadow-md shadow-[#BA9D6A]/20 dark:shadow-xl backdrop-blur-xl transition-[transform,border-color] duration-300 hover:scale-105 hover:border-[#BA9D6A] active:scale-95"
        >
          {/* Pulsing Gold Aura Ring */}
          <span className="absolute inset-0 rounded-full bg-[#BA9D6A] opacity-25 animate-ping pointer-events-none" />

          {/* Luxury Metallic Gold Crest with Scissors & Calendar */}
          <div className="flex items-center justify-center size-full rounded-full bg-linear-to-tr from-[#C2A774] via-[#BA9D6A] to-[#B3935B] text-[#0E1012] shadow-md">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 sm:size-7"
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

          {/* Tooltip Label - Only visible on hover */}
          <span className="pointer-events-none absolute right-full mr-2.5 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181A1C]/95 dark:bg-[#0E1012]/95 border border-[#BA9D6A]/50 text-xs font-medium text-[#BA9D6A] whitespace-nowrap shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-200">
            Book Slot
          </span>
        </Link>
      )}
    </aside>
  );
}
