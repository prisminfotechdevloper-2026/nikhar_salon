'use client';

import { useState } from 'react';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { servicesData } from '@/data/services';

const STYLISTS = [
  { name: 'Any Available Master Stylist', role: 'Fastest Slot Available' },
  { name: 'Firoz Khan', role: 'Owner & Hair Patch Specialist (10+ Yrs)' },
  { name: 'Rahul Verma', role: 'Senior Beard Specialist (7+ Yrs)' },
  { name: 'Sameer Khan', role: 'Facial & Skin Therapy Expert' },
  { name: 'Karan Rathore', role: 'Hair Spa & Keratin Artist' },
];

const TIME_SLOTS = [
  '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];

interface AppointmentModalProps {
  onClose?: () => void;
  defaultService?: string;
}

export default function AppointmentModal({ onClose, defaultService }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(defaultService || 'Haircut & Styling');
  const [stylist, setStylist] = useState('Any Available Master Stylist');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('04:00 PM');
  const [customer, setCustomer] = useState({ name: '', phone: '', note: '' });
  const [confirmed, setConfirmed] = useState(false);

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

    window.open(`https://wa.me/918239239249?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.09] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden font-sans transition-colors duration-300">
      {/* Decorative Gold Ambient Blur */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#BA9D6A]/[0.08] blur-3xl" />

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#7D776D] hover:text-[#181A1C] dark:text-white/50 dark:hover:text-white h-8 w-8 rounded-full border border-[#D9D4CB] dark:border-white/10 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
      )}

      {confirmed ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-[#BA9D6A]/10 border border-[#BA9D6A]/40 flex items-center justify-center mx-auto text-[#BA9D6A]">
            <CheckCircle size={36} />
          </div>
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10px] tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] uppercase font-semibold">RESERVATION INITIATED</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-title text-[#181A1C] dark:text-white">Your Slot Request is Ready!</h3>
          <p className="text-[#555047] dark:text-[#A6A29A] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-[#181A1C] dark:text-white font-semibold">{customer.name}</span>. We are opening WhatsApp to finalize your booking with our salon concierge for <span className="text-[#8C734B] dark:text-[#BA9D6A] font-medium">{service}</span> on <span className="text-[#181A1C] dark:text-white font-medium">{date || 'Today'}</span> at <span className="text-[#181A1C] dark:text-white font-medium">{time}</span>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`https://wa.me/918239239249?text=${encodeURIComponent(`Hello Nikhar Salon! Confirming my booking for ${service} by ${customer.name}`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 gold-gradient text-[#0E1012] font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <WhatsAppIcon size={17} variant="authentic" /> Open WhatsApp Chat
            </a>
            <button
              onClick={() => {
                setConfirmed(false);
                setStep(1);
                setDate('');
                setCustomer({ name: '', phone: '', note: '' });
              }}
              className="border border-[#D9D4CB] dark:border-white/20 text-[#555047] dark:text-white/80 hover:text-[#181A1C] dark:hover:text-white px-5 py-3 rounded-full text-xs uppercase tracking-wider transition"
            >
              Book Another Slot
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Progress Indicator */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5E0D8] dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-sans tracking-widest text-[#8C734B] dark:text-[#BA9D6A] uppercase font-semibold">
                Step 0{step} of 03
              </span>
              <span className="text-[#7D776D] dark:text-white/40">•</span>
              <span className="text-xs text-[#181A1C] dark:text-white/80 font-medium">
                {step === 1 && 'Select Signature Service'}
                {step === 2 && 'Choose Stylist & Time'}
                {step === 3 && 'Guest Contact Details'}
              </span>
            </div>

            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step >= i ? 'w-6 bg-[#BA9D6A]' : 'w-2 bg-[#D9D4CB] dark:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif-title text-2xl text-[#181A1C] dark:text-white">Choose Your Grooming Experience</h3>
                <p className="text-xs text-[#555047] dark:text-[#A6A29A]">Select from our menu of master-crafted services.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                {servicesData.map((s) => {
                  const isSelected = service === s.title;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setService(s.title)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'border-[#BA9D6A] bg-[#BA9D6A]/10 shadow-xs'
                          : 'border-[#E5E0D8] dark:border-white/[0.07] bg-[#FAF8F5] dark:bg-[#181A1C] hover:border-[#BA9D6A]/50 dark:hover:border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-semibold text-sm text-[#181A1C] dark:text-white">{s.title}</span>
                        {s.price !== 'Varies' && (
                          <span className="font-serif-title text-sm text-[#8C734B] dark:text-[#BA9D6A] font-semibold">
                            {s.price}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#555047] dark:text-[#A6A29A] mt-1 line-clamp-1">{s.desc}</p>
                      <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] text-[#8C734B]">
                        <Clock size={12} />
                        <span>{s.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  disabled={!service}
                  onClick={() => setStep(2)}
                  className="w-full flex items-center justify-center gap-2 gold-gradient text-[#0E1012] py-3.5 rounded-xl font-bold uppercase tracking-[0.12em] text-xs shadow-md shadow-[#BA9D6A]/20 hover:brightness-105 transition disabled:opacity-40 cursor-pointer"
                >
                  Continue to Stylist & Slot <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Pick Stylist, Date & Time */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="font-serif-title text-2xl text-[#181A1C] dark:text-white">Select Stylist & Time</h3>
                <p className="text-xs text-[#555047] dark:text-[#A6A29A]">Nikhar Salon operates 7 days a week, 9:00 AM – 10:00 PM.</p>
              </div>

              {/* Stylist Dropdown */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold mb-1.5">
                  Preferred Barber / Stylist
                </label>
                <select
                  value={stylist}
                  onChange={(e) => setStylist(e.target.value)}
                  className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A]"
                >
                  {STYLISTS.map((st) => (
                    <option key={st.name} value={st.name} className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">
                      {st.name} ({st.role})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A]"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold mb-2">
                  Select Available Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((t) => {
                    const isSelected = time === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#BA9D6A] bg-[#BA9D6A] text-[#0E1012] shadow-sm'
                            : 'border-[#D9D4CB] dark:border-white/[0.08] bg-[#FAF8F5] dark:bg-[#181A1C] text-[#555047] dark:text-white/80 hover:border-[#BA9D6A]/50 dark:hover:border-white/20'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 border border-[#D9D4CB] dark:border-white/15 text-[#555047] dark:text-white/80 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-[#FAF8F5] dark:hover:bg-white/[0.04] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 gold-gradient text-[#0E1012] py-3 rounded-xl font-bold uppercase tracking-[0.12em] text-xs shadow-md shadow-[#BA9D6A]/20 hover:brightness-105 cursor-pointer"
                >
                  Guest Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Customer Details */}
          {step === 3 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif-title text-2xl text-[#181A1C] dark:text-white">Your Contact Details</h3>
                <p className="text-xs text-[#555047] dark:text-[#A6A29A]">We send reservation confirmation straight to your WhatsApp.</p>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ishan Sharma"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 focus:outline-none focus:border-[#BA9D6A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 82392 39249"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 focus:outline-none focus:border-[#BA9D6A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] font-semibold mb-1">
                  Special Notes or Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Haircut style preference, special skin sensitivity, etc."
                  value={customer.note}
                  onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                  className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 focus:outline-none focus:border-[#BA9D6A] resize-none"
                />
              </div>

              {/* Summary Chip */}
              <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-white/[0.04] border border-[#E5E0D8] dark:border-white/[0.06] text-xs space-y-1 text-[#555047] dark:text-[#A6A29A]">
                <div className="flex justify-between text-[#181A1C] dark:text-white font-medium">
                  <span>{service}</span>
                  <span className="text-[#8C734B] dark:text-[#BA9D6A]">{stylist.split('(')[0]}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>Slot: {time}</span>
                  <span>{date ? `Date: ${date}` : 'Upcoming'}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 border border-[#D9D4CB] dark:border-white/15 text-[#555047] dark:text-white/80 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-[#FAF8F5] dark:hover:bg-white/[0.04] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 gold-gradient text-[#0E1012] py-3.5 rounded-xl font-bold uppercase tracking-[0.12em] text-xs shadow-lg shadow-[#BA9D6A]/25 flex items-center justify-center gap-2.5 hover:brightness-105 cursor-pointer"
                >
                  <WhatsAppIcon size={17} variant="authentic" /> Confirm & Open WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}