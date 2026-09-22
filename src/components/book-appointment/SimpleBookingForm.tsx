'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { User, Phone, Scissors, Calendar, Clock, MessageSquare, CheckCircle, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { servicesData } from '@/data/services';

const POPULAR_SERVICES = [
  { title: 'Non-Surgical Hair Patch System', price: '₹5,999 onwards' },
  { title: 'Hair Patch Service & Maintenance', price: '₹499' },
  { title: 'Executive Fade & Precision Cut', price: '₹350' },
  { title: 'Royal Beard Sculpting & Razor Lineup', price: '₹200' },
  { title: 'Charcoal Deep Detox Facial', price: '₹699' },
  { title: 'Keratin Protein Intensive Hair Spa', price: '₹799' },
  { title: 'Anti-Tan Fruit Glow Cleanup', price: '₹499' },
  { title: 'Hair Patch Scalp Density Consultation', price: 'FREE' },
];

const STYLIST_OPTIONS = [
  { name: 'Any Available Master Stylist', role: 'Fastest Available Slot' },
  { name: 'Firoz Khan (Owner)', role: 'Hair Patch & Master Stylist' },
  { name: 'Firoz Durrani', role: 'Fade & Haircut Specialist' },
  { name: 'Arman', role: 'Beard Sculptor & Shave Artisan' },
  { name: 'Monu', role: 'Hair Spa & Keratin Specialist' },
];

const TIME_OPTIONS = [
  '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '09:30 PM'
];

interface SimpleBookingFormProps {
  defaultService?: string;
  defaultStylist?: string;
  onSuccess?: () => void;
}

export default function SimpleBookingForm({ defaultService, defaultStylist, onSuccess }: SimpleBookingFormProps) {
  const searchParams = useSearchParams();
  const queryService = searchParams?.get('service') || '';
  const queryStylist = searchParams?.get('stylist') || '';
  const queryDate = searchParams?.get('date') || '';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(queryService || defaultService || 'Non-Surgical Hair Patch System');
  const [stylist, setStylist] = useState(() => {
    if (queryStylist) {
      if (queryStylist.toLowerCase().includes('firoz khan')) return 'Firoz Khan (Owner)';
      return queryStylist;
    }
    return defaultStylist || 'Any Available Master Stylist';
  });
  const [date, setDate] = useState(() => {
    if (queryDate) return queryDate;
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  });
  const [time, setTime] = useState('04:00 PM');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync state if URL query params change
  useEffect(() => {
    if (queryService) {
      setService(queryService);
    }
    if (queryStylist) {
      if (queryStylist.toLowerCase().includes('firoz khan')) {
        setStylist('Firoz Khan (Owner)');
      } else {
        setStylist(queryStylist);
      }
    }
    if (queryDate) {
      setDate(queryDate);
    }
  }, [queryService, queryStylist, queryDate]);

  // Quick date setter
  const handleQuickDate = (daysAhead: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  };

  const formattedDate = useMemo(() => {
    if (!date) return 'Today';
    try {
      const [y, m, d] = date.split('-').map(Number);
      const dateObj = new Date(y, m - 1, d);
      return dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    } catch {
      return date;
    }
  }, [date]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();

    const bookingRef = `NS-${Math.floor(100000 + Math.random() * 900000)}`;

    const text = encodeURIComponent(
      `*APPOINTMENT RESERVATION - NIKHAR SALON KOTA*\n\n` +
      `*Ref:* #${bookingRef}\n` +
      `*Name:* ${name}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*Service:* ${service}\n` +
      `*Stylist:* ${stylist}\n` +
      `*Date:* ${formattedDate}\n` +
      `*Time Slot:* ${time}\n` +
      `*Special Notes:* ${notes || 'None'}\n\n` +
      `*Location:* Shop No. 9, Vigyan Nagar, Kota (Raj)\n` +
      `_Dispatched via Nikhar Salon Online Booking_`
    );

    window.open(`https://wa.me/919784711323?text=${text}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-[#121417] border border-[#E5E0D8] dark:border-[#BA9D6A]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-5 shadow-lg">
        <div className="w-14 h-14 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/60 flex items-center justify-center text-[#C2A774] mx-auto shadow-sm">
          <CheckCircle size={32} />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#C2A774] font-bold block">
            REQUEST SENT VIA WHATSAPP
          </span>
          <h3 className="font-serif-title text-2xl text-[#181A1C] dark:text-white">
            Appointment Requested, {name}!
          </h3>
          <p className="text-xs text-[#555047] dark:text-[#A6A29A] max-w-sm mx-auto leading-relaxed">
            Our salon concierge has received your request for <strong>{service}</strong> on <strong>{formattedDate} at {time}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#E5E0D8] dark:border-white/10 text-left text-xs space-y-2 max-w-sm mx-auto">
          <div className="flex justify-between">
            <span className="text-neutral-500">Service:</span>
            <span className="font-semibold text-[#181A1C] dark:text-white">{service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Stylist:</span>
            <span className="font-semibold text-[#181A1C] dark:text-white">{stylist}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Slot:</span>
            <span className="font-semibold text-[#8C734B] dark:text-[#C2A774]">{formattedDate} • {time}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center max-w-sm mx-auto">
          <a
            href={`https://wa.me/919784711323?text=${encodeURIComponent(`Hello Nikhar Salon! Checking on my appointment for ${service} by ${name}`)}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider shadow-sm transition"
          >
            <WhatsAppIcon size={15} variant="authentic" /> Open Chat
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="py-3 px-4 rounded-xl border border-[#D9D4CB] dark:border-white/15 text-xs font-semibold text-[#555047] dark:text-white/80 hover:text-[#181A1C] dark:hover:text-white transition"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#121417] border border-[#E5E0D8] dark:border-[#BA9D6A]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.7)] space-y-4 transition-colors"
    >
      {/* Form Header */}
      <div className="border-b border-[#E5E0D8] dark:border-white/[0.08] pb-3.5 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#C2A774] font-bold block">
            INSTANT ONLINE BOOKING
          </span>
          <h3 className="font-serif-title text-xl sm:text-2xl text-[#181A1C] dark:text-white">
            Reserve Your Chair
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#BA9D6A]/15 border border-[#BA9D6A]/40 text-[10.5px] text-[#8C734B] dark:text-[#C2A774] font-bold">
          <ShieldCheck size={13} /> Zero Waiting
        </div>
      </div>

      {/* Pre-selection indicator */}
      {(queryService || queryStylist) && (
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#BA9D6A]/10 border border-[#BA9D6A]/30 text-xs text-[#8C734B] dark:text-[#C2A774]">
          <ShieldCheck size={14} className="shrink-0" />
          <span>
            Pre-selected from your choice: <strong>{service}</strong>
            {stylist && stylist !== 'Any Available Master Stylist' ? <> with <strong>{stylist}</strong></> : null}
          </span>
        </div>
      )}

      {/* Inputs Grid */}
      <div className="space-y-3.5">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold mb-1">
              Your Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g. Aman Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#BA9D6A]"
              />
              <User size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774]" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold mb-1">
              WhatsApp Mobile Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                placeholder="+91 97847 11323"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#BA9D6A]"
              />
              <Phone size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774]" />
            </div>
          </div>
        </div>

        {/* Row 2: Service Selection */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold mb-1">
            Select Grooming Service *
          </label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer"
            >
              <optgroup label="Popular Services">
                {POPULAR_SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title} ({s.price})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Full Catalog">
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.price})
                  </option>
                ))}
              </optgroup>
              {service &&
                !POPULAR_SERVICES.some((s) => s.title === service) &&
                !servicesData.some((s) => s.title === service) && (
                  <optgroup label="Selected Offering">
                    <option value={service}>{service}</option>
                  </optgroup>
                )}
            </select>
            <Scissors size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774] pointer-events-none" />
            <div className="absolute right-3.5 top-3.5 pointer-events-none border-t-4 border-t-[#8C734B] dark:border-t-[#C2A774] border-x-4 border-x-transparent" />
          </div>
        </div>

        {/* Row 3: Stylist Selection */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold mb-1">
            Preferred Specialist / Barber
          </label>
          <div className="relative">
            <select
              value={stylist}
              onChange={(e) => setStylist(e.target.value)}
              className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer"
            >
              {STYLIST_OPTIONS.map((st) => (
                <option key={st.name} value={st.name}>
                  {st.name} — {st.role}
                </option>
              ))}
              {stylist && !STYLIST_OPTIONS.some((st) => st.name === stylist) && (
                <option value={stylist}>{stylist}</option>
              )}
            </select>
            <UserCheck size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774] pointer-events-none" />
            <div className="absolute right-3.5 top-3.5 pointer-events-none border-t-4 border-t-[#8C734B] dark:border-t-[#C2A774] border-x-4 border-x-transparent" />
          </div>
        </div>

        {/* Row 4: Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold">
                Date *
              </label>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleQuickDate(0)}
                  className="text-[10px] px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-white/10 border border-[#D9D4CB] dark:border-white/15 text-[#8C734B] dark:text-[#C2A774] font-semibold hover:border-[#BA9D6A]"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDate(1)}
                  className="text-[10px] px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-white/10 border border-[#D9D4CB] dark:border-white/15 text-[#8C734B] dark:text-[#C2A774] font-semibold hover:border-[#BA9D6A]"
                >
                  Tmrw
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A]"
              />
              <Calendar size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774]" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold mb-1">
              Preferred Time *
            </label>
            <div className="relative">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer"
              >
                {TIME_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <Clock size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774] pointer-events-none" />
              <div className="absolute right-3.5 top-3.5 pointer-events-none border-t-4 border-t-[#8C734B] dark:border-t-[#C2A774] border-x-4 border-x-transparent" />
            </div>
          </div>
        </div>

        {/* Row 5: Notes */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#C2A774] font-bold mb-1">
            Special Requests / Style Reference (Optional)
          </label>
          <div className="relative">
            <textarea
              rows={2}
              placeholder="e.g. Skin fade with textured top, hair patch consultation, beard shape, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#FAF8F5] dark:bg-[#181A1E] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl pl-9 pr-3.5 py-2 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#BA9D6A] resize-none"
            />
            <MessageSquare size={14} className="absolute left-3 top-3 text-[#8C734B] dark:text-[#C2A774]" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D8BE8A] via-[#C9A96E] to-[#B3935B] hover:opacity-95 text-[#0E1012] font-bold text-xs sm:text-sm uppercase tracking-[0.12em] shadow-md shadow-[#BA9D6A]/20 flex items-center justify-center gap-2.5 transition transform active:scale-[0.99] cursor-pointer"
        >
          <WhatsAppIcon size={18} variant="authentic" /> Confirm Appointment on WhatsApp
        </button>
        <p className="text-[11px] text-center text-[#7D776D] dark:text-[#A6A29A] mt-2">
          100% Free Cancellation • No advance payment required online
        </p>
      </div>
    </form>
  );
}
