'use client';

import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function WhatsAppFloat() {
  const phone = "918239239249";
  const defaultMsg = encodeURIComponent("Hello Nikhar Salon! I would like to book a luxury grooming appointment.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Nikhar Salon"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 rounded-full bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-[#BA9D6A]/50 p-2 sm:pr-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#25D366] hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]"
    >
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full">
        <WhatsAppIcon size={26} variant="authentic" />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[9.5px] uppercase tracking-[0.16em] font-bold text-[#8C734B] dark:text-[#BA9D6A]">
          Direct WhatsApp
        </span>
        <span className="text-xs font-semibold text-[#181A1C] dark:text-white">
          Book Appointment
        </span>
      </div>
    </a>
  );
}