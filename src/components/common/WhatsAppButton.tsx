import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'hero' | 'floating' | 'card' | 'outline' | 'compact' | 'gold';
  label?: string;
  subLabel?: string;
  className?: string;
  showOnlineStatus?: boolean;
}

const DEFAULT_PHONE = '919784711323';
const DEFAULT_MSG = 'Hello Nikhar Salon! I would like to inquire about booking a luxury grooming slot.';

export default function WhatsAppButton({
  message = DEFAULT_MSG,
  variant = 'hero',
  label = 'WhatsApp Concierge',
  subLabel,
  className = '',
  showOnlineStatus = true,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${DEFAULT_PHONE}?text=${encodeURIComponent(message)}`;

  // 1. Hero Pill Variant (Luxury glass + emerald glow + real WhatsApp badge)
  if (variant === 'hero') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group relative inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/90 dark:bg-[#141619]/90 border border-emerald-500/30 hover:border-[#25D366] text-[#181A1C] dark:text-white backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      >
        {/* WhatsApp Real Vector Icon with Pulse Dot */}
        <div className="relative flex items-center justify-center shrink-0">
          <WhatsAppIcon size={22} variant="authentic" />
          {showOnlineStatus && (
            <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#25D366] border border-white dark:border-[#0E1012]" />
            </span>
          )}
        </div>

        {/* Text Container */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] sm:text-xs font-semibold tracking-wider uppercase text-[#181A1C] dark:text-white/95 group-hover:text-emerald-600 dark:group-hover:text-white transition-colors">
              {label}
            </span>
          </div>
          {subLabel && (
            <span className="text-[9.5px] tracking-widest uppercase text-[#128C7E] dark:text-[#25D366] font-semibold -mt-0.5">
              {subLabel}
            </span>
          )}
        </div>
      </a>
    );
  }

  // 2. Card Action Variant (for Service/VIP tiers)
  if (variant === 'card') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs active:scale-[0.98] ${className}`}
      >
        <WhatsAppIcon size={18} variant="authentic" />
        <span>{label}</span>
      </a>
    );
  }

  // 3. Gold / Luxury Hybrid Variant
  if (variant === 'gold') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-linear-to-tr from-[#C2A774] via-[#BA9D6A] to-[#B3935B] text-[#0E1012] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#BA9D6A]/20 hover:scale-105 active:scale-95 transition-all ${className}`}
      >
        <WhatsAppIcon size={18} variant="mono" className="text-[#0E1012]" />
        <span>{label}</span>
      </a>
    );
  }

  // 4. Outline Variant
  if (variant === 'outline') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 text-[#181A1C] dark:text-white/90 hover:text-emerald-600 dark:hover:text-white hover:border-emerald-500 bg-emerald-50/50 dark:bg-white/[0.03] text-xs uppercase tracking-wider transition-all duration-200 ${className}`}
      >
        <WhatsAppIcon size={16} variant="authentic" />
        <span>{label}</span>
      </a>
    );
  }

  // 5. Compact Variant (for Header/Footer/inline)
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors ${className}`}
    >
      <WhatsAppIcon size={16} variant="authentic" />
      <span>{label}</span>
    </a>
  );
}
