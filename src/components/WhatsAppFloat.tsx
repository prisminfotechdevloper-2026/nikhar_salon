'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phone = "918239239249"; 
  const defaultMsg = encodeURIComponent("Hello Nikhar Salon! I would like to book a grooming appointment.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
}