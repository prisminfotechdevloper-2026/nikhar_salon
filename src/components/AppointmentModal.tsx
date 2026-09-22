'use client';

import { useState, useEffect, useMemo } from 'react';
import { Clock, CheckCircle, ArrowRight, User, Calendar, X, Phone, MessageSquare, ArrowLeft } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { servicesData } from '@/data/services';

const STYLISTS = [
  { name: 'Any Available Master Stylist', role: 'Fastest Slot Available' },
  { name: 'Firoz Khan', role: 'Owner & Hair Patch Specialist (12+ Yrs)' },
  { name: 'Firoz Durrani', role: 'Senior Barber & Fade Specialist (7+ Yrs)' },
  { name: 'Arman', role: 'Senior Hair Artisan & Beard Sculptor (6+ Yrs)' },
  { name: 'Monu', role: 'Hair Styling & Texture Specialist (5+ Yrs)' },
];

const TIME_SLOTS = [
  '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Services' },
  { id: 'hair', label: 'Haircuts' },
  { id: 'beard', label: 'Beard & Shave' },
  { id: 'hair-patch', label: 'Hair Patch' },
  { id: 'skin', label: 'Facials & Skin' },
  { id: 'spa', label: 'Hair Spa' },
];

interface AppointmentModalProps {
  onClose?: () => void;
  defaultService?: string;
  defaultStylist?: string;
}

// Smart service matching from card titles to servicesData
function findMatchingService(defaultTitle?: string): { serviceTitle: string; category: string } {
  if (!defaultTitle) {
    return {
      serviceTitle: servicesData[0]?.title || 'Executive Fade & Precision Cut',
      category: 'all',
    };
  }

  const lower = defaultTitle.toLowerCase();

  // Exact or substring match in servicesData
  const exact = servicesData.find(
    (s) => s.title.toLowerCase() === lower || s.title.toLowerCase().includes(lower) || lower.includes(s.title.toLowerCase())
  );
  if (exact) {
    return { serviceTitle: exact.title, category: exact.category };
  }

  // Heuristic matches based on salon service types
  if (lower.includes('patch') && lower.includes('service')) {
    return { serviceTitle: 'Hair Patch Service & Maintenance', category: 'hair-patch' };
  }
  if (lower.includes('patch') || lower.includes('replacement')) {
    return { serviceTitle: 'Non-Surgical Hair Patch System', category: 'hair-patch' };
  }
  if (lower.includes('cut') || lower.includes('haircut')) {
    return { serviceTitle: 'Executive Fade & Precision Cut', category: 'hair' };
  }
  if (lower.includes('beard') || lower.includes('shave')) {
    return { serviceTitle: 'Royal Beard Sculpting & Razor Lineup', category: 'beard' };
  }
  if (lower.includes('scrub') || lower.includes('tan')) {
    return { serviceTitle: 'Anti-Tan Fruit Glow Cleanup', category: 'skin' };
  }
  if (lower.includes('facial') || lower.includes('fessal')) {
    return { serviceTitle: 'Charcoal Deep Detox Facial', category: 'skin' };
  }
  if (lower.includes('spa') || lower.includes('treatment')) {
    return { serviceTitle: 'Keratin Protein Intensive Hair Spa', category: 'spa' };
  }
  if (lower.includes('color') || lower.includes('streak')) {
    return { serviceTitle: 'Beard Color & Grey Blending', category: 'beard' };
  }
  if (lower.includes('champi') || lower.includes('massage')) {
    return { serviceTitle: 'Moroccan Argan Oil Nourishing Spa', category: 'spa' };
  }

  return { serviceTitle: servicesData[0]?.title || defaultTitle, category: 'all' };
}

export default function AppointmentModal({ onClose, defaultService, defaultStylist }: AppointmentModalProps) {
  const matchInfo = useMemo(() => findMatchingService(defaultService), [defaultService]);

  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState(matchInfo.category);
  const [service, setService] = useState(matchInfo.serviceTitle);
  const [stylist, setStylist] = useState(defaultStylist || 'Any Available Master Stylist');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('04:00 PM');
  const [customer, setCustomer] = useState({ name: '', phone: '', note: '' });
  const [confirmed, setConfirmed] = useState(false);

  // Update selection if defaultService changes
  useEffect(() => {
    if (defaultService) {
      const match = findMatchingService(defaultService);
      setService(match.serviceTitle);
      if (match.category !== 'all') {
        setActiveCategory(match.category);
      }
    }
  }, [defaultService]);

  // Lock body scroll and handle Escape key when in modal mode
  useEffect(() => {
    if (!onClose) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Filter services by selected category tab
  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return servicesData;
    return servicesData.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Selected service details
  const selectedServiceDetails = useMemo(() => {
    return servicesData.find((s) => s.title === service);
  }, [service]);

  // Quick date helper
  const handleQuickDate = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);

    // Auto WhatsApp Dispatch format
    const text = encodeURIComponent(
      `* NEW APPOINTMENT RESERVATION - NIKHAR SALON KOTA *\n\n` +
      `*Customer Name:* ${customer.name}\n` +
      `*WhatsApp Contact:* ${customer.phone}\n` +
      `*Service Selected:* ${service}\n` +
      `*Preferred Stylist:* ${stylist}\n` +
      `*Preferred Date:* ${date || 'Earliest available'}\n` +
      `*Time Slot:* ${time}\n` +
      `*Client Notes:* ${customer.note || 'None'}\n\n` +
      `_Sent via Nikhar Salon Luxury Web App_`
    );

    window.open(`https://wa.me/919784711323?text=${text}`, '_blank');
  };

  return (
    <div
      data-lenis-prevent
      className={`w-full ${
        onClose ? 'h-full max-h-full' : 'min-h-[580px] lg:min-h-[660px]'
      } flex flex-col bg-[#FAF8F5] dark:bg-[#121416] text-[#181A1C] dark:text-white rounded-2xl sm:rounded-3xl border-2 border-[#BA9D6A]/40 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden font-sans select-none relative`}
    >
      {/* Decorative Gold Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#BA9D6A]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#BA9D6A]/[0.05] blur-3xl" />

      {/* =========================================================================
          PINNED HEADER: Always visible at top with compact mobile padding
          ========================================================================= */}
      <header className="shrink-0 px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-b border-[#E5E0D8] dark:border-white/[0.08] bg-[#F3EFEA] dark:bg-[#16181C] flex items-center justify-between z-20">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#BA9D6A] animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A] uppercase font-bold shrink-0">
            Step 0{step} of 03
          </span>
          <span className="text-[#7D776D] dark:text-white/30 shrink-0">•</span>
          <span className="text-[11px] sm:text-xs text-[#181A1C] dark:text-white/90 font-medium truncate">
            {step === 1 && 'Choose Grooming Service'}
            {step === 2 && 'Barber & Slot'}
            {step === 3 && 'Contact Details'}
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 ml-2">
          {/* Step Progress Indicators */}
          <div className="hidden sm:flex items-center gap-1.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step >= i ? 'w-6 bg-[#BA9D6A]' : 'w-2 bg-[#D9D4CB] dark:bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Prominent Close Button */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="h-7.5 w-7.5 sm:h-8.5 sm:w-8.5 rounded-full border border-[#D9D4CB] dark:border-white/20 bg-white dark:bg-[#1C1F23] flex items-center justify-center text-[#555047] dark:text-white/80 hover:border-[#BA9D6A] hover:bg-[#BA9D6A] hover:text-[#0E1012] transition-all cursor-pointer shadow-xs"
              aria-label="Close reservation modal"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          )}
        </div>
      </header>

      {/* =========================================================================
          MAIN BODY & PINNED ACTION BAR WRAPPER (FORM)
          ========================================================================= */}
      {confirmed ? (
        <div className="flex-1 flex flex-col items-center justify-center p-5 sm:p-10 text-center space-y-3 sm:space-y-4 animate-in fade-in overflow-y-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#BA9D6A]/15 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
            <CheckCircle size={32} className="sm:w-[38px] sm:h-[38px]" />
          </div>
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10px] tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] uppercase font-semibold">RESERVATION INITIATED</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-serif-title text-[#181A1C] dark:text-white">Your Slot Request is Ready!</h3>
          <p className="text-[#555047] dark:text-[#A6A29A] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-[#181A1C] dark:text-white font-semibold">{customer.name}</span>. We are opening WhatsApp to finalize your booking with our salon concierge for <span className="text-[#8C734B] dark:text-[#BA9D6A] font-medium">{service}</span> on <span className="text-[#181A1C] dark:text-white font-medium">{date || 'Today'}</span> at <span className="text-[#181A1C] dark:text-white font-medium">{time}</span>.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-none">
            <a
              href={`https://wa.me/919784711323?text=${encodeURIComponent(`Hello Nikhar Salon! Confirming my booking for ${service} by ${customer.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 gold-gradient text-[#0E1012] font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full shadow-md hover:scale-105 transition cursor-pointer"
            >
              <WhatsAppIcon size={16} variant="authentic" /> Open WhatsApp Chat
            </a>
            <button
              type="button"
              onClick={() => {
                setConfirmed(false);
                setStep(1);
                setDate('');
                setCustomer({ name: '', phone: '', note: '' });
              }}
              className="border border-[#D9D4CB] dark:border-white/20 text-[#555047] dark:text-white/80 hover:text-[#181A1C] dark:hover:text-white px-4 py-3 rounded-full text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Book Another Slot
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit} className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* STEP 1: Select Signature Service */}
          {step === 1 && (
            <div className="flex-1 flex flex-col min-h-0 px-3.5 sm:px-6 pt-2.5 sm:pt-3.5 pb-2">
              {/* Pinned Step 1 Compact Subheader */}
              <div className="shrink-0 space-y-2 sm:space-y-2.5 pb-2.5 border-b border-[#E5E0D8]/70 dark:border-white/[0.06]">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h2 className="font-serif-title text-base sm:text-xl lg:text-2xl text-[#181A1C] dark:text-white leading-tight">
                      Select Grooming Service
                    </h2>
                    <p className="text-[10.5px] sm:text-xs text-[#555047] dark:text-[#A6A29A] mt-0.5 truncate hidden xs:block">
                      Choose from our bespoke salon offerings or filter by category.
                    </p>
                  </div>

                  {/* Selected Service Active Chip */}
                  {selectedServiceDetails && (
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-full bg-[#BA9D6A]/15 border border-[#BA9D6A]/40 text-[10px] sm:text-xs text-[#8C734B] dark:text-[#BA9D6A] font-semibold shrink-0">
                      <span>{selectedServiceDetails.price}</span>
                      <span className="opacity-40">•</span>
                      <span>{selectedServiceDetails.time}</span>
                    </div>
                  )}
                </div>

                {/* Category Filter Tabs with smooth horizontal scroll */}
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 scrollbar-none -mx-0.5 px-0.5">
                  {CATEGORY_TABS.map((cat) => {
                    const count = cat.id === 'all'
                      ? servicesData.length
                      : servicesData.filter((s) => s.category === cat.id).length;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 shrink-0 ${
                          isActive
                            ? 'bg-[#BA9D6A] text-[#0E1012] shadow-xs font-bold ring-1 ring-[#BA9D6A]'
                            : 'border border-[#D9D4CB] dark:border-white/10 bg-white dark:bg-[#181A1C] text-[#555047] dark:text-white/70 hover:border-[#BA9D6A]/50'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                          isActive ? 'bg-[#0E1012]/15 text-[#0E1012]' : 'bg-[#E5E0D8] dark:bg-white/10 text-[#7D776D] dark:text-white/50'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scrollable Services Grid Area */}
              <div className="flex-1 overflow-y-auto min-h-0 pt-2 sm:pt-3 pb-2 pr-0.5 space-y-2 overscroll-contain">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {filteredServices.map((s) => {
                    const isSelected = service === s.title;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setService(s.title)}
                        className={`cursor-pointer p-3 sm:p-3.5 rounded-xl border transition-all duration-200 relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#BA9D6A] bg-[#BA9D6A]/10 dark:bg-[#BA9D6A]/15 shadow-[0_4px_20px_rgba(186,157,106,0.18)] ring-2 ring-[#BA9D6A]'
                            : 'border-[#E5E0D8] dark:border-white/[0.08] bg-white dark:bg-[#16181C] hover:border-[#BA9D6A]/50 dark:hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-[#181A1C] dark:text-white leading-snug">
                              {s.title}
                            </span>
                            {s.price !== 'Varies' && (
                              <span className="font-serif-title text-xs sm:text-sm text-[#8C734B] dark:text-[#BA9D6A] font-bold shrink-0">
                                {s.price}
                              </span>
                            )}
                          </div>
                          <p className="text-[10.5px] sm:text-[11px] text-[#555047] dark:text-[#A6A29A] mt-1 line-clamp-2 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                        <div className="mt-2.5 sm:mt-3 flex items-center justify-between text-[10.5px] sm:text-[11px] pt-1.5 border-t border-[#E5E0D8]/40 dark:border-white/[0.04]">
                          <div className="flex items-center gap-1 text-[#8C734B] dark:text-[#BA9D6A] font-medium">
                            <Clock size={12} />
                            <span>{s.time}</span>
                          </div>
                          {isSelected && (
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C734B] dark:text-[#BA9D6A] flex items-center gap-1">
                              <CheckCircle size={12} /> Selected
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Pick Stylist, Date & Time Slot */}
          {step === 2 && (
            <div className="flex-1 overflow-y-auto min-h-0 px-3.5 sm:px-6 py-3 sm:py-5 space-y-3.5 sm:space-y-4 overscroll-contain">
              <div className="max-w-2xl mx-auto space-y-3.5 sm:space-y-4">
                <div className="space-y-0.5">
                  <h2 className="font-serif-title text-base sm:text-xl lg:text-2xl text-[#181A1C] dark:text-white">
                    Select Stylist & Time Slot
                  </h2>
                  <p className="text-[10.5px] sm:text-xs text-[#555047] dark:text-[#A6A29A]">
                    Nikhar Salon operates 7 days a week, 9:00 AM – 10:00 PM in Kota, Rajasthan.
                  </p>
                </div>

                {/* Stylist Dropdown */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-bold mb-1">
                    Preferred Barber / Specialist
                  </label>
                  <div className="relative">
                    <select
                      value={stylist}
                      onChange={(e) => setStylist(e.target.value)}
                      className="w-full bg-white dark:bg-[#16181C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer"
                    >
                      {STYLISTS.map((st) => (
                        <option key={st.name} value={st.name} className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">
                          {st.name} — {st.role}
                        </option>
                      ))}
                    </select>
                    <User className="absolute right-3.5 top-3 w-4 h-4 text-[#8C734B] pointer-events-none" />
                  </div>
                </div>

                {/* Date Selection with Quick Buttons */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-bold">
                      Appointment Date
                    </label>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleQuickDate(0)}
                        className="px-2.5 py-0.5 rounded-full border border-[#D9D4CB] dark:border-white/10 text-[10px] font-semibold hover:border-[#BA9D6A] text-[#8C734B] dark:text-[#BA9D6A] cursor-pointer bg-white dark:bg-[#181A1C]"
                      >
                        Today
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDate(1)}
                        className="px-2.5 py-0.5 rounded-full border border-[#D9D4CB] dark:border-white/10 text-[10px] font-semibold hover:border-[#BA9D6A] text-[#8C734B] dark:text-[#BA9D6A] cursor-pointer bg-white dark:bg-[#181A1C]"
                      >
                        Tomorrow
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white dark:bg-[#16181C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A]"
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-bold mb-1.5">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2">
                    {TIME_SLOTS.map((t) => {
                      const isSelected = time === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`py-2 px-1.5 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#BA9D6A] bg-[#BA9D6A] text-[#0E1012] shadow-xs font-bold ring-1 ring-[#BA9D6A]'
                              : 'border-[#D9D4CB] dark:border-white/[0.08] bg-white dark:bg-[#16181C] text-[#555047] dark:text-white/80 hover:border-[#BA9D6A]/50 dark:hover:border-white/20'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Customer Contact Details */}
          {step === 3 && (
            <div className="flex-1 overflow-y-auto min-h-0 px-3.5 sm:px-6 py-3 sm:py-5 space-y-3 sm:space-y-4 overscroll-contain">
              <div className="max-w-2xl mx-auto space-y-3 sm:space-y-3.5">
                <div className="space-y-0.5">
                  <h2 className="font-serif-title text-base sm:text-xl lg:text-2xl text-[#181A1C] dark:text-white">
                    Your Contact Details
                  </h2>
                  <p className="text-[10.5px] sm:text-xs text-[#555047] dark:text-[#A6A29A]">
                    Instant reservation confirmation dispatched directly to your WhatsApp.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-bold mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ishan Sharma"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="w-full bg-white dark:bg-[#16181C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 focus:outline-none focus:border-[#BA9D6A]"
                    />
                    <User className="absolute right-3.5 top-2.5 w-4 h-4 text-[#8C734B]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-bold mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+91 97847 11323"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full bg-white dark:bg-[#16181C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 focus:outline-none focus:border-[#BA9D6A]"
                    />
                    <Phone className="absolute right-3.5 top-2.5 w-4 h-4 text-[#8C734B]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-bold mb-1">
                    Special Notes or Requests (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      rows={2}
                      placeholder="Haircut style preference, patch maintenance query, etc."
                      value={customer.note}
                      onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                      className="w-full bg-white dark:bg-[#16181C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 focus:outline-none focus:border-[#BA9D6A] resize-none"
                    />
                    <MessageSquare className="absolute right-3.5 top-2.5 w-4 h-4 text-[#8C734B]" />
                  </div>
                </div>

                {/* Summary Chip */}
                <div className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-[#E5E0D8] dark:border-white/[0.08] text-xs space-y-1.5 shadow-2xs">
                  <div className="flex justify-between items-center text-[#181A1C] dark:text-white font-semibold">
                    <span className="truncate pr-2">{service}</span>
                    <span className="text-[#8C734B] dark:text-[#BA9D6A] shrink-0">{stylist.split('(')[0]}</span>
                  </div>
                  <div className="flex justify-between text-[10.5px] text-[#555047] dark:text-[#A6A29A]">
                    <span>Slot: {time}</span>
                    <span>{date ? `Date: ${date}` : 'Date: Earliest Slot'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              PINNED FOOTER ACTION BAR: 100% ALWAYS VISIBLE AT BOTTOM
              ========================================================================= */}
          <footer className="shrink-0 px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-t border-[#E5E0D8] dark:border-white/[0.08] bg-[#F3EFEA] dark:bg-[#16181C] flex items-center justify-between gap-2.5 sm:gap-3 z-20">
            {/* Left Selection Preview */}
            <div className="hidden sm:flex flex-col min-w-0 pr-2">
              <span className="text-[10px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold">
                Current Selection
              </span>
              <span className="text-xs font-semibold text-[#181A1C] dark:text-white truncate max-w-sm">
                {service} {selectedServiceDetails?.price && `(${selectedServiceDetails.price})`}
              </span>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto justify-end">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#D9D4CB] dark:border-white/15 text-[#555047] dark:text-white/80 text-xs font-semibold uppercase tracking-wider hover:bg-white dark:hover:bg-white/[0.04] transition cursor-pointer flex items-center gap-1 shrink-0"
                >
                  <ArrowLeft size={13} /> Back
                </button>
              )}

              {step === 1 && (
                <button
                  type="button"
                  disabled={!service}
                  onClick={() => setStep(2)}
                  className="flex-1 sm:flex-initial sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-[0.1em] shadow-md shadow-[#BA9D6A]/20 hover:brightness-105 transition flex items-center justify-center gap-2 disabled:opacity-40 cursor-pointer"
                >
                  Continue to Stylist & Slot <ArrowRight size={14} />
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 sm:flex-initial sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-[0.1em] shadow-md shadow-[#BA9D6A]/20 hover:brightness-105 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  Guest Details <ArrowRight size={14} />
                </button>
              )}

              {step === 3 && (
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-[0.1em] shadow-lg shadow-[#BA9D6A]/25 flex items-center justify-center gap-2 hover:brightness-105 transition cursor-pointer"
                >
                  <WhatsAppIcon size={16} variant="authentic" /> Confirm via WhatsApp
                </button>
              )}
            </div>
          </footer>
        </form>
      )}
    </div>
  );
}