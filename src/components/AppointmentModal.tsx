'use client';

import { useState } from 'react';
import { Calendar, Clock, Scissors, CheckCircle, Shield, User } from 'lucide-react';
import { servicesData } from '@/data/services';

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];

interface AppointmentModalProps {
  onClose?: () => void;
}

export default function AppointmentModal({ onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [customer, setCustomer] = useState({ name: '', phone: '', note: '' });
  const [confirmed, setConfirmed] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);

    // Auto WhatsApp Dispatch format
    const text = encodeURIComponent(
      `*New Appointment Booking - Nikhar Salon Kota*\n\n` +
      `👤 *Customer Name:* ${customer.name}\n` +
      `📱 *Mobile:* ${customer.phone}\n` +
      `✂️ *Service:* ${service}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time Slot:* ${time}\n` +
      `📝 *Notes:* ${customer.note || 'None'}`
    );

    window.open(`https://wa.me/918239239249?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 md:p-8">
      {onClose && (
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
          &times;
        </button>
      )}
      {confirmed ? (
        <div className="text-center py-12 space-y-4">
          <CheckCircle size={64} className="text-gold mx-auto" />
          <h3 className="text-2xl font-serif-luxury font-bold text-white">Appointment Confirmed!</h3>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Thank you, <span className="text-white font-semibold">{customer.name}</span>. Your slot for <span className="text-gold">{service}</span> has been registered for <span className="text-white">{date}</span> at <span className="text-white">{time}</span>.
          </p>
          <button
            onClick={() => { setConfirmed(false); setStep(1); setService(''); setDate(''); setTime(''); setCustomer({name:'', phone:'', note:''})}}
            className="mt-6 border border-gold text-gold px-6 py-2.5 rounded-full text-xs uppercase font-medium hover:bg-gold hover:text-black transition"
          >
            Book Another Slot
          </button>
        </div>
      ) : (
        <>
          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 className="font-serif-luxury text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <Scissors size={20} className="text-gold" /> 1. Select Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesData.filter(s => s.price !== "Varies").map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setService(s.title)}
                    className={`cursor-pointer p-4 rounded-xl border transition ${
                      service === s.title
                        ? 'border-gold bg-gold/10'
                        : 'border-zinc-800 bg-[#17171a] hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex justify-between font-semibold text-sm text-white">
                      <span>{s.title}</span>
                      <span className="text-gold">{s.price}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5">
                      <Clock size={13} /> {s.time}
                    </p>
                  </div>
                ))}
              </div>

              <button
                disabled={!service}
                onClick={() => setStep(2)}
                className="w-full mt-8 gold-gradient text-black py-3 rounded-xl font-semibold uppercase tracking-wider text-xs disabled:opacity-40"
              >
                Continue to Date & Time →
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 className="font-serif-luxury text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <Calendar size={20} className="text-gold" /> 2. Pick Date & Slot
              </h3>
              <div className="mb-6">
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-2 font-medium">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#17171a] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-3 font-medium">
                  Select Available Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition ${
                        time === t
                          ? 'border-gold bg-gold text-black font-semibold'
                          : 'border-zinc-800 bg-[#17171a] text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 border border-zinc-800 text-zinc-400 py-3 rounded-xl text-xs uppercase"
                >
                  Back
                </button>
                <button
                  disabled={!date || !time}
                  onClick={() => setStep(3)}
                  className="w-2/3 gold-gradient text-black py-3 rounded-xl font-semibold uppercase tracking-wider text-xs disabled:opacity-40"
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                <User size={20} className="text-gold" /> 3. Enter Your Details
              </h3>
              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ishan"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full bg-[#17171a] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 8239239249"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full bg-[#17171a] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold text-white"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1">Special Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Specific hair requirement or stylist preference..."
                  value={customer.note}
                  onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                  className="w-full bg-[#17171a] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none text-white"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 border border-zinc-800 text-zinc-400 py-3 rounded-xl text-xs uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 gold-gradient text-black py-3 rounded-xl font-semibold uppercase tracking-wider text-xs shadow-lg shadow-gold/20"
                >
                  Confirm Booking & Open WhatsApp →
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}